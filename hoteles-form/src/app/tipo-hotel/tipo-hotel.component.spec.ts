import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoHotelComponent } from './tipo-hotel.component';

describe('TipoHotelComponent', () => {
  let component: TipoHotelComponent;
  let fixture: ComponentFixture<TipoHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoHotelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
