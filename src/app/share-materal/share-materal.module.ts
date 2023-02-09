import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule}  from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';








const MateralModule = [
MatToolbarModule,
MatFormFieldModule,
MatInputModule,
MatButtonModule,
MatBadgeModule,
MatCardModule,





];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MateralModule
  ],
  exports:[MateralModule]
})
export class ShareMateralModule { }
