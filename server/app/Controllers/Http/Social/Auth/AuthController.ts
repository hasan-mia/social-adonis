import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthService from './AuthService'
import AuthValidator from './AuthValidator'

export default class AuthController {
  private authService: AuthService
  private authValidator: AuthValidator

  constructor() {
    this.authService = new AuthService()
    this.authValidator = new AuthValidator()
  }

  //**************** Sign Up *********************/
  public async signup(ctx: HttpContextContract) {
    const payload = await this.authValidator.signUpSchema(ctx)
    return this.authService.signUp(ctx, payload)
  }

  //**************** Sign In *********************/
  public async signin({ request, response, auth, session }: HttpContextContract) {
    // await this.authValidator.signInSchema(ctx)
    // return this.authService.signIn(ctx)

    // grab uid and password values off request body
    const { uid, password } = request.only(['uid', 'password'])
    try {
      // attempt to login
      await auth.attempt(uid, password)
    } catch (error) {
      // if login fails, return vague form message and redirect back
      session.flash('form', 'Your username, email, or password is incorrect')
      return response.redirect().back()
    }
    // otherwise, redirect to home page
    return response.redirect('/')
  }

  //**************** Sign OUt *********************/
  public async signout(ctx: HttpContextContract) {
    // logout the user
    await ctx.auth.logout()

    // redirect to login page
    return ctx.response.redirect().toRoute('http://localhost:3000/signin')
  }
}
