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
      <contacts-list></contacts-list>
    </div>
    <div class="seven columns">
      <contact-form model="$ctrl.model"></contact-form>
    </div>
  </div>
</div>
`,
  controller: ($scope) => {
    $scope.model = {};
  }
};
