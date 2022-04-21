import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  @Input() contact: Contact = {
    fName: '',
    lName: '',
    phone: 0,
    email: ''
  };

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  remove(con: Contact): void {
    this.contactService.removeContact(con);
  }
  
  onSelect(con: Contact): void {
    this.contactService.passContact(con);
  }

}
