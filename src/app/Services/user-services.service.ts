import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ConfigKey } from '../../Config';
@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http: HttpClient) { }

  GetDestinationService(value?:any)
  {
    return this.http.get(ConfigKey + 'destinations?search_type=city_or_country&search_value='+value);
  }


  GetDestinationDetailsService(id:any)
  {
    return this.http.get(ConfigKey +'destination?id='+id);
  }
}
