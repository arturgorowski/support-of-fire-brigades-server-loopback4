import { FireStations, FireStationsRelations, FireTrucks, FireStationEquipments, Firefighters } from '../models';
import { FireTrucksRepository } from './fire-trucks.repository';
import { FireStationEquipmentsRepository, } from './fire-station-equipments.repository';
import { FirefightersRepository } from './firefighters.repository';
import { DefaultCrudRepository, juggler, HasManyRepositoryFactory, repository, embedsMany } from '@loopback/repository';
import { SupportOfFireBrigadesDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';

export class FireStationsRepository extends DefaultCrudRepository<
  FireStations,
  typeof FireStations.prototype.id,
  FireStationsRelations
  > {

  //public fireTrucks: HasManyRepositoryFactory<FireTrucks, typeof FireStations.prototype.id>;
  // public fireStationEquipments: HasManyRepositoryFactory<FireStationEquipments, typeof FireStations.prototype.id>;
  // public firefighters: HasManyRepositoryFactory<Firefighters, typeof FireStations.prototype.id>;

  constructor(
    @inject('datasources.supportOfFireBrigades') dataSource: SupportOfFireBrigadesDataSource,
    // @repository.getter('FireTrucksRepository')
    // protected getFireTrucksRepository: Getter<FireTrucksRepository>,

    // @repository.getter('FireStationEquipmentsRepository')
    // protected getFireStationEquipmentsRepository: Getter<FireStationEquipmentsRepository>,

    // @repository.getter('FirefightersRepository')
    // protected getFirefightersRepository: Getter<FirefightersRepository>,
  ) {
    super(FireStations, dataSource);

    // this.fireTrucks = this._createHasManyRepositoryFactoryFor('fireTrucks', getFireTrucksRepository);
    // this.fireStationEquipments = this._createHasManyRepositoryFactoryFor('fireStationEquipments', getFireStationEquipmentsRepository);
    // this.firefighters = this._createHasManyRepositoryFactoryFor('firefighters', getFirefightersRepository);

  }

  // async findTodos(id: string): Promise<Todo[]> {
  //   return await this.todoRepo.find().then(todos => {
  //     return todos.filter(todo => {
  //       return todo.todoListId === id;
  //     });
  //   });
  // }
}
