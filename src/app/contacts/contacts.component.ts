import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[] = [];


  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.contacts = this.contactService.getContacts();
  }
  
  add(con: Contact): void {
    this.contactService.addContact(con);
  }

  remove(con: Contact): void {
    this.contactService.removeContact(con);
  }
  
  onSelect(con: Contact): void {
    this.contactService.passContact(con);
  }
  
}
