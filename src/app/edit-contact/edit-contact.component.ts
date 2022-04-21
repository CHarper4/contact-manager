import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact: Contact= { fName: '', lName: '', phone: 0, email: ''};

  
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contact = this.contactService.contact;
  }
  

}