import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  emailHref: string;

  constructor() {
    this.emailHref = 'spedroparoquia@gmail.com';
  }
}
