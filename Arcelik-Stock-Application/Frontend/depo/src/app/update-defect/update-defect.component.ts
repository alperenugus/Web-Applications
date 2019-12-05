import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-update-defect",
  templateUrl: "./update-defect.component.html",
  styleUrls: ["./update-defect.component.css"]
})
export class UpdateDefectComponent implements OnInit {
  defect: any;
  stocks: any;
  isDataAvailable: boolean = false;
  statusReady: boolean = false;
  statusDelivered: boolean = false;
  isStockWritten = false;
  isStockExist: any;
  today: number = Date.now();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getStock().then(result => {
      this.stocks = result;
      console.log(this.stocks);
    });
  }

  onClickSubmit(data) {
    console.log(data);
    this.apiService
      .getDefectsByCustomernameAndProductcode(data)
      .then(result => {
        if (result != null) {
          this.defect = result;
          this.isDataAvailable = true;
          if (this.defect.stocknum != null && this.defect.stocknum != " ") {
            this.isStockWritten = true;
            console.log(this.isStockWritten);
          }
          console.log(this.defect);
        } else {
          this.isDataAvailable = false;
          alert("Müşteri bilgisi bulunamadı.");
        }
      });
  }

  onStatusUpdate(data) {
    console.log(data.status);
    console.log(this.stocks);
    if (data.status === "HAZIR") {
      this.statusReady = true;
      this.statusDelivered = false;
    } else {
      this.statusReady = false;
      this.statusDelivered = true;
    }
  }

  onChange() {
    this.statusDelivered = false;
    this.statusReady = false;
  }

  onReadyStockUpdate(data) {
    if (!this.isStockWritten) {
      console.log(data.stocknum);

      this.apiService
        .ctrlStock(data.stocknum)
        .then(result => {
          this.isStockExist = result;
          console.log(this.isStockExist);
          if (!this.isStockExist) {
            alert("Hata! Bu stoktan yeterince yok!");
          } else {
            this.defect.status = "HAZIR";
            this.defect.stocknum = data.stocknum;
            this.defect.exitdate = this.today;
            console.log(this.defect.stocknum);
            this.apiService
              .updateDefect(this.defect)
              .then(result => {
                console.log(result);
                this.apiService
                  .decStock(this.defect.stocknum)
                  .then(result => {
                    console.log(result);
                    window.location.reload();
                  })
                  .catch(err => console.log(err));
              })
              .catch(err => console.log(err));
          }
        })
        .catch(err => console.log(err));
    } else {
      this.defect.status = "HAZIR";
      this.defect.exitdate = this.today;
      this.apiService
        .updateDefect(this.defect)
        .then(result => {
          console.log(result);
          window.location.reload();
        })
        .catch(err => console.log(err));
    }
  }

  onDeliveredStockUpdate(data) {
    if (!this.isStockWritten) {
      console.log(data.stocknum);

      this.apiService
        .ctrlStock(data.stocknum)
        .then(result => {
          this.isStockExist = result;
          console.log(this.isStockExist);
          if (!this.isStockExist) {
            alert("Hata! Bu stoktan yeterince yok!");
          } else {
            this.defect.status = "TESLİM EDİLDİ";
            this.defect.stocknum = data.stocknum;
            this.defect.exitdate = this.today;
            console.log(this.defect.stocknum);
            this.apiService
              .updateDefect(this.defect)
              .then(result => {
                console.log(result);
                this.apiService
                  .decStock(this.defect.stocknum)
                  .then(result => {
                    console.log(result);
                    window.location.reload();
                  })
                  .catch(err => console.log(err));
              })
              .catch(err => console.log(err));
          }
        })
        .catch(err => console.log(err));
    } else {
      this.defect.status = "TESLİM EDİLDİ";
      this.defect.exitdate = this.today;
      this.apiService
        .updateDefect(this.defect)
        .then(result => {
          console.log(result);
          window.location.reload();
        })
        .catch(err => console.log(err));
    }
  }
}
