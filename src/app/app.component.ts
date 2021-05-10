import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  constructor(private router:Router) {
  }
onActivate(event) {

         if(this.router.url == '/'){

 this.router.navigate(['/home']);

}
    
}

}

