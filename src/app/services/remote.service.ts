import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { NetState, PwdChangeStatusModel, Card, CardBalance } from '../models/defineClass';



@Injectable()
export class RemoteService {

  public site:string;

  constructor(private http: Http) { 

    this.site = "https://pacific-plains-55185.herokuapp.com/";

  }

  getNetState(): Promise<NetState | any> {
    
    //let url  = this.site + 'api/students';

    let url =  'http://testnet.nebulas.io/v1/user/nebstate';
    //let url =  'http://localhost:8685/v1/user/nebstate';

    console.log(url);

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});   // For mean

    let options = new RequestOptions({ headers: headers });      

    return this.http.get(url, options)
             .toPromise()
             .then(response => response.json() as NetState)
             .catch(this.handleError);
  }


  getAccountState(address: string): Promise<CardBalance | any> {
    
    //let url  = this.site + 'api/students';
    //let url = 'http://localhost:8685/v1/user/accountstate';
    let url = 'https://testnet.nebulas.io/v1/user/accountstate';

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});   // For mean

    let options = new RequestOptions({ headers: headers });      

    //return this.http.post(url, {"address":"n1MjR3J28LPYGSVNGYC8DWsM7VJaAqqPnWH"}, options)  // local address
    return this.http.post(url, {"address": address }, options)    // Test net address
             .toPromise()
             //.then(response => response.json() as CardBalance)
             .then(response => this.parsePwdChangeData(response))
             .catch(this.handleError);
  }


  // Retreival of JSON from .NET is a success.
    // I had trouble parsing the passwordChange response with extractData so I 
    // created this custom function to do it.
    private parsePwdChangeData(res: Response) {
      let pwdChangeStatus = new PwdChangeStatusModel();
      pwdChangeStatus._body = res["_body"];
      pwdChangeStatus.status = res["status"];
      pwdChangeStatus.statusText = res["statusText"];
      return pwdChangeStatus || {};
  }

  
  // Retreival of JSON from .NET is a success.
  private extractData(res: Response) {
      let body = res.json();
      return body || {};
  }

  // An error occurred. Notify the user.
  private handleError(error: any) {
      let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      return Observable.throw(errMsg);
  }

// Resolve circular references from JSON object
// http://stackoverflow.com/questions/15312529/resolve-circular-references-from-json-object

// JSON and XML Serialization in ASP.NET Web API
// https://docs.microsoft.com/en-us/aspnet/web-api/overview/formats-and-model-binding/json-and-xml-serialization#handling_circular_object_references
resolveReferences(json) {

  if (typeof json === 'string')
      json = JSON.parse(json);

  var byid = {}, // all objects by id
      refs = []; // references to objects that could not be resolved

  json = (function recurse(obj, prop, parent) {
      if (typeof obj !== 'object' || !obj) // a primitive value
          return obj;

      if ("$ref" in obj) { // a reference
          var ref = obj.$ref;
          if (ref in byid)
              return byid[ref];
          // else we have to make it lazy:
          refs.push([parent, prop, ref]);
          return;

      } else if ("$id" in obj) {
          var id = obj.$id;
          delete obj.$id;
          if ("$values" in obj) // an array
              obj = obj.$values.map(recurse);
          else // a plain object
              for (let prop in obj)
                  obj[prop] = recurse(obj[prop], prop, obj)
          byid[id] = obj;
      }
      return obj;

  })(json); // run it!

  for (var i=0; i<refs.length; i++) { // resolve previously unknown references
      var ref = refs[i];
      ref[0][ref[1]] = byid[refs[2]];
      // Notice that this throws if you put in a reference at top-level
  }
  return json;
}  



}
