import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { UsersTable } from './fake-db/users.table';
import { CarsTable } from './fake-db/cars.table';
import { TopUpsTable } from './fake-db/topups.table';

// ECommerce
import { ECommerceDataContext } from '../modules/e-commerce/_fake/fake-server/_e-commerce.data-context';
import { MembersTable } from './fake-db/member.table';

@Injectable({
  providedIn: 'root',
})
export class FakeAPIService implements InMemoryDbService {
  constructor() { }

  /**
   * Create Fake DB and API
   */
  createDb(): {} | Observable<{}> {
    // tslint:disable-next-line:class-name
    const db = {
      // auth module
      users: UsersTable.users,
      members: MembersTable.members,
      // data-table
      cars: CarsTable.cars,

      customers: ECommerceDataContext.customers,
      topups: TopUpsTable.topups,
      // products
      products: ECommerceDataContext.cars,
      productRemarks: ECommerceDataContext.remarks,
      productSpecs: ECommerceDataContext.carSpecs,

    };
    return db;
  }
}
