import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { ExercieComponent } from './exercie/exercie.component';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'exercice', component: ExercieComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
