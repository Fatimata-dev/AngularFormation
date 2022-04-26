import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ExercieComponent } from './exercie/exercie.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FilterComponent } from './filter/filter.component';
import { DirectiveComponent } from './directive/directive.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    ExercieComponent,
    HomeComponent,
    NotfoundComponent,
    FilterComponent,
    DirectiveComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
