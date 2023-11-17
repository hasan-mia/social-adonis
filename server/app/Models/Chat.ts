import { BaseModel, BelongsTo, beforeCreate, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import { v4 as uuidv4 } from 'uuid'
import Conversation from './Conversation'
import User from './User'

export default class Chat extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid: string

  @column()
  public type: number

  @column()
  public conversationId: string

  @belongsTo(() => Conversation, { foreignKey: 'conversationId' })
  public conversation: BelongsTo<typeof Conversation>

  @column()
  public senderId: string

  @belongsTo(() => User, { foreignKey: 'senderId' })
  public sender: BelongsTo<typeof User>

  @column()
  public message: string

  @column()
  public file: string

  @column()
  public notifications: any // Adjust the type according to your Notification model

  @column()
  public attachments: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Add this method to generate uuid before creating a chat
  @beforeCreate()
  public static async generateUuid(chat: Chat) {
    chat.uuid = uuidv4()
  }
}
