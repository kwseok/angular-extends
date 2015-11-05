'use strict'

angular.module 'ngExtends.directives.lower', []

.directive 'exLower', [->
  require: 'ngModel'
  link: (scope, element, attrs, modelCtrl) ->
    toLower = (inputValue) ->
      lowered = if inputValue then inputValue.toLowerCase() else inputValue
      unless lowered is inputValue
        modelCtrl.$setViewValue lowered
        modelCtrl.$render()
      lowered

    modelCtrl.$parsers.push toLower
    toLower scope[attrs.ngModel]
    return
]