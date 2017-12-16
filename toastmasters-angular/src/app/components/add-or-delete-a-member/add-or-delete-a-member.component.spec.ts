import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddordeleteComponent } from './add-or-delete-a-member.component';

describe('AddordeleteComponent', () => {
    let component: AddordeleteComponent;
    let fixture: ComponentFixture<AddordeleteComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddordeleteComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddordeleteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});