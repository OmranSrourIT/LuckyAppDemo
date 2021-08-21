import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './Pages/search-page/search-page.component';
import { ResultPageComponent } from './Pages/result-page/result-page.component';
const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'searchpage', component: SearchPageComponent },
  { path: 'resultpage/:id', component: ResultPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
