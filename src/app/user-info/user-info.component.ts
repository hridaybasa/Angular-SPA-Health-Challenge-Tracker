import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
  userName: string = '';
  workoutType: string = '';
  workoutDuration: number | null = null;

  constructor(private router: Router) {}

  addWorkout() {
    if (this.userName && this.workoutType && this.workoutDuration) {
      const workout = {
        userName: this.userName,
        workoutType: this.workoutType,
        workoutDuration: this.workoutDuration,
      };

      let workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
      workouts.push(workout);
      localStorage.setItem('workouts', JSON.stringify(workouts));

      this.userName = '';
      this.workoutType = '';
      this.workoutDuration = null;
    } else {
      alert('Please fill out all fields');
    }
  }

  goToWorkoutDetails() {
    this.router.navigate(['/workout-details']);
  }

  resetLocalStorage() {
    localStorage.clear();
    alert('Local storage has been reset.');
  }
}
