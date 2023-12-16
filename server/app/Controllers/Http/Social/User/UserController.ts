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
  public async allUser(ctx: HttpContextContract) {
    return this.userService.allUser(ctx)
  }

  //**************** User Info *********************/
  public async userInfo(ctx: HttpContextContract) {
    return this.userService.userInfo(ctx)
  }

  //**************** Update Info *********************/
  public async updateInfo(ctx: HttpContextContract) {
    const payload = await this.userValidator.userInfoSchema(ctx)
    return this.userService.updateInfo(ctx, payload)
  }

  //**************** Update Cover *********************/
  public async updateUsername(ctx: HttpContextContract) {
    // const payload = await this.userValidator.userSchema(ctx)
    return this.userService.updateUsername(ctx)
  }

  //**************** Update Email *********************/
  public async updateEmail(ctx: HttpContextContract) {
    // const payload = await this.userValidator.userSchema(ctx)
    return this.userService.updateEmail(ctx)
  }

  //**************** Update Password *********************/
  public async updatePassword(ctx: HttpContextContract) {
    // const payload = await this.userValidator.userSchema(ctx)
    return this.userService.updatePassword(ctx)
  }

  //**************** Update Profile Pic*********************/
  public async updateProfile(ctx: HttpContextContract) {
    // const payload = await this.userValidator.userSchema(ctx)
    return this.userService.updateProfile(ctx)
  }

  //**************** Update Cover Pic*********************/
  public async updateCover(ctx: HttpContextContract) {
    // const payload = await this.userValidator.userSchema(ctx)
    return this.userService.updateCover(ctx)
  }
}
