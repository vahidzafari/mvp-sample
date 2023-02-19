import { UUID, LocationVO } from '../value-objects';

export type StoreEssentialProperties = Readonly<
  Required<{
    id: UUID;
    name: string;
    address: string;
    location: LocationVO;
  }>
>;

export type StoreOptionalProperties = Readonly<
  Partial<{
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
  }>
>;

export type StoreProperties = StoreEssentialProperties &
  StoreOptionalProperties;

export interface IStore {
  compareId: (id: UUID) => boolean;
}

export class StoreImplement implements IStore {
  private readonly id: UUID;
  private readonly name: string;
  private readonly address: string;
  private readonly location: LocationVO;

  constructor(properties: StoreProperties) {
    Object.assign(this, properties);
  }

  compareId(id: UUID): boolean {
    return this.id.equals(id);
  }
}
