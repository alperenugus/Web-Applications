import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-add-defect",
  templateUrl: "./add-defect.component.html",
  styleUrls: ["./add-defect.component.css"]
})
export class AddDefectComponent implements OnInit {
  today: number = Date.now();

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  onClickSubmit(data) {
    console.log(data);
    data.entrydate = this.today;
    data.status = "BEKLİYOR";
    this.apiService.addDefect(data).then(result => {
      console.log(result);
    });
  }
}
