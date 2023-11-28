import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, HasOne, beforeCreate, beforeSave, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import { v4 as uuidv4 } from 'uuid'
import UserProfile from './UserProfile'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid: string

  @column()
  public username: string | null

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public type: number

  @column({ columnName: 'remember_me_token' })
  public rememberMeToken: string | null

  @column()
  public relationship: number

  @column()
  public verify: boolean

  @column()
  public active: boolean

  @column()
  public online: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Add this method to generate uuid before creating a user
  @beforeCreate()
  public static async generateUuid(user: User) {
    user.uuid = uuidv4()
  }

  // relation
  @hasOne(() => UserProfile, {
    localKey: 'uuid',
    foreignKey: 'userId',
  })
  public userProfile: HasOne<typeof UserProfile>

  // Add this method to hash the password before inserting or updating a user
  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
