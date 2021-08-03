import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MonaComponent } from './components/mona/mona.component';
import { LastDinnerComponent } from './components/last-dinner/last-dinner.component';

@NgModule({
  declarations: [AppComponent, MonaComponent, LastDinnerComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
