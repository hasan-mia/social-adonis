import User from 'App/Models/User'
import UserProfile from 'App/Models/UserProfile'

export default class UserQuery {
  //**************** All User *********************/
  public async alluser(): Promise<User[] | null> {
    const allUser = await User.query()
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
      .orderBy('createdAt', 'desc')

    return allUser || []
  }

  //**************** Usser info ******************/
  public async userinfo(uuid: string): Promise<User | null> {
    const user = await User.query()
      .where('uuid', uuid)
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

    return user || null
  }

  //**************** Usser info ******************/
  public async updateinfo(data: {}): Promise<UserProfile> {
    return UserProfile.create(data)
  }
}
