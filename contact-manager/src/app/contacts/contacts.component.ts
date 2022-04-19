import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { CONTACTS } from '../sample-contacts';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contacts = CONTACTS;

  selectedContact?: Contact;
}
