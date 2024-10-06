import { Component } from '@angular/core';
import { HighlightDirective } from '../../highlight.directive';
import { RotateDirective } from '../../rotate.directive';
import { EllipsisDirective } from '../../ellipsis.directive';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HighlightDirective,RotateDirective,EllipsisDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
