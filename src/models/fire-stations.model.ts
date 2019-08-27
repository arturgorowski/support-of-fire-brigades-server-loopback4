import { Entity, model, property, hasMany, embedsMany } from '@loopback/repository';
import { FireTrucks, FireTrucskWithRelations } from './fire-trucks.model';
import { FireStationEquipments, FireStationEquipmentsWithRelations } from './fire-station-equipments.model';
import { Firefighters, FirefightersWithRelations } from './firefighters.model';

@model({
  // settings: {
  //   strictObjectIDCoercion: true
  // }
})
export class FireStations extends Entity {
  @property({
    type: 'string',
    mongodb: { dataType: 'ObjectID' },
    id: true
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  // @property.array(FireTrucks)
  // fireTrucks: FireTrucks[];

  @property.array(FireStationEquipments)
  fireStationEquipments: FireStationEquipments[];

  @property.array(Firefighters)
  firefighters: Firefighters[];

  @hasMany(() => FireTrucks)
  fireTrucks: FireTrucks[];

  // @hasMany(() => FireStationEquipments)
  // fireStationEquipments: FireStationEquipments[];

  // @hasMany(() => Firefighters)
  // firefighters: Firefighters[];

  constructor(data?: Partial<FireStations>) {
    super(data);
  }
}

export interface FireStationsRelations {

  fireTrucks: FireTrucskWithRelations[];
  fireStationEquipments?: FireStationEquipmentsWithRelations[];
  firefighters?: FirefightersWithRelations[];
}

export type FireStationsWithRelations = FireStations & FireStationsRelations;
