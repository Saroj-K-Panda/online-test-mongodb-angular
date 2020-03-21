import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TSOTWeb';
  constructor(private router: Router) { 
    //console.log('this.router.url: ', this.router.url)
  }
}
