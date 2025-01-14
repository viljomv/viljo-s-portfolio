import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfolioContainerComponent } from './porfolio-container.component';

describe('PorfolioContainerComponent', () => {
  let component: PorfolioContainerComponent;
  let fixture: ComponentFixture<PorfolioContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorfolioContainerComponent]
    });
    fixture = TestBed.createComponent(PorfolioContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
