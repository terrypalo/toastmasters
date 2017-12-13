import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from '../components/test/test.component';
import { HomeComponent } from '../components/home/home.component';
import { UpdateMemberInfoComponent } from '../components/update-member-info/update-member-info.component';
import { AboutComponent } from '../components/about/about.component';

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
