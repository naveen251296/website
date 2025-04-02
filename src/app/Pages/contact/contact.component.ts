import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-contact',
  imports: [FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
UserName :string ='Naveenkumar k';
email : string = 'ex@mail.com';
progressValue : any = [80.5,10.2,33.5,42.8,23.4,12.7,26];
}
