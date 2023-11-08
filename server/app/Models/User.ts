import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uid: number

  @column()
  public firstName: String

  @column()
  public lastName: String

  @column({ serializeAs: null })
  public username: string

  @column()
  public email: string

  @column()
  public phone: String

  @column({ serializeAs: null })
  public password: string

  @column()
  public birthDate: String

  @column()
  public relationship: String

  @column()
  public roleId: String

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
