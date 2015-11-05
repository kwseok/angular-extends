'use strict'

angular.module 'ngExtends.services.locationState', []

.run [
  '$rootScope', '$window', '$location'
  ($rootScope, $window, $location) ->
    $rootScope.$on '$locationChangeSuccess', -> $location.$$actualPath = $location.path()
    $rootScope.$watch (-> $location.path()), (newLocation) -> $location.isHistoryChanged = $location.$$actualPath is newLocation
    return
]