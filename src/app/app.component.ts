import { Component } from '@angular/core';
import { VideoDataService } from './video-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-tik-tok';
  VideosData: object;
  constructor(private Data: VideoDataService) {
    this.Data.getData().subscribe((data) => {
      console.log(data);
      this.VideosData = data;
    });
  }

  ngOnInit(): void {}
}
