import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastr: ToastrService) {}
  showSuccess(msg: string) {
    this.toastr.success(msg);
  }

  showError() {
    this.toastr.error('Oops, something went wrong.', 'Error');
  }
}
