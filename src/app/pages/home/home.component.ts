import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Period, RoomsService } from 'src/app/services/rooms.service';
import { Room } from 'src/app/shared/models/room.mode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private readonly _unsubscribe$ = new Subject<void>();

  public filtersForm: FormGroup = new FormGroup({});
  public formFilterPeriod: FormGroup = new FormGroup({});

  public periods: Period[] = [];
  public rooms: Room[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private readonly _roomService: RoomsService,
    private route: ActivatedRoute
  ) {
    this.formFilterPeriod = _formBuilder.group({
      start: [],
      end: [],
    });
    this.filtersForm = _formBuilder.group({
      period: this.formFilterPeriod,
      periodTypes: []
    });
  }

  ngOnInit(): void {
    this.periods = this.route.snapshot.data.periods;

    this.filtersForm.valueChanges.pipe(
      takeUntil(this._unsubscribe$),
      switchMap(values => {
        return this._roomService.findAll(values);
      })
    ).subscribe(res => {
      this.rooms = res;
    });

    this.formFilterPeriod.patchValue({
      start: new Date(),
      end: new Date(),
    })
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

}
