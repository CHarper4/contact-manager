import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { CONTACTS } from './sample-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contact: Contact = { fName: '', lName: '', phone: 0, email: ''};
  matchedContacts: Contact[] = [];

  constructor() { }

  getContacts(): Contact[] {
    return CONTACTS;
  }

  addContact(con: Contact): void {
    CONTACTS.push(con);
  }

  removeContact(con: Contact): void {

    //remove contact from CONTACTS
    const index = CONTACTS.indexOf(con, 0);
    if(index > -1) {
      CONTACTS.splice(index, 1);
    }

    //remove contact from matchedContacts if found
    for(let c of this.matchedContacts) {
      if(c === con) {
        this.matchedContacts.splice(this.matchedContacts.indexOf(c,0), 1);
      }
    }
  }

  passContact(con: Contact) {
    this.contact = con;
  }

  selectedContact() {
    return this.contact;
  }

  searchContacts(searchString: string) {
    //filter CONTACTS based on matches with searchString
    this.matchedContacts = CONTACTS.filter((x: any) => (x.fName + x.lName).toLowerCase().includes(searchString.toLowerCase()));
    return this.matchedContacts;
  }

  
}
