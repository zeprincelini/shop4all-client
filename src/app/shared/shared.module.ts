import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FileuploadDirective } from "./fileupload.directive";

@NgModule({
  declarations: [FileuploadDirective],
  exports: [CommonModule, FileuploadDirective],
})
export class SharedModule {}
