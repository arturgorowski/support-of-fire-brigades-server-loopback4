import { DefaultCrudRepository, juggler, HasManyRepositoryFactory, BelongsToAccessor, repository } from '@loopback/repository';
import { FireTruckEquipmentRepository } from './fire-truck-equipment.repository';
import { FireStationsRepository } from './fire-stations.repository';
import { FireTrucks, FireTrucksRelations, FireTruckEquipment, FireStations } from '../models';
import { SupportOfFireBrigadesDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';

export class FireTrucksRepository extends DefaultCrudRepository<
  FireTrucks,
  typeof FireTrucks.prototype.id,
  FireTrucksRelations
  > {

  // public fireTruckEquipments: HasManyRepositoryFactory<FireTruckEquipment, typeof FireTruckEquipment.prototype.id>;
  //public readonly fireStations: BelongsToAccessor<FireStations, typeof FireStations.prototype.id>;

  constructor(
    @inject('datasources.supportOfFireBrigades') dataSource: SupportOfFireBrigadesDataSource,

    // @repository.getter('FireTruckEquipmentRepository')
    // protected getFireTruckEquipments: Getter<FireTruckEquipmentRepository>,

    // @repository.getter('FireStationsRepository')
    // protected getFireStationsRepository: Getter<FireStationsRepository>,

  ) {
    super(FireTrucks, dataSource);
    //this.fireTruckEquipments = this._createHasManyRepositoryFactoryFor('fireTruckEquipments', getFireTruckEquipments);
    //this.fireStations = this._createBelongsToAccessorFor('fireStations', getFireStationsRepository);
  }
}
