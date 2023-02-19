import { UUID, EmailVO } from '../value-objects';

export type CustomerEssentialProperties = Readonly<
  Required<{
    id: UUID;
    first_name: string;
    last_name: string;
    email: EmailVO;
  }>
>;

export type CustomerOptionalProperties = Readonly<
  Partial<{
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
  }>
>;

export type CustomerProperties = CustomerEssentialProperties &
  CustomerOptionalProperties;

export interface ICustomer {
  compareId: (id: string) => boolean;
}

export class CustomerImplement implements ICustomer {
  private readonly id: UUID;
  private readonly first_name: string;
  private readonly last_name: string;
  private readonly email: EmailVO;

  constructor(properties: CustomerProperties) {
    Object.assign(this, properties);
  }

  compareId(id: string): boolean {
    return this.id.equals(id);
  }
}
