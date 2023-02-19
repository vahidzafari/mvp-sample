export type Primitives = string | number | boolean;
export interface DomainPrimitive<T extends Primitives | Date> {
  value: T;
}

export type ValueObjectProps<T> = T extends Primitives | Date
  ? DomainPrimitive<T>
  : T;

export interface IValueObject<T> {
  readonly props: ValueObjectProps<T>;
  validate(props: ValueObjectProps<T>): void;
  isValueObject(obj: unknown): obj is ValueObject<unknown>;
  equals(vo?: ValueObject<T>): boolean;
  checkIfEmpty(props: ValueObjectProps<T>): void;
}

export abstract class ValueObject<T> {
  protected readonly props: ValueObjectProps<T>;

  constructor(props: ValueObjectProps<T>) {
    this.checkIfEmpty(props);
    this.validate(props);
    this.props = props;
  }

  protected abstract validate(props: ValueObjectProps<T>): void;

  static isValueObject(obj: unknown): obj is ValueObject<unknown> {
    return obj instanceof ValueObject;
  }

  public equals(vo?: ValueObject<T>): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }
    return JSON.stringify(this) === JSON.stringify(vo);
  }

  private checkIfEmpty(props: ValueObjectProps<T>): void {
    if (!props) {
      throw new Error('Property cannot be empty');
    }
  }
}
