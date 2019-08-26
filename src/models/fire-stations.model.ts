import { Entity, model, property, hasMany, embedsMany } from '@loopback/repository';
import { FireTrucks, FireTrucskWithRelations } from './fire-trucks.model';
import { FireStationEquipments, FireStationEquipmentsWithRelations } from './fire-station-equipments.model';
import { Firefighters, FirefightersWithRelations } from './firefighters.model';

@model({
  settings: {
    strictObjectIDCoercion: true
  }
})
export class FireStations extends Entity {
  @property({
    type: 'string',
    mongodb: { dataType: 'ObjectId' },
    id: true
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  // @property({
  //   name: 'fireTrucks',
  //   type: 'object',
  //   // Specify the JSON validation rules here
  //   jsonSchema: {
  //     maxLength: 30,
  //     minLength: 10,
  //   },
  // })
  // public fireTrucks: object;

  // @hasMany(() => FireTrucks, { keyTo: 'fireStationsId' })
  // fireTrucks: FireTrucks[];

  @embedsMany(() => FireTrucks)
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
  // fireStationEquipments?: FireStationEquipmentsWithRelations[];
  // firefighters?: FirefightersWithRelations[];
}

export type FireStationsWithRelations = FireStations & FireStationsRelations;
