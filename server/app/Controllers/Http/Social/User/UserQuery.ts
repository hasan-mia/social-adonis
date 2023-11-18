import UserProfile from 'App/Models/UserProfile'

export default class UserQuery {
  //**************** All User *********************/
  public async alluser(): Promise<UserProfile[] | null> {
    const allUser = await UserProfile.query()
      .preload('user', (query) => query.select(['uuid', 'username', 'email', 'type']))
      .select([
        'userId',
        'firstName',
        'lastName',
        'phone',
        'birthDate',
        'relationship',
        'verify',
        'active',
        'online',
        'createdAt',
        'updatedAt',
      ])

    return allUser || []
  }

  //**************** Usser info ******************/
  public async userinfo(uuid: string): Promise<UserProfile | null> {
    const userProfile = await UserProfile.query()
      .preload('user', (query) => query.select(['id', 'uuid', 'username', 'email', 'type']))
      .whereHas('user', (query) => {
        query.where('uuid', uuid)
      })
      .first()

    return userProfile || null
  }

  //**************** Usser info ******************/
  public async updateinfo(data: {}): Promise<UserProfile> {
    return UserProfile.create(data)
  }
}
