'use strict'

module.exports = angular.module 'ngExtends.directives.countTo', []

.directive 'extCountTo', ['$timeout', ($timeout) ->
  replace: false
  scope: true
  link: (scope, element, attrs) ->
    elem = element[0]
    num = null
    refreshInterval = null
    steps = null
    step = null
    countTo = null
    increment = null

    calculate = ->
      refreshInterval = 30
      step = 0
      scope.timoutId = null
      countTo = parseInt(attrs.countTo) || 0
      scope.value = parseInt(attrs.value, 10) || 0
      duration = (parseFloat(attrs.duration) * 1000) || 0

      steps = Math.ceil(duration / refreshInterval)
      increment = (countTo - scope.value) / steps
      num = scope.value

    tick = ->
      scope.timoutId = $timeout(->
        num += increment
        step++
        if step >= steps
          $timeout.cancel(scope.timoutId)
          num = countTo
          elem.textContent = countTo
        else
          elem.textContent = Math.round(num)
          tick()
      , refreshInterval)

    start = ->
      $timeout.cancel(scope.timoutId)  if scope.timoutId?
      calculate()
      tick()

    attrs.$observe 'countTo', (val) -> start()  if val?
    attrs.$observe 'value', -> start()

    undefined
]