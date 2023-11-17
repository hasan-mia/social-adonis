import AuthQuery from './AuthQuery'

export default class AuthService {
  public from_email = 'ahmedkamran265@gmail.com'
  public authQuery: AuthQuery

  constructor() {
    this.authQuery = new AuthQuery()
  }
  //**************** Sign Up *********************/
  public async signUp(ctx, payload) {
    try {
      const user = await this.authQuery.signup(payload)

      // await ctx.auth.login(user)

      // ctx.response.redirect('/')

      return ctx.response.status(201).json({
        message: 'Sign-up successful',
        data: user,
      })
    } catch (error) {
      return ctx.response.status(422).json({ errors: error.messages })
    }
  }

  //**************** Sign In *********************/
  public async signIn(ctx) {
    try {
      const { uid, password } = ctx.request.only(['uid', 'password'])

      console.log(uid, password)

      // await auth.attempt(uid, password)
      // const { uid, password } = ctx.request.only(['uid', 'password'])

      // await ctx.auth.attempt(uid, password)

      // ctx.response.redirect('/')

      return ctx.response.status(201).json({
        message: 'Sign-in successful',
      })
    } catch (error) {
      return ctx.response.status(422).json({ errors: error.messages })
    }
  }
}
