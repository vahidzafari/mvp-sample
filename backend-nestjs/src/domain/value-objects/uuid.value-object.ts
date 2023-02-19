import { v4 as uuidV4, validate } from 'uuid';
import { ID } from './id.value-object';

export class UUID extends ID {
  static generate(): UUID {
    return new UUID(uuidV4());
  }

  protected validate({ value }): void {
    if (!validate(value)) {
      throw new Error('Incorrect UUID format');
    }
  }
}
