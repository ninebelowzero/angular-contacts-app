import angular from 'angular';
import ngSanitize from './vendor/ng-sanitize';
import ngCsv from './vendor/ng-csv';

import ContactsService from './contacts.service';
import ContactsAppComponent from './contacts-app.component';
import ContactFormComponent from './contact-form.component';
import ContactsListComponent from './contacts-list.component';

export default angular.module('contacts', ['ngSanitize', 'ngCsv'])
  .factory('ContactsService', ContactsService)
  .component('contactsApp', ContactsAppComponent)
  .component('contactForm', ContactFormComponent)
  .component('contactsList', ContactsListComponent);
