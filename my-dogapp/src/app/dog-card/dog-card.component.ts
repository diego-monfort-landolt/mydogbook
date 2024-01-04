
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-card',
  standalone: true,
  imports: [],
  templateUrl: './dog-card.component.html',
  styleUrl: './dog-card.component.scss'
})
export class DogCardComponent implements OnInit {
 @Input() cardTitle: string = '';
 @Input() cardDescription: string = '';
 @Input() cardFoto: string = '';

  ngOnInit() {
  }
  liked = false;

  toggleLike() {
    this.liked = !this.liked;
  }

}
