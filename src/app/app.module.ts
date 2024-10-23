import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { InfoSectionComponent } from './layouts/Footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';


import { PageNotFoundModule } from './modules/PageNotFound/page-not-found.module';
import { HomeModule } from './modules/home/home.module';
import { AboutModule } from './modules/about/about.module';
import { ServicesModule } from './modules/services/services.module';
import { ContactModule } from './modules/contact/contact.module';
import { CMSDevelopmentTechnologiesModule } from './modules/technologies/CMSDevelopmentTechnologies/CSMDevelopmentTechnologies.module';
import { BackendDevelopmentTechnologiesModule } from './modules/technologies/backendDevelopmentTechnologies/backendDevelopmentTechnologies.module';
import { CloudDevelopmentTechnologiesModule } from './modules/technologies/cloudDevelopmentTechnologies/cloudDevelopmentTechnologies.module';
import { DatabaseDevelopmentTechnologiesModule } from './modules/technologies/databaseDevelopmentTechnologies/databaseDevelopmentTechnologies.module';
import { DevOpsDevelopmentTechnologiesModule } from './modules/technologies/devOpsDevelopmentTechnologies/devOpsDevelopmentTechnologies.module';
import { FrameworksDevevelopmentTechnologiesModule } from './modules/technologies/frameworksDevevelopmentTechnologies/frameworksDevelopmentTechnologies.module';
import { FrontendDevelopmentTechnologiesModule } from './modules/technologies/frontendDevelopmentTechnologies/frontendDevelopmentTechnologies.module';
import { MobileDevelopmentTechnologiesModule } from './modules/technologies/mobileDevelopmentTechnologies/mobileDevelopmentTechnologies.module';
import { ChatModule } from './modules/Chat/chat.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoSectionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    ReactiveFormsModule,

    PageNotFoundModule,
    HomeModule,
    AboutModule,
    ServicesModule,
    ContactModule,
    FrontendDevelopmentTechnologiesModule,
    BackendDevelopmentTechnologiesModule,
    CloudDevelopmentTechnologiesModule,
    CMSDevelopmentTechnologiesModule,
    DatabaseDevelopmentTechnologiesModule,
    DevOpsDevelopmentTechnologiesModule,
    MobileDevelopmentTechnologiesModule,
    FrameworksDevevelopmentTechnologiesModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
