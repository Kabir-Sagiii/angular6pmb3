import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let htmlRef:DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    htmlRef = fixture.debugElement
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('Testing title Property in ts file',()=>{
       expect(component.title).toBe("Welcome to Testing")
   })

    it('check add functionality',()=>{
      expect(component.add(10,20)).toBe(30)
    })
      it("Check content in h3",()=>{
         expect(htmlRef.nativeElement.querySelector('#h3Ref').textContent).toBe('Welcome to Testing')
      })

});
