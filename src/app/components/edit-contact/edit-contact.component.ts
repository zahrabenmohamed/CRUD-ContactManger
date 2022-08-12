import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ICcontact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
public contactId :string |null=null;
public contact :ICcontact={} as ICcontact;
  constructor(private activatedRoute:ActivatedRoute,private contactService:ContactService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (param:ParamMap)=>{
        this.contactId=param.get('contactId');
      }
    )
    if (this.contactId){
      this.contactService.getContact(this.contactId).subscribe((data:ICcontact)=>{
        this.contact=data;
      });

    }
  }
  public submitUpdate(){

    if ( this.contactId){
      this.contactService.updateContact(this.contact,this.contactId).subscribe((data:{})=>{
        this.router.navigate(['/']).then();

      });
    }
    }


}
