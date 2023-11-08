import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uid: number

  @column()
  public userId: number

  @column()
  public productId: number

  @column.dateTime({ autoCreate: true })
  public orderDate: DateTime

  @column()
  public totalAmount: number

  @column()
  public orderStatus: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
