import { DefaultCrudRepository, juggler, HasOneRepositoryFactory, BelongsToAccessor, repository } from '@loopback/repository';
import { Firefighters, FirefightersRelations, Permissions, FireStations } from '../models';
import { FireStationsRepository } from './fire-stations.repository'
import { PermissionsRepository } from './permissions.repository';
import { SupportOfFireBrigadesDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';

export class FirefightersRepository extends DefaultCrudRepository<
  Firefighters,
  typeof Firefighters.prototype.id,
  FirefightersRelations
  > {

  public permissions: HasOneRepositoryFactory<Permissions, typeof Permissions.prototype.id>;
  public readonly fireStations: BelongsToAccessor<FireStations, typeof FireStations.prototype.id>;

  constructor(
    @inject('datasources.supportOfFireBrigades') dataSource: SupportOfFireBrigadesDataSource,

    @repository.getter('Permissions')
    protected getPermissions: Getter<PermissionsRepository>,

    @repository.getter('FireStationsRepository')
    protected getFireStationsRepository: Getter<FireStationsRepository>,

  ) {
    super(Firefighters, dataSource);

    this.permissions = this.createHasOneRepositoryFactoryFor('permissions', getPermissions);
    this.fireStations = this.createBelongsToAccessorFor('fireStations', getFireStationsRepository);

  }
}
