import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  array: any[] = [1, 2, 3, 4];
  switchValue: boolean = false;

  onSwitchChange(newValue: boolean) {
    if (newValue) {
      console.log("Switch is ingeschakeld");
    } else {
      console.log("Switch is uitgeschakeld");
    }
  }
}

