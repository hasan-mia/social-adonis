import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Review extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uid: number

  @column()
  public userId: number

  @column()
  public productId: number

  @column()
  public rating: number

  @column()
  public reviewText: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
