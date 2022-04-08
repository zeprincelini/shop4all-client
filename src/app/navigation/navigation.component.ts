import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SignInComponent } from "../modules/authentication/pages/sign-in/sign-in.component";
import { SignUpComponent } from "../modules/authentication/pages/sign-up/sign-up.component";
import { BreakpointObserver } from "@angular/cdk/layout";

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
    private breakpointObserver: BreakpointObserver
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
    console.log("val");
  }

  handleChange(e) {
    console.log(e.target.value);
  }

  toggle() {
    this.open = !this.open;
  }
}
