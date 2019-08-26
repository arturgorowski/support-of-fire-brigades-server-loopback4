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
import {Firefighters} from '../models';
import {FirefightersRepository} from '../repositories';

export class FirefighterController {
  constructor(
    @repository(FirefightersRepository)
    public firefightersRepository : FirefightersRepository,
  ) {}

  @post('/firefighters', {
    responses: {
      '200': {
        description: 'Firefighters model instance',
        content: {'application/json': {schema: getModelSchemaRef(Firefighters)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Firefighters, {exclude: ['id']}),
        },
      },
    })
    firefighters: Omit<Firefighters, 'id'>,
  ): Promise<Firefighters> {
    return this.firefightersRepository.create(firefighters);
  }

  @get('/firefighters/count', {
    responses: {
      '200': {
        description: 'Firefighters model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Firefighters)) where?: Where<Firefighters>,
  ): Promise<Count> {
    return this.firefightersRepository.count(where);
  }

  @get('/firefighters', {
    responses: {
      '200': {
        description: 'Array of Firefighters model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Firefighters)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Firefighters)) filter?: Filter<Firefighters>,
  ): Promise<Firefighters[]> {
    return this.firefightersRepository.find(filter);
  }

  @patch('/firefighters', {
    responses: {
      '200': {
        description: 'Firefighters PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Firefighters, {partial: true}),
        },
      },
    })
    firefighters: Firefighters,
    @param.query.object('where', getWhereSchemaFor(Firefighters)) where?: Where<Firefighters>,
  ): Promise<Count> {
    return this.firefightersRepository.updateAll(firefighters, where);
  }

  @get('/firefighters/{id}', {
    responses: {
      '200': {
        description: 'Firefighters model instance',
        content: {'application/json': {schema: getModelSchemaRef(Firefighters)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Firefighters> {
    return this.firefightersRepository.findById(id);
  }

  @patch('/firefighters/{id}', {
    responses: {
      '204': {
        description: 'Firefighters PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Firefighters, {partial: true}),
        },
      },
    })
    firefighters: Firefighters,
  ): Promise<void> {
    await this.firefightersRepository.updateById(id, firefighters);
  }

  @put('/firefighters/{id}', {
    responses: {
      '204': {
        description: 'Firefighters PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() firefighters: Firefighters,
  ): Promise<void> {
    await this.firefightersRepository.replaceById(id, firefighters);
  }

  @del('/firefighters/{id}', {
    responses: {
      '204': {
        description: 'Firefighters DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.firefightersRepository.deleteById(id);
  }
}
