import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MinuAlgusKomponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about-us', component: AboutPageComponent },
];


@NgModule({
  declarations: [
    MinuAlgusKomponent,
    HomePageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    // selle alumise koodi saan siit: https://angular.io/guide/router-tutorial-toh
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [],
  bootstrap: [MinuAlgusKomponent]
})
export class AppModule { }
