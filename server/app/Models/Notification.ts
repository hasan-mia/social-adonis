import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Notification extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uid: number

  @column()
  public userId: number

  @column()
  public notificationType: number

  @column()
  public postId: number

  @column()
  public commentId: number

  @column()
  public replyId: number

  @column()
  public chatId: number

  @column()
  public orderId: number

  @column()
  public isRead: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
