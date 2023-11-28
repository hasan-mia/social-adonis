import { BaseModel, BelongsTo, beforeCreate, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import { v4 as uuidv4 } from 'uuid'
import User from './User'

export default class UserProfile extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid: string

  @column({ columnName: 'user_id' })
  public userId: string

  @column()
  public firstName: string

  @column()
  public lastName: string

  @column()
  public phone: string

  @column()
  public birthDate: string

  @column()
  public profile: string

  @column()
  public cover: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // relation
  @belongsTo(() => User, { localKey: 'uuid', foreignKey: 'userId' })
  public user: BelongsTo<typeof User>

  // Add this method to generate uuid before creating a userProfile
  @beforeCreate()
  public static async generateUuid(userProfile: UserProfile) {
    userProfile.uuid = uuidv4()
  }
}
