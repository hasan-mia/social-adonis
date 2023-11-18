import Hash from '@ioc:Adonis/Core/Hash'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthQuery from './AuthQuery'

export default class AuthService {
  public authQuery: AuthQuery

  constructor() {
    this.authQuery = new AuthQuery()
  }
  //**************** Sign Up *********************/
  public async signUp(ctx: HttpContextContract, payload: any) {
    try {
      // crete user
      const user = await this.authQuery.signup(payload)

      // check if user created faild
      if (!user) return ctx.response.badRequest({ errors: [{ message: 'Invalid credentials' }] })

      // user login
      await ctx.auth.login(user)

      // send response
      return ctx.response.status(201).send({
        message: 'Sign-up successful',
      })
    } catch (error) {
      return ctx.response.status(422).send({ errors: error.messages })
    }
  }

  //**************** Sign In *********************/
  public async signIn(ctx: HttpContextContract) {
    try {
      const { uid, password } = ctx.request.only(['uid', 'password'])
      const user = await this.authQuery.signin(uid)

      // Verify user
      if (!user)
        return ctx.response
          .status(401)
          .send({ errors: [{ message: 'Email or username not found' }] })

      // Verify password
      if (!(await Hash.verify(user.password, password))) {
        return ctx.response.badRequest({ errors: [{ message: 'Wrong password' }] })
      }

      // const token = await ctx.auth.use('api').attempt(user.email, user.uuid)

      // Create session
      await ctx.auth.use('web').attempt(uid, password)

      return ctx.response.status(201).send({ message: 'Sign-in successful' })
    } catch (error) {
      return ctx.response.status(422).send({ errors: error.messages })
    }
  }
}
