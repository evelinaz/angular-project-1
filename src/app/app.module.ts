import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

import { MinuAlgusKomponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HeaderComponent } from './components/header/header.component';
import { BMIPageComponent } from './bmipage/bmipage.component';
import { CounterPageComponent } from './counter-page/counter-page.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about-us', component: AboutPageComponent },
  { path: 'bmi-page', component: BMIPageComponent },
  { path: 'counter-page', component: CounterPageComponent },
];

@NgModule({
  declarations: [
    MinuAlgusKomponent,
    HomePageComponent,
    AboutPageComponent,
    HeaderComponent,
    BMIPageComponent,
    CounterPageComponent,
  ],
  imports: [
    BrowserModule,
    // selle alumise koodi saan siit: https://angular.io/guide/router-tutorial-toh
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
  ],
  providers: [DecimalPipe],
  bootstrap: [MinuAlgusKomponent],
})
export class AppModule {}
