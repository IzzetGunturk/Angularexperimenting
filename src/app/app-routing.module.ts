import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importeer de componenten die overeenkomen met de routes
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home pagina route
  { path: 'about', component: AboutComponent }, // About pagina route 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
