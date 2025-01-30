import { ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserDetailComponent } from './user-detail.component';
import { User } from 'src/app/model/user/user';

describe('UserDetailComponent', () => {
  let route: ActivatedRoute;
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailComponent],
      imports: [
        RouterModule.forRoot([]),
        HttpClientTestingModule,
      ]
    })
      .compileComponents();

    route = TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});