import './contacts-list.style.scss';

export default {
  template:
`
<div class="contacts-list">

  <h4>Your contacts</h4>

  <p ng-if="!contacts.length">You have no contacts.</p>

  <div ng-if="contacts.length"
       class="row">
    <div class="four columns">
      <label for="search">Search</label>
    </div>
    <div class="eight columns">
      <input type="text" name="search" id="search"
             ng-model="searchTerm"
             ng-change="search(searchTerm)">
    </div>
  </div>

  <hr>

  <ul ng-if="contacts.length">
    <li class="contact-item"
        ng-repeat="contact in shownContacts"
        ng-click="$ctrl.select({ contact: contact })"
        title="Click to view details">
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

    $scope.contacts       = [];
    $scope.shownContacts  = [];
    $scope.searchTerm     = '';

    $scope.search = (searchTerm) => {
      console.debug(`Searching: ${searchTerm}`);

      if (!searchTerm) {
        $scope.shownContacts = angular.copy($scope.contacts);
        return;
      }

      $scope.shownContacts  = [];
      $scope.contacts.forEach((contact) => {
        for (let key in contact) {
          if (contact[key] && contact[key].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
            $scope.shownContacts.push(angular.copy(contact));
            break;
          }
        }
      });
    }

    ContactsService.retrieve().then((response) => {
      $scope.contacts = response.data;
      $scope.shownContacts = angular.copy($scope.contacts);
    });

  },
  bindings: {
    showNewContactForm: '&',
    select: '&'
  }
};
