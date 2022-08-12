import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { ICcontact } from '../models/IContact'; //INTERFACE
import { IGroup } from '../models/IGroup';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public serverUrl:string='http://localhost:9000'; //json-server-url

  constructor(private http:HttpClient) { }

  public getAllContact():Observable<ICcontact[]>{
    let dataURL:string=`${this.serverUrl}/contacts`;
    return this.http.get<ICcontact[]>(dataURL).pipe();

  }

//get contact
  public getContact(contactId:string):Observable<ICcontact>{
    let dataURL:string=`${this.serverUrl}/contacts/${contactId}`;
    return this.http.get<ICcontact>(dataURL).pipe();

  }

//create a contat
  public createContact(contact :ICcontact):Observable<ICcontact>{
    let dataURL:string=`${this.serverUrl}/contacts`;
    return this.http.post<ICcontact>(dataURL,contact).pipe();

  }
//update contact
  public updateContact(contact :ICcontact ,contactId:string):Observable<ICcontact>{
    let dataURL:string=`${this.serverUrl}/contacts/${contactId}`;
    return this.http.put<ICcontact>(dataURL,contact).pipe();


  }

  //delete contact
  public deleteContact(contactId:string):Observable<{}>{
    let dataURL:string=`${this.serverUrl}/contacts/${contactId}`;
    return this.http.delete<{}>(dataURL).pipe();


  }

  //get all groups
  public getAll():Observable<IGroup>{
    let dataURL:string=`${this.serverUrl}/groups`;
    return this.http.get<IGroup>(dataURL).pipe();


  }
  //get signle groupe
  public getGroupe(contact:ICcontact):Observable<IGroup>{
    let dataURL:string=`${this.serverUrl}/groups/${contact.groupeId}`;
    return this.http.get<IGroup>(dataURL).pipe();

  }

}

