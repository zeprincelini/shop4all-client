import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from "@angular/core";

@Directive({
  selector: "[appFileupload]",
})
export class FileuploadDirective {
  @Output() onFileDrop = new EventEmitter<any>();
  @HostBinding("style.border") bd = "2px dashed #808080";
  @HostBinding("style.background-image") bg =
    "url('../../assets/vector/upload-gray.png')";

  @HostListener("dragover", ["$event"]) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.bd = "2px groove #3F51B5";
    this.bg = "url('/assets/vector/upload-pur.png')";
  }

  @HostListener("dragleave", ["$event"]) onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.bd = "2px dashed #808080";
    this.bg = "url('/assets/vector/upload-gray.png')";
  }

  @HostListener("drop", ["$event"]) onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.bd = "2px groove #3F51B5";
    this.bg = "url('/assets/vector/upload-pur.png')";
    let files = evt.dataTransfer.files;
    // console.log(files)
    this.onFileDrop.emit(files);
  }

  @HostListener("click", ["$event"]) onClick(evt) {}

  constructor() {}
}
