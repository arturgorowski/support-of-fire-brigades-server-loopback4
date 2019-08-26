import { DefaultCrudRepository, juggler, BelongsToAccessor, repository } from '@loopback/repository';
import { FireStationEquipments, FireStationEquipmentsRelations, FireStations } from '../models';
import { FireStationsRepository } from './fire-stations.repository';
import { SupportOfFireBrigadesDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';

export class FireStationEquipmentsRepository extends DefaultCrudRepository<
  FireStationEquipments,
  typeof FireStationEquipments.prototype.id,
  FireStationEquipmentsRelations
  > {

  public readonly fireStations: BelongsToAccessor<FireStations, typeof FireStations.prototype.id>;

  constructor(
    @inject('datasources.supportOfFireBrigades') dataSource: SupportOfFireBrigadesDataSource,

    @repository.getter('FireStationsRepository')
    protected getFireStationsRepository: Getter<FireStationsRepository>,

  ) {
    super(FireStationEquipments, dataSource);
    this.fireStations = this.createBelongsToAccessorFor('fireStations', getFireStationsRepository);
  }
}
