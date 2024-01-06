import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DogCardComponent } from './dog-card/dog-card.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { ProfileRowComponent } from './profile-row/profile-row.component';
import { FrindboxComponent } from "./frindbox/frindbox.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HeaderComponent, DogCardComponent, ProposalsComponent, ProfileRowComponent, FrindboxComponent]
})
export class AppComponent {

   postTitle =[
    'Marley',
    'Vasco',
    'Cookie',
    'Jack & Amy',
    'Harry',
    'Leonardo'
  ];

  postText = [
    'Ich habe ein neues zuhause gefunden, dank dieser Website, danke!',
    'Ich wurde vermittelt und bin in einem neuen Rudel',
    'Ich wurde von meiner Mama leider verlassen, gibst du mir ein zuhause? Ich bin mittlerweile 15 Wochen alt.',
    'Wir kommen im doppelpacket, ich und mein Sohn möchten zusamen bleiben. Tägliches laufen ist ein muss mit uns',
    'Ich bin ein verspielter Welpe und mag es mit einem Ball zu spielen. Spielen wir gemeinsam?',
    'Wir wurden vergeben, das Foto ist in meinem neuen Zuhause, Danke!',

  ];

  postImages = [
    'assets/img/dog/dog1.jpg',
    'assets/img/dog/dog2.jpg',
    'assets/img/dog/dog3.jpg',
    'assets/img/dog/dog4.jpg',
    'assets/img/dog/dog5.jpg',
    'assets/img/dog/dog6.jpg'
    
  ]
  
}
