import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from '../components/test/test.component';
import { HomeComponent } from '../components/home/home.component';


const routes: Routes = [
    {
        path: 'test',
        component: TestComponent,
    },
    {
        path: '',
        component: HomeComponent
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
