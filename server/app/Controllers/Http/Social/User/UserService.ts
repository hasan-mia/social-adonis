import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserQuery from './UserQuery'

export default class UserService {
  public userQuery: UserQuery

  constructor() {
    this.userQuery = new UserQuery()
  }
  //**************** All User Info *********************/
  public async alluser(ctx: HttpContextContract) {
    try {
      // crete user
      const users = await this.userQuery.alluser()

      // check if user created faild
      if (!users) return ctx.response.badRequest({ errors: [{ message: 'Users not found' }] })

      // send response
      return ctx.response.status(200).send({
        message: 'success',
        data: users,
      })
    } catch (error) {
      return ctx.response.status(422).send({ errors: error.messages })
    }
  }

  //**************** User Info *********************/
  public async userinfo(ctx: HttpContextContract) {
    try {
      const uuid = ctx.request.input('uuid')
      const userinfo = await this.userQuery.userinfo(uuid)
      // Verify user
      if (!userinfo)
        return ctx.response.status(401).send({ errors: [{ message: 'User not found' }] })

      return ctx.response.status(200).send({ message: 'success', data: userinfo })
    } catch (error) {
      return ctx.response.status(422).send({ errors: error.messages })
    }
  }

  //**************** Update user Info *********************/
  public async updateinfo(ctx: HttpContextContract) {
    try {
      const uuid = ctx.request.input('uuid')
      const data = ctx.request.only([
        'first_name',
        'last_name',
        'phone',
        'birth_date',
        'relationship',
      ])
      const exitUser = await this.userQuery.userinfo(uuid)
      if (!exitUser)
        return ctx.response.status(401).send({ errors: [{ message: 'User not found' }] })

      // update info
      const updatedInfo = await this.userQuery.updateinfo(data)

      // check if user created faild
      if (!updatedInfo) return ctx.response.badRequest({ errors: [{ message: 'Update failed' }] })

      return ctx.response.status(201).send({ message: 'Update success' })
    } catch (error) {
      return ctx.response.status(422).send({ errors: error.messages })
    }
  }
}
