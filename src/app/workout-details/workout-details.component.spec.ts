import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { WorkoutDetailsComponent } from './workout-details.component';

describe('WorkoutDetailsComponent', () => {
  let component: WorkoutDetailsComponent;
  let fixture: ComponentFixture<WorkoutDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkoutDetailsComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load and aggregate workouts on init', () => {
    const mockWorkouts = [
      { userName: 'User1', workoutType: 'running', workoutDuration: 30 },
      { userName: 'User1', workoutType: 'cycling', workoutDuration: 60 },
      { userName: 'User2', workoutType: 'swimming', workoutDuration: 45 },
    ];
    localStorage.setItem('workouts', JSON.stringify(mockWorkouts));

    component.ngOnInit();

    expect(component.workouts.length).toBe(3);
    expect(component.userWorkouts.length).toBe(2);
    expect(component.userWorkouts[0].totalWorkoutMinutes).toBe(90);
    expect(component.userWorkouts[1].totalWorkoutMinutes).toBe(45);
  });

  it('should filter workouts by user name', () => {
    component.userWorkouts = [
      {
        userName: 'User1',
        workoutTypes: ['running'],
        workoutCount: 1,
        totalWorkoutMinutes: 30,
      },
      {
        userName: 'User2',
        workoutTypes: ['cycling'],
        workoutCount: 1,
        totalWorkoutMinutes: 60,
      },
    ];
    const event = { target: { value: 'User1' } };

    component.searchWorkouts(event);

    expect(component.filteredUserWorkouts.length).toBe(1);
    expect(component.filteredUserWorkouts[0].userName).toBe('User1');
  });

  it('should filter workouts by workout type', () => {
    component.userWorkouts = [
      {
        userName: 'User1',
        workoutTypes: ['running'],
        workoutCount: 1,
        totalWorkoutMinutes: 30,
      },
      {
        userName: 'User2',
        workoutTypes: ['cycling'],
        workoutCount: 1,
        totalWorkoutMinutes: 60,
      },
    ];
    const event = { target: { value: 'running' } };

    component.filterWorkouts(event);

    expect(component.filteredUserWorkouts.length).toBe(1);
    expect(component.filteredUserWorkouts[0].workoutTypes).toContain('running');
  });
});
