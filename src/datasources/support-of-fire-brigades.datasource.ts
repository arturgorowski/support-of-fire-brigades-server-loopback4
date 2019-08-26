import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './support-of-fire-brigades.datasource.json';

export class SupportOfFireBrigadesDataSource extends juggler.DataSource {
  static dataSourceName = 'supportOfFireBrigades';

  constructor(
    @inject('datasources.config.supportOfFireBrigades', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
