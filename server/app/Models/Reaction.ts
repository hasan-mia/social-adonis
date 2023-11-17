import { BaseModel, BelongsTo, beforeCreate, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import { v4 as uuidv4 } from 'uuid'
import Comment from './Comment'
import Post from './Post'
import Reply from './Reply'
import User from './User'

export default class Reaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid: string

  @column()
  public reactionType: string

  @column()
  public notifications: any // Adjust the type according to your Notification model

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
  public userId: string

  @belongsTo(() => User, { foreignKey: 'userId' })
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Add this method to generate uuid before creating a reaction
  @beforeCreate()
  public static async generateUuid(reaction: Reaction) {
    reaction.uuid = uuidv4()
  }
}
