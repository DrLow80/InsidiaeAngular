import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AutosizeModule } from "ngx-autosize";

@NgModule({
  declarations: [],
  imports: [CommonModule, AutosizeModule],
  exports: [CommonModule, FormsModule, AutosizeModule]
})
export class SharedModule {}
