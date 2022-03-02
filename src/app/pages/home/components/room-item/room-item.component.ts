import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/shared/models/room.mode';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent implements OnInit {

  @Input()
  public room: Room = {} as Room;

  constructor() { }

  ngOnInit(): void {
    
  }

}
