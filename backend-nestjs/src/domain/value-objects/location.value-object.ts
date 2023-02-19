import {
  IsArray,
  IsNotEmpty,
  ArrayMaxSize,
  ArrayMinSize,
  IsString,
} from 'class-validator';

class IValue {
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @IsString({ each: true })
  value: [string, string];
}

export class LocationVO {
  protected readonly props: IValue;

  constructor(props: IValue) {
    this.props = props;
  }

  public get value(): IValue['value'] {
    return this.props.value;
  }
}
