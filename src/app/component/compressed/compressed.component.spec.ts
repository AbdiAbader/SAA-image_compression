import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompressedComponent } from './compressed.component';

describe('CompressedComponent', () => {
  let component: CompressedComponent;
  let fixture: ComponentFixture<CompressedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompressedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompressedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
