import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from '../util/request-util';
import { SERVER_API_URL } from '../util/common-util';
import { ICustomer, NewCustomer } from '../model/customer.model';


export type PartialUpdateCustomer2 = Partial<ICustomer> & Pick<ICustomer, 'id'>;

export type EntityResponseType = HttpResponse<ICustomer>;
export type EntityArrayResponseType = HttpResponse<ICustomer[]>;

@Injectable({ providedIn: 'root' })
export class Customer2Service {
  protected resourceUrl = SERVER_API_URL +'/api/customers';
  protected resourceUrl2 = SERVER_API_URL +'/api/customer-2-s';
  constructor(protected http: HttpClient) {}

  create(customer2: NewCustomer): Observable<EntityResponseType> {
    let auth_token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY5Mjg3NTg1MywiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNjkyNzg5NDUzfQ.FinC9Aa73FN9nyv6KXy94bDiBM2hUe8EgeHcXHsOHBwallZCD5JhyLG6sb2VCAoFV6QtP_PvdTsQGZLPRmVGgg'
    const headers:any = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.post<ICustomer>(this.resourceUrl, customer2, {  headers: headers,observe: 'response' });
  }
  create1(customer2: NewCustomer): Observable<EntityResponseType> {
    let auth_token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY5Mjg3NTg1MywiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNjkyNzg5NDUzfQ.FinC9Aa73FN9nyv6KXy94bDiBM2hUe8EgeHcXHsOHBwallZCD5JhyLG6sb2VCAoFV6QtP_PvdTsQGZLPRmVGgg'
    const headers:any = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.post<ICustomer>(this.resourceUrl2, customer2, {  headers: headers,observe: 'response' });
  }

  update(customer2: any): Observable<EntityResponseType> {
    let auth_token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY5Mjg3NTg1MywiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNjkyNzg5NDUzfQ.FinC9Aa73FN9nyv6KXy94bDiBM2hUe8EgeHcXHsOHBwallZCD5JhyLG6sb2VCAoFV6QtP_PvdTsQGZLPRmVGgg'
    const headers:any = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.put<ICustomer>(`${this.resourceUrl}/${this.getCustomer2Identifier(customer2)}`, customer2, {  headers: headers,observe: 'response' });
  }
  update1(customer2: any): Observable<EntityResponseType> {
    let auth_token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY5Mjg3NTg1MywiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNjkyNzg5NDUzfQ.FinC9Aa73FN9nyv6KXy94bDiBM2hUe8EgeHcXHsOHBwallZCD5JhyLG6sb2VCAoFV6QtP_PvdTsQGZLPRmVGgg'
    const headers:any = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.put<ICustomer>(`${this.resourceUrl2}/${this.getCustomer2Identifier(customer2)}`, customer2, {  headers: headers,observe: 'response' });
  }
  partialUpdate(customer2: PartialUpdateCustomer2): Observable<EntityResponseType> {
    return this.http.patch<ICustomer>(`${this.resourceUrl}/${this.getCustomer2Identifier(customer2)}`, customer2, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICustomer>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<any> {
    let auth_token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY5Mjg3NTg1MywiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNjkyNzg5NDUzfQ.FinC9Aa73FN9nyv6KXy94bDiBM2hUe8EgeHcXHsOHBwallZCD5JhyLG6sb2VCAoFV6QtP_PvdTsQGZLPRmVGgg'
    const headers:any = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    const options = createRequestOption(req);
    return this.http.get<ICustomer[]>(this.resourceUrl, { headers: headers, params: options, observe: 'response' });
  }
  query1(req?: any): Observable<any> {
    let auth_token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY5Mjg3NTg1MywiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNjkyNzg5NDUzfQ.FinC9Aa73FN9nyv6KXy94bDiBM2hUe8EgeHcXHsOHBwallZCD5JhyLG6sb2VCAoFV6QtP_PvdTsQGZLPRmVGgg'
    const headers:any = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    const options = createRequestOption(req);
    return this.http.get<ICustomer[]>(this.resourceUrl2, { headers: headers, params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    let auth_token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY5Mjg3NTg1MywiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNjkyNzg5NDUzfQ.FinC9Aa73FN9nyv6KXy94bDiBM2hUe8EgeHcXHsOHBwallZCD5JhyLG6sb2VCAoFV6QtP_PvdTsQGZLPRmVGgg'
    const headers:any = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.delete(`${this.resourceUrl}/${id}`, {  headers: headers,observe: 'response' });
  }
  delete1(id: number): Observable<HttpResponse<{}>> {
    let auth_token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY5Mjg3NTg1MywiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNjkyNzg5NDUzfQ.FinC9Aa73FN9nyv6KXy94bDiBM2hUe8EgeHcXHsOHBwallZCD5JhyLG6sb2VCAoFV6QtP_PvdTsQGZLPRmVGgg'
    const headers:any = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.delete(`${this.resourceUrl2}/${id}`, {  headers: headers,observe: 'response' });
  }

  getCustomer2Identifier(customer2: Pick<ICustomer, 'id'>): number {
    return customer2.id;
  }

  compareCustomer2(o1: Pick<ICustomer, 'id'> | null, o2: Pick<ICustomer, 'id'> | null): boolean {
    return o1 && o2 ? this.getCustomer2Identifier(o1) === this.getCustomer2Identifier(o2) : o1 === o2;
  }

}
