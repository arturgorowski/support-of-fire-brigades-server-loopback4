import { Entity, model, property, belongsTo } from '@loopback/repository';
import { v4 as uuid } from 'uuid';
import { Interventions } from './interventions.model';

@model({
  // settings: {
  //   strictObjectIDCoercion: true
  // }
})
export class FirefightersOnAction extends Entity {
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

  @belongsTo(() => Interventions)
  intervensionsId?: string;


  constructor(data?: Partial<FirefightersOnAction>) {
    super(data);
  }
}

export interface FirefightersOnActionRelations {
  // describe navigational properties here
}

export type FirefightersOnActionWithRelations = FirefightersOnAction & FirefightersOnActionRelations;
