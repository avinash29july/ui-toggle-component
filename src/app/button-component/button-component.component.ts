import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.scss']
})
export class ButtonComponentComponent implements OnInit {

  constructor() { }
  squares = [];

  ngOnInit() {
    this.squares = [1, 2, 3, 4];
  }
  toggleSquare(index) {
    this.squares.splice(index, 1);
    this.squares = [...this.squares];
  }
  initializeSquare() {
    this.squares = [1, 2, 3, 4];
  }
}
