import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { WorkoutDetailsComponent } from './workout-details/workout-details.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AppComponent, UserInfoComponent, WorkoutDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
