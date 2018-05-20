import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule,MatNativeDateModule,MatToolbarModule,MatInputModule,MatSelectModule} from '@angular/material';
@NgModule({
  imports: [
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [
    MatDatepickerModule
  ],
})
export class MaterialModule { }
