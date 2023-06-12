import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html",

  styles: [],
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnCountChange = new EventEmitter<number>();
  sort: string = "desc";
  itemsCount: number = 12;
  constructor() {}
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  onSortChange(type: string) {
    this.sort = type;
  }
  onItemsChange(items: number) {
    this.itemsCount = items;
  }
  onColumnChange(number: number) {
    this.columnCountChange.emit(number);
  }
}
