import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-slider',
  templateUrl: './video-slider.component.html',
  styleUrls: ['./video-slider.component.css'],
})
export class VideoSliderComponent implements OnInit {
  isLicked: boolean = false;
  constructor() {}
  like() {
    this.isLicked = !this.isLicked;
  }
  ngOnInit(): void {}
}
