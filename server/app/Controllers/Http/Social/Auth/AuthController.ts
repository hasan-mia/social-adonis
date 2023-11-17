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
  public async signin(ctx: HttpContextContract) {
    await this.authValidator.signInSchema(ctx)
    return this.authService.signIn(ctx)
  }

  //**************** Sign OUt *********************/
  public async signout(ctx: HttpContextContract) {
    // logout the user
    await ctx.auth.logout()

    // redirect to login page
    return ctx.response.redirect().toRoute('http://localhost:3000/signin')
  }
}
