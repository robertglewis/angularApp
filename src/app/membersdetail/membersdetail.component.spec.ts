import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersdetailComponent } from './membersdetail.component';

describe('MembersdetailComponent', () => {
  let component: MembersdetailComponent;
  let fixture: ComponentFixture<MembersdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
