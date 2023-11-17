import { BaseModel, BelongsTo, beforeCreate, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import { v4 as uuidv4 } from 'uuid'
import Post from './Post'

export default class Image extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid: string

  @column()
  public postId: string

  @belongsTo(() => Post, { foreignKey: 'postId' })
  public post: BelongsTo<typeof Post>

  @column()
  public imageUrls: string[]

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Add this method to generate uuid before creating a image
  @beforeCreate()
  public static async generateUuid(image: Image) {
    image.uuid = uuidv4()
  }
}
