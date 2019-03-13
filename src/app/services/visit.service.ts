import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  constructor(private http: HttpClient) { }

getVisits(): Observable<any> {
    const base_url = window.location.origin;
    // tslint:disable-next-line:max-line-length
    const url = `http://demo.intelehealth.io/openmrs/ws/rest/v1/visit?includeInactive=false&v=custom:(uuid,patient:(uuid,identifiers:(identifier),person:(display,gender,age)),location:(display),encounters:(display,encounterDatetime))`;
    return this.http.get(url);
}

recentVisits(id): Observable<any> {
    const url = 'http://demo.intelehealth.io/openmrs/ws/rest/v1/visit?patient=' + id + '&v=custom:(uuid,display,patient:(uuid))';
    return this.http.get(url);
}

fetchVisitDetails(uuid): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const url = 'http://demo.intelehealth.io/openmrs/ws/rest/v1/visit/' + uuid + '?v=custom:(uuid,display,startDatetime,stopDatetime,encounters:(display,uuid,obs:(display,uuid,value)),patient:(uuid))';
    return this.http.get(url);
}
}