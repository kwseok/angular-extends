'use strict'

angular.module 'ngExtends.directives.domInit', []

.directive 'extDomInit', [->
  restrict: 'A',
  link: (scope, element, attrs) ->
    attrs.$observe 'extDomInit', (value) -> scope.$eval(value)?(element)
    undefined
]