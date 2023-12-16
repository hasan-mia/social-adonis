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
  public async userInfoSchema(ctx: HttpContextContract) {
    const userSchema = schema.create({
      first_name: schema.string({}, [rules.maxLength(50)]),
      last_name: schema.string({}, [rules.maxLength(50)]),
      phone: schema.string.optional({}, [
        rules.maxLength(20),
        rules.unique({ table: 'userProfile', column: 'phone' }),
      ]),
      birth_date: schema.date.optional(),
    })
    const msg = {
      'first_name.maxLength': 'First name must not exceed 50 characters.',
      'last_name.maxLength': 'Last name must not exceed 50 characters.',
      'phone.maxLength': 'Phone number must not exceed 20 characters.',
      'phone.unique': 'Phone number is already in use.',
    }
    return await ctx.request.validate({ schema: userSchema, messages: msg })
  }
}
