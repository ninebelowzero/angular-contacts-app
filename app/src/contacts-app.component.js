import './normalize.scss';
import './skeleton.scss';

export default {
  template:
`
<contact-form model="$ctrl.model"></contact-form>
<contacts-list></contacts-list>
`,
  controller: ($scope) => {
    $scope.model = {};
  }
};
