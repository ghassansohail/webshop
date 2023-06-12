import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styles: [],
})
export class FiltersComponent {
  @Output() categoryChange = new EventEmitter<string>();
  categories: string[] = ["sports", "casual", "formal"];

  changeCategory(category: string) {
    this.categoryChange.emit(category);
  }
}
