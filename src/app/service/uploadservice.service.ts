import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UploadserviceService {

  constructor(private http: HttpClient) {}

  uploadFile(file: File) {
    const url = 'http://localhost:5000/compress';
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(url, formData);
  }
}