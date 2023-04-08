import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // HTMLi tagi nimi nagu div. mujal html failides saan kasutada selle nimega: <app-root></app-root>
  templateUrl: './app.component.html', // HTMLi faili asukoht
  styleUrls: ['./app.component.css'], // CSSi faili asukoht
})

// Siia panen JS loogikad, sh state info, funktsioonid, millega saan nt muuta andmeid
export class MinuAlgusKomponent {
  title: string = 'Angular Project';

  //see on state

  koikKassid = [
    { nimi: 'Kit', hind: 5, värv: 'must', pildiURL: '/mustkass.webp' },
    { nimi: 'Boots', hind: 10, värv: 'valge', pildiURL: '/valgekass.webp' },
    { nimi: 'Funny', hind: 20, värv: 'must', pildiURL: '/mustkass.webp' },
    { nimi: 'Bunny', hind: 25, värv: 'valge', pildiURL: '/valgekass.webp' },
    { nimi: 'Foxy', hind: 35, värv: 'orans', pildiURL: '/fox.jpeg' },
  ];

  // Do something when the button is clicked

  onClick() {
    if (this.title === 'Calculate your BMI') {
      // === kui tahan võrrelda väärtust millegagi
      this.title = 'Angular Project'; // 1 võrdusmärk, kui tahan muuta muutujat/väärtust
    } else {
      this.title = 'Calculate your BMI';
    }

    // TERNARY OPERATOR

    // this.title =
    //   this.title === 'Calculate your BMI'
    //     ? 'Angular Project'
    //     : 'Calculate your BMI';
  }
}
