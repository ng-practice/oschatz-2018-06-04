import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBoxComponent } from './title-box.component';

import { By } from '@angular/platform-browser';

describe('TitleBoxComponent', () => {
  let component: TitleBoxComponent;
  let fixture: ComponentFixture<TitleBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('When a a title is passed', () => {
    it('UNIT should update the title', () => {
      const expected = 'OZ rulez!';
      component.title = expected;

      expect(component.title).toBe(expected);
    });

    it('INTEGRATION/SHALLOW should render the title to the browser', () => {
      const expected = 'OZ rulez!';
      component.title = expected;

      fixture.detectChanges();

      const heading = fixture.debugElement.query(By.css('h1.container'));
      const headingValue = (heading.nativeElement as HTMLHeadingElement).innerHTML;

      console.log(heading.nativeElement);

      expect(headingValue).toBe(expected);
    });
  });
});
