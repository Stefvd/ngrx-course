import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getConsultants() {
    return this.httpClient.get('http://localhost:4000/consultants');
  }
}
