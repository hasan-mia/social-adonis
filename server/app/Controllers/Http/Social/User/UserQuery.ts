import User from 'App/Models/User'
import UserProfile from 'App/Models/UserProfile'

export default class UserQuery {
  //**************** All User *********************/
  public async allUser(): Promise<User[] | null> {
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
  public async userInfo(uuid: string): Promise<User | null> {
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
  public async updateInfo(data: {}): Promise<UserProfile> {
    return UserProfile.create(data)
  }

  //**************** Username ******************/
  public async updateUsername(data: {}): Promise<UserProfile> {
    return UserProfile.create(data)
  }

  //**************** Usser Email ******************/
  public async updateEmail(data: {}): Promise<UserProfile> {
    return UserProfile.create(data)
  }

  //**************** Usser Password ******************/
  public async updatePassword(data: {}): Promise<UserProfile> {
    return UserProfile.create(data)
  }

  //**************** Usser Profile pic ******************/
  public async updateProfile(data: {}): Promise<UserProfile> {
    return UserProfile.create(data)
  }

  //**************** Usser Cover pic ******************/
  public async updateCover(data: {}): Promise<UserProfile> {
    return UserProfile.create(data)
  }
}
