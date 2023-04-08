import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-bmipage',
  templateUrl: './bmipage.component.html',
  styleUrls: ['./bmipage.component.css'],
})
export class BMIPageComponent {
  weight = 55;
  height = 1.65;
  constructor(private decimalPipe: DecimalPipe) {}

  getBMI() {
    return this.weight / (this.height * this.height);
  }

  BMIResult() {
    if (this.getBMI() >= 25) {
      return 'You are in unhealthy weight! Eat less, move more';
    } else if (this.getBMI() < 18.5) {
      return 'You are too skinny. Eat more!';
    } else {
      return 'You are in healthy weight!';
    }
  }
}
