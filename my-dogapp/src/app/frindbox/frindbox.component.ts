import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frindbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frindbox.component.html',
  styleUrl: './frindbox.component.scss'
})
export class FrindboxComponent implements OnInit {
  name = [ 
    'Dario',
    'Franzi',
    'Marlon',
    'Fifi'
  ]

  texts = [
    '3 Jahre',
    '10 Jahre',
    '16 Wochen',
    '5 Jahre' 
  ]

  frindshipImgs = [
    'assets/img/dog/dog6.jpg',
    'assets/img/dog/dog1.jpg',
    'assets/img/dog/dog3.jpg',
    'assets/img/dog/dog2.jpg'
  ]
  constructor() { }

  ngOnInit(): void {
    
  }

}
