import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VideoDataService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get('https://app.doorsmash.in/tiktok/tiktok.php');
  }
}
