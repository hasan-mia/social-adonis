import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserQuery from './UserQuery'

export default class UserService {
  public userQuery: UserQuery

  constructor() {
    this.userQuery = new UserQuery()
  }
  //**************** All User Info *********************/
  public async allUser(ctx: HttpContextContract) {
    try {
      // crete user
      const users = await this.userQuery.allUser()

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
  public async userInfo(ctx: HttpContextContract) {
    try {
      const uuid = ctx.request.input('uuid')
      const userinfo = await this.userQuery.userInfo(uuid)
      // Verify user
      if (!userinfo)
        return ctx.response.status(401).send({ errors: [{ message: 'User not found' }] })

      return ctx.response.status(200).send({ message: 'success', data: userinfo })
    } catch (error) {
      return ctx.response.status(422).send({ errors: error.messages })
    }
  }

  //**************** Update user Info *********************/
  public async updateUsername(ctx: HttpContextContract) {
    try {
      const uuid = ctx.request.input('uuid')
      const data = ctx.request.only([
        'first_name',
        'last_name',
        'phone',
        'birth_date',
        'relationship',
      ])
      const exitUser = await this.userQuery.updateUsername(uuid)
      if (!exitUser)
        return ctx.response.status(401).send({ errors: [{ message: 'User not found' }] })

      // update info
      const updatedInfo = await this.userQuery.updateUsername(data)

      // check if user created faild
      if (!updatedInfo) return ctx.response.badRequest({ errors: [{ message: 'Update failed' }] })

      return ctx.response.status(201).send({ message: 'Update success' })
    } catch (error) {
      return ctx.response.status(422).send({ errors: error.messages })
    }
  }

  //**************** Update user Info *********************/
  public async updateEmail(ctx: HttpContextContract) {
    try {
      const uuid = ctx.request.input('uuid')
      const data = ctx.request.only([
        'first_name',
        'last_name',
        'phone',
        'birth_date',
        'relationship',
      ])
      const exitUser = await this.userQuery.updateEmail(uuid)
      if (!exitUser)
        return ctx.response.status(401).send({ errors: [{ message: 'User not found' }] })

      // update info
      const updatedInfo = await this.userQuery.updateEmail(data)

      // check if user created faild
      if (!updatedInfo) return ctx.response.badRequest({ errors: [{ message: 'Update failed' }] })

      return ctx.response.status(201).send({ message: 'Update success' })
    } catch (error) {
      return ctx.response.status(422).send({ errors: error.messages })
    }
  }

  //**************** Update Password *********************/
  public async updatePassword(ctx: HttpContextContract) {
    try {
      const uuid = ctx.request.input('uuid')
      const data = ctx.request.only([
        'first_name',
        'last_name',
        'phone',
        'birth_date',
        'relationship',
      ])
      const exitUser = await this.userQuery.updatePassword(uuid)
      if (!exitUser)
        return ctx.response.status(401).send({ errors: [{ message: 'User not found' }] })

      // update info
      const updatedInfo = await this.userQuery.updatePassword(data)

      // check if user created faild
      if (!updatedInfo) return ctx.response.badRequest({ errors: [{ message: 'Update failed' }] })

      return ctx.response.status(201).send({ message: 'Update success' })
    } catch (error) {
      return ctx.response.status(422).send({ errors: error.messages })
    }
  }

  //**************** Update user Info *********************/
  public async updateInfo(ctx: HttpContextContract, payload: object) {
    try {
      const uuid = ctx.request.input('uuid')
      const data = ctx.request.only([
        'first_name',
        'last_name',
        'phone',
        'birth_date',
        'relationship',
      ])
      const exitUser = await this.userQuery.updateInfo(uuid)
      return payload
      if (!exitUser)
        return ctx.response.status(401).send({ errors: [{ message: 'User not found' }] })

      // update info
      const updatedInfo = await this.userQuery.updateInfo(data)

      // check if user created faild
      if (!updatedInfo) return ctx.response.badRequest({ errors: [{ message: 'Update failed' }] })

      return ctx.response.status(201).send({ message: 'Update success' })
    } catch (error) {
      return ctx.response.status(422).send({ errors: error.messages })
    }
  }

  //**************** Update Profile pic *********************/
  public async updateProfile(ctx: HttpContextContract) {
    try {
      const uuid = ctx.request.input('uuid')
      const data = ctx.request.only([
        'first_name',
        'last_name',
        'phone',
        'birth_date',
        'relationship',
      ])
      const exitUser = await this.userQuery.updateProfile(uuid)
      if (!exitUser)
        return ctx.response.status(401).send({ errors: [{ message: 'User not found' }] })

      // update info
      const updatedInfo = await this.userQuery.updateProfile(data)

      // check if user created faild
      if (!updatedInfo) return ctx.response.badRequest({ errors: [{ message: 'Update failed' }] })

      return ctx.response.status(201).send({ message: 'Update success' })
    } catch (error) {
      return ctx.response.status(422).send({ errors: error.messages })
    }
  }

  //**************** Update user Info *********************/
  public async updateCover(ctx: HttpContextContract) {
    try {
      const uuid = ctx.request.input('uuid')
      const data = ctx.request.only([
        'first_name',
        'last_name',
        'phone',
        'birth_date',
        'relationship',
      ])
      const exitUser = await this.userQuery.updateCover(uuid)
      if (!exitUser)
        return ctx.response.status(401).send({ errors: [{ message: 'User not found' }] })

      // update info
      const updatedInfo = await this.userQuery.updateCover(data)

      // check if user created faild
      if (!updatedInfo) return ctx.response.badRequest({ errors: [{ message: 'Update failed' }] })

      return ctx.response.status(201).send({ message: 'Update success' })
    } catch (error) {
      return ctx.response.status(422).send({ errors: error.messages })
    }
  }
}
