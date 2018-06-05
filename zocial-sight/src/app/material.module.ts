import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule,MatDatepickerModule,MatNativeDateModule,MatToolbarModule,MatInputModule,MatSelectModule} from '@angular/material';
@NgModule({
  imports: [
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,

  ],
  exports: [
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    
  ],
  providers: [
    MatDatepickerModule
  ],
})
export class MaterialModule { }
