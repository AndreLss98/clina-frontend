import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Period } from '../shared/models/period.model';
import { Room } from '../shared/models/room.mode';

const periods: Period[] = [
  new Period('Manhã', 'MORNING', 5),
  new Period('Tarde', 'AFTERNOON', 13),
  new Period('Noite', 'NIGHT', 21),
];

const rooms: Room[] = [
  {
    id: 1,
    name: 'Nome do consultório - Sala 01',
    city: 'Bela Vista',
    uf: 'SP',
    price: 80,
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      },
    ],
  },
  {
    id: 2,
    name: 'Nome do consultório - Sala 02',
    city: 'Bela Vista',
    uf: 'SP',
    price: 80,
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      },
    ],
  },
  {
    id: 3,
    name: 'Nome do consultório - Sala 03',
    city: 'Bela Vista',
    uf: 'SP',
    price: 80,
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor() {
    this.getAllPeriods();
  }

  getAllPeriods(): Observable<Period[]> {
    return of(periods);
  }

  findAll(filters: any) {
    return of(rooms);
  }

  findById(id: number): Observable<Room> {
    try {
      const room = rooms.find((room) => room.id === id);

      if (room) return of(room);
      throw new ErrorHandler();
    } catch (error) {
      throw error;
    }
  }
}
