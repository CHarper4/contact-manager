import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.css']
})
export class SearchContactComponent implements OnInit {

  matchedContacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  search(searchString: string) {
      this.matchedContacts = this.contactService.searchContacts(searchString);
  }
  

}

