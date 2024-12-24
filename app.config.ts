import { ApplicationConfig } from '@angular/core';
import {HeaderComponent} from './header/header.component';

export const appConfig: ApplicationConfig = {
  providers: [HeaderComponent],  // Aggiungi il componente Navbar alla configurazione
};
