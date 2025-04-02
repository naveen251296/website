import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  // standalone:false,
  imports:[RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router){}

  PageChange(PageName:any)
  {
    this.router.navigate(["/"+PageName])
  }
}
