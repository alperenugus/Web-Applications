import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DefectRegisterComponent } from "./defect-register/defect-register.component";
import { RouterModule, Routes, Router } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AddDefectComponent } from "./add-defect/add-defect.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AddStockComponent } from "./add-stock/add-stock.component";
import { SearchComponent } from "./search/search.component";
import { UpdateDefectComponent } from "./update-defect/update-defect.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "defect-register", component: DefectRegisterComponent },
  { path: "add-defect", component: AddDefectComponent },
  { path: "add-stock", component: AddStockComponent },
  { path: "search", component: SearchComponent },
  { path: "update-defect", component: UpdateDefectComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DefectRegisterComponent,
    HomeComponent,
    AddDefectComponent,
    AddStockComponent,
    SearchComponent,
    UpdateDefectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
