import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { CursosComponent } from './main/cursos/cursos.component';
import { MainComponent } from './main/main.component';
import { FormcursosComponent } from './main/section-cursos/formcursos/formcursos.component';
import { FormComponent } from './form/form.component';
import { PagosComponent } from './main/pagos/pagos.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login/formulario',
    component: FormComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'main',
        component: MainComponent,
      },
      {
        path: 'cursos/:id',
        component: CursosComponent,
      },
      {
        path: 'pagos',
        component: PagosComponent,
      },
      {
        path: 'nuevo',
        component: FormcursosComponent,
      },
      {
        path: 'login',
        redirectTo: '/login',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
