import { Component } from "@angular/core";
const ROW_HEIGHT: { [id: number]: number } = { 1: 400, 3: 350, 4: 335 };

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent {
  cols = 3;
  category = "casual";
  rowHeight = ROW_HEIGHT[this.cols];
  changeColumns(column: number) {
    this.cols = column;
    this.rowHeight = ROW_HEIGHT[this.cols];
  }
  changeCategory(category: string) {
    this.category = category;
  }
}
