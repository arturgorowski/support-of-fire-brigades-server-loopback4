import { DefaultCrudRepository, BelongsToAccessor, repository } from '@loopback/repository';
import { FireTruckEquipment, FireTruckEquipmentRelations, FireTrucks } from '../models';
import { SupportOfFireBrigadesDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { FireTrucksRepository } from './fire-trucks.repository';

export class FireTruckEquipmentRepository extends DefaultCrudRepository<
  FireTruckEquipment,
  typeof FireTruckEquipment.prototype.id,
  FireTruckEquipmentRelations
  > {

  // public fireTrucks: BelongsToAccessor<FireTrucks, typeof FireTrucks.prototype.id>;

  constructor(
    @inject('datasources.supportOfFireBrigades') dataSource: SupportOfFireBrigadesDataSource,

    // @repository.getter('FireTrucksRepository')
    // protected getFireTruckRepository: Getter<FireTrucksRepository>

  ) {
    super(FireTruckEquipment, dataSource);
    // this.fireTrucks = this.createBelongsToAccessorFor('fireTrucks', getFireTruckRepository);
  }
}
