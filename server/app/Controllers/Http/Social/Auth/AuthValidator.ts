import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator'
export default class AuthValidator {
  public messages = {
    'username.unique': 'Username already in use',
    'username.exists': 'Invalid email username',
    'email.required': 'Email is required',
    'email.unique': 'Email already in use',
    'email.exists': 'Invalid email address',
    'password.minLength': 'Password must be at least 6 characters long',
    'password.maxLength': 'Password must be at less or equal 16 characters long',
  }
  //**************** Sign Up *********************/
  public async signUpSchema(ctx: HttpContextContract) {
    const userSchema = schema.create({
      email: schema.string({}, [
        rules.normalizeEmail({}),
        rules.unique({ table: 'users', column: 'email' }),
      ]),
      password: schema.string([rules.minLength(8), rules.maxLength(16)]),
    })
    const msg = {
      'email.required': 'Email is required',
      'email.unique': 'Email is already in use',
      'email.email': 'Invalid email address',
      'password.required': 'Password is required',
      'password.minLength': 'Password must be at least 8 charecters long',
      'password.maxLength': 'Password must be at less or equal 16 charecters long',
    }
    return await ctx.request.validate({ schema: userSchema, messages: msg })
  }

  //**************** Sign In *********************/
  public async signInSchema(ctx: HttpContextContract) {
    const userSchema = schema.create({
      // email: schema.string({}, [
      //   rules.normalizeEmail({}),
      //   rules.unique({ table: 'users', column: 'email' }),
      // ]),
      // username: schema.string.optional({ trim: true }, [
      //   rules.unique({ table: 'users', column: 'username', caseInsensitive: true }),
      // ]),
      uid: schema.string({ trim: true }),
      password: schema.string([rules.minLength(8), rules.maxLength(16)]),
    })
    const msg = {
      'password.required': 'Password is required',
      'password.minLength': 'Password must be at least 6 charecters long',
      'password.maxLength': 'Password must be at less or equal 16 charecters long',
    }
    return await ctx.request.validate({ schema: userSchema, messages: msg })
  }
}
