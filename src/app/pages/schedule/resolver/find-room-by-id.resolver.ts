import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { RoomsService } from 'src/app/services/rooms.service';
import { Room } from 'src/app/shared/models/room.mode';

@Injectable({
  providedIn: 'root'
})
export class FindRoomByIdResolver implements Resolve<Room> {
  constructor(private _roomService: RoomsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Room> {
    const id = Number(route.paramMap.get('roomId'));
    return this._roomService.findById(id);
  }
}
