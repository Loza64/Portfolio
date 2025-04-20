import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { About, Message, Professional, Project, ResponseRest, Technical } from '../ModelsInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getRequest(url: string): Observable<ResponseRest<any>> {
    return this.http.get<ResponseRest<any>>(`http://localhost:3000/${url}`);
  }
  postRequest(url: string, body: any): Observable<ResponseRest<any>> {
    return this.http.post<ResponseRest<any>>(`http://localhost:3000/${url}`, body);
  }

  getProjects(): Observable<ResponseRest<Project[]>> {
    return this.getRequest(`projects/get/all`);
  }

  newMessage(message: Message): Observable<ResponseRest<Message>> {
    return this.postRequest(`messages/new`, message);
  }

  getProfessionalSkills(): Observable<ResponseRest<Professional[]>> {
    return this.getRequest("skills/professional/get");
  }

  getTechnicalSkills(): Observable<ResponseRest<Technical[]>> {
    return this.getRequest("skills/technical/get");
  }

  getAboutInfo(): Observable<ResponseRest<About[]>> {
    return this.getRequest("about/get/list")
  }
}
