'use strict';

//TODO: should be coding...

import './directives/changeTagsTo.coffee'
import './directives/changeTagsToArray.coffee'
import './directives/countTo.coffee'

angular.module('ngExtends.directives', [
    'ngExtends.directives.changeTagsTo',
    'ngExtends.directives.changeTagsToArray',
    'ngExtends.directives.countTo'
]);

export default angular.module('ngExtends', [
    'ngExtends.directives'
]);
