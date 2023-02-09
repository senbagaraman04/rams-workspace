import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplesharedlibraryComponent } from './samplesharedlibrary.component';

describe('SamplesharedlibraryComponent', () => {
  let component: SamplesharedlibraryComponent;
  let fixture: ComponentFixture<SamplesharedlibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplesharedlibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplesharedlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
