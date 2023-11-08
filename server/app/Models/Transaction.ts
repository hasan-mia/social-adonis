import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uid: number

  @column()
  public userId: number

  @column()
  public orderCode: number

  @column()
  public paymentMethodId: number

  @column.dateTime({ autoCreate: true })
  public transactionDate: DateTime

  @column()
  public amount: number

  @column()
  public status: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
