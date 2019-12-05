import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-add-stock",
  templateUrl: "./add-stock.component.html",
  styleUrls: ["./add-stock.component.css"]
})
export class AddStockComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  stocks: any;
  isDataAvailable: boolean = false;

  ngOnInit() {
    this.apiService.getStock().then(result => {
      console.log(result);
      this.stocks = result;
      this.isDataAvailable = true;
    });
  }

  onClickSubmit(data) {
    //CONTROL IF THE ADDED STOCK IS AN EXISTING ONE

    this.apiService.addStock(data).then(result => {
      console.log(result);
      window.location.reload();
    });
  }
}
