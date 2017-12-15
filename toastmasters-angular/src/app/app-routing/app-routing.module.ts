import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from '../components/test/test.component';
import { HomeComponent } from '../components/home/home.component';
import { UpdateMemberInfoComponent } from '../components/update-member-info/update-member-info.component';
import { AboutComponent } from '../components/about/about.component';

import { UpdateAvailabilityComponent } from '../components/update-availability/update-availability.component';
import { UpdateDutyDesiresComponent } from '../components/update-duty-desires/update-duty-desires.component';
import { UpdateAgendaComponent } from '../components/update-agenda/update-agenda.component';
import { SelectAgendaComponent } from '../components/select-agenda/select-agenda.component';
import { UpdateMembersComponent } from '../components/update-members/update-members.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'update-record',
        component: UpdateMemberInfoComponent
    },
    {
        path: 'about-us',
        component: AboutComponent
    },
    {
        path: 'update-duty-desires',
        component: UpdateDutyDesiresComponent
    },
    {
        path: 'update-availability',
        component: UpdateAvailabilityComponent
    },
    {
        path: 'modify-agenda',
        component: UpdateAgendaComponent
    },
    
    {
        path: 'select-agenda',
        component: SelectAgendaComponent
    },
    
    {
        path: 'maintain-members',
        component: UpdateMembersComponent
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {}
