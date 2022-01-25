import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  date = new Date();
  dateStringControl = new FormControl('mm/yyyy');
  
  dateObjectControl = new FormControl(new Date ());
}
