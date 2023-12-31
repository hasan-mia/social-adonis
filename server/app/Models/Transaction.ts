import { BaseModel, BelongsTo, beforeCreate, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import { v4 as uuidv4 } from 'uuid'
import Order from './Order'
import Payment from './Payment'
import User from './User'

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid: number

  @column()
  public userId: string

  @belongsTo(() => User, { foreignKey: 'userId' })
  public user: BelongsTo<typeof User>

  @column()
  public orderCode: string

  @belongsTo(() => Order, { foreignKey: 'orderCode' })
  public order: BelongsTo<typeof Order>

  @column()
  public paymentMethodId: string

  @belongsTo(() => Payment, { foreignKey: 'paymentMethodId' })
  public paymentMethod: BelongsTo<typeof Payment>

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

  // Add this method to generate uuid before creating a transaction
  @beforeCreate()
  public static async generateUuid(transaction: Transaction) {
    transaction.uuid = uuidv4()
  }
}
