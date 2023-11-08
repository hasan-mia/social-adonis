import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Reply extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uid: number

  @column()
  public commentId: number

  @column()
  public userId: number

  @column()
  public text: string

  @column()
  public notifications: object[]

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
