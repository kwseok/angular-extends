'use strict'

angular.module 'ngExtends.directives.repeatDone', []

.directive 'extRepeatDone', [->
  restrict: 'A',
  link: (scope, element, attrs) ->
    if (attrs.ngRepeat? or attrs.ngRepeatStart?) and scope.$last
      attrs.$observe 'extRepeatDone', (value) -> scope.$eval(value)?(element)
    undefined
]