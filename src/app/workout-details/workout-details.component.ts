import { Component, OnInit } from '@angular/core';

interface Workout {
  userName: string;
  workoutType: string;
  workoutDuration: number;
}

interface UserWorkouts {
  userName: string;
  workoutTypes: string[];
  workoutCount: number;
  totalWorkoutMinutes: number;
}

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrls: ['./workout-details.component.css'],
})
export class WorkoutDetailsComponent implements OnInit {
  workouts: Workout[] = [];
  userWorkouts: UserWorkouts[] = [];
  filteredUserWorkouts: UserWorkouts[] = [];
  page: number = 1;
  pageSize: number = 5;

  ngOnInit() {
    this.loadWorkouts();
  }

  loadWorkouts() {
    this.workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    this.aggregateWorkouts();
  }

  aggregateWorkouts() {
    const userWorkoutMap: { [key: string]: UserWorkouts } = {};

    this.workouts.forEach((workout) => {
      if (!userWorkoutMap[workout.userName]) {
        userWorkoutMap[workout.userName] = {
          userName: workout.userName,
          workoutTypes: [],
          workoutCount: 0,
          totalWorkoutMinutes: 0,
        };
      }
      userWorkoutMap[workout.userName].workoutTypes.push(workout.workoutType);
      userWorkoutMap[workout.userName].workoutCount += 1;
      userWorkoutMap[workout.userName].totalWorkoutMinutes +=
        workout.workoutDuration;
    });

    this.userWorkouts = Object.values(userWorkoutMap);
    this.filteredUserWorkouts = [...this.userWorkouts];
  }

  searchWorkouts(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredUserWorkouts = this.userWorkouts.filter((userWorkout) =>
      userWorkout.userName.toLowerCase().includes(searchTerm)
    );
  }

  filterWorkouts(event: any) {
    const filterTerm = event.target.value;
    if (filterTerm) {
      this.filteredUserWorkouts = this.userWorkouts.filter((userWorkout) =>
        userWorkout.workoutTypes.includes(filterTerm)
      );
    } else {
      this.filteredUserWorkouts = [...this.userWorkouts];
    }
  }
}
