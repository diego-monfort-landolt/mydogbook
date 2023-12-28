import { Component, Input, OnInit } from '@angular/core';
import { ProposalsComponent } from '../proposals/proposals.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-row',
  standalone: true,
  imports: [ProposalsComponent, CommonModule],
  templateUrl: './profile-row.component.html',
  styleUrl: './profile-row.component.scss'
})
export class ProfileRowComponent implements OnInit {
  @Input() name: string = 'Fiffi';
  @Input() texts: string = '2 Jahre Alt';
  @Input() frindshipImgs: string = 'assets/img/dog/dog1.jpg';

  constructor() { }

  ngOnInit(): void {

  }
}
