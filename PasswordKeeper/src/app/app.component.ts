import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signedIn: boolean;

  signOut() {
    console.log('sign out');
    this.signedIn = false;
  }

}
