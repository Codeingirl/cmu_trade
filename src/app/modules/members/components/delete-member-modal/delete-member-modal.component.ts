import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { catchError, delay, finalize, tap } from 'rxjs/operators';
import { MembersService } from '../../_services';

@Component({
  selector: 'app-delete-member-modal',
  templateUrl: './delete-member-modal.component.html',
  styleUrls: ['./delete-member-modal.component.scss']
})
export class DeleteMemberModalComponent implements OnInit, OnDestroy {
  @Input() ids: number[];
  isLoading = false;
  subscriptions: Subscription[] = [];

  constructor(private membersService: MembersService, public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  deleteCustomers() {
    this.isLoading = true;
    const sb = this.membersService.deleteItems(this.ids).pipe(
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
