import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './modules/PageNotFound/PageNotFound.component';

// Importing modules for each feature
import { AboutModule } from './modules/about/about.module';  // Assuming you have an AboutModule
import { ServicesModule } from './modules/services/services.module'; // Assuming you have a ServicesModule
import { ContactModule } from './modules/contact/contact.module'; // Assuming you have a ContactModule
import { ChatModule } from './modules/Chat/chat.module'; // Assuming you have a ChatModule



const routes: Routes = [
  { path: '', component: HomeComponent },         // Home route
  { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) },   
  { path: 'service', loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule) }, 
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) }, 
  { path: 'chatBot', loadChildren: () => import('./modules/Chat/chat.module').then(m => m.ChatModule) }, 
  { path: 'frontend-development', loadChildren: () => import('./modules/technologies/frontendDevelopmentTechnologies/frontendDevelopmentTechnologies.module').then(m => m.FrontendDevelopmentTechnologiesModule) },
  { path: 'backend-development', loadChildren: () => import('./modules/technologies/backendDevelopmentTechnologies/backendDevelopmentTechnologies.module').then(m => m.BackendDevelopmentTechnologiesModule) },
  { path: 'mobile-development', loadChildren: () => import('./modules/technologies/mobileDevelopmentTechnologies/mobileDevelopmentTechnologies.module').then(m => m.MobileDevelopmentTechnologiesModule) },
  { path: 'database-development', loadChildren: () => import('./modules/technologies/databaseDevelopmentTechnologies/databaseDevelopmentTechnologies.module').then(m => m.DatabaseDevelopmentTechnologiesModule) },
  { path: 'frameworks-development', loadChildren: () => import('./modules/technologies/frameworksDevevelopmentTechnologies/frameworksDevelopmentTechnologies.module').then(m => m.FrameworksDevevelopmentTechnologiesModule) },
  { path: 'cloud-development', loadChildren: () => import('./modules/technologies/cloudDevelopmentTechnologies/cloudDevelopmentTechnologies.module').then(m => m.CloudDevelopmentTechnologiesModule) },
  { path: 'devops-development', loadChildren: () => import('./modules/technologies/devOpsDevelopmentTechnologies/devOpsDevelopmentTechnologies.module').then(m => m.DevOpsDevelopmentTechnologiesModule) },
  { path: 'cms-development', loadChildren: () => import('./modules/technologies/CMSDevelopmentTechnologies/CSMDevelopmentTechnologies.module').then(m => m.CMSDevelopmentTechnologiesModule) },
  { path: '**', component:PageNotFoundComponent } 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
