import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  host: string = "http://localhost:8080/";
  addComponentURL: string = this.host + "add-component";
  addStockURL: string = this.host + "add-stock";
  addDefectURL: string = this.host + "add-defect";
  ctrlStockURL: string = this.host + "ctrl-stock/";
  decStockURL: string = this.host + "dec-stock/";
  getDefectsURL: string = this.host + "get-defects";
  getCustomerByNameURL = this.host + "get-defects-by-customer-name/";
  getDefectsByServiceCodeURL = this.host + "get-defects-by-service-code/";
  getDefectsByStatusURL = this.host + "get-defects-by-status/";
  getStockURL: string = this.host + "get-stock";
  getDefectsByCustomernameAndProductcodeURL: string =
    this.host + "get-defects-by-customername-and-productcode/";
  updateDefectURL: string = this.host + "update-defect";

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "http://localhost:4200", // -->Add this line
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  };

  public addComponent(component) {
    console.log("service.createComponent() worked!");
    //console.log("Component: " + component.name);
    component = JSON.stringify(component);
    return this.httpClient
      .post(this.addComponentURL, component, this.httpOptions)
      .toPromise()
      .then(result => {
        console.log(result);
        alert("Başarılı!");
      })
      .catch(err => {
        console.log(err);
        alert("Hata!");
      });
  }

  public addStock(stock) {
    console.log("service.addStock() worked!");
    stock = JSON.stringify(stock);
    return this.httpClient
      .post(this.addStockURL, stock, this.httpOptions)
      .toPromise()
      .then(result => {
        console.log(result);
        alert("Başarılı!");
      })
      .catch(err => {
        console.log(err);
        alert("Hata!");
      });
  }

  public addDefect(defect) {
    console.log("service.addDefect() worked!");
    defect = JSON.stringify(defect);
    return this.httpClient
      .post(this.addDefectURL, defect, this.httpOptions)
      .toPromise()
      .then(result => {
        console.log(result);
        alert("Başarılı!");
      })
      .catch(err => {
        console.log(err);
        alert("Hata!");
      });
  }

  public ctrlStock(stocknum) {
    console.log("service.ctrlStock() worked!");
    return this.httpClient
      .get(this.ctrlStockURL + stocknum, this.httpOptions)
      .toPromise()
      .then()
      .catch(err => console.log(err));
  }

  public decStock(stocknum) {
    return this.httpClient
      .get(this.decStockURL + stocknum, this.httpOptions)
      .toPromise()
      .then()
      .catch(err => console.log(err));
  }

  public getDefects() {
    return this.httpClient
      .get(this.getDefectsURL, this.httpOptions)
      .toPromise()
      .then()
      .catch(err => console.log(err));
  }

  public getStock() {
    return this.httpClient
      .get(this.getStockURL, this.httpOptions)
      .toPromise()
      .then()
      .catch(err => console.log(err));
  }

  public getDefectsByCustomerName(customername) {
    return this.httpClient
      .get(this.getCustomerByNameURL + customername, this.httpOptions)
      .toPromise()
      .then()
      .catch(err => console.log(err));
  }

  public getDefectsByServiceCode(servicecode) {
    return this.httpClient
      .get(this.getDefectsByServiceCodeURL + servicecode, this.httpOptions)
      .toPromise()
      .then()
      .catch(err => console.log(err));
  }

  public getDefectsByStatus(status) {
    return this.httpClient
      .get(this.getDefectsByStatusURL + status, this.httpOptions)
      .toPromise()
      .then()
      .catch(err => console.log(err));
  }

  public getDefectsByCustomernameAndProductcode(data) {
    return this.httpClient
      .get(
        this.getDefectsByCustomernameAndProductcodeURL +
          data.customername +
          "/" +
          data.productcode,
        this.httpOptions
      )
      .toPromise()
      .then()
      .catch(err => console.log(err));
  }

  public updateDefect(data) {
    return this.httpClient
      .post(this.updateDefectURL, data, this.httpOptions)
      .toPromise()
      .then(result => {
        console.log(result);
        alert("Başarılı!");
      })
      .catch(err => {
        console.log(err);
        alert("Hata!");
      });
  }
}
