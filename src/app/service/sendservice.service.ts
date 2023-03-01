import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SendserviceService {

  constructor(private http: HttpClient) { }
  sendMessage(message: string) {
    const url = 'http://localhost:5000/send-message';
    return this.http.post(url, { message });
  }
}
