import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erro-page',
  standalone: true,
  imports: [],
  templateUrl: './erro-page.component.html',
  styleUrl: './erro-page.component.css'
})
export class ErroPageComponent {

  constructor(private router: Router) {
    setTimeout(() => {
      router.navigate([''])
    }, 5000);
  }

}
