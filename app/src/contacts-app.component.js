import './normalize.scss';
import './skeleton.scss';
import './main.scss'

export default {
  template:
`
<div class="container">
  <h1 class="main-title">Contacts</h1>
  <div class="row">
    <div class="five columns">
      <contacts-list empty-model="$ctrl.emptyModel"
                     show-new-contact-form="$ctrl.showNewContactForm()"
                     select="$ctrl.select(contact)"></contacts-list>
    </div>
    <div class="seven columns">
      <contact-form model="$ctrl.model"
                    show-form="$ctrl.showForm"
                    updating="$ctrl.updating"></contact-form>
    </div>
  </div>
</div>
`,
  controller: ($scope) => {

    const ctrl = $scope.$ctrl;

    ctrl.emptyModel = {
      _id: '',
      fname: '',
      lname: '',
      email: '',
      photo: '',
      company: '',
      job_title: '',
      phone: '',
      birthday: '',
      address: {},
      notes: ''
    };

    ctrl.showForm = false;
    ctrl.updating = false;

    ctrl.showNewContactForm = function() {
      console.debug("Showing new contact form");
      ctrl.showForm = true;
      ctrl.updating = false;
      ctrl.model = angular.copy(ctrl.emptyModel);
    };

    ctrl.select = function(contact) {
      console.debug("Editing contact:", contact);
      ctrl.showForm = true;
      ctrl.updating = true;
      ctrl.model = angular.copy(contact);
    };
  }
};
