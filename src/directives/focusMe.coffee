'use strict'

angular.module 'ngExtends.directives.focusMe', []

.directive 'exFocusMe', [->
  scope:
    trigger: '=exFocusMe'
  link: (scope, element) ->
    scope.$watch 'trigger', (value) ->
      if typeof value is 'boolean'
        element[if value then 'focus' else 'blur']?()
        scope.trigger = null
      return
    return
]