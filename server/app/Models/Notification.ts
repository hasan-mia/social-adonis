import { BaseModel, BelongsTo, beforeCreate, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import { v4 as uuidv4 } from 'uuid'
import Chat from './Chat'
import Comment from './Comment'
import Follow from './Follow'
import Order from './Order'
import Post from './Post'
import Reaction from './Reaction'
import Reply from './Reply'
import User from './User'

export default class Notification extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid: string

  @column()
  public userId: string

  @belongsTo(() => User, { foreignKey: 'userId' })
  public user: BelongsTo<typeof User>

  @column()
  public notificationType: number

  @column()
  public postId: string

  @belongsTo(() => Post, { foreignKey: 'postId' })
  public post: BelongsTo<typeof Post>

  @column()
  public commentId: string

  @belongsTo(() => Comment, { foreignKey: 'commentId' })
  public comment: BelongsTo<typeof Comment>

  @column()
  public replyId: string

  @belongsTo(() => Reply, { foreignKey: 'replyId' })
  public reply: BelongsTo<typeof Reply>

  @column()
  public chatId: string

  @belongsTo(() => Chat, { foreignKey: 'chatId' })
  public chat: BelongsTo<typeof Chat>

  @column()
  public orderId: string

  @belongsTo(() => Order, { foreignKey: 'orderId' })
  public order: BelongsTo<typeof Order>

  @column()
  public reactionId: string

  @belongsTo(() => Reaction, { foreignKey: 'reactionId' })
  public reaction: BelongsTo<typeof Reaction>

  @column()
  public followId: string

  @belongsTo(() => Follow, { foreignKey: 'followId' })
  public follow: BelongsTo<typeof Follow>

  @column()
  public isRead: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Add this method to generate uuid before creating a notification
  @beforeCreate()
  public static async generateUuid(notification: Notification) {
    notification.uuid = uuidv4()
  }
}
