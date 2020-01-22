import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatCardModule, MatDividerModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatDividerModule

  ]
})
export class MaterialImportModule { }
