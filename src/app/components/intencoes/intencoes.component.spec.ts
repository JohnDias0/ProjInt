import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntencoesComponent } from './intencoes.component';

describe('IntencoesComponent', () => {
  let component: IntencoesComponent;
  let fixture: ComponentFixture<IntencoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntencoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntencoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
