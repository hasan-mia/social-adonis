import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import { v4 as uuidv4 } from 'uuid'

export default class Coupon extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid: string

  @column()
  public code: string

  @column()
  public discount: number

  @column()
  public discountType: number

  @column.dateTime()
  public startDate: DateTime

  @column.dateTime()
  public expirationDate: DateTime

  @column()
  public isActive: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Add this method to generate uuid before creating a coupon
  @beforeCreate()
  public static async generateUuid(coupon: Coupon) {
    coupon.uuid = uuidv4()
  }
}
