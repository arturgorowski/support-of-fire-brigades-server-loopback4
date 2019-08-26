import { Entity, model, property, belongsTo } from '@loopback/repository';
import { v4 as uuid } from 'uuid';
import { FireStations } from './fire-stations.model';

@model({
  // settings: {
  //   strictObjectIDCoercion: true
  // }
})
export class FireStationEquipments extends Entity {
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

  @belongsTo(() => FireStations)
  fireStationsId?: string;


  constructor(data?: Partial<FireStationEquipments>) {
    super(data);
  }
}

export interface FireStationEquipmentsRelations {
  // describe navigational properties here
}

export type FireStationEquipmentsWithRelations = FireStationEquipments & FireStationEquipmentsRelations;
