'use strict'

angular.module 'ngExtends.directives.upper', []

.directive 'exUpper', [->
  require: 'ngModel'
  link: (scope, element, attrs, modelCtrl) ->
    toUpper = (inputValue) ->
      uppered = if inputValue then inputValue.toUpperCase() else inputValue
      unless uppered is inputValue
        modelCtrl.$setViewValue uppered
        modelCtrl.$render()
      uppered

    modelCtrl.$parsers.push toUpper
    toUpper scope[attrs.ngModel]
    return
]