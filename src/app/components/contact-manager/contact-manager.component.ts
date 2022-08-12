import { Component, OnInit } from '@angular/core';
import { ICcontact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
  public loading:boolean=false;
  public contacts:ICcontact[]=[];

  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
this.getAllContactFromserver();
  }

  public getAllContactFromserver(){
    this.loading=true;
    this.contactService.getAllContact().subscribe((data:ICcontact[])=>{
      this.contacts=data;
      this.loading=false;
    });

  }
  public DeleteContact(contactId:string |undefined){
    if(contactId){
      this.contactService.deleteContact(contactId).subscribe((data:{})=>{
        this.getAllContactFromserver();

      })
    }

  }

}
