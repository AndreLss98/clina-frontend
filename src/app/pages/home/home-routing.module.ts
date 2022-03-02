import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PeriodResolver } from './resolver/period.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      periods: PeriodResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
