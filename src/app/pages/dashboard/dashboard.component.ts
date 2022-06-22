import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../shared/services/api/api.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  scannerOn = false;

  constructor(
    private router: Router,
    private api: ApiService
  ) {
  }

  async ngOnInit(): Promise<void> {
  }

  getPatientAddress(scanResult: string) {
    this.toggleQrScanner()

    this.get_patient(JSON.parse(<string>scanResult).bc)
  }

  toggleQrScanner() {
    this.scannerOn = !this.scannerOn;
  }

  get_patient(address: String): void {
    this.api.get('patients/' + address).subscribe(
      async patient => {
        sessionStorage.setItem('patient', JSON.stringify(patient))

        await this.router.navigate(['diseases'])
      }
    )
  }
}
