import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appFileupload]'
})
export class FileuploadDirective {
  @Output() onFileDrop = new EventEmitter<any>();
  @HostBinding ('style.border') bd = '2px dotted blue';
  @HostBinding ('style.opacity') op = 1;

  @HostListener ('dragover', ['$event']) onDragOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.bd = '2px groove blue';
    this.op = 0.8;
  }

  @HostListener ('dragleave', ['$event']) onDragLeave(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.bd = '2px dotted blue';
    this.op = 1;
  }

  @HostListener ('drop', ['$event']) onDrop(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.bd = '3px groove blue';
    this.op = 1;
    let files = evt.dataTransfer.files;
    console.log(files)
    if(files > 0) {
      this.onFileDrop.emit(files);
    } 
  }

  @HostListener ('click', ['$event']) onClick(evt){
    
  }

  constructor() { }

}
