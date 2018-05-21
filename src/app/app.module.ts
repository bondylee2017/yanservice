// import system
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// import component
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { PersonserviceComponent } from './component/personservice/personservice.component';
import { BusinessserviceComponent } from './component/businessservice/businessservice.component';
import { ContactComponent } from './component/contact/contact.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MasterComponent } from './component/master/master.component';
import { Slave1Component } from './component/slave1/slave1.component';
import { Slave2Component } from './component/slave2/slave2.component';
import { CommunicationComponent } from './component/communication/communication.component';

// import services
import { WebrtcService } from './services/webrtc.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'personservice', component: PersonserviceComponent },
  { path: 'businessservice', component: BusinessserviceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'master', component: MasterComponent },
  { path: 'slave1', component: Slave1Component },
  { path: 'slave2', component: Slave2Component }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PersonserviceComponent,
    BusinessserviceComponent,
    ContactComponent,
    NavbarComponent,
    MasterComponent,
    Slave1Component,
    Slave2Component,
    CommunicationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes, { enableTracing: true }) // <-- debugging purposes only
  ],
  providers: [
    WebrtcService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
