import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // html tagi nimi nagu div. mujal html failides saan kasutada <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class MinuAlgusKomponent {
  title = 'angular-project-1';

  koikKassid = [
		{ nimi: 'Kit', hind: 5, värv: 'must', pildiURL: '/mustkass.webp' },
		{ nimi: 'Boots', hind: 10, värv: 'valge', pildiURL: '/valgekass.webp' },
		{ nimi: 'Funny', hind: 20, värv: 'must', pildiURL: '/mustkass.webp' },
		{ nimi: 'Bunny', hind: 25, värv: 'valge', pildiURL: '/valgekass.webp' },
		{ nimi: 'Foxy', hind: 35, värv: 'orans', pildiURL: '/fox.jpeg' }
	];
}
