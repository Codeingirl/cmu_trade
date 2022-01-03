import { Injectable, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableService } from '../../../_metronic/shared/crud-table';
import { TopUp } from '../_models/topup.model';
import { environment } from '../../../../environments/environment';
import { Customer } from '../_models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class TopUpsService extends TableService<TopUp> implements OnDestroy {
  API_URL = `${environment.apiUrl}/topups`;
  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
