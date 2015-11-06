(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"), require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery", "angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jquery"), require("angular")) : factory(root["jQuery"], root["angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	
	__webpack_require__(6);
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	__webpack_require__(9);
	
	__webpack_require__(10);
	
	__webpack_require__(11);
	
	__webpack_require__(12);
	
	__webpack_require__(13);
	
	__webpack_require__(14);
	
	__webpack_require__(15);
	
	__webpack_require__(16);
	
	__webpack_require__(18);
	
	__webpack_require__(19);
	
	angular.module('ngExtends.directives', ['ngExtends.directives.countTo', 'ngExtends.directives.domInit', 'ngExtends.directives.focusMe', 'ngExtends.directives.lower', 'ngExtends.directives.repeatDone', 'ngExtends.directives.rotate2d', 'ngExtends.directives.upper']);
	
	angular.module('ngExtends.filters', ['ngExtends.filters.arrays', 'ngExtends.filters.strings']);
	
	angular.module('ngExtends.services', ['ngExtends.services.locationState', 'ngExtends.services.playRoutes', 'ngExtends.services.retainScroll', 'ngExtends.services.searchForm']);
	
	angular.module('ngExtends', ['ngExtends.directives', 'ngExtends.filters', 'ngExtends.services']);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	var _interopRequireDefault = __webpack_require__(3)['default'];
	
	var _angular = __webpack_require__(5);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	if (!$) {
	    throw new Error("Angular.extends requires a AngularJS");
	}
	
	module.exports = _angular2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(3)['default'];
	
	var _jquery = __webpack_require__(4);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	if (!_jquery2['default']) {
	    throw new Error("Angular.extends requires a jQuery");
	}
	
	module.exports = _jquery2['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	angular.module('ngExtends.directives.countTo', []).directive('exCountTo', [
	  '$timeout', function($timeout) {
	    return {
	      replace: false,
	      scope: true,
	      link: function(scope, element, attrs) {
	        var calculate, countTo, elem, increment, num, refreshInterval, start, step, steps, tick;
	        elem = element[0];
	        num = null;
	        refreshInterval = null;
	        steps = null;
	        step = null;
	        countTo = null;
	        increment = null;
	        calculate = function() {
	          var duration;
	          refreshInterval = 30;
	          step = 0;
	          scope.timoutId = null;
	          countTo = parseInt(attrs.exCountTo) || 0;
	          scope.value = parseInt(attrs.value, 10) || 0;
	          duration = (parseFloat(attrs.duration) * 1000) || 0;
	          steps = Math.ceil(duration / refreshInterval);
	          increment = (countTo - scope.value) / steps;
	          num = scope.value;
	        };
	        tick = function() {
	          scope.timoutId = $timeout(function() {
	            num += increment;
	            step++;
	            if (step >= steps) {
	              $timeout.cancel(scope.timoutId);
	              num = countTo;
	              return elem.textContent = countTo;
	            } else {
	              elem.textContent = Math.round(num);
	              return tick();
	            }
	          }, refreshInterval);
	        };
	        start = function() {
	          if (scope.timoutId != null) {
	            $timeout.cancel(scope.timoutId);
	          }
	          calculate();
	          tick();
	        };
	        attrs.$observe('exCountTo', function(val) {
	          if (val != null) {
	            return start();
	          }
	        });
	        attrs.$observe('value', function() {
	          return start();
	        });
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	angular.module('ngExtends.directives.domInit', []).directive('exDomInit', [
	  function() {
	    return {
	      restrict: 'A',
	      link: function(scope, element, attrs) {
	        attrs.$observe('exDomInit', function(value) {
	          var base;
	          return typeof (base = scope.$eval(value)) === "function" ? base(element) : void 0;
	        });
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	angular.module('ngExtends.directives.focusMe', []).directive('exFocusMe', [
	  function() {
	    return {
	      scope: {
	        trigger: '=exFocusMe'
	      },
	      link: function(scope, element) {
	        scope.$watch('trigger', function(value) {
	          var name;
	          if (typeof value === 'boolean') {
	            if (typeof element[name = value ? 'focus' : 'blur'] === "function") {
	              element[name]();
	            }
	            scope.trigger = null;
	          }
	        });
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	angular.module('ngExtends.directives.lower', []).directive('exLower', [
	  function() {
	    return {
	      require: 'ngModel',
	      link: function(scope, element, attrs, modelCtrl) {
	        var toLower;
	        toLower = function(inputValue) {
	          var lowered;
	          lowered = inputValue ? inputValue.toLowerCase() : inputValue;
	          if (lowered !== inputValue) {
	            modelCtrl.$setViewValue(lowered);
	            modelCtrl.$render();
	          }
	          return lowered;
	        };
	        modelCtrl.$parsers.push(toLower);
	        toLower(scope[attrs.ngModel]);
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	angular.module('ngExtends.directives.repeatDone', []).directive('exRepeatDone', [
	  function() {
	    return {
	      restrict: 'A',
	      link: function(scope, element, attrs) {
	        if (((attrs.ngRepeat != null) || (attrs.ngRepeatStart != null)) && scope.$last) {
	          attrs.$observe('exRepeatDone', function(value) {
	            var base;
	            return typeof (base = scope.$eval(value)) === "function" ? base(element) : void 0;
	          });
	        }
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	angular.module('ngExtends.directives.rotate2d', []).directive('exRotate2d', [
	  function() {
	    return {
	      scope: {
	        value: '=exRotate2d',
	        limit: '=',
	        angle: '='
	      },
	      link: function(scope, element) {
	        scope.$watchCollection('[value, limit, angle]', function(values) {
	          var angle, degree, limit, value;
	          value = values[0] || 0;
	          limit = values[1] || 10;
	          angle = values[2] || 360;
	          degree = value * angle / limit;
	          element.css({
	            '-webkit-transform': 'rotate(' + degree + 'deg)',
	            '-moz-transform': 'rotate(' + degree + 'deg)',
	            'transform': 'rotate(' + degree + 'deg)'
	          });
	        });
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	angular.module('ngExtends.directives.upper', []).directive('exUpper', [
	  function() {
	    return {
	      require: 'ngModel',
	      link: function(scope, element, attrs, modelCtrl) {
	        var toUpper;
	        toUpper = function(inputValue) {
	          var uppered;
	          uppered = inputValue ? inputValue.toUpperCase() : inputValue;
	          if (uppered !== inputValue) {
	            modelCtrl.$setViewValue(uppered);
	            modelCtrl.$render();
	          }
	          return uppered;
	        };
	        modelCtrl.$parsers.push(toUpper);
	        toUpper(scope[attrs.ngModel]);
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular, $) {'use strict';
	var slice = [].slice;
	
	angular.module('ngExtends.filters.arrays', []).filter('makeArray', [
	  function() {
	    return function(input) {
	      if (angular.isArray(input)) {
	        return input;
	      } else {
	        return $.makeArray(input);
	      }
	    };
	  }
	]).filter('range', [
	  function() {
	    return function(from, to, step) {
	      var begin, end, i, isNumber, j, ref, ref1, ref2, results;
	      if (step == null) {
	        step = 1;
	      }
	      isNumber = typeof from === 'number' && typeof to === 'number';
	      begin = isNumber ? from : from.toString().charCodeAt(0);
	      end = isNumber ? to : to.toString().charCodeAt(0);
	      results = [];
	      for (i = j = ref = begin, ref1 = end, ref2 = (begin > end ? -step : step); ref2 > 0 ? j <= ref1 : j >= ref1; i = j += ref2) {
	        if (isNumber) {
	          results.push(i);
	        } else {
	          results.push(String.fromCharCode(i));
	        }
	      }
	      return results;
	    };
	  }
	]).filter('join', [
	  function() {
	    return function(input, sep) {
	      return $.makeArray(input).join(sep);
	    };
	  }
	]).filter('combine', [
	  '$parse', function($parse) {
	    return function() {
	      var input, t, transformers, value;
	      input = arguments[0], transformers = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	      if (!angular.isArray(input)) {
	        input = [input];
	      }
	      return ((function() {
	        var j, k, len, len1, results;
	        results = [];
	        for (j = 0, len = input.length; j < len; j++) {
	          value = input[j];
	          for (k = 0, len1 = transformers.length; k < len1; k++) {
	            t = transformers[k];
	            if (angular.isFunction(t)) {
	              value = t(value);
	            } else if (typeof t === 'string') {
	              value = (function() {
	                switch (t) {
	                  case '=integer':
	                    return parseInt(value);
	                  case '=float':
	                    return parseFloat(value);
	                  default:
	                    return $parse(t)(value);
	                }
	              })();
	            }
	          }
	          results.push(value);
	        }
	        return results;
	      })()).reduce(function(t, v) {
	        return t + v;
	      });
	    };
	  }
	]).filter('limit', [
	  function() {
	    return function(input, page, itemsPerPage) {
	      var from, to;
	      from = (page - 1) * itemsPerPage;
	      to = from + itemsPerPage;
	      return $.makeArray(input).slice(from, to);
	    };
	  }
	]).filter('trim', [
	  function() {
	    return function(input) {
	      var a, j, len, ref, ref1, results;
	      if (angular.isArray(input)) {
	        results = [];
	        for (j = 0, len = input.length; j < len; j++) {
	          a = input[j];
	          results.push(a != null ? typeof a.toString === "function" ? (ref = a.toString()) != null ? typeof ref.trim === "function" ? ref.trim() : void 0 : void 0 : void 0 : void 0);
	        }
	        return results;
	      } else {
	        return input != null ? typeof input.toString === "function" ? (ref1 = input.toString()) != null ? typeof ref1.trim === "function" ? ref1.trim() : void 0 : void 0 : void 0 : void 0;
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(2)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	angular.module('ngExtends.filters.strings', []).filter('trustAs', [
	  '$sce', function($sce) {
	    return function(input, type) {
	      return $sce.trustAs(type, input);
	    };
	  }
	]).filter('trustAsCss', [
	  '$sce', function($sce) {
	    return $sce.trustAsCss;
	  }
	]).filter('trustAsHtml', [
	  '$sce', function($sce) {
	    return $sce.trustAsHtml;
	  }
	]).filter('trustAsJs', [
	  '$sce', function($sce) {
	    return $sce.trustAsJs;
	  }
	]).filter('trustAsResourceUrl', [
	  '$sce', function($sce) {
	    return $sce.trustAsResourceUrl;
	  }
	]).filter('trustAsUrl', [
	  '$sce', function($sce) {
	    return $sce.trustAsUrl;
	  }
	]).filter('replace', [
	  function() {
	    return function(input, search, replacement, options) {
	      if (!(search instanceof RegExp)) {
	        search = new RegExp((search || '').toString(), options);
	      }
	      return (input || '').toString().replace(search, replacement);
	    };
	  }
	]).filter('nl2br', [
	  function() {
	    return function(input) {
	      return (input || '').toString().replace(/(\r\n|\n\r|\r|\n)/g, '<br/>');
	    };
	  }
	]).filter('br2nl', [
	  function() {
	    return function(input) {
	      return (input || '').toString().replace(/(<br>|<br\/>)/g, '\n');
	    };
	  }
	]).filter('space2nbsp', [
	  function() {
	    return function(input) {
	      return (input || '').toString().replace(/\s/g, '&nbsp;');
	    };
	  }
	]).filter('nbsp2space', [
	  function() {
	    return function(input) {
	      return (input || '').toString().replace(/&nbsp;/g, ' ');
	    };
	  }
	]).filter('split', [
	  function() {
	    return function(input, separators, limit) {
	      if (input == null) {
	        return input;
	      } else {
	        return input.toString().split(new RegExp((angular.isArray(separators) ? separators.join('|') : separators).toString()), limit);
	      }
	    };
	  }
	]).filter('cutstring', [
	  function() {
	    return function(input, maxLength, suffix) {
	      var inputString;
	      if (maxLength == null) {
	        maxLength = 10;
	      }
	      if (suffix == null) {
	        suffix = '...';
	      }
	      if (input == null) {
	        return input;
	      } else {
	        inputString = input.toString();
	        if (inputString.length > maxLength - suffix.length) {
	          inputString = inputString.slice(0, maxLength) + suffix;
	        }
	        return inputString;
	      }
	    };
	  }
	]).filter('roundcutstring', [
	  function() {
	    return function(input, search, maxLength, prefix, suffix) {
	      var doCut, i, inputString, searchString;
	      if (maxLength == null) {
	        maxLength = 20;
	      }
	      if (prefix == null) {
	        prefix = '...';
	      }
	      if (suffix == null) {
	        suffix = '...';
	      }
	      if (input == null) {
	        return input;
	      } else {
	        inputString = input.toString();
	        searchString = (search || '').toString();
	        i = inputString.indexOf(searchString);
	        if (i === -1) {
	          if (inputString.length > maxLength - suffix.length) {
	            inputString = inputString.slice(0, maxLength) + suffix;
	          }
	          return inputString;
	        } else {
	          return (doCut = function(before, after, string, restLength) {
	            var emptyOrPrefix, emptyOrSuffix, halfLength, pieceOfAfter, pieceOfBefore, restOfAfter, restOfBefore;
	            if (restLength <= 0 || before.length === 0 && after.length === 0) {
	              emptyOrPrefix = before.length > 0 ? prefix : '';
	              emptyOrSuffix = after.length > 0 ? suffix : '';
	              return emptyOrPrefix + string + emptyOrSuffix;
	            } else {
	              halfLength = restLength / 2;
	              if (halfLength < 1) {
	                return doCut(before.slice(0, -1), after, before.slice(-1) + string, 0);
	              } else {
	                pieceOfBefore = before.slice(-halfLength);
	                pieceOfAfter = after.slice(0, halfLength);
	                restOfBefore = before.slice(0, -halfLength);
	                restOfAfter = after.slice(halfLength);
	                return doCut(restOfBefore, restOfAfter, pieceOfBefore + string + pieceOfAfter, restLength - pieceOfBefore.length - pieceOfAfter.length);
	              }
	            }
	          })(inputString.slice(0, i), inputString.slice(i + searchString.length), searchString, maxLength - searchString.length - prefix.length - suffix.length);
	        }
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	angular.module('ngExtends.services.locationState', []).run([
	  '$rootScope', '$window', '$location', function($rootScope, $window, $location) {
	    $rootScope.$on('$locationChangeSuccess', function() {
	      return $location.$$actualPath = $location.path();
	    });
	    $rootScope.$watch((function() {
	      return $location.path();
	    }), function(newLocation) {
	      return $location.isHistoryChanged = $location.$$actualPath === newLocation;
	    });
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular, window) {'use strict';
	angular.module('ngExtends.services.playRoutes', []).provider('$playRoutes', [
	  function() {
	    this.jsRoutes = window.Routes;
	    this.$get = [
	      '$http', (function(_this) {
	        return function($http) {
	          var addRoutes, playRoutes, wrapHttp;
	          wrapHttp = function(fn) {
	            return function() {
	              var httpMethod, res, routeObject, url;
	              routeObject = fn.apply(this, arguments);
	              httpMethod = routeObject.method.toLowerCase();
	              url = routeObject.url;
	              res = {
	                $route: routeObject,
	                method: httpMethod,
	                url: url,
	                absoluteUrl: routeObject.absoluteURL,
	                webSocketUrl: routeObject.webSocketURL
	              };
	              res[httpMethod] = function(options) {
	                return $http[httpMethod](url, options);
	              };
	              return res;
	            };
	          };
	          (addRoutes = function(playRoutesObject, jsRoutesObject) {
	            var key, value;
	            for (key in jsRoutesObject) {
	              value = jsRoutesObject[key];
	              if (angular.isFunction(value)) {
	                playRoutesObject[key] = wrapHttp(value);
	              } else {
	                if (!(key in playRoutesObject)) {
	                  playRoutesObject[key] = {};
	                }
	                addRoutes(playRoutesObject[key], value);
	              }
	            }
	          })(playRoutes = {}, _this.jsRoutes);
	          return playRoutes;
	        };
	      })(this)
	    ];
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(17)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	if (!global.document) {
	    throw new Error("jQuery.extends requires a window with a document");
	}
	
	module.exports = global;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular, $, window) {'use strict';
	__webpack_require__(15);
	
	angular.module('ngExtends.services.retainScroll', ['ngExtends.services.locationState']).provider('$retainScroll', [
	  function() {
	    this.target = null;
	    this.inactive = false;
	    this.tracking = false;
	    this.positions = {};
	    this.maxTryCount = 10;
	    this.whetherScrollEvaluator = [
	      '$location', function($location) {
	        return $location.isHistoryChanged;
	      }
	    ];
	    this.isDelayedEvaluator = [
	      function() {
	        return false;
	      }
	    ];
	    this.$get = [
	      function() {
	        return this;
	      }
	    ];
	  }
	]).run([
	  '$rootScope', '$retainScroll', '$location', '$timeout', '$injector', function($rootScope, $retainScroll, $location, $timeout, $injector) {
	    var $target, event, i, len, ref;
	    $target = $($retainScroll.target || window);
	    $target.on('scroll', function() {
	      if ($retainScroll.tracking) {
	        return $retainScroll.positions[$location.url()] = $target.scrollTop();
	      }
	    });
	    ref = ['$routeChangeSuccess', '$stateChangeSuccess'];
	    for (i = 0, len = ref.length; i < len; i++) {
	      event = ref[i];
	      $rootScope.$on(event, function() {
	        return $retainScroll.inactive = $retainScroll.tracking = false;
	      });
	    }
	    $rootScope.$on('$viewContentLoaded', function(e) {
	      var cancelScrolling, isCancel, offScopeDestroy, offScrollCanceler, onScrollCanceler;
	      if ($retainScroll.inactive || !$injector.invoke($retainScroll.whetherScrollEvaluator)) {
	        console.log("move to scroll top %o", $target[0]);
	        $target.scrollTop(0);
	        $retainScroll.tracking = true;
	      } else {
	        isCancel = false;
	        cancelScrolling = function() {
	          $retainScroll.tracking = true;
	          return console.log('Canceled scrolling %o', $target[0]);
	        };
	        offScopeDestroy = e.targetScope.$on('$destroy', function() {
	          isCancel = true;
	          return offScrollCanceler();
	        });
	        offScrollCanceler = function() {
	          return $target.off('scroll.retainScroll-canceler' + e.targetScope.$id);
	        };
	        onScrollCanceler = function() {
	          return $target.one('scroll.retainScroll-canceler' + e.targetScope.$id, function() {
	            isCancel = true;
	            return offScopeDestroy();
	          });
	        };
	        $timeout(function() {
	          var scrollTop, tryCount, tryScroll;
	          if (isCancel) {
	            cancelScrolling();
	          } else {
	            tryCount = $retainScroll.maxTryCount;
	            scrollTop = $retainScroll.positions[$location.url()] || 0;
	            (tryScroll = function() {
	              if (isCancel) {
	                cancelScrolling();
	              } else if ($injector.invoke($retainScroll.isDelayedEvaluator)) {
	                $timeout(tryScroll, 200);
	              } else {
	                offScrollCanceler();
	                $target.scrollTop(scrollTop);
	                console.log((1 + $retainScroll.maxTryCount - tryCount) + " try move to scroll " + ($target.scrollTop()) + " / " + scrollTop + " %o", $target[0]);
	                if ($target.scrollTop() === scrollTop || --tryCount <= 0) {
	                  $retainScroll.tracking = true;
	                  offScopeDestroy();
	                } else {
	                  onScrollCanceler();
	                  $timeout(tryScroll, 100);
	                }
	              }
	            })();
	          }
	        }, 100);
	      }
	    });
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(2), __webpack_require__(17)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	angular.module('ngExtends.services.searchForm', []).factory('$searchForm', [
	  function() {
	    return function(options) {
	      var SearchForm;
	      SearchForm = (function() {
	        function SearchForm(options1) {
	          this.options = options1;
	          this.options = angular.isFunction(this.options) ? {
	            action: this.options
	          } : void 0;
	          this.options = angular.extend({
	            defaults: {},
	            preSubmit: function(form, filters, unfilters) {},
	            preReset: function(form) {},
	            submit: function(form, filters, unfilters) {},
	            reset: function(form) {},
	            action: function(form) {}
	          }, this.options);
	          this.current = angular.copy(this.options.defaults) || {};
	          this.form = angular.copy(this.options.defaults) || {};
	        }
	
	        SearchForm.prototype.isPristine = function() {
	          return angular.equals(this.current, this.form);
	        };
	
	        SearchForm.prototype.isDirty = function() {
	          return !this.isPristine();
	        };
	
	        SearchForm.prototype.isChanged = function() {
	          return !angular.equals(this.current, this.options.defaults);
	        };
	
	        SearchForm.prototype.submit = function(form, filters, unfilters) {
	          var base, base1, base2, isFiltered, key, value;
	          if ((typeof (base = this.options).preSubmit === "function" ? base.preSubmit(form, filters, unfilters) : void 0) !== false) {
	            if (filters != null) {
	              isFiltered = ((function() {
	                var ref, results;
	                ref = filters || {};
	                results = [];
	                for (key in ref) {
	                  value = ref[key];
	                  results.push([key, value]);
	                }
	                return results;
	              })()).every((function(_this) {
	                return function(keyWithValue) {
	                  var key, value;
	                  key = keyWithValue[0], value = keyWithValue[1];
	                  return angular.equals(_this.form[key], value, true);
	                };
	              })(this));
	              angular.extend(this.form, angular.copy(isFiltered ? unfilters : filters));
	            }
	            this.current = angular.copy(this.form);
	            if (typeof (base1 = this.options).submit === "function") {
	              base1.submit(form, filters, unfilters);
	            }
	            if (typeof (base2 = this.options).action === "function") {
	              base2.action(form);
	            }
	          }
	          return this;
	        };
	
	        SearchForm.prototype.reset = function(form) {
	          var base, base1, base2;
	          if ((typeof (base = this.options).preReset === "function" ? base.preReset(form) : void 0) !== false) {
	            if (form != null) {
	              if (typeof form.$setPristine === "function") {
	                form.$setPristine();
	              }
	            }
	            this.current = angular.copy(this.options.defaults) || {};
	            this.form = angular.copy(this.options.defaults) || {};
	            if (typeof (base1 = this.options).reset === "function") {
	              base1.reset(form);
	            }
	            if (typeof (base2 = this.options).action === "function") {
	              base2.action(form);
	            }
	          }
	          return this;
	        };
	
	        SearchForm.prototype.params = function(refresh, defaults) {
	          var key, params, ref, value;
	          if (angular.isObject(refresh)) {
	            ref = [refresh, false], defaults = ref[0], refresh = ref[1];
	          }
	          params = refresh === true ? angular.copy(this.current) : angular.copy(this.form = angular.copy(this.current));
	          for (key in this.options.defaults) {
	            if (angular.isArray(params[key])) {
	              params[key] = params[key].filter(function(a) {
	                return !!a;
	              });
	            }
	          }
	          params = angular.extend(params, angular.copy(defaults));
	          if (angular.isFunction(this.options.transform)) {
	            for (key in params) {
	              value = params[key];
	              params[key] = this.options.transform(key, value);
	            }
	          }
	          return params;
	        };
	
	        return SearchForm;
	
	      })();
	      return new SearchForm(options);
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwMGU3OWU4MDQyY2RlMjk1NTAzMCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvYW5ndWxhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFycy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9jb3VudFRvLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9kb21Jbml0LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9mb2N1c01lLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9sb3dlci5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvcmVwZWF0RG9uZS5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvcm90YXRlMmQuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL3VwcGVyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy9hcnJheXMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXJzL3N0cmluZ3MuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9sb2NhdGlvblN0YXRlLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGxheVJvdXRlcy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvd2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yZXRhaW5TY3JvbGwuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zZWFyY2hGb3JtLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0EsNERBQVksQ0FBQzs7cUJBRU4sQ0FBNkI7O3FCQUM3QixDQUE2Qjs7cUJBQzdCLENBQTZCOztxQkFDN0IsQ0FBMkI7O3FCQUMzQixFQUFnQzs7cUJBQ2hDLEVBQThCOztxQkFDOUIsRUFBMkI7O3FCQUMzQixFQUF5Qjs7cUJBQ3pCLEVBQTBCOztxQkFDMUIsRUFBaUM7O3FCQUNqQyxFQUE4Qjs7cUJBQzlCLEVBQWdDOztxQkFDaEMsRUFBOEI7O0FBRXJDLFFBQU8sQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FDbkMsOEJBQThCLEVBQzlCLDhCQUE4QixFQUM5Qiw4QkFBOEIsRUFDOUIsNEJBQTRCLEVBQzVCLGlDQUFpQyxFQUNqQywrQkFBK0IsRUFDL0IsNEJBQTRCLENBQy9CLENBQUMsQ0FBQzs7QUFFSCxRQUFPLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQ2hDLDBCQUEwQixFQUMxQiwyQkFBMkIsQ0FDOUIsQ0FBQyxDQUFDOztBQUVILFFBQU8sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FDakMsa0NBQWtDLEVBQ2xDLCtCQUErQixFQUMvQixpQ0FB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QyxDQUFEO3dCQUFPLENBQUMsQ0FBQztlQUFULENBQW5CLEVBQWQ7O0FBREY7V0FHQSxTQUFTLE9BQU8sQ0FBQyxNQUFSLENBQWUsTUFBZixFQUF1QixPQUFPLENBQUMsSUFBUixDQUFhLFFBQWIsQ0FBdkI7V0FFVCxJQUFHLE9BQU8sQ0FBQyxVQUFSLENBQW1CLElBQUMsUUFBTyxDQUFDLFNBQTVCLENBQUg7QUFDRTs7ZUFBQSxNQUFPLEtBQVAsR0FBYyxJQUFDLFFBQU8sQ0FBQyxTQUFULENBQW1CLEdBQW5CLEVBQXdCLEtBQXhCO0FBQWQsY0FERjs7a0JBR0E7U0FoQk07Ozs7O2NBa0JOLGVBQVcsT0FBWDtLQTlEc0I7R0FBSCxDQUFEO0VBRnhCIiwiZmlsZSI6ImFuZ3VsYXItZXh0ZW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcImFuZ3VsYXJcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wianF1ZXJ5XCIsIFwiYW5ndWxhclwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwiYW5ndWxhclwiKSkgOiBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJhbmd1bGFyXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMDBlNzllODA0MmNkZTI5NTUwMzBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9kaXJlY3RpdmVzL2NvdW50VG8uY29mZmVlJ1xuaW1wb3J0ICcuL2RpcmVjdGl2ZXMvZG9tSW5pdC5jb2ZmZWUnXG5pbXBvcnQgJy4vZGlyZWN0aXZlcy9mb2N1c01lLmNvZmZlZSdcbmltcG9ydCAnLi9kaXJlY3RpdmVzL2xvd2VyLmNvZmZlZSdcbmltcG9ydCAnLi9kaXJlY3RpdmVzL3JlcGVhdERvbmUuY29mZmVlJ1xuaW1wb3J0ICcuL2RpcmVjdGl2ZXMvcm90YXRlMmQuY29mZmVlJ1xuaW1wb3J0ICcuL2RpcmVjdGl2ZXMvdXBwZXIuY29mZmVlJ1xuaW1wb3J0ICcuL2ZpbHRlcnMvYXJyYXlzLmNvZmZlZSdcbmltcG9ydCAnLi9maWx0ZXJzL3N0cmluZ3MuY29mZmVlJ1xuaW1wb3J0ICcuL3NlcnZpY2VzL2xvY2F0aW9uU3RhdGUuY29mZmVlJ1xuaW1wb3J0ICcuL3NlcnZpY2VzL3BsYXlSb3V0ZXMuY29mZmVlJ1xuaW1wb3J0ICcuL3NlcnZpY2VzL3JldGFpblNjcm9sbC5jb2ZmZWUnXG5pbXBvcnQgJy4vc2VydmljZXMvc2VhcmNoRm9ybS5jb2ZmZWUnXG5cbmFuZ3VsYXIubW9kdWxlKCduZ0V4dGVuZHMuZGlyZWN0aXZlcycsIFtcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMuY291bnRUbycsXG4gICAgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmRvbUluaXQnLFxuICAgICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5mb2N1c01lJyxcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMubG93ZXInLFxuICAgICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5yZXBlYXREb25lJyxcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMucm90YXRlMmQnLFxuICAgICduZ0V4dGVuZHMuZGlyZWN0aXZlcy51cHBlcidcbl0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnbmdFeHRlbmRzLmZpbHRlcnMnLCBbXG4gICAgJ25nRXh0ZW5kcy5maWx0ZXJzLmFycmF5cycsXG4gICAgJ25nRXh0ZW5kcy5maWx0ZXJzLnN0cmluZ3MnXG5dKTtcblxuYW5ndWxhci5tb2R1bGUoJ25nRXh0ZW5kcy5zZXJ2aWNlcycsIFtcbiAgICAnbmdFeHRlbmRzLnNlcnZpY2VzLmxvY2F0aW9uU3RhdGUnLFxuICAgICduZ0V4dGVuZHMuc2VydmljZXMucGxheVJvdXRlcycsXG4gICAgJ25nRXh0ZW5kcy5zZXJ2aWNlcy5yZXRhaW5TY3JvbGwnLFxuICAgICduZ0V4dGVuZHMuc2VydmljZXMuc2VhcmNoRm9ybSdcbl0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnbmdFeHRlbmRzJywgW1xuICAgICduZ0V4dGVuZHMuZGlyZWN0aXZlcycsXG4gICAgJ25nRXh0ZW5kcy5maWx0ZXJzJyxcbiAgICAnbmdFeHRlbmRzLnNlcnZpY2VzJ1xuXSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcblxuaWYgKCEkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQW5ndWxhci5leHRlbmRzIHJlcXVpcmVzIGEgQW5ndWxhckpTXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL2FuZ3VsYXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuaWYgKCEkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQW5ndWxhci5leHRlbmRzIHJlcXVpcmVzIGEgalF1ZXJ5XCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL2pxdWVyeS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdC5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifVxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFuZ3VsYXJcIlxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMuY291bnRUbycsIFtdXG5cbi5kaXJlY3RpdmUgJ2V4Q291bnRUbycsIFsnJHRpbWVvdXQnLCAoJHRpbWVvdXQpIC0+XG4gIHJlcGxhY2U6IGZhbHNlXG4gIHNjb3BlOiB0cnVlXG4gIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpIC0+XG4gICAgZWxlbSA9IGVsZW1lbnRbMF1cbiAgICBudW0gPSBudWxsXG4gICAgcmVmcmVzaEludGVydmFsID0gbnVsbFxuICAgIHN0ZXBzID0gbnVsbFxuICAgIHN0ZXAgPSBudWxsXG4gICAgY291bnRUbyA9IG51bGxcbiAgICBpbmNyZW1lbnQgPSBudWxsXG5cbiAgICBjYWxjdWxhdGUgPSAtPlxuICAgICAgcmVmcmVzaEludGVydmFsID0gMzBcbiAgICAgIHN0ZXAgPSAwXG4gICAgICBzY29wZS50aW1vdXRJZCA9IG51bGxcbiAgICAgIGNvdW50VG8gPSBwYXJzZUludChhdHRycy5leENvdW50VG8pIHx8IDBcbiAgICAgIHNjb3BlLnZhbHVlID0gcGFyc2VJbnQoYXR0cnMudmFsdWUsIDEwKSB8fCAwXG4gICAgICBkdXJhdGlvbiA9IChwYXJzZUZsb2F0KGF0dHJzLmR1cmF0aW9uKSAqIDEwMDApIHx8IDBcblxuICAgICAgc3RlcHMgPSBNYXRoLmNlaWwoZHVyYXRpb24gLyByZWZyZXNoSW50ZXJ2YWwpXG4gICAgICBpbmNyZW1lbnQgPSAoY291bnRUbyAtIHNjb3BlLnZhbHVlKSAvIHN0ZXBzXG4gICAgICBudW0gPSBzY29wZS52YWx1ZVxuICAgICAgcmV0dXJuXG5cbiAgICB0aWNrID0gLT5cbiAgICAgIHNjb3BlLnRpbW91dElkID0gJHRpbWVvdXQoLT5cbiAgICAgICAgbnVtICs9IGluY3JlbWVudFxuICAgICAgICBzdGVwKytcbiAgICAgICAgaWYgc3RlcCA+PSBzdGVwc1xuICAgICAgICAgICR0aW1lb3V0LmNhbmNlbChzY29wZS50aW1vdXRJZClcbiAgICAgICAgICBudW0gPSBjb3VudFRvXG4gICAgICAgICAgZWxlbS50ZXh0Q29udGVudCA9IGNvdW50VG9cbiAgICAgICAgZWxzZVxuICAgICAgICAgIGVsZW0udGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKG51bSlcbiAgICAgICAgICB0aWNrKClcbiAgICAgICwgcmVmcmVzaEludGVydmFsKVxuICAgICAgcmV0dXJuXG5cbiAgICBzdGFydCA9IC0+XG4gICAgICAkdGltZW91dC5jYW5jZWwoc2NvcGUudGltb3V0SWQpICBpZiBzY29wZS50aW1vdXRJZD9cbiAgICAgIGNhbGN1bGF0ZSgpXG4gICAgICB0aWNrKClcbiAgICAgIHJldHVyblxuXG4gICAgYXR0cnMuJG9ic2VydmUgJ2V4Q291bnRUbycsICh2YWwpIC0+IHN0YXJ0KCkgIGlmIHZhbD9cbiAgICBhdHRycy4kb2JzZXJ2ZSAndmFsdWUnLCAtPiBzdGFydCgpXG4gICAgcmV0dXJuXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGlyZWN0aXZlcy9jb3VudFRvLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMuZG9tSW5pdCcsIFtdXG5cbi5kaXJlY3RpdmUgJ2V4RG9tSW5pdCcsIFstPlxuICByZXN0cmljdDogJ0EnLFxuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgIGF0dHJzLiRvYnNlcnZlICdleERvbUluaXQnLCAodmFsdWUpIC0+IHNjb3BlLiRldmFsKHZhbHVlKT8oZWxlbWVudClcbiAgICByZXR1cm5cbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kaXJlY3RpdmVzL2RvbUluaXQuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5mb2N1c01lJywgW11cblxuLmRpcmVjdGl2ZSAnZXhGb2N1c01lJywgWy0+XG4gIHNjb3BlOlxuICAgIHRyaWdnZXI6ICc9ZXhGb2N1c01lJ1xuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQpIC0+XG4gICAgc2NvcGUuJHdhdGNoICd0cmlnZ2VyJywgKHZhbHVlKSAtPlxuICAgICAgaWYgdHlwZW9mIHZhbHVlIGlzICdib29sZWFuJ1xuICAgICAgICBlbGVtZW50W2lmIHZhbHVlIHRoZW4gJ2ZvY3VzJyBlbHNlICdibHVyJ10/KClcbiAgICAgICAgc2NvcGUudHJpZ2dlciA9IG51bGxcbiAgICAgIHJldHVyblxuICAgIHJldHVyblxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RpcmVjdGl2ZXMvZm9jdXNNZS5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmxvd2VyJywgW11cblxuLmRpcmVjdGl2ZSAnZXhMb3dlcicsIFstPlxuICByZXF1aXJlOiAnbmdNb2RlbCdcbiAgbGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycywgbW9kZWxDdHJsKSAtPlxuICAgIHRvTG93ZXIgPSAoaW5wdXRWYWx1ZSkgLT5cbiAgICAgIGxvd2VyZWQgPSBpZiBpbnB1dFZhbHVlIHRoZW4gaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpIGVsc2UgaW5wdXRWYWx1ZVxuICAgICAgdW5sZXNzIGxvd2VyZWQgaXMgaW5wdXRWYWx1ZVxuICAgICAgICBtb2RlbEN0cmwuJHNldFZpZXdWYWx1ZSBsb3dlcmVkXG4gICAgICAgIG1vZGVsQ3RybC4kcmVuZGVyKClcbiAgICAgIGxvd2VyZWRcblxuICAgIG1vZGVsQ3RybC4kcGFyc2Vycy5wdXNoIHRvTG93ZXJcbiAgICB0b0xvd2VyIHNjb3BlW2F0dHJzLm5nTW9kZWxdXG4gICAgcmV0dXJuXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGlyZWN0aXZlcy9sb3dlci5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLnJlcGVhdERvbmUnLCBbXVxuXG4uZGlyZWN0aXZlICdleFJlcGVhdERvbmUnLCBbLT5cbiAgcmVzdHJpY3Q6ICdBJyxcbiAgbGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgLT5cbiAgICBpZiAoYXR0cnMubmdSZXBlYXQ/IG9yIGF0dHJzLm5nUmVwZWF0U3RhcnQ/KSBhbmQgc2NvcGUuJGxhc3RcbiAgICAgIGF0dHJzLiRvYnNlcnZlICdleFJlcGVhdERvbmUnLCAodmFsdWUpIC0+IHNjb3BlLiRldmFsKHZhbHVlKT8oZWxlbWVudClcbiAgICByZXR1cm5cbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kaXJlY3RpdmVzL3JlcGVhdERvbmUuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5yb3RhdGUyZCcsIFtdXG5cbi5kaXJlY3RpdmUgJ2V4Um90YXRlMmQnLCBbLT5cbiAgc2NvcGU6XG4gICAgdmFsdWU6ICc9ZXhSb3RhdGUyZCdcbiAgICBsaW1pdDogJz0nXG4gICAgYW5nbGU6ICc9J1xuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQpIC0+XG4gICAgc2NvcGUuJHdhdGNoQ29sbGVjdGlvbiAnW3ZhbHVlLCBsaW1pdCwgYW5nbGVdJywgKHZhbHVlcykgLT5cbiAgICAgIHZhbHVlID0gdmFsdWVzWzBdIG9yIDBcbiAgICAgIGxpbWl0ID0gdmFsdWVzWzFdIG9yIDEwXG4gICAgICBhbmdsZSA9IHZhbHVlc1syXSBvciAzNjBcbiAgICAgIGRlZ3JlZSA9IHZhbHVlICogYW5nbGUgLyBsaW1pdFxuICAgICAgZWxlbWVudC5jc3NcbiAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3JvdGF0ZSgnICsgZGVncmVlICsgJ2RlZyknXG4gICAgICAgICctbW96LXRyYW5zZm9ybSc6ICdyb3RhdGUoJyArIGRlZ3JlZSArICdkZWcpJ1xuICAgICAgICAndHJhbnNmb3JtJzogJ3JvdGF0ZSgnICsgZGVncmVlICsgJ2RlZyknXG4gICAgICByZXR1cm5cbiAgICByZXR1cm5cbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kaXJlY3RpdmVzL3JvdGF0ZTJkLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMudXBwZXInLCBbXVxuXG4uZGlyZWN0aXZlICdleFVwcGVyJywgWy0+XG4gIHJlcXVpcmU6ICduZ01vZGVsJ1xuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBtb2RlbEN0cmwpIC0+XG4gICAgdG9VcHBlciA9IChpbnB1dFZhbHVlKSAtPlxuICAgICAgdXBwZXJlZCA9IGlmIGlucHV0VmFsdWUgdGhlbiBpbnB1dFZhbHVlLnRvVXBwZXJDYXNlKCkgZWxzZSBpbnB1dFZhbHVlXG4gICAgICB1bmxlc3MgdXBwZXJlZCBpcyBpbnB1dFZhbHVlXG4gICAgICAgIG1vZGVsQ3RybC4kc2V0Vmlld1ZhbHVlIHVwcGVyZWRcbiAgICAgICAgbW9kZWxDdHJsLiRyZW5kZXIoKVxuICAgICAgdXBwZXJlZFxuXG4gICAgbW9kZWxDdHJsLiRwYXJzZXJzLnB1c2ggdG9VcHBlclxuICAgIHRvVXBwZXIgc2NvcGVbYXR0cnMubmdNb2RlbF1cbiAgICByZXR1cm5cbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kaXJlY3RpdmVzL3VwcGVyLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmZpbHRlcnMuYXJyYXlzJywgW11cblxuLmZpbHRlciAnbWFrZUFycmF5JywgWy0+IChpbnB1dCkgLT4gaWYgYW5ndWxhci5pc0FycmF5IGlucHV0IHRoZW4gaW5wdXQgZWxzZSAkLm1ha2VBcnJheShpbnB1dCldXG5cbi5maWx0ZXIgJ3JhbmdlJywgWy0+IChmcm9tLCB0bywgc3RlcCA9IDEpIC0+XG4gIGlzTnVtYmVyID0gdHlwZW9mIGZyb20gaXMgJ251bWJlcicgYW5kIHR5cGVvZiB0byBpcyAnbnVtYmVyJ1xuICBiZWdpbiA9IGlmIGlzTnVtYmVyIHRoZW4gZnJvbSBlbHNlIGZyb20udG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApXG4gIGVuZCA9IGlmIGlzTnVtYmVyIHRoZW4gdG8gZWxzZSB0by50b1N0cmluZygpLmNoYXJDb2RlQXQoMClcbiAgZm9yIGkgaW4gW2JlZ2luLi5lbmRdIGJ5IChpZiBiZWdpbiA+IGVuZCB0aGVuIC1zdGVwIGVsc2Ugc3RlcClcbiAgICBpZiBpc051bWJlciB0aGVuIGkgZWxzZSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXG5dXG5cbi5maWx0ZXIgJ2pvaW4nLCBbLT4gKGlucHV0LCBzZXApIC0+ICQubWFrZUFycmF5KGlucHV0KS5qb2luKHNlcCldXG5cbi5maWx0ZXIgJ2NvbWJpbmUnLCBbJyRwYXJzZScsICgkcGFyc2UpIC0+IChpbnB1dCwgdHJhbnNmb3JtZXJzLi4uKSAtPlxuICBpbnB1dCA9IFtpbnB1dF0gIHVubGVzcyBhbmd1bGFyLmlzQXJyYXkgaW5wdXRcbiAgKGZvciB2YWx1ZSBpbiBpbnB1dFxuICAgIGZvciB0IGluIHRyYW5zZm9ybWVyc1xuICAgICAgaWYgYW5ndWxhci5pc0Z1bmN0aW9uIHRcbiAgICAgICAgdmFsdWUgPSB0KHZhbHVlKVxuICAgICAgZWxzZSBpZiB0eXBlb2YgdCBpcyAnc3RyaW5nJ1xuICAgICAgICB2YWx1ZSA9IHN3aXRjaCB0XG4gICAgICAgICAgd2hlbiAnPWludGVnZXInIHRoZW4gcGFyc2VJbnQodmFsdWUpXG4gICAgICAgICAgd2hlbiAnPWZsb2F0JyAgIHRoZW4gcGFyc2VGbG9hdCh2YWx1ZSlcbiAgICAgICAgICBlbHNlICRwYXJzZSh0KSh2YWx1ZSlcbiAgICB2YWx1ZVxuICApLnJlZHVjZSAodCwgdikgLT4gdCArIHZcbl1cblxuLmZpbHRlciAnbGltaXQnLCBbLT4gKGlucHV0LCBwYWdlLCBpdGVtc1BlclBhZ2UpIC0+XG4gIGZyb20gPSAocGFnZSAtIDEpICogaXRlbXNQZXJQYWdlXG4gIHRvID0gZnJvbSArIGl0ZW1zUGVyUGFnZVxuICAkLm1ha2VBcnJheShpbnB1dClbZnJvbS4uLnRvXVxuXVxuXG4uZmlsdGVyICd0cmltJywgWy0+IChpbnB1dCkgLT5cbiAgaWYgYW5ndWxhci5pc0FycmF5IGlucHV0XG4gICAgYT8udG9TdHJpbmc/KCk/LnRyaW0/KCkgIGZvciBhIGluIGlucHV0XG4gIGVsc2VcbiAgICBpbnB1dD8udG9TdHJpbmc/KCk/LnRyaW0/KClcbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9maWx0ZXJzL2FycmF5cy5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5maWx0ZXJzLnN0cmluZ3MnLCBbXVxuXG4uZmlsdGVyICd0cnVzdEFzJywgWyckc2NlJywgKCRzY2UpIC0+IChpbnB1dCwgdHlwZSkgLT4gJHNjZS50cnVzdEFzKHR5cGUsIGlucHV0KV1cbi5maWx0ZXIgJ3RydXN0QXNDc3MnLCBbJyRzY2UnLCAoJHNjZSkgLT4gJHNjZS50cnVzdEFzQ3NzXVxuLmZpbHRlciAndHJ1c3RBc0h0bWwnLCBbJyRzY2UnLCAoJHNjZSkgLT4gJHNjZS50cnVzdEFzSHRtbF1cbi5maWx0ZXIgJ3RydXN0QXNKcycsIFsnJHNjZScsICgkc2NlKSAtPiAkc2NlLnRydXN0QXNKc11cbi5maWx0ZXIgJ3RydXN0QXNSZXNvdXJjZVVybCcsIFsnJHNjZScsICgkc2NlKSAtPiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybF1cbi5maWx0ZXIgJ3RydXN0QXNVcmwnLCBbJyRzY2UnLCAoJHNjZSkgLT4gJHNjZS50cnVzdEFzVXJsXVxuXG4uZmlsdGVyICdyZXBsYWNlJywgWy0+IChpbnB1dCwgc2VhcmNoLCByZXBsYWNlbWVudCwgb3B0aW9ucykgLT5cbiAgc2VhcmNoID0gbmV3IFJlZ0V4cCgoc2VhcmNoIG9yICcnKS50b1N0cmluZygpLCBvcHRpb25zKSAgdW5sZXNzIHNlYXJjaCBpbnN0YW5jZW9mIFJlZ0V4cFxuICAoaW5wdXQgb3IgJycpLnRvU3RyaW5nKCkucmVwbGFjZShzZWFyY2gsIHJlcGxhY2VtZW50KVxuXVxuXG4uZmlsdGVyICdubDJicicsIFstPiAoaW5wdXQpIC0+IChpbnB1dCBvciAnJykudG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxyXFxufFxcblxccnxcXHJ8XFxuKS9nLCAnPGJyLz4nKV1cblxuLmZpbHRlciAnYnIybmwnLCBbLT4gKGlucHV0KSAtPiAoaW5wdXQgb3IgJycpLnRvU3RyaW5nKCkucmVwbGFjZSgvKDxicj58PGJyXFwvPikvZywgJ1xcbicpXVxuXG4uZmlsdGVyICdzcGFjZTJuYnNwJywgWy0+IChpbnB1dCkgLT4gKGlucHV0IG9yICcnKS50b1N0cmluZygpLnJlcGxhY2UoL1xccy9nLCAnJm5ic3A7JyldXG5cbi5maWx0ZXIgJ25ic3Ayc3BhY2UnLCBbLT4gKGlucHV0KSAtPiAoaW5wdXQgb3IgJycpLnRvU3RyaW5nKCkucmVwbGFjZSgvJm5ic3A7L2csICcgJyldXG5cbi5maWx0ZXIgJ3NwbGl0JywgWy0+IChpbnB1dCwgc2VwYXJhdG9ycywgbGltaXQpIC0+XG4gIHVubGVzcyBpbnB1dD8gdGhlbiBpbnB1dFxuICBlbHNlIGlucHV0LnRvU3RyaW5nKCkuc3BsaXQobmV3IFJlZ0V4cChcbiAgICAoaWYgYW5ndWxhci5pc0FycmF5IHNlcGFyYXRvcnMgdGhlbiBzZXBhcmF0b3JzLmpvaW4oJ3wnKSBlbHNlIHNlcGFyYXRvcnMpLnRvU3RyaW5nKClcbiAgKSwgbGltaXQpXG5dXG5cbi5maWx0ZXIgJ2N1dHN0cmluZycsIFstPiAoaW5wdXQsIG1heExlbmd0aCA9IDEwLCBzdWZmaXggPSAnLi4uJykgLT5cbiAgdW5sZXNzIGlucHV0PyB0aGVuIGlucHV0XG4gIGVsc2VcbiAgICBpbnB1dFN0cmluZyA9IGlucHV0LnRvU3RyaW5nKClcbiAgICBpbnB1dFN0cmluZyA9IGlucHV0U3RyaW5nWzAuLi5tYXhMZW5ndGhdICsgc3VmZml4ICBpZiBpbnB1dFN0cmluZy5sZW5ndGggPiBtYXhMZW5ndGggLSBzdWZmaXgubGVuZ3RoXG4gICAgaW5wdXRTdHJpbmdcbl1cblxuLmZpbHRlciAncm91bmRjdXRzdHJpbmcnLCBbLT4gKGlucHV0LCBzZWFyY2gsIG1heExlbmd0aCA9IDIwLCBwcmVmaXggPSAnLi4uJywgc3VmZml4ID0gJy4uLicpIC0+XG4gIHVubGVzcyBpbnB1dD8gdGhlbiBpbnB1dFxuICBlbHNlXG4gICAgaW5wdXRTdHJpbmcgPSBpbnB1dC50b1N0cmluZygpXG4gICAgc2VhcmNoU3RyaW5nID0gKHNlYXJjaCBvciAnJykudG9TdHJpbmcoKVxuICAgIGkgPSBpbnB1dFN0cmluZy5pbmRleE9mKHNlYXJjaFN0cmluZylcbiAgICBpZiBpIGlzIC0xXG4gICAgICBpbnB1dFN0cmluZyA9IGlucHV0U3RyaW5nWzAuLi5tYXhMZW5ndGhdICsgc3VmZml4ICBpZiBpbnB1dFN0cmluZy5sZW5ndGggPiBtYXhMZW5ndGggLSBzdWZmaXgubGVuZ3RoXG4gICAgICBpbnB1dFN0cmluZ1xuICAgIGVsc2VcbiAgICAgIChkb0N1dCA9IChiZWZvcmUsIGFmdGVyLCBzdHJpbmcsIHJlc3RMZW5ndGgpIC0+XG4gICAgICAgIGlmIHJlc3RMZW5ndGggPD0gMCBvciBiZWZvcmUubGVuZ3RoIGlzIDAgYW5kIGFmdGVyLmxlbmd0aCBpcyAwXG4gICAgICAgICAgZW1wdHlPclByZWZpeCA9IGlmIGJlZm9yZS5sZW5ndGggPiAwIHRoZW4gcHJlZml4IGVsc2UgJydcbiAgICAgICAgICBlbXB0eU9yU3VmZml4ID0gaWYgYWZ0ZXIubGVuZ3RoID4gMCB0aGVuIHN1ZmZpeCBlbHNlICcnXG4gICAgICAgICAgZW1wdHlPclByZWZpeCArIHN0cmluZyArIGVtcHR5T3JTdWZmaXhcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGhhbGZMZW5ndGggPSByZXN0TGVuZ3RoIC8gMlxuICAgICAgICAgIGlmIGhhbGZMZW5ndGggPCAxXG4gICAgICAgICAgICBkb0N1dChiZWZvcmVbMC4uLi0xXSwgYWZ0ZXIsIGJlZm9yZVstMS4uLl0gKyBzdHJpbmcsIDApXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgcGllY2VPZkJlZm9yZSA9IGJlZm9yZVstaGFsZkxlbmd0aC4uLl1cbiAgICAgICAgICAgIHBpZWNlT2ZBZnRlciA9IGFmdGVyWzAuLi5oYWxmTGVuZ3RoXVxuICAgICAgICAgICAgcmVzdE9mQmVmb3JlID0gYmVmb3JlWzAuLi4taGFsZkxlbmd0aF1cbiAgICAgICAgICAgIHJlc3RPZkFmdGVyID0gYWZ0ZXJbaGFsZkxlbmd0aC4uLl1cbiAgICAgICAgICAgIGRvQ3V0KFxuICAgICAgICAgICAgICByZXN0T2ZCZWZvcmUsXG4gICAgICAgICAgICAgIHJlc3RPZkFmdGVyLFxuICAgICAgICAgICAgICBwaWVjZU9mQmVmb3JlICsgc3RyaW5nICsgcGllY2VPZkFmdGVyLFxuICAgICAgICAgICAgICByZXN0TGVuZ3RoIC0gcGllY2VPZkJlZm9yZS5sZW5ndGggLSBwaWVjZU9mQWZ0ZXIubGVuZ3RoXG4gICAgICAgICAgICApXG4gICAgICApKFxuICAgICAgICBpbnB1dFN0cmluZ1swLi4uaV0sXG4gICAgICAgIGlucHV0U3RyaW5nW2kgKyBzZWFyY2hTdHJpbmcubGVuZ3RoLi4uXSxcbiAgICAgICAgc2VhcmNoU3RyaW5nLFxuICAgICAgICBtYXhMZW5ndGggLSBzZWFyY2hTdHJpbmcubGVuZ3RoIC0gcHJlZml4Lmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGhcbiAgICAgIClcbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9maWx0ZXJzL3N0cmluZ3MuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuc2VydmljZXMubG9jYXRpb25TdGF0ZScsIFtdXG5cbi5ydW4gW1xuICAnJHJvb3RTY29wZScsICckd2luZG93JywgJyRsb2NhdGlvbidcbiAgKCRyb290U2NvcGUsICR3aW5kb3csICRsb2NhdGlvbikgLT5cbiAgICAkcm9vdFNjb3BlLiRvbiAnJGxvY2F0aW9uQ2hhbmdlU3VjY2VzcycsIC0+ICRsb2NhdGlvbi4kJGFjdHVhbFBhdGggPSAkbG9jYXRpb24ucGF0aCgpXG4gICAgJHJvb3RTY29wZS4kd2F0Y2ggKC0+ICRsb2NhdGlvbi5wYXRoKCkpLCAobmV3TG9jYXRpb24pIC0+ICRsb2NhdGlvbi5pc0hpc3RvcnlDaGFuZ2VkID0gJGxvY2F0aW9uLiQkYWN0dWFsUGF0aCBpcyBuZXdMb2NhdGlvblxuICAgIHJldHVyblxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcnZpY2VzL2xvY2F0aW9uU3RhdGUuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuc2VydmljZXMucGxheVJvdXRlcycsIFtdXG5cbi5wcm92aWRlciAnJHBsYXlSb3V0ZXMnLCBbLT5cbiAgQGpzUm91dGVzID0gd2luZG93LlJvdXRlc1xuICBAJGdldCA9IFsnJGh0dHAnLCAoJGh0dHApID0+XG4gICAgd3JhcEh0dHAgPSAoZm4pIC0+IC0+XG4gICAgICByb3V0ZU9iamVjdCA9IGZuLmFwcGx5KEAsIGFyZ3VtZW50cylcbiAgICAgIGh0dHBNZXRob2QgPSByb3V0ZU9iamVjdC5tZXRob2QudG9Mb3dlckNhc2UoKVxuICAgICAgdXJsID0gcm91dGVPYmplY3QudXJsXG4gICAgICByZXMgPVxuICAgICAgICAkcm91dGU6IHJvdXRlT2JqZWN0XG4gICAgICAgIG1ldGhvZDogaHR0cE1ldGhvZFxuICAgICAgICB1cmw6IHVybFxuICAgICAgICBhYnNvbHV0ZVVybDogcm91dGVPYmplY3QuYWJzb2x1dGVVUkxcbiAgICAgICAgd2ViU29ja2V0VXJsOiByb3V0ZU9iamVjdC53ZWJTb2NrZXRVUkxcbiAgICAgIHJlc1todHRwTWV0aG9kXSA9IChvcHRpb25zKSAtPiAkaHR0cFtodHRwTWV0aG9kXSh1cmwsIG9wdGlvbnMpXG4gICAgICByZXNcblxuICAgIChhZGRSb3V0ZXMgPSAocGxheVJvdXRlc09iamVjdCwganNSb3V0ZXNPYmplY3QpIC0+XG4gICAgICBmb3Iga2V5LCB2YWx1ZSBvZiBqc1JvdXRlc09iamVjdFxuICAgICAgICBpZiBhbmd1bGFyLmlzRnVuY3Rpb24gdmFsdWVcbiAgICAgICAgICBwbGF5Um91dGVzT2JqZWN0W2tleV0gPSB3cmFwSHR0cCh2YWx1ZSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHBsYXlSb3V0ZXNPYmplY3Rba2V5XSA9IHt9ICB1bmxlc3Mga2V5IG9mIHBsYXlSb3V0ZXNPYmplY3RcbiAgICAgICAgICBhZGRSb3V0ZXMocGxheVJvdXRlc09iamVjdFtrZXldLCB2YWx1ZSlcbiAgICAgIHJldHVyblxuICAgICkocGxheVJvdXRlcyA9IHt9LCBAanNSb3V0ZXMpXG4gICAgcGxheVJvdXRlc1xuICBdXG4gIHJldHVyblxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcnZpY2VzL3BsYXlSb3V0ZXMuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIWdsb2JhbC5kb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImpRdWVyeS5leHRlbmRzIHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWw7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL3dpbmRvdy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5yZXF1aXJlKCcuL2xvY2F0aW9uU3RhdGUuY29mZmVlJylcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5zZXJ2aWNlcy5yZXRhaW5TY3JvbGwnLCBbJ25nRXh0ZW5kcy5zZXJ2aWNlcy5sb2NhdGlvblN0YXRlJ11cblxuLnByb3ZpZGVyICckcmV0YWluU2Nyb2xsJywgWy0+XG4gIEB0YXJnZXQgPSBudWxsXG4gIEBpbmFjdGl2ZSA9IGZhbHNlXG4gIEB0cmFja2luZyA9IGZhbHNlXG4gIEBwb3NpdGlvbnMgPSB7fVxuICBAbWF4VHJ5Q291bnQgPSAxMFxuICBAd2hldGhlclNjcm9sbEV2YWx1YXRvciA9IFsnJGxvY2F0aW9uJywgKCRsb2NhdGlvbikgLT4gJGxvY2F0aW9uLmlzSGlzdG9yeUNoYW5nZWRdXG4gIEBpc0RlbGF5ZWRFdmFsdWF0b3IgPSBbLT4gZmFsc2VdXG4gIEAkZ2V0ID0gWy0+IEBdXG4gIHJldHVyblxuXVxuXG4ucnVuIFtcbiAgJyRyb290U2NvcGUnLCAnJHJldGFpblNjcm9sbCcsICckbG9jYXRpb24nLCAnJHRpbWVvdXQnLCAnJGluamVjdG9yJ1xuICAoJHJvb3RTY29wZSwgJHJldGFpblNjcm9sbCwgJGxvY2F0aW9uLCAkdGltZW91dCwgJGluamVjdG9yKSAtPlxuICAgICR0YXJnZXQgPSAkKCRyZXRhaW5TY3JvbGwudGFyZ2V0IG9yIHdpbmRvdylcbiAgICAkdGFyZ2V0Lm9uICdzY3JvbGwnLCAtPiAkcmV0YWluU2Nyb2xsLnBvc2l0aW9uc1skbG9jYXRpb24udXJsKCldID0gJHRhcmdldC5zY3JvbGxUb3AoKSAgaWYgJHJldGFpblNjcm9sbC50cmFja2luZ1xuXG4gICAgZm9yIGV2ZW50IGluIFsnJHJvdXRlQ2hhbmdlU3VjY2VzcycsICckc3RhdGVDaGFuZ2VTdWNjZXNzJ11cbiAgICAgICRyb290U2NvcGUuJG9uIGV2ZW50LCAtPiAkcmV0YWluU2Nyb2xsLmluYWN0aXZlID0gJHJldGFpblNjcm9sbC50cmFja2luZyA9IGZhbHNlXG5cbiAgICAkcm9vdFNjb3BlLiRvbiAnJHZpZXdDb250ZW50TG9hZGVkJywgKGUpIC0+XG4gICAgICBpZiAkcmV0YWluU2Nyb2xsLmluYWN0aXZlIG9yIG5vdCAkaW5qZWN0b3IuaW52b2tlKCRyZXRhaW5TY3JvbGwud2hldGhlclNjcm9sbEV2YWx1YXRvcilcbiAgICAgICAgY29uc29sZS5sb2cgXCJtb3ZlIHRvIHNjcm9sbCB0b3AgJW9cIiwgJHRhcmdldFswXVxuICAgICAgICAkdGFyZ2V0LnNjcm9sbFRvcCgwKVxuICAgICAgICAkcmV0YWluU2Nyb2xsLnRyYWNraW5nID0gdHJ1ZVxuICAgICAgZWxzZVxuICAgICAgICBpc0NhbmNlbCA9IGZhbHNlXG4gICAgICAgIGNhbmNlbFNjcm9sbGluZyA9IC0+ICRyZXRhaW5TY3JvbGwudHJhY2tpbmcgPSB0cnVlOyBjb25zb2xlLmxvZyAnQ2FuY2VsZWQgc2Nyb2xsaW5nICVvJywgJHRhcmdldFswXVxuICAgICAgICBvZmZTY29wZURlc3Ryb3kgPSBlLnRhcmdldFNjb3BlLiRvbiAnJGRlc3Ryb3knLCAtPiBpc0NhbmNlbCA9IHRydWU7IG9mZlNjcm9sbENhbmNlbGVyKClcbiAgICAgICAgb2ZmU2Nyb2xsQ2FuY2VsZXIgPSAtPiAkdGFyZ2V0Lm9mZiAnc2Nyb2xsLnJldGFpblNjcm9sbC1jYW5jZWxlcicgKyBlLnRhcmdldFNjb3BlLiRpZFxuICAgICAgICBvblNjcm9sbENhbmNlbGVyID0gLT4gJHRhcmdldC5vbmUgJ3Njcm9sbC5yZXRhaW5TY3JvbGwtY2FuY2VsZXInICsgZS50YXJnZXRTY29wZS4kaWQsIC0+IGlzQ2FuY2VsID0gdHJ1ZTsgb2ZmU2NvcGVEZXN0cm95KClcbiAgICAgICAgJHRpbWVvdXQoLT5cbiAgICAgICAgICBpZiBpc0NhbmNlbCB0aGVuIGNhbmNlbFNjcm9sbGluZygpXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgdHJ5Q291bnQgPSAkcmV0YWluU2Nyb2xsLm1heFRyeUNvdW50XG4gICAgICAgICAgICBzY3JvbGxUb3AgPSAkcmV0YWluU2Nyb2xsLnBvc2l0aW9uc1skbG9jYXRpb24udXJsKCldIG9yIDBcbiAgICAgICAgICAgICh0cnlTY3JvbGwgPSAtPlxuICAgICAgICAgICAgICBpZiBpc0NhbmNlbCB0aGVuIGNhbmNlbFNjcm9sbGluZygpXG4gICAgICAgICAgICAgIGVsc2UgaWYgJGluamVjdG9yLmludm9rZSgkcmV0YWluU2Nyb2xsLmlzRGVsYXllZEV2YWx1YXRvcikgdGhlbiAkdGltZW91dCh0cnlTY3JvbGwsIDIwMClcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG9mZlNjcm9sbENhbmNlbGVyKClcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LnNjcm9sbFRvcChzY3JvbGxUb3ApXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cgXCIjezEgKyAkcmV0YWluU2Nyb2xsLm1heFRyeUNvdW50IC0gdHJ5Q291bnR9IHRyeSBtb3ZlIHRvIHNjcm9sbCAjeyR0YXJnZXQuc2Nyb2xsVG9wKCl9IC8gI3tzY3JvbGxUb3B9ICVvXCIsICR0YXJnZXRbMF1cbiAgICAgICAgICAgICAgICBpZiAkdGFyZ2V0LnNjcm9sbFRvcCgpIGlzIHNjcm9sbFRvcCBvciAtLXRyeUNvdW50IDw9IDBcbiAgICAgICAgICAgICAgICAgICRyZXRhaW5TY3JvbGwudHJhY2tpbmcgPSB0cnVlXG4gICAgICAgICAgICAgICAgICBvZmZTY29wZURlc3Ryb3koKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgIG9uU2Nyb2xsQ2FuY2VsZXIoKVxuICAgICAgICAgICAgICAgICAgJHRpbWVvdXQodHJ5U2Nyb2xsLCAxMDApXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgKSgpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgICwgMTAwKVxuICAgICAgcmV0dXJuXG4gICAgcmV0dXJuXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2VydmljZXMvcmV0YWluU2Nyb2xsLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuc2VydmljZXMuc2VhcmNoRm9ybScsIFtdXG5cbi5mYWN0b3J5ICckc2VhcmNoRm9ybScsIFstPiAob3B0aW9ucykgLT5cblxuICBjbGFzcyBTZWFyY2hGb3JtXG4gICAgY29uc3RydWN0b3I6IChAb3B0aW9ucykgLT5cbiAgICAgIEBvcHRpb25zID1cbiAgICAgICAgYWN0aW9uOiBAb3B0aW9ucyAgaWYgYW5ndWxhci5pc0Z1bmN0aW9uIEBvcHRpb25zXG4gICAgICBAb3B0aW9ucyA9IGFuZ3VsYXIuZXh0ZW5kKFxuICAgICAgICBkZWZhdWx0czoge31cbiAgICAgICAgcHJlU3VibWl0OiAoZm9ybSwgZmlsdGVycywgdW5maWx0ZXJzKSAtPlxuICAgICAgICBwcmVSZXNldDogKGZvcm0pIC0+XG4gICAgICAgIHN1Ym1pdDogKGZvcm0sIGZpbHRlcnMsIHVuZmlsdGVycykgLT5cbiAgICAgICAgcmVzZXQ6IChmb3JtKSAtPlxuICAgICAgICBhY3Rpb246IChmb3JtKSAtPlxuICAgICAgICAjdHJhbnNmb3JtOiAoa2V5LCB2YWx1ZSkgLT4gdmFsdWVcbiAgICAgICwgQG9wdGlvbnMpXG5cbiAgICAgIEBjdXJyZW50ID0gYW5ndWxhci5jb3B5KEBvcHRpb25zLmRlZmF1bHRzKSBvciB7fVxuICAgICAgQGZvcm0gPSBhbmd1bGFyLmNvcHkoQG9wdGlvbnMuZGVmYXVsdHMpIG9yIHt9XG5cbiAgICBpc1ByaXN0aW5lOiAtPiBhbmd1bGFyLmVxdWFscyhAY3VycmVudCwgQGZvcm0pXG4gICAgaXNEaXJ0eTogLT4gbm90IEBpc1ByaXN0aW5lKClcbiAgICBpc0NoYW5nZWQ6IC0+IG5vdCBhbmd1bGFyLmVxdWFscyhAY3VycmVudCwgQG9wdGlvbnMuZGVmYXVsdHMpXG5cbiAgICBzdWJtaXQ6IChmb3JtLCBmaWx0ZXJzLCB1bmZpbHRlcnMpIC0+XG4gICAgICBpZiBAb3B0aW9ucy5wcmVTdWJtaXQ/KGZvcm0sIGZpbHRlcnMsIHVuZmlsdGVycykgaXNudCBmYWxzZVxuICAgICAgICBpZiBmaWx0ZXJzP1xuICAgICAgICAgIGlzRmlsdGVyZWQgPSAoW2tleSwgdmFsdWVdICBmb3Iga2V5LCB2YWx1ZSBvZiBmaWx0ZXJzIG9yIHt9KS5ldmVyeSAoa2V5V2l0aFZhbHVlKSA9PlxuICAgICAgICAgICAgW2tleSwgdmFsdWVdID0ga2V5V2l0aFZhbHVlXG4gICAgICAgICAgICBhbmd1bGFyLmVxdWFscyhAZm9ybVtrZXldLCB2YWx1ZSwgdHJ1ZSlcbiAgICAgICAgICBhbmd1bGFyLmV4dGVuZChAZm9ybSwgYW5ndWxhci5jb3B5KGlmIGlzRmlsdGVyZWQgdGhlbiB1bmZpbHRlcnMgZWxzZSBmaWx0ZXJzKSlcbiAgICAgICAgQGN1cnJlbnQgPSBhbmd1bGFyLmNvcHkoQGZvcm0pXG4gICAgICAgIEBvcHRpb25zLnN1Ym1pdD8oZm9ybSwgZmlsdGVycywgdW5maWx0ZXJzKVxuICAgICAgICBAb3B0aW9ucy5hY3Rpb24/KGZvcm0pXG4gICAgICBAXG5cbiAgICByZXNldDogKGZvcm0pIC0+XG4gICAgICBpZiBAb3B0aW9ucy5wcmVSZXNldD8oZm9ybSkgaXNudCBmYWxzZVxuICAgICAgICBmb3JtPy4kc2V0UHJpc3RpbmU/KClcbiAgICAgICAgQGN1cnJlbnQgPSBhbmd1bGFyLmNvcHkoQG9wdGlvbnMuZGVmYXVsdHMpIG9yIHt9XG4gICAgICAgIEBmb3JtID0gYW5ndWxhci5jb3B5KEBvcHRpb25zLmRlZmF1bHRzKSBvciB7fVxuICAgICAgICBAb3B0aW9ucy5yZXNldD8oZm9ybSlcbiAgICAgICAgQG9wdGlvbnMuYWN0aW9uPyhmb3JtKVxuICAgICAgQFxuXG4gICAgcGFyYW1zOiAocmVmcmVzaCwgZGVmYXVsdHMpIC0+XG4gICAgICBbZGVmYXVsdHMsIHJlZnJlc2hdID0gW3JlZnJlc2gsIGZhbHNlXSAgaWYgYW5ndWxhci5pc09iamVjdCByZWZyZXNoXG5cbiAgICAgIHBhcmFtcyA9IGlmIHJlZnJlc2ggaXMgdHJ1ZVxuICAgICAgICBhbmd1bGFyLmNvcHkoQGN1cnJlbnQpXG4gICAgICBlbHNlXG4gICAgICAgIGFuZ3VsYXIuY29weShAZm9ybSA9IGFuZ3VsYXIuY29weShAY3VycmVudCkpXG5cbiAgICAgIGZvciBrZXkgb2YgQG9wdGlvbnMuZGVmYXVsdHNcbiAgICAgICAgcGFyYW1zW2tleV0gPSBwYXJhbXNba2V5XS5maWx0ZXIoKGEpIC0+ICEhYSkgIGlmIGFuZ3VsYXIuaXNBcnJheSBwYXJhbXNba2V5XVxuXG4gICAgICBwYXJhbXMgPSBhbmd1bGFyLmV4dGVuZCBwYXJhbXMsIGFuZ3VsYXIuY29weShkZWZhdWx0cylcblxuICAgICAgaWYgYW5ndWxhci5pc0Z1bmN0aW9uIEBvcHRpb25zLnRyYW5zZm9ybVxuICAgICAgICBwYXJhbXNba2V5XSA9IEBvcHRpb25zLnRyYW5zZm9ybShrZXksIHZhbHVlKSAgZm9yIGtleSwgdmFsdWUgb2YgcGFyYW1zXG5cbiAgICAgIHBhcmFtc1xuXG4gIG5ldyBTZWFyY2hGb3JtKG9wdGlvbnMpXG5dXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zZXJ2aWNlcy9zZWFyY2hGb3JtLmNvZmZlZVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=