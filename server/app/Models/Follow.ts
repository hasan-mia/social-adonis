import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import User from './User'

export default class Follow extends BaseModel {
  @column()
  public uuid: string

  @column()
  public followerId: string

  @belongsTo(() => User, { foreignKey: 'followerId' })
  public follower: BelongsTo<typeof User>

  @column()
  public followingId: string

  @belongsTo(() => User, { foreignKey: 'followingId' })
  public following: BelongsTo<typeof User>

  @column()
  public notifications: any

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
