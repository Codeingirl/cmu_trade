import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { catchError, delay, finalize, first, tap } from 'rxjs/operators';
import { Members } from '../../_models/members.model';
import { MembersService } from '../../_services';

@Component({
  selector: 'app-update-members-status-modal',
  templateUrl: './update-members-status-modal.component.html',
  styleUrls: ['./update-members-status-modal.component.scss']
})
export class UpdateMembersStatusModalComponent implements OnInit, OnDestroy {
  @Input() ids: number[];
  status = 2;
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

  updateCustomersStatus() {
    this.isLoading = true;
    const sb = this.membersService.updateStatusForItems(this.ids, +this.status).pipe(
      delay(1000), // Remove it from your code (just for showing loading)
      tap(() => this.modal.close()),
      catchError((errorMessage) => {
        this.modal.dismiss(errorMessage);
        return of(undefined);
      }),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe();
    this.subscriptions.push(sb);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
