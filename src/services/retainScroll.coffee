'use strict'

require('./locationState.coffee')

angular.module 'ngExtends.services.retainScroll', ['ngExtends.services.locationState']

.provider '$retainScroll', [->
  @target = null
  @inactive = false
  @tracking = false
  @positions = {}
  @maxTryCount = 10
  @whetherScrollEvaluator = ['$location', ($location) -> $location.isHistoryChanged]
  @isDelayedEvaluator = [-> false]
  @$get = [-> @]
  return
]

.run [
  '$rootScope', '$retainScroll', '$location', '$timeout', '$injector'
  ($rootScope, $retainScroll, $location, $timeout, $injector) ->
    $target = $($retainScroll.target or window)
    $target.on 'scroll', -> $retainScroll.positions[$location.url()] = $target.scrollTop()  if $retainScroll.tracking

    for event in ['$routeChangeSuccess', '$stateChangeSuccess']
      $rootScope.$on event, -> $retainScroll.inactive = $retainScroll.tracking = false

    $rootScope.$on '$viewContentLoaded', (e) ->
      if $retainScroll.inactive or not $injector.invoke($retainScroll.whetherScrollEvaluator)
        console.log "move to scroll top %o", $target[0]
        $target.scrollTop(0)
        $retainScroll.tracking = true
      else
        isCancel = false
        cancelScrolling = -> $retainScroll.tracking = true; console.log 'Canceled scrolling %o', $target[0]
        offScopeDestroy = e.targetScope.$on '$destroy', -> isCancel = true; offScrollCanceler()
        offScrollCanceler = -> $target.off 'scroll.retainScroll-canceler' + e.targetScope.$id
        onScrollCanceler = -> $target.one 'scroll.retainScroll-canceler' + e.targetScope.$id, -> isCancel = true; offScopeDestroy()
        $timeout(->
          if isCancel then cancelScrolling()
          else
            tryCount = $retainScroll.maxTryCount
            scrollTop = $retainScroll.positions[$location.url()] or 0
            (tryScroll = ->
              if isCancel then cancelScrolling()
              else if $injector.invoke($retainScroll.isDelayedEvaluator) then $timeout(tryScroll, 200)
              else
                offScrollCanceler()
                $target.scrollTop(scrollTop)
                console.log "#{1 + $retainScroll.maxTryCount - tryCount} try move to scroll #{$target.scrollTop()} / #{scrollTop} %o", $target[0]
                if $target.scrollTop() is scrollTop or --tryCount <= 0
                  $retainScroll.tracking = true
                  offScopeDestroy()
                else
                  onScrollCanceler()
                  $timeout(tryScroll, 100)
              return
            )()
          return
        , 100)
      return
    return
]