import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    MatButtonModule,
    RouterLinkActive,
  ],
  templateUrl: './navbar.html'
})
export class Navbar {

  protected readonly isLogged = signal<boolean>(false);


}
