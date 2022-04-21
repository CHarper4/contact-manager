import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { CONTACTS } from './sample-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contact: Contact = { fName: '', lName: '', phone: 0, email: ''};

  constructor() { }

  getContacts(): Contact[] {
    return CONTACTS;
  }

  addContact(con: Contact): void {
    CONTACTS.push(con);
  }

  removeContact(con: Contact): void {
    const index = CONTACTS.indexOf(con, 0);

    if(index > -1) {
      CONTACTS.splice(index, 1);
    }
  }

  passContact(con: Contact) {
    this.contact = con;
  }

  
}
