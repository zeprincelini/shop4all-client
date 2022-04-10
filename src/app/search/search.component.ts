import { AfterViewInit, Component, OnInit } from "@angular/core";
import { HttpRequestService } from "../shared/service/product-service/http-request.service";
import { SearchService } from "../shared/service/search-service/search.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit, AfterViewInit {
  loading: boolean = false;
  products = [];
  filteredData: any;
  constructor(
    private httpRequest: HttpRequestService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    // this.getSearch();
  }

  ngAfterViewInit(): void {
    this.getSearch();
  }

  getProducts() {
    this.loading = true;
    this.httpRequest.getProducts().subscribe(
      (res: any) => {
        this.loading = false;
        this.products = res;
      },
      (err) => {
        this.loading = false;
      }
    );
  }

  getSearch() {
    this.searchService.message$.subscribe((res) => {
      this.filteredData = this.products.filter((data) => {
        return data.title.toLowerCase().includes(res.toLowerCase());
      });
    });
  }
}
