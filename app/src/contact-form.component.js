export default {
  template:
`
<form ng-submit="onClickedSubmit($ctrl.model)">
  <label for="fname">First name</label>
  <input type="text" name="fname" id="fname" ng-model="$ctrl.model.fname" required><br>

  <label for="lname">Last name</label>
  <input type="text" name="lname" id="lname" ng-model="$ctrl.model.lname" required><br>

  <label for="email">Email</label>
  <input type="email" name="email" id="email" ng-model="$ctrl.model.email" required><br>

  <label for="photo">Photo</label>
  <input type="file" name="photo" id="photo" ng-model="$ctrl.model.photo"><br>

  <label for="company">Company</label>
  <input type="text" name="company" id="company" ng-model="$ctrl.model.company"><br>

  <label for="job-title">Job title</label>
  <input type="text" name="job_title" id="job-title" ng-model="$ctrl.model.job_title"><br>

  <label for="phone">Phone number (UK only)</label>

  <input type="text" name="phone" id="phone" ng-model="$ctrl.model.phone"
         pattern="[\\d\\-\\s\\(\\)]{11,13}"
         title="Please enter a valid UK phone number. Do not enter the country code."><br>

  <label for="birthday">Birthday</label>
  <input type="date" name="birthday" id="birthday" ng-model="$ctrl.model.birthday"><br>

  <label for="address-line-1">Address</label>
  <input type="text" name="address_line_1" id="address-line-1" ng-model="$ctrl.model.address.line1"><br>
  <input type="text" name="address_line_2" id="address-line-2" ng-model="$ctrl.model.address.line2"><br>
  <input type="text" name="address_line_3" id="address-line-3" ng-model="$ctrl.model.address.line3"><br>
  <input type="text" name="address_line_4" id="address-line-4" ng-model="$ctrl.model.address.line4"><br>
  <input type="text" name="address_line_5" id="address-line-5" ng-model="$ctrl.model.address.line5"><br>

  <label for="notes">Notes</label>
  <input type="text" name="notes" id="notes" ng-model="$ctrl.model.notes"></br>

  <button type="submit">
    Add
  </button>
</form>
`,
  controller: ($scope, $window, ContactsService) => {

    $scope.ngModel = $scope.ngModel || {};

    $scope.phoneNumberRegex = new RegExp('[\d\-\s]{11,13}');

    $scope.onClickedSubmit = (model) => {
      console.debug(model);
      ContactsService.create(model);
    };
  },
  bindings: {
    model: '='
  }
};
