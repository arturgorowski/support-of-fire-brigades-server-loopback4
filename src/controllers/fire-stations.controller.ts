import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { FireStations, FireTrucks, FireStationEquipments, Firefighters } from '../models';
import { FireStationsRepository, FireTrucksRepository, FireStationEquipmentsRepository, FirefightersRepository } from '../repositories';

export class FireStationsController {
  constructor(
    @repository(FireStationsRepository)
    public fireStationsRepository: FireStationsRepository,

    @repository(FireTrucksRepository)
    public fireTrucks: FireTrucks,
    @repository(FireStationEquipmentsRepository)
    public fireStationEquipments: FireStationEquipments,
    @repository(FirefightersRepository)
    public firefighters: Firefighters
  ) { }

  @post('/fireStations', {
    responses: {
      '200': {
        description: 'FireStations model instance',
        content: { 'application/json': { schema: getModelSchemaRef(FireStations) } },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FireStations, { exclude: ['id'] }),
        },
      },
    })
    fireStations: Omit<FireStations, 'id'>,
  ): Promise<FireStations> {
    return this.fireStationsRepository.create(fireStations);
  }

  @get('/fireStations/count', {
    responses: {
      '200': {
        description: 'FireStations model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(FireStations)) where?: Where<FireStations>,
  ): Promise<Count> {
    return this.fireStationsRepository.count(where);
  }

  @get('/fireStations', {
    responses: {
      '200': {
        description: 'Array of FireStations model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: getModelSchemaRef(FireStations) },
          },
        },
      },
    },
  })
  async find(
    //@param.path.string('id') id: string,
    @param.query.object('filter', getFilterSchemaFor(FireStations)) filter?: Filter<FireStations>,
  ): Promise<FireStations[]> {
    //return await this.fireStationsRepository.findStations(id)
    return this.fireStationsRepository.find(filter);
  }

  @patch('/fireStations', {
    responses: {
      '200': {
        description: 'FireStations PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FireStations, { partial: true }),
        },
      },
    })
    fireStations: FireStations,
    @param.query.object('where', getWhereSchemaFor(FireStations)) where?: Where<FireStations>,
  ): Promise<Count> {
    return this.fireStationsRepository.updateAll(fireStations, where);
  }

  @get('/fireStations/{id}', {
    responses: {
      '200': {
        description: 'FireStations model instance',
        content: { 'application/json': { schema: getModelSchemaRef(FireStations) } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<FireStations> {
    return this.fireStationsRepository.findById(id);
  }

  @patch('/fireStations/{id}', {
    responses: {
      '204': {
        description: 'FireStations PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FireStations, { partial: true }),
        },
      },
    })
    fireStations: FireStations,
  ): Promise<void> {
    await this.fireStationsRepository.updateById(id, fireStations);
  }

  @put('/fireStations/{id}', {
    responses: {
      '204': {
        description: 'FireStations PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() fireStations: FireStations,
  ): Promise<void> {
    await this.fireStationsRepository.replaceById(id, fireStations);
  }

  @del('/fireStations/{id}', {
    responses: {
      '204': {
        description: 'FireStations DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.fireStationsRepository.deleteById(id);
  }
}
