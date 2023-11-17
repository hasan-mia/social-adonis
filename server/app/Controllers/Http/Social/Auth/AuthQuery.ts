import User from 'App/Models/User'

export default class AuthQuery {
  //**************** Sign Up *********************/
  public async signup(data: {}): Promise<User> {
    return User.create(data)
  }

  //**************** Sign In *********************/
  public async signin(field: string): Promise<User | null> {
    return User.query().where('email', field).orWhere('username', field).first()
  }

  //**************** Usser info ******************/
  public async getUserInfo(fields: {}): Promise<User | null> {
    return User.query().where(fields).first()
  }
}
