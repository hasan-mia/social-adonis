import { HashDriverContract } from '@ioc:Adonis/Core/Hash'

export class PlainTextDriver implements HashDriverContract {
  public async make(value: string) {
    return value
  }

  public async verify(hashedValue: string, plainValue: string) {
    return hashedValue === plainValue
  }
}
