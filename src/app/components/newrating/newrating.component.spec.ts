import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewratingComponent } from './newrating.component';

describe('NewratingComponent', () => {
  let component: NewratingComponent;
  let fixture: ComponentFixture<NewratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewratingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
