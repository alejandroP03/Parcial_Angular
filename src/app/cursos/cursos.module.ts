import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardCursosComponent } from './card-cursos/card-cursos.component';
import { CursosListComponent } from './cursos-list/cursos-list.component';



@NgModule({
  declarations: [
    CursosListComponent,
    CardCursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosListComponent,
    CardCursosComponent
  ]
})
export class CursosModule { }
