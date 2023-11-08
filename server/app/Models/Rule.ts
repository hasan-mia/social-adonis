import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Rule extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ isPrimary: true })
  public uid: number

  @column({ isPrimary: true })
  public roleName: string

  @column({ isPrimary: true })
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
