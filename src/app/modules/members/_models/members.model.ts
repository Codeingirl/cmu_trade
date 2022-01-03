import { BaseModel } from '../../../_metronic/shared/crud-table';

export interface Members extends BaseModel {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  bankcode: string;
  bankaccount: string;
  amount: number
  status: number; // Active = 1 | Suspended = 2 | Pending = 3
  dateOfBbirth: string;
  dob: Date;
  ipAddress: string;
  type: number; // 1 = Business | 2 = Individual
}
