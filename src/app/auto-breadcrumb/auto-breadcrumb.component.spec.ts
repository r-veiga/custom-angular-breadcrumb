import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoBreadcrumbComponent } from './auto-breadcrumb.component';

describe('AutoBreadcrumbComponent', () => {
  let component: AutoBreadcrumbComponent;
  let fixture: ComponentFixture<AutoBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
