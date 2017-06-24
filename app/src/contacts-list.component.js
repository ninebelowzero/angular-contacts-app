import './contacts-list.style.scss';

export default {
  template:
`
<div class="contacts-list">

  <h4>Your contacts</h4>

  <p ng-if="!contacts.length">You have no contacts.</p>

  <ul ng-if="contacts.length">
    <li class="contact-item"
        ng-repeat="contact in contacts"
        ng-click="$ctrl.select({ contact: contact })">
        <span ng-bind="contact.fname + ' ' + contact.lname" class="name"></span>
        <span ng-bind="contact.email" class="email"></span>
        <span class="u-cf"></span>
    </li>
  </ul>

  <button ng-click="$ctrl.showNewContactForm()"
          class="add-contact-button">Add contact</button>

</div>
`,
  controller: ($scope, ContactsService) => {

    $scope.contacts = [];

    ContactsService.retrieve().then((response) => {
      $scope.contacts = response.data;
    });

  },
  bindings: {
    showNewContactForm: '&',
    select: '&'
  }
};
