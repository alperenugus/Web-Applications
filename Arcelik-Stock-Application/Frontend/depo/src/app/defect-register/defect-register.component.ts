import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-defect-register",
  templateUrl: "./defect-register.component.html",
  styleUrls: ["./defect-register.component.css"]
})
export class DefectRegisterComponent implements OnInit {
  defects: any;
  isDataAvailable: boolean = false;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getDefects().then(result => {
      this.defects = result;
      this.isDataAvailable = true;
    });
  }
}
