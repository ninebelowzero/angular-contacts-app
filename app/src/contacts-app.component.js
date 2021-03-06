import './vendor/normalize.scss';
import './vendor/skeleton.scss';
import './vendor/animate.scss'
import './main.scss'

export default {
  template:
`
<div class="container">
  <h1 class="main-title">Contacts</h1>
  <div class="row">
    <div class="five columns">
      <contacts-list contacts="$ctrl.contacts"
                     empty-model="$ctrl.emptyModel"
                     show-new-contact-form="$ctrl.showNewContactForm()"
                     select="$ctrl.select(contact)"
                     refresh-data="$ctrl.refreshData()"
                     error-handler="$ctrl.errorHandler()"></contacts-list>
    </div>
    <div class="seven columns">
      <contact-form model="$ctrl.model"
                    show-form="$ctrl.showForm"
                    updating="$ctrl.updating"
                    filename="$ctrl.filename"
                    refresh-data="$ctrl.refreshData()"
                    error-handler="$ctrl.errorHandler()"
                    success-message="$ctrl.successMessage"
                    error-message="$ctrl.errorMessage"></contact-form>
    </div>
  </div>

</div>
`,
  controller: ($scope, ContactsService) => {

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
    ctrl.successMessage = '';
    ctrl.errorMessage = '';
    ctrl.filename = '';

    ctrl.showNewContactForm = () => {
      console.debug("Showing new contact form");
      ctrl.showForm = true;
      ctrl.updating = false;
      ctrl.model = angular.copy(ctrl.emptyModel);
      ctrl.successMessage = '';
      ctrl.errorMessage = '';
    };

    ctrl.select = (contact) => {
      ctrl.showForm = true;
      ctrl.updating = true;
      ctrl.model = angular.copy(contact);
      if (ctrl.model.birthday) {
        ctrl.model.birthday = new Date(ctrl.model.birthday);
      }
      if (typeof ctrl.model.address !== 'object'){
        ctrl.model.address = { line1: ctrl.model.address.replace(/"/g, '') };
      }
      console.debug("Editing contact:", contact);
      ctrl.successMessage = '';
      ctrl.errorMessage = '';
      ctrl.filename = '';
    };

    ctrl.refreshData = (isFirstPageLoad) => {
      ContactsService.retrieve().then((response) => {
        ctrl.contacts = response.data;
        ctrl.errorMessage = '';
        if (!isFirstPageLoad) {
          ctrl.successMessage = 'Updated your contacts.';
        }
        resetForm();
      });
    }

    ctrl.errorHandler = () => {
      ctrl.errorMessage = 'Sorry, something went wrong.';
      ctrl.successMessage = '';
      resetForm();
    }

    const resetForm = () => {
      ctrl.showForm = false;
      ctrl.updating = false;
      ctrl.filename = '';
    }

    ctrl.refreshData(true);
  }
};
