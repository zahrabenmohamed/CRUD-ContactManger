import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ICcontact } from 'src/app/models/IContact';
import { IGroup } from 'src/app/models/IGroup';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  public laoding :boolean=false;
  public contactId:string | null =null;
  public contact:ICcontact={} as ICcontact
  public groupe:IGroup={}as IGroup

  constructor(private activatedRoute:ActivatedRoute,private contactService:ContactService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param:ParamMap)=>{
      this.contactId=param.get('contactId');

    });
    if (this.contactId){
      this.laoding=true;
      this.contactService.getContact(this.contactId).subscribe((data:ICcontact)=>{
        this.contact=data;
        this.laoding=false;
        this.contactService.getGroupe(this.contact).subscribe((res:IGroup)=>{
          this.groupe=res;
        })
      })
    }
}

}
