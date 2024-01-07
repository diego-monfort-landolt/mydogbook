import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FrindService } from '../frind.service';

@Component({
  selector: 'app-frindbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frindbox.component.html',
  styleUrl: './frindbox.component.scss'
})
export class FrindboxComponent implements OnInit {
  
  constructor(public fs: FrindService) { }
  ngOnInit(): void {
    
  }

}
