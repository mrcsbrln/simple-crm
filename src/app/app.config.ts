import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: "AIzaSyC3Fe_WeoGo4Hfy57ZL2W8wQsPFBLn6V4k",
        authDomain: "simple-crm-84d2c.firebaseapp.com",
        projectId: "simple-crm-84d2c",
        storageBucket: "simple-crm-84d2c.firebasestorage.app",
        messagingSenderId: "118627510214",
        appId: "1:118627510214:web:e019d34a037338df81b4c7"
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
