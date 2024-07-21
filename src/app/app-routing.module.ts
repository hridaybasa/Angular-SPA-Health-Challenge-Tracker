import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { WorkoutDetailsComponent } from './workout-details/workout-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'user-info', pathMatch: 'full' },
  { path: 'user-info', component: UserInfoComponent },
  { path: 'workout-details', component: WorkoutDetailsComponent },
  { path: '**', component: UserInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
