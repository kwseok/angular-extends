'use strict'

angular.module 'ngExtends.services.playRoutes', []

.provider 'playRoutes', [->
  @jsRoutes = window.Routes
  @$get = ['$http', ($http) =>
    wrapHttp = (fn) -> ->
      routeObject = fn.apply(@, arguments)
      httpMethod = routeObject.method.toLowerCase()
      url = routeObject.url
      res =
        $route: routeObject
        method: httpMethod
        url: url
        absoluteUrl: routeObject.absoluteURL
        webSocketUrl: routeObject.webSocketURL
      res[httpMethod] = (options) -> $http[httpMethod](url, options)
      res

    (addRoutes = (playRoutesObject, jsRoutesObject) ->
      for key, value of jsRoutesObject
        if angular.isFunction value
          playRoutesObject[key] = wrapHttp(value)
        else
          playRoutesObject[key] = {}  unless key of playRoutesObject
          addRoutes(playRoutesObject[key], value)
      undefined
    )(playRoutes = {}, @jsRoutes)
    playRoutes
  ]
  undefined
]