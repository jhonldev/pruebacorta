import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './_pages/member-list/member-list.component';
import { AgregarComponent } from './_components/agregar/agregar.component';
import { EditarComponent } from './_components/editar/editar.component';

const routes: Routes = [
  {
    path: 'members',
    component: MemberListComponent,
  },
  {
    path: 'agregar',
    component: AgregarComponent,
  },
  {
    path: 'editar',
    component: EditarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
