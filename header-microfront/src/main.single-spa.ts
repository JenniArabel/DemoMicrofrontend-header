import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { singleSpaAngular } from 'single-spa-angular';
import { NgZone } from '@angular/core';
import { HeaderComponent } from './app/header/header/header.component';



const lifecycles = singleSpaAngular({
  bootstrapFunction: () => bootstrapApplication(HeaderComponent), //Componente a importar
  template: '<app-header></app-header>', //selector de cada componente
  NgZone: NgZone,
});


export const { bootstrap, mount, unmount } = lifecycles;
