import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-footer',
  templateUrl: './video-footer.component.html',
  styleUrls: ['./video-footer.component.css'],
})
export class VideoFooterComponent implements OnInit {
  @Input() username;
  constructor() {}

  ngOnInit(): void {}
}
