import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { ToastmastersService } from './services/toastmasters.service';
import { HomeComponent } from './components/home/home.component';
import { UpdateMemberInfoComponent } from './components/update-member-info/update-member-info.component';
import { UpdateAvailabilityComponent } from './components/update-availability/update-availability.component';
import { UpdateDutyDesiresComponent } from './components/update-duty-desires/update-duty-desires.component';
import { UpdateAgendaComponent } from './components/update-agenda/update-agenda.component';
import { SelectAgendaComponent } from './components/select-agenda/select-agenda.component';
import { UpdateMembersComponent } from './components/update-members/update-members.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    UpdateMemberInfoComponent,
    UpdateAvailabilityComponent,
    UpdateDutyDesiresComponent,
      UpdateAgendaComponent,
      SelectAgendaComponent,
    UpdateMembersComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ToastmastersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
