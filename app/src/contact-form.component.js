import './contact-form.style.scss';

export default {
  template:
`
<div class="contact-form">

  <form ng-if="$ctrl.showForm"
        ng-submit="onClickedSubmit($ctrl.model)">

    <h4>{{ $ctrl.updating ? 'Edit contact' : 'New contact' }}</h4>

    <label for="fname">First name</label><input type="text" name="fname" id="fname" ng-model="$ctrl.model.fname" required><br>

    <label for="lname">Last name</label><input type="text" name="lname" id="lname" ng-model="$ctrl.model.lname" required><br>

    <label for="email">Email</label><input type="email" name="email" id="email" ng-model="$ctrl.model.email" required><br>

    <label for="photo">Photo</label><input type="file" name="photo" id="photo" ng-model="$ctrl.model.photo"><br>

    <label for="company">Company</label><input type="text" name="company" id="company" ng-model="$ctrl.model.company"><br>

    <label for="job-title">Job title</label><input type="text" name="job_title" id="job-title" ng-model="$ctrl.model.job_title"><br>

    <label for="phone">Phone number (UK only)</label><input type="text" name="phone" id="phone" ng-model="$ctrl.model.phone"
           pattern="[\\d\\-\\s\\(\\)]{11,13}"
           title="Please enter a valid UK phone number. Do not enter the country code."><br>

    <label for="birthday">Birthday</label><input type="date" name="birthday" id="birthday" ng-model="$ctrl.model.birthday"><br>

    <label for="address-line-1">Address</label><input type="text" name="address_line_1" id="address-line-1"
           ng-model="$ctrl.model.address.line1"><br>

    <input type="text" name="address_line_2" id="address-line-2"
           class="space-left"
           ng-model="$ctrl.model.address.line2"><br>

    <input type="text" name="address_line_3" id="address-line-3"
           class="space-left"
           ng-model="$ctrl.model.address.line3"><br>

    <input type="text" name="address_line_4" id="address-line-4"
           class="space-left"
           ng-model="$ctrl.model.address.line4"><br>

    <input type="text" name="address_line_5" id="address-line-5"
           class="space-left"
           ng-model="$ctrl.model.address.line5"><br>

    <label for="notes">Notes</label><input type="text" name="notes" id="notes" ng-model="$ctrl.model.notes"></br>

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
          .then(ctrl.refreshData);
      } else {
        ContactsService.create(model)
          .then(ctrl.refreshData);
      }
    };

    $scope.onClickedDelete = (model) => {
      console.debug("Deleting:", model);
      ContactsService.delete(model)
        .then(ctrl.refreshData);
    };
  },
  bindings: {
    model: '=',
    showForm: '=',
    updating: '=',
    create: '&',
    update: '&',
    refreshData: '&'
  }
};
