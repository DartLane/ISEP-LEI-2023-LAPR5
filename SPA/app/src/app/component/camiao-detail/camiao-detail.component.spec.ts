import { ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CamiaoService } from 'src/app/service/camiao.service';

import { CamiaoDetailComponent } from './camiao-detail.component';

describe('CamiaoDetailComponent', () => {
  let component: CamiaoDetailComponent;
  let fixture: ComponentFixture<CamiaoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamiaoDetailComponent ],
      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
      providers: [CamiaoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamiaoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
