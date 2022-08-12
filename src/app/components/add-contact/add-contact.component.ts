import { Component, OnInit } from '@angular/core';
import { ICcontact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  public contact:ICcontact={}as ICcontact;

  constructor(private contactService:ContactService,private router:Router) { }

  ngOnInit(): void {
  }

  public createSubmit(){
    this.contactService.createContact(this.contact).subscribe((data:ICcontact)=>{
      this.router.navigate(['/']).then();

    });
  }

}
