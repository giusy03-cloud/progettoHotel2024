// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa i tuoi componenti
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { LoginComponent } from './login/login.component';

// Definisci le rotte
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Rotta di default
  { path: 'home', component: HomeComponent },
  { path: 'chi-siamo', component: ChiSiamoComponent },
  { path: 'login', component: LoginComponent },
  // Aggiungi altre rotte se necessario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Inizializza il routing con forRoot
  exports: [RouterModule], // Esporta RouterModule per essere utilizzato in altri moduli/componenti
})
export class AppRoutingModule {}
