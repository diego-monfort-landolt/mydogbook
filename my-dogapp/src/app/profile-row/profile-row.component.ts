import { Component, Input, OnInit } from '@angular/core';
import { ProposalsComponent } from '../proposals/proposals.component';
import { CommonModule } from '@angular/common';
import { FrindService } from '../frind.service';

@Component({
  selector: 'app-profile-row',
  standalone: true,
  imports: [ProposalsComponent, CommonModule],
  templateUrl: './profile-row.component.html',
  styleUrl: './profile-row.component.scss'
})
export class ProfileRowComponent implements OnInit {
[x: string]: any;
  @Input() name: string = 'Fiffi';
  @Input() texts: string = '2 Jahre Alt';
  @Input() frindshipImgs: string = 'assets/img/dog/dog1.jpg';

  constructor(public fs: FrindService) { }

  ngOnInit(): void {

  }
}
