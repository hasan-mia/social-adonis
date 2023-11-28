import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator'
export default class UserValidator {
  public messages = {
    'username.unique': 'Username already in use',
    'username.exists': 'Invalid username',
    'email.unique': 'Email already in use',
    'email.exists': 'Invalid email address',
  }
  //**************** update info *********************/
  public async userSchema(ctx: HttpContextContract) {
    const userSchema = schema.create({
      username: schema.string({}, [
        rules.unique({ table: 'users', column: 'username', whereNot: { uuid: ctx.params.uuid } }),
      ]),
      email: schema.string({}, [
        rules.unique({ table: 'users', column: 'email', whereNot: { uuid: ctx.params.uuid } }),
      ]),
    })
    const msg = {
      'username.unique': 'Username already in use',
      'username.exists': 'Invalid username',
      'email.unique': 'Email already in use',
      'email.exists': 'Invalid email address',
    }
    return await ctx.request.validate({ schema: userSchema, messages: msg })
  }
}
