import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uid: number

  @column()
  public postId: number

  @column()
  public categoryId: number

  @column()
  public title: string

  @column()
  public slug: string

  @column()
  public description: string

  @column()
  public price: number

  @column()
  public stock: number

  @column()
  public discount: number

  @column()
  public discountType: number

  @column()
  public discountDuration: object

  @column()
  public size: string[] | null

  @column()
  public color: string[] | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
