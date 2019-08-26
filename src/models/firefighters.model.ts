import { Entity, model, property, hasOne, belongsTo } from '@loopback/repository';
import { Permissions } from './permissions.model';
import { v4 as uuid } from 'uuid';
import { FireStations } from './fire-stations.model';

@model({
  // settings: {
  //   strictObjectIDCoercion: true
  // }
})
export class Firefighters extends Entity {
  @property({
    type: 'string',
    id: true,
    default: () => uuid(),
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
  })
  function?: string;

  @property({
    type: 'string',
  })
  age?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @belongsTo(() => FireStations)
  fireStationsId?: string;

  @hasOne(() => Permissions)
  permissions?: Permissions;

  constructor(data?: Partial<Firefighters>) {
    super(data);
  }
}

export interface FirefightersRelations {
  // describe navigational properties here
}

export type FirefightersWithRelations = Firefighters & FirefightersRelations;
