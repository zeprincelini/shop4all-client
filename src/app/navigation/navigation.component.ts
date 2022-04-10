import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SignInComponent } from "../modules/authentication/pages/sign-in/sign-in.component";
import { SignUpComponent } from "../modules/authentication/pages/sign-up/sign-up.component";
import { BreakpointObserver } from "@angular/cdk/layout";
import { Router } from "@angular/router";
import { SearchService } from "../shared/service/search-service/search.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent implements OnInit {
  open: boolean = true;
  isMobile: boolean = false;
  constructor(
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.breakpointObserver.observe(["(max-width: 768px)"]).subscribe((res) => {
      this.isMobile = res.matches;
    });
  }

  openSignUp() {
    this.dialog.open(SignUpComponent, {
      width: this.isMobile ? "100%" : "400px",
      maxWidth: "90vw",
    });
  }

  openSignIn() {
    this.dialog.open(SignInComponent, {
      width: this.isMobile ? "100%" : "400px",
      maxWidth: "90vw",
    });
  }

  search() {
    this.router.navigate(["/search"]);
  }

  handleChange(e: any) {
    this.searchService.sendData(e.target.value);
  }

  toggle() {
    this.open = !this.open;
  }
}
