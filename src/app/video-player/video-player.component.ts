import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
})
export class VideoPlayerComponent implements OnInit {
  isPlaying: boolean;
  @Input() videoUrl: string;
  @Input() videoId: any;
  @Input() username: any;
  constructor() {
    this.isPlaying = false;
  }
  ngOnInit(): void {
    console.log(this.videoUrl);
    console.log(this.videoId);
    console.log(this.username);
  }

  onVideoClick(e) {
    console.log(e.target);
    if (e.target) {
      if (this.isPlaying) {
        e.target.pause();
        this.isPlaying = false;
      } else {
        e.target.play();
        this.isPlaying = true;
      }
    } else {
      if (this.isPlaying) {
        e.pause();
        this.isPlaying = false;
      } else {
        e.play();
        this.isPlaying = true;
      }
    }
    console.log(this.isPlaying);
  }
}
