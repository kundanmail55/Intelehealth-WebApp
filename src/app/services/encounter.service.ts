import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncounterService {

  constructor(private http: HttpClient) { }

  recentVitals(id): Observable<any> {
    const url = 'http://demo.intelehealth.io/openmrs/ws/rest/v1/encounter?patient=' + id;
    return this.http.get(url);
  }

  vitals(uuid): Observable<any> {
    const url = 'http://demo.intelehealth.io/openmrs/ws/rest/v1/encounter/' + uuid;
    return this.http.get(url);
  }

  adultInitial(uuid): Observable<any> {
  let url =  'http://demo.intelehealth.io/openmrs/ws/rest/v1/encounter';
        url += '?patient=' + uuid;
        url += '&encounterType=' + '8d5b27bc-c2cc-11de-8d13-0010c6dffd0f';
        return this.http.get(url);
  }

  visitNote(uuid): Observable<any> {
    let url =  'http://demo.intelehealth.io/openmrs/ws/rest/v1/encounter';
          url += '?patient=' + uuid;
          url += '&encounterType=' + 'd7151f82-c1f3-4152-a605-2f9ea7414a79';
          return this.http.get(url);
    }

  session(): Observable<any> {
    const url = 'http://demo.intelehealth.io/openmrs/ws/rest/v1/session';
    return this.http.get(url);
  }

  provider(userId): Observable<any> {
    const url = 'http://demo.intelehealth.io/openmrs/ws/rest/v1/provider?user=' + userId;
    return this.http.get(url);
  }

  postEncounter(json): Observable<any> {
    const url = 'http://demo.intelehealth.io/openmrs/ws/rest/v1/encounter';
    return this.http.post(url, json);
  }
}