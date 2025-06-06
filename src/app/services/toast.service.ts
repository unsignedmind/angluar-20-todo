import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  id: number;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private counter = 0;
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  toasts$ = this.toastsSubject.asObservable();

  show(message: string, duration = 3000) {
    const toast: Toast = { id: ++this.counter, message };
    const toasts = [...this.toastsSubject.value, toast];
    this.toastsSubject.next(toasts);
    setTimeout(() => {
      this.toastsSubject.next(this.toastsSubject.value.filter(t => t.id !== toast.id));
    }, duration);
  }
}
