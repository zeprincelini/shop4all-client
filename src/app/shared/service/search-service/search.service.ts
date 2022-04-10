import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  private data = new BehaviorSubject("");
  message$: Observable<any> = this.data.asObservable();

  constructor() {}

  sendData(msg: any) {
    this.data.next(msg);
  }
}
