import { isEmail } from 'class-validator';
import { DomainPrimitive, ValueObject } from './base';

export class EmailVO extends ValueObject<string> {
  constructor(value: string) {
    super({ value });
  }

  public get value(): string {
    return this.props.value;
  }

  protected validate({ value }: DomainPrimitive<string>): void {
    if (!isEmail(value)) {
      throw new Error('Incorrect email');
    }
  }
}
