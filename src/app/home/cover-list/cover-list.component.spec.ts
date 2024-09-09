import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverListComponent } from './cover-list.component';

describe('CoverListComponent', () => {
  let component: CoverListComponent;
  let fixture: ComponentFixture<CoverListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
