import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserService from './UserService'
import UserValidator from './UserValidator'

export default class UserController {
  private userService: UserService
  private userValidator: UserValidator

  constructor() {
    this.userService = new UserService()
    this.userValidator = new UserValidator()
  }

  //**************** All User *********************/
  public async alluser(ctx: HttpContextContract) {
    return this.userService.alluser(ctx)
  }

  //**************** User Info *********************/
  public async userinfo(ctx: HttpContextContract) {
    return this.userService.userinfo(ctx)
  }

  //**************** Update Info *********************/
  public async updateinfo(ctx: HttpContextContract) {
    // const payload = await this.userValidator.userSchema(ctx)
    return this.userService.updateinfo(ctx)
  }
}
