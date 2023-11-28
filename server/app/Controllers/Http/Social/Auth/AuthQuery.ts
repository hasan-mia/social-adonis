import User from 'App/Models/User'

export default class AuthQuery {
  //**************** Sign Up *********************/
  public async signup(data: {}): Promise<User> {
    return await User.create(data)
  }

  //**************** Sign In *********************/
  public async signin(field: string): Promise<User | null> {
    const user = await User.query()
      .where('email', field)
      .orWhere('username', field)
      .select([
        'uuid',
        'email',
        'username',
        'verify',
        'active',
        'online',
        'relationship',
        'createdAt',
        'updatedAt',
      ])
      .preload('userProfile', (query) =>
        query.select([
          'firstName',
          'lastName',
          'phone',
          'birthDate',
          'profile',
          'cover',
          'updatedAt',
        ])
      )
      .firstOrFail()

    return user
  }

  //**************** Usser info ******************/
  public async getUserInfo(fields: {}): Promise<User | null> {
    return await User.query().where(fields).first()
  }
}
