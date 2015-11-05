'use strict'

require('./locationState.coffee')

angular.module 'ngExtends.services.retainScroll', ['ngExtends.services.locationState']

.provider 'retainScroll', [->
  @target = null
  @inactive = false
  @tracking = false
  @positions = {}
  @maxTryCount = 10
  @whetherScrollEvaluator = ['$location', ($location) -> $location.isHistoryChanged]
  @isDelayedEvaluator = [-> false]
  @$get = [-> @]
  undefined
]

.run [
  '$rootScope', 'retainScroll', '$location', '$timeout', '$injector'
  ($rootScope, retainScroll, $location, $timeout, $injector) ->
    $target = $(retainScroll.target or window)
    $target.on 'scroll', -> retainScroll.positions[$location.url()] = $target.scrollTop()  if retainScroll.tracking

    $rootScope.$on '$routeChangeSuccess', -> retainScroll.inactive = retainScroll.tracking = false
    $rootScope.$on '$stateChangeSuccess', -> retainScroll.inactive = retainScroll.tracking = false
    $rootScope.$on '$viewContentLoaded', (e) ->
      if retainScroll.inactive or not $injector.invoke(retainScroll.whetherScrollEvaluator)
        console.log "move to scroll top %o", $target[0]
        $target.scrollTop(0)
        retainScroll.tracking = true
      else
        isCancel = false
        offScopeDestroy = e.targetScope.$on '$destroy', -> isCancel = true; offScrollCanceler()
        offScrollCanceler = -> $target.off 'scroll.retainScroll-canceler' + e.targetScope.$id
        onScrollCanceler = -> $target.one 'scroll.retainScroll-canceler' + e.targetScope.$id, -> isCancel = true; offScopeDestroy()
        $timeout(->
          if isCancel
            console.log 'Cancel scrolling %o', $target[0]
            retainScroll.tracking = true
          else
            tryCount = retainScroll.maxTryCount
            scrollTop = retainScroll.positions[$location.url()] or 0
            (tryScroll = ->
              if isCancel
                console.log 'Cancel scrolling %o', $target[0]
                retainScroll.tracking = true
              else if $injector.invoke(retainScroll.isDelayedEvaluator)
                $timeout(tryScroll, 200)
              else
                offScrollCanceler()
                $target.scrollTop(scrollTop)
                console.log "#{1 + retainScroll.maxTryCount - tryCount} try move to scroll #{$target.scrollTop()} / #{scrollTop} %o", $target[0]
                if $target.scrollTop() is scrollTop or --tryCount <= 0
                  retainScroll.tracking = true
                  offScopeDestroy()
                else
                  onScrollCanceler()
                  $timeout(tryScroll, 100)
              undefined
            )()
          undefined
        , 100)
      undefined
    undefined
]