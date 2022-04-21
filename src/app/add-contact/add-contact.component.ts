import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactsComponent } from '../contacts/contacts.component';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  newContact?: Contact;
  num: number = 0;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  save(fn: string, ln: string, pn: string, em: string): void {
    
    this.num = parseInt(pn);
      
    this.newContact = {
      fName: fn, 
      lName: ln, 
      phone: this.num, 
      email: em
    }

    this.contactService.addContact(this.newContact);
  }

}
