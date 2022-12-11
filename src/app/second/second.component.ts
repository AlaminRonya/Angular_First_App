import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  color = new FormControl('')
}
