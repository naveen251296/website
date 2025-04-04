import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // standalone:false,
   imports: [CommonModule, RouterOutlet,]
})
export class AppComponent implements OnInit {
  title = 'FirstAngular';
  name :any = "something siva" ;
  Result :any="";
  pageNumber :Number = 1;
 ngOnInit(): void {

 }

 backspace()
 {
  this.Result = this.Result.slice(0,-1);
 }
 CallButtonAction(number:any)
 {
    this.Result=this.Result+''+number;
 }
 GetFinalResult()
 {
   this.Result = new Function(`return ${this.Result}`)()
 }
 Clearresult()
 {
  this.Result = "";
 }
}
