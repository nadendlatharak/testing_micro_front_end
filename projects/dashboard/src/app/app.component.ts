import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';

  constructor(private route: Router) {}

  // openRemoteApp(){
  //   // this.route.navigate(['remote-application'])
  // }
}
