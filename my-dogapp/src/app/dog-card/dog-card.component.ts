
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dog-card',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './dog-card.component.html',
  styleUrl: './dog-card.component.scss'
})
export class DogCardComponent implements OnInit {
 @Input() cardTitle: string = '';
 @Input() cardDescription: string = '';
 @Input() cardFoto: string = '';

  ngOnInit() {
  }

  // button like
  liked = false;

  toggleLike() {
    this.liked = !this.liked;
  }

  // button nachricht
  showPopup() {
    window.alert('Nicht im Betrieb');
  }

  

}
