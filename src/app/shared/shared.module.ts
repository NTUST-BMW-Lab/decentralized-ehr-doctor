import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {PatientCardComponent} from './components/patient-card/patient-card.component';
import {RecordSearchComponent} from './components/record-search/record-search.component';
import {DiseasesTableComponent} from './components/diseases-table/diseases-table.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {RouterModule} from "@angular/router";
import { UnlockDiseasesTableComponent } from './components/unlock-diseases-table/unlock-diseases-table.component';
import { PopUpScanQrComponent } from './components/pop-up-scan-qr/pop-up-scan-qr.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PatientCardComponent,
    RecordSearchComponent,
    DiseasesTableComponent,
    UnlockDiseasesTableComponent,
    PopUpScanQrComponent
  ], imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    RouterModule,

  ], exports: [
    CommonModule,
    HeaderComponent,
    PatientCardComponent,
    RecordSearchComponent,
    DiseasesTableComponent,
    UnlockDiseasesTableComponent,
    PopUpScanQrComponent
  ]
})
export class SharedModule {
}