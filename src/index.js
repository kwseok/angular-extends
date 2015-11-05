'use strict';

//TODO: should be coding...

import './directives/countTo.coffee'

angular.module('ngExtends.directives', [
    'ngExtends.directives.countTo'
]);

export default angular.module('ngExtends', [
    'ngExtends.directives'
]);
