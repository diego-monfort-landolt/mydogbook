import { Component, OnInit } from '@angular/core';
import { ProfileRowComponent } from '../profile-row/profile-row.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-proposals',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProfileRowComponent],
  templateUrl: './proposals.component.html',
  styleUrl: './proposals.component.scss'
})

export class ProposalsComponent implements OnInit  {
  
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
