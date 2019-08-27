import { Entity, model, property, belongsTo } from '@loopback/repository';
import { v4 as uuid } from 'uuid';
import { Firefighters } from './firefighters.model';

@model({
  // settings: {
  //   strictObjectIDCoercion: true
  // }
})
export class Permissions extends Entity {
  @property({
    type: 'string',
    id: true,
    default: () => uuid(),
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  type?: string;

  // @belongsTo(() => Firefighters)
  // firefightersId?: string;

  constructor(data?: Partial<Permissions>) {
    super(data);
  }
}

export interface PermissionsRelations {
  // describe navigational properties here
}

export type PermissionsWithRelations = Permissions & PermissionsRelations;
