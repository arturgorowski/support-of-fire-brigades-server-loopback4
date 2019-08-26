import { Entity, model, property, belongsTo } from '@loopback/repository';
import { v4 as uuid } from 'uuid';
import { FireTrucks } from './fire-trucks.model';

@model({
  // settings: {
  //   strictObjectIDCoercion: true
  // }
})
export class FireTruckEquipment extends Entity {
  @property({
    type: 'string',
    id: true,
    default: () => uuid(),
  })
  id: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  producent?: string;

  @property({
    type: 'string',
  })
  model?: string;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'string',
  })
  quantity?: string;

  @belongsTo(() => FireTrucks)
  fireTrucksId?: string;

  constructor(data?: Partial<FireTruckEquipment>) {
    super(data);
  }
}

export interface FireTruckEquipmentRelations {
  // describe navigational properties here
}

export type FireTruckEquipmentWithRelations = FireTruckEquipment & FireTruckEquipmentRelations;
