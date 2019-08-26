import { Entity, model, property, hasMany, belongsTo } from '@loopback/repository';
import { FireTruckEquipment } from './fire-truck-equipment.model';
import { FireStations } from './fire-stations.model';
import { v4 as uuid } from 'uuid';

@model({
  settings: {
    strictObjectIDCoercion: true
  }
})
export class FireTrucks extends Entity {
  // @property({
  //   type: 'string',
  //   id: true,
  //   default: () => uuid(),
  // })
  // id: string;

  @property({
    type: 'string',
    mongodb: { dataType: 'ObjectId' },
    id: true
  })
  id: string;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'number',
  })
  waterCapacity?: number;

  @property({
    type: 'number',
  })
  pumpCapacity?: number;

  // @hasMany(() => FireTruckEquipment)
  // fireTruckEquipment?: FireTruckEquipment[];

  // @belongsTo(() => FireStations)
  // fireStationsId?: any;

  constructor(data?: Partial<FireTrucks>) {
    super(data);
  }
}

export interface FireTrucksRelations {
  // describe navigational properties here
}

export type FireTrucskWithRelations = FireTrucks & FireTrucksRelations;
