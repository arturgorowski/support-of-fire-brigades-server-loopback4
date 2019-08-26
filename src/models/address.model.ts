import { Entity, model, property, belongsTo } from '@loopback/repository';
import { v4 as uuid } from 'uuid';
import { Interventions, InterventionsWithRelations } from './interventions.model';

@model({
  // settings: {
  //   strictObjectIDCoercion: true
  // }
})
export class Address extends Entity {
  @property({
    type: 'string',
    id: true,
    // mongodb: {
    //   dataType: 'ObjectID' // or perhaps 'objectid'?
    // }
    default: () => uuid(),
  })
  id?: string;

  @property({
    type: 'string',
  })
  city?: string;

  @property({
    type: 'string',
  })
  street?: string;

  @property({
    type: 'string',
  })
  number?: string;

  @property({
    type: 'string',
  })
  postalCode?: string;

  @property({
    type: 'string',
  })
  zipCode?: string;

  @belongsTo(() => Interventions)
  interventionId: string;


  constructor(data?: Partial<Address>) {
    super(data);
  }
}

export interface AddressRelations {
  interventions?: InterventionsWithRelations;
}

export type AddressWithRelations = Address & AddressRelations;
