import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoComponent } from './user-info.component';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInfoComponent],
      imports: [FormsModule],
      providers: [
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to workout-details', () => {
    component.goToWorkoutDetails();
    expect(router.navigate).toHaveBeenCalledWith(['/workout-details']);
  });

  it('should reset local storage', () => {
    spyOn(window, 'alert');
    localStorage.setItem('workouts', JSON.stringify([{ userName: 'Test' }]));

    component.resetLocalStorage();

    expect(localStorage.getItem('workouts')).toBeNull();
    expect(window.alert).toHaveBeenCalledWith('Local storage has been reset.');
  });
});
