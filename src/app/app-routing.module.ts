import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { AnimalComponent } from './pages/animal/animal.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'animal', component: AnimalComponent},
  { path: 'formulario', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
