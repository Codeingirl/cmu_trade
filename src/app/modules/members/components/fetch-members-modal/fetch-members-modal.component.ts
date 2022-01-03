import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Members } from '../../_models/members.model';
import { MembersService } from '../../_services';

@Component({
  selector: 'app-fetch-members-modal',
  templateUrl: './fetch-members-modal.component.html',
  styleUrls: ['./fetch-members-modal.component.scss']
})
export class FetchMembersModalComponent implements OnInit, OnDestroy {
  @Input() ids: number[];
  customers: Members[] = [];
  isLoading = false;
  subscriptions: Subscription[] = [];

  constructor(private membersService: MembersService, public modal: NgbActiveModal) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    const sb = this.membersService.items$.pipe(
      first()
    ).subscribe((res: Members[]) => {
      this.customers = res.filter(c => this.ids.indexOf(c.id) > -1);
    });
    this.subscriptions.push(sb);
  }

  fetchSelected() {
    this.isLoading = true;
    // just imitation, call server for fetching data
    setTimeout(() => {
      this.isLoading = false;
      this.modal.close();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
