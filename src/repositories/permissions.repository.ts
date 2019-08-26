import { DefaultCrudRepository, BelongsToAccessor, repository } from '@loopback/repository';
import { Permissions, PermissionsRelations, Firefighters } from '../models';
import { SupportOfFireBrigadesDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { FirefightersRepository } from './firefighters.repository';

export class PermissionsRepository extends DefaultCrudRepository<
  Permissions,
  typeof Permissions.prototype.id,
  PermissionsRelations
  > {

  public firefighters: BelongsToAccessor<Firefighters, typeof Firefighters.prototype.id>;

  constructor(
    @inject('datasources.supportOfFireBrigades') dataSource: SupportOfFireBrigadesDataSource,

    @repository.getter('FirefightersRepository')
    protected getFirefightersRepository: Getter<FirefightersRepository>

  ) {
    super(Permissions, dataSource);
    this.firefighters = this.createBelongsToAccessorFor('firefighters', getFirefightersRepository);
  }
}
