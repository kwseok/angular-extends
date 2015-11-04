'use strict'

module.exports = angular.module 'ngExtends.directives.changeTagsTo', []

.constant 'extChangeTagsToConfig',
  seperator: '|'

.directive 'extChangeTagsTo', [
  'extChangeTagsToConfig', '$parse', 'uniqueFilter'
  (extChangeTagsToConfig, $parse, uniqueFilter) ->
    restrict: 'AC'
    require: 'tagsInput'
    link: (scope, element, attrs) ->
      getModel = $parse(attrs.ngModel)
      setModel = getModel.assign
      getTo = $parse(attrs.changeTagsTo)
      setTo = getTo.assign

      seperator = extChangeTagsToConfig.seperator
      attrs.$observe 'extChangeTagsToSeperator', (value) ->
        seperator = value or extChangeTagsToConfig.seperator

      scope.$watch getTo, (value) ->
        tags = uniqueFilter(value?.split?(seperator)?.filter?((a) -> !!a)) or []
        setModel(scope, text: tag  for tag in tags)

      scope.$watchCollection ->
        tag.text  for tag in getModel(scope) or []
      , (tags) -> if tags? and setTo?
        setTo(scope, (tag  for tag in tags or []).join(seperator))

      undefined
]
