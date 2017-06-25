import './contact-form.style.scss';

export default {
  template:
`
<div class="contact-form">

  <p class="success-message animated fadeInDown"
     ng-if="$ctrl.successMessage">✓ &emsp;{{ $ctrl.successMessage }}</p>

  <p class="error-message animated fadeInDown"
     ng-if="$ctrl.errorMessage">✗ &emsp;{{ $ctrl.errorMessage }}</p>

  <form ng-if="$ctrl.showForm"
        ng-submit="onClickedSubmit($ctrl.model)">

    <h4>{{ $ctrl.updating ? 'Edit contact' : 'New contact' }}</h4>

    <div class="row">
      <div class="four columns">
        <label for="fname">First name</label>
      </div>
      <div class="eight columns">
        <input type="text" name="fname" id="fname" ng-model="$ctrl.model.fname" required>
      </div>
    </div>

    <div class="row">
      <div class="four columns">
        <label for="lname">Last name</label>
      </div>
      <div class="eight columns">
        <input type="text" name="lname" id="lname" ng-model="$ctrl.model.lname" required>
      </div>
    </div>

    <div class="row">
      <div class="four columns">
        <label for="email">Email</label>
      </div>
      <div class="eight columns">
        <input type="email" name="email" id="email" ng-model="$ctrl.model.email" required>
      </div>
    </div>

    <div class="row">
      <div class="four columns">
        <label for="photo">Photo</label>
      </div>
      <div class="eight columns">
        <input type="file" name="photo" id="photo" ng-model="$ctrl.model.photo">
      </div>
    </div>

    <div class="row">
      <div class="four columns">
        <label for="company">Company</label>
      </div>
      <div class="eight columns">
        <input type="text" name="company" id="company" ng-model="$ctrl.model.company">
      </div>
    </div>

    <div class="row">
      <div class="four columns">
        <label for="job-title">Job title</label>
      </div>
      <div class="eight columns">
        <input type="text" name="job_title" id="job-title" ng-model="$ctrl.model.job_title">
      </div>
    </div>

    <div class="row">
      <div class="four columns">
        <label for="phone">Phone number</label>
      </div>
      <div class="eight columns">
        <input type="text" name="phone" id="phone" ng-model="$ctrl.model.phone"
                     pattern="[\\d\\-\\s\\(\\)]{11,13}"
                     title="Please enter a valid UK phone number. Do not enter the country code.">
      </div>
    </div>

    <div class="row">
      <div class="four columns">
        <label for="birthday">Birthday</label>
      </div>
      <div class="eight columns">
        <input type="date" name="birthday" id="birthday" ng-model="$ctrl.model.birthday">
      </div>
    </div>

    <div class="row">
      <div class="four columns">
        <label for="address-line-1">Address</label>
      </div>
      <div class="eight columns">
        <input type="text" name="address_line_1" id="address-line-1"
               ng-model="$ctrl.model.address.line1">
      </div>
    </div>

    <div class="row">
      <div class="four columns">
        &nbsp;
      </div>
      <div class="eight columns">
        <input type="text" name="address_line_2" id="address-line-2"
               class="space-left"
               ng-model="$ctrl.model.address.line2">
      </div>
    </div>

    <div class="row">
      <div class="four columns">
        &nbsp;
      </div>
      <div class="eight columns">
        <input type="text" name="address_line_3" id="address-line-3"
               class="space-left"
               ng-model="$ctrl.model.address.line3">
      </div>
    </div>

    <div class="row">
      <div class="four columns">
        &nbsp;
      </div>
      <div class="eight columns">
        <input type="text" name="address_line_4" id="address-line-4"
               class="space-left"
               ng-model="$ctrl.model.address.line4">
      </div>
    </div>

    <div class="row">
      <div class="four columns">
        &nbsp;
      </div>
      <div class="eight columns">
        <input type="text" name="address_line_5" id="address-line-5"
               class="space-left"
               ng-model="$ctrl.model.address.line5">
      </div>
    </div>

    <div class="row">
      <div class="four columns">
        <label for="notes">Notes</label>
      </div>
      <div class="eight columns">
        <input type="text" name="notes" id="notes" ng-model="$ctrl.model.notes">
      </div>
    </div>

    <button type="submit"
            class="button-primary">
      {{ $ctrl.updating ? 'Update contact' : 'Add contact' }}
    </button>

    <button type="button"
            ng-if="$ctrl.updating"
            ng-click="onClickedDelete($ctrl.model)"
            class="button-danger">
      Delete contact
    </button>

  </form>
</div>
`,
  controller: ($scope, ContactsService) => {

    const ctrl = $scope.$ctrl;

    $scope.onClickedSubmit = (model) => {
      console.debug("Submitted:", model);

      if (ctrl.updating) {
        ContactsService.update(model)
          .then(ctrl.refreshData, ctrl.errorHandler);
      } else {
        ContactsService.create(model)
          .then(ctrl.refreshData, ctrl.errorHandler);
      }
    };

    $scope.onClickedDelete = (model) => {
      console.debug("Deleting:", model);
      ContactsService.delete(model)
        .then(ctrl.refreshData, ctrl.errorHandler);
    };
  },
  bindings: {
    model: '=',
    showForm: '=',
    updating: '=',
    successMessage: '<',
    errorMessage: '<',
    create: '&',
    update: '&',
    refreshData: '&',
    errorHandler: '&'
  }
};
