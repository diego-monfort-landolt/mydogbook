import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrindboxComponent } from './frindbox.component';

describe('FrindboxComponent', () => {
  let component: FrindboxComponent;
  let fixture: ComponentFixture<FrindboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrindboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrindboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
