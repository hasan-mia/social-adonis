import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Post from './Post'

export default class Video extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid: string

  @column()
  public postId: string

  @belongsTo(() => Post, { foreignKey: 'postId' })
  public post: BelongsTo<typeof Post>

  @column()
  public videoUrl: string[]

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
