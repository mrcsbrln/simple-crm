import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'simple-crm';
  showFiller = false;
  firestore: Firestore = inject(Firestore);
}
