import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.applyThemeColor("black");
  }

  onColorChange(color: string) {
    this.applyThemeColor(color);
  }

  private applyThemeColor(color: string) {
    // Theme the site!
    document.documentElement.style.setProperty("--mainColor", color);
  }
}

/*
  // Yank theme color from localStorage and use it.
  document.documentElement.style.setProperty("--mainColor", localStorage.getItem("userThemeColor"));

  var colorInput = document.querySelector("#choose-theme-color");

  colorInput.addEventListener("change", function() {
  
  // Theme the site!
  document.documentElement.style.setProperty("--mainColor", this.value);
  
  // Save the value for next time page is visited.
  localStorage.setItem("userThemeColor", this.value);


*/
