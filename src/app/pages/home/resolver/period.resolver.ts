import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Period, RoomsService } from 'src/app/services/rooms.service';

@Injectable({
  providedIn: 'root'
})
export class PeriodResolver implements Resolve<Period[]> {
  constructor(private readonly _roomService: RoomsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Period[]> {
    return this._roomService.getAllPeriods();
  }
}
