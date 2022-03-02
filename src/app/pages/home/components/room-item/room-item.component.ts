import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/shared/models/room.mode';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent implements OnInit {

  @Input()
  public room: Room = {} as Room;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  schedule() {
    this.router.navigateByUrl(`/schedule/${this.room.id}`);
  }

}
