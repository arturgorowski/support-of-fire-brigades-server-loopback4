import { Entity, model, property, hasOne, hasMany } from '@loopback/repository';
import { Address } from './address.model';
import { FirefightersOnAction } from './firefighters-on-action.model';
import { v4 as uuid } from 'uuid';

@model({
  // settings: {
  //   strictObjectIDCoercion: true
  // }
})
export class Interventions extends Entity {
  @property({
    type: 'string',
    id: true,
    default: () => uuid(),
  })
  id: string;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'string',
  })
  timeOfDeparture?: string;

  @property({
    type: 'string',
  })
  arrivalTime?: string;

  @hasOne(() => Address)
  address?: Address[];

  @hasMany(() => FirefightersOnAction)
  firefightersOnAction?: FirefightersOnAction[];

  constructor(data?: Partial<Interventions>) {
    super(data);
  }
}

export interface InterventionsRelations {
  // describe navigational properties here
}

export type InterventionsWithRelations = Interventions & InterventionsRelations;
