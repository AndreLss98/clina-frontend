import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Period } from 'src/app/shared/models/period.model';
import { Room } from 'src/app/shared/models/room.mode';
import { deepClone } from 'src/app/shared/utils/array.utils';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  public formFilterPeriod: FormGroup = new FormGroup({});
  public scheduleForm: FormGroup = new FormGroup({});
  public periods: Period[] = [];
  public room: Room = {} as Room;
  public selectedDays: any[] = [];
  constructor(
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.formFilterPeriod = this._formBuilder.group({
      start: [],
      end: [],
    });

    this.scheduleForm = this._formBuilder.group({
      period: this.formFilterPeriod,
      periodTypes: [],
    });
  }

  ngOnInit(): void {
    this.periods = this.route.snapshot.data.periods;
    this.room = this.route.snapshot.data.room;
  }

  onPeriodSelectionChange() {
    this.selectedDays.forEach(({ periods }) =>
      periods.forEach((period: Period) => {
        if (
          !this.scheduleForm.get('periodTypes')?.value.includes(period.value)
        ) {
          period.availableSchedules.forEach(
            (time) => (time.isSelected = false)
          );
        }
      })
    );
  }

  onDateRangeChange() {
    const { start, end } = this.formFilterPeriod.value;
    this.selectedDays = [];
    for (
      let curr = new Date(start);
      curr <= end;
      curr.setDate(curr.getDate() + 1)
    )
      this.selectedDays.push({
        date: new Date(curr),
        periods: deepClone(this.periods),
      });
  }

  selectTimeForSchedule(selectedTime: any) {
    selectedTime.isSelected = !selectedTime.isSelected;
  }
}
