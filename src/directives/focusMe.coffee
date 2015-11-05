'use strict'

angular.module 'ngExtends.directives.focusMe', []

.directive 'extFocusMe', [->
  scope:
    trigger: '=extFocusMe'
  link: (scope, element) ->
    scope.$watch 'trigger', (value) ->
      if typeof value is 'boolean'
        element[if value then 'focus' else 'blur']?()
        scope.trigger = null
      undefined
    undefined
]