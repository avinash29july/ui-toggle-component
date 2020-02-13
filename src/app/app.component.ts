import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  boxes = [];
  ngOnInit() {
    this.boxes = [1, 2, 3, 4];
  }
  toggleDiv(index) {
    if (this.boxes.length === 0) {
      this.boxes = [1, 2, 3, 4];
    } else {
      this.boxes.splice(index, 1);
      this.boxes = [...this.boxes];
    }
  }
}
