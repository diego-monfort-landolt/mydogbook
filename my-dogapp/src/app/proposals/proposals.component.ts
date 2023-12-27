import { Component } from '@angular/core';
import { ProfileRowComponent } from '../profile-row/profile-row.component';

@Component({
  selector: 'app-proposals',
  standalone: true,
  imports: [ProfileRowComponent],
  templateUrl: './proposals.component.html',
  styleUrl: './proposals.component.scss'
})
export class ProposalsComponent {

}
