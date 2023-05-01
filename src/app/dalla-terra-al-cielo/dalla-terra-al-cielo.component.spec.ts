import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DallaTerraAlCieloComponent } from './dalla-terra-al-cielo.component';

describe('DallaTerraAlCieloComponent', () => {
  let component: DallaTerraAlCieloComponent;
  let fixture: ComponentFixture<DallaTerraAlCieloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DallaTerraAlCieloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DallaTerraAlCieloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
