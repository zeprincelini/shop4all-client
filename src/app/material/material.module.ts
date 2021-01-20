import { NgModule } from '@angular/core';
import {MatButtonModule, 
        MatButtonToggleModule, 
        MatIconModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatInputModule,
        MatFormFieldModule,
        MatGridListModule,
        MatTabsModule,
        MatCardModule,
        MatMenuModule,
        MatDialogModule,
        MatToolbarModule,
        MatSelectModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatInputModule,
  MatFormFieldModule,
  MatGridListModule,
  MatTabsModule,
  MatCardModule,
  MatDividerModule,
  MatMenuModule,
  MatDialogModule,
  MatSelectModule,
  MatRadioModule,
  MatSnackBarModule
];

@NgModule({
  imports: [
    material
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }
