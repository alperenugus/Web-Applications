import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  categorySelected: boolean = false;
  category: string;
  isOptional: boolean = false;
  defects: any;
  isDataAvailable: boolean = false;

  ngOnInit() {}

  optionChanged() {
    this.categorySelected = false;
    this.isOptional = false;
    this.isDataAvailable = false;
  }

  onClickSubmit(searchType) {
    console.log(searchType);
    this.category = searchType.searchType;
    this.categorySelected = true;
    if (this.category === "TESLİM DURUMU") {
      this.isOptional = true;
    } else {
      this.isOptional = false;
    }
  }

  onClickSearch(searchData) {
    if (this.category === "MÜŞTERİ ADI") {
      this.apiService
        .getDefectsByCustomerName(searchData.searchparam)
        .then(result => {
          this.defects = result;
          this.isDataAvailable = true;
          this.categorySelected = false;
        });
    }

    if (this.category === "SERVİS KODU") {
      this.apiService
        .getDefectsByServiceCode(searchData.searchparam)
        .then(result => {
          this.defects = result;
          this.isDataAvailable = true;
          this.categorySelected = false;
        });
    }

    if (this.category === "TESLİM DURUMU") {
      this.apiService
        .getDefectsByStatus(searchData.searchparam)
        .then(result => {
          this.defects = result;
          this.isDataAvailable = true;
          this.categorySelected = false;
        });
    }
  }
}
