import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeriodResolver } from '../home/resolver/period.resolver';
import { FindRoomByIdResolver } from './resolver/find-room-by-id.resolver';
import { ScheduleComponent } from './schedule.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
    resolve: {
      periods: PeriodResolver,
      room: FindRoomByIdResolver
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleRoutingModule {}
