import { Component } from '@angular/core';
import { Contact } from './contact';
import { contacts } from './sample-contacts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-manager';

  contacts: Contact[] = contacts;
  
}
