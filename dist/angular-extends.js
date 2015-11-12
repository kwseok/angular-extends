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
	
	angular.module('ngExtends.services', ['ngExtends.services.playRoutes', 'ngExtends.services.searchForm']);
	
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
	          var elem, end, lowered, start;
	          lowered = inputValue ? inputValue.toLowerCase() : inputValue;
	          if (lowered !== inputValue) {
	            elem = element[0];
	            start = elem.selectionStart;
	            end = elem.selectionEnd;
	            modelCtrl.$setViewValue(lowered);
	            modelCtrl.$render();
	            if (typeof elem.setSelectionRange === "function") {
	              elem.setSelectionRange(start, end);
	            }
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
	          var elem, end, start, uppered;
	          uppered = inputValue ? inputValue.toUpperCase() : inputValue;
	          if (uppered !== inputValue) {
	            elem = element[0];
	            start = elem.selectionStart;
	            end = elem.selectionEnd;
	            modelCtrl.$setViewValue(uppered);
	            modelCtrl.$render();
	            if (typeof elem.setSelectionRange === "function") {
	              elem.setSelectionRange(start, end);
	            }
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
	      '$http', '$location', (function(_this) {
	        return function($http, $location) {
	          var addRoutes, playRoutes, wrapHttp;
	          wrapHttp = function(fn) {
	            return function() {
	              var absoluteURL, host, httpMethod, ref, res, routeObject, url;
	              routeObject = fn.apply(this, arguments);
	              httpMethod = routeObject.method.toLowerCase();
	              absoluteURL = routeObject.absoluteURL();
	              host = (ref = absoluteURL.match(/^https?:\/\/([^\/?#]+)(?:[\/?#]|$)/i)) != null ? ref[1] : void 0;
	              url = $location.host() === host ? routeObject.url : absoluteURL;
	              res = {
	                $route: routeObject,
	                method: httpMethod,
	                url: url,
	                absoluteURL: routeObject.absoluteURL,
	                webSocketURL: routeObject.webSocketURL
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
	    this.inactiveOnce = false;
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
	    var $target;
	    $target = $($retainScroll.target || window);
	    $target.on('scroll', function() {
	      if ($retainScroll.tracking) {
	        return $retainScroll.positions[$location.url()] = $target.scrollTop();
	      }
	    });
	    $rootScope.$on('$locationChangeSuccess', function() {
	      return $retainScroll.inactiveOnce = $retainScroll.tracking = false;
	    });
	    $rootScope.$on('$viewContentLoaded', function(e) {
	      var cancelScrolling, isCancel, offScopeDestroy, offScrollCanceler, onScrollCanceler;
	      if ($retainScroll.inactiveOnce || !$injector.invoke($retainScroll.whetherScrollEvaluator)) {
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
	                console.log((1 + $retainScroll.maxTryCount - tryCount) + " try move to scrolling " + ($target.scrollTop()) + " / " + scrollTop + " %o", $target[0]);
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
	        }, 0);
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
	          if (angular.isFunction(this.options)) {
	            this.options = {
	              action: this.options
	            };
	          }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2NTM5ODNjNzUzNTdhZTIwMDU0NiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvYW5ndWxhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFycy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9jb3VudFRvLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9kb21Jbml0LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9mb2N1c01lLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9sb3dlci5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvcmVwZWF0RG9uZS5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvcm90YXRlMmQuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL3VwcGVyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy9hcnJheXMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXJzL3N0cmluZ3MuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9sb2NhdGlvblN0YXRlLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGxheVJvdXRlcy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvd2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yZXRhaW5TY3JvbGwuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zZWFyY2hGb3JtLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0EsNERBQVksQ0FBQzs7cUJBRU4sQ0FBNkI7O3FCQUM3QixDQUE2Qjs7cUJBQzdCLENBQTZCOztxQkFDN0IsQ0FBMkI7O3FCQUMzQixFQUFnQzs7cUJBQ2hDLEVBQThCOztxQkFDOUIsRUFBMkI7O3FCQUMzQixFQUF5Qjs7cUJBQ3pCLEVBQTBCOztxQkFDMUIsRUFBaUM7O3FCQUNqQyxFQUE4Qjs7cUJBQzlCLEVBQWdDOztxQkFDaEMsRUFBOEI7O0FBRXJDLFFBQU8sQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FDbkMsOEJBQThCLEVBQzlCLDhCQUE4QixFQUM5Qiw4QkFBOEIsRUFDOUIsNEJBQTRCLEVBQzVCLGlDQUFpQyxFQUNqQywrQkFBK0IsRUFDL0IsNEJBQTRCLENBQy9CLENBQUMsQ0FBQzs7QUFFSCxRQUFPLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQ2hDLDBCQUEwQixFQUMxQiwyQkFBMkIsQ0FDOUIsQ0FBQyxDQUFDOztBQUVILFFBQU8sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FDakMsK0JBQStCLEVBQy9CLCtCQUErQixDQUNsQyxDQUFD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QUVBLFNBQVksWUFBVyxJQUFkLEdBQ1AsT0FBTyxDQUFDLElBQVIsQ0FBYSxJQUFDLFFBQWQsQ0FETyxHQUdQLE9BQU8sQ0FBQyxJQUFSLENBQWEsSUFBQyxLQUFELEdBQVEsT0FBTyxDQUFDLElBQVIsQ0FBYSxJQUFDLFFBQWQsQ0FBckI7QUFFRjthQUNFLElBQWlELE9BQU8sQ0FBQyxPQUFSLENBQWdCLE1BQU8sS0FBdkIsQ0FBakQ7ZUFBQSxNQUFPLEtBQVAsR0FBYyxNQUFPLEtBQUksQ0FBQyxNQUFaLENBQW1CLFNBQUMsQ0FBRDt3QkFBTyxDQUFDLENBQUM7ZUFBVCxDQUFuQixFQUFkOztBQURGO1dBR0EsU0FBUyxPQUFPLENBQUMsTUFBUixDQUFlLE1BQWYsRUFBdUIsT0FBTyxDQUFDLElBQVIsQ0FBYSxRQUFiLENBQXZCO1dBRVQsSUFBRyxPQUFPLENBQUMsVUFBUixDQUFtQixJQUFDLFFBQU8sQ0FBQyxTQUE1QixDQUFIO0FBQ0U7O2VBQUEsTUFBTyxLQUFQLEdBQWMsSUFBQyxRQUFPLENBQUMsU0FBVCxDQUFtQixHQUFuQixFQUF3QixLQUF4QjtBQUFkLGNBREY7O2tCQUdBO1NBaEJNOzs7OztjQWtCTixlQUFXLE9BQVg7S0E5RHNCO0dBQUgsQ0FBRDtFQUZ4QiIsImZpbGUiOiJhbmd1bGFyLWV4dGVuZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIiksIHJlcXVpcmUoXCJhbmd1bGFyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImpxdWVyeVwiLCBcImFuZ3VsYXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcImFuZ3VsYXJcIikpIDogZmFjdG9yeShyb290W1wialF1ZXJ5XCJdLCByb290W1wiYW5ndWxhclwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDY1Mzk4M2M3NTM1N2FlMjAwNTQ2XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vZGlyZWN0aXZlcy9jb3VudFRvLmNvZmZlZSdcbmltcG9ydCAnLi9kaXJlY3RpdmVzL2RvbUluaXQuY29mZmVlJ1xuaW1wb3J0ICcuL2RpcmVjdGl2ZXMvZm9jdXNNZS5jb2ZmZWUnXG5pbXBvcnQgJy4vZGlyZWN0aXZlcy9sb3dlci5jb2ZmZWUnXG5pbXBvcnQgJy4vZGlyZWN0aXZlcy9yZXBlYXREb25lLmNvZmZlZSdcbmltcG9ydCAnLi9kaXJlY3RpdmVzL3JvdGF0ZTJkLmNvZmZlZSdcbmltcG9ydCAnLi9kaXJlY3RpdmVzL3VwcGVyLmNvZmZlZSdcbmltcG9ydCAnLi9maWx0ZXJzL2FycmF5cy5jb2ZmZWUnXG5pbXBvcnQgJy4vZmlsdGVycy9zdHJpbmdzLmNvZmZlZSdcbmltcG9ydCAnLi9zZXJ2aWNlcy9sb2NhdGlvblN0YXRlLmNvZmZlZSdcbmltcG9ydCAnLi9zZXJ2aWNlcy9wbGF5Um91dGVzLmNvZmZlZSdcbmltcG9ydCAnLi9zZXJ2aWNlcy9yZXRhaW5TY3JvbGwuY29mZmVlJ1xuaW1wb3J0ICcuL3NlcnZpY2VzL3NlYXJjaEZvcm0uY29mZmVlJ1xuXG5hbmd1bGFyLm1vZHVsZSgnbmdFeHRlbmRzLmRpcmVjdGl2ZXMnLCBbXG4gICAgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmNvdW50VG8nLFxuICAgICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5kb21Jbml0JyxcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMuZm9jdXNNZScsXG4gICAgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmxvd2VyJyxcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMucmVwZWF0RG9uZScsXG4gICAgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLnJvdGF0ZTJkJyxcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMudXBwZXInXG5dKTtcblxuYW5ndWxhci5tb2R1bGUoJ25nRXh0ZW5kcy5maWx0ZXJzJywgW1xuICAgICduZ0V4dGVuZHMuZmlsdGVycy5hcnJheXMnLFxuICAgICduZ0V4dGVuZHMuZmlsdGVycy5zdHJpbmdzJ1xuXSk7XG5cbmFuZ3VsYXIubW9kdWxlKCduZ0V4dGVuZHMuc2VydmljZXMnLCBbXG4gICAgJ25nRXh0ZW5kcy5zZXJ2aWNlcy5wbGF5Um91dGVzJyxcbiAgICAnbmdFeHRlbmRzLnNlcnZpY2VzLnNlYXJjaEZvcm0nXG5dKTtcblxuYW5ndWxhci5tb2R1bGUoJ25nRXh0ZW5kcycsIFtcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMnLFxuICAgICduZ0V4dGVuZHMuZmlsdGVycycsXG4gICAgJ25nRXh0ZW5kcy5zZXJ2aWNlcydcbl0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXG5cbmlmICghJCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFuZ3VsYXIuZXh0ZW5kcyByZXF1aXJlcyBhIEFuZ3VsYXJKU1wiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFycy9hbmd1bGFyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmlmICghJCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFuZ3VsYXIuZXh0ZW5kcyByZXF1aXJlcyBhIGpRdWVyeVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSAkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFycy9qcXVlcnkuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn1cbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbmd1bGFyXCJcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmNvdW50VG8nLCBbXVxuXG4uZGlyZWN0aXZlICdleENvdW50VG8nLCBbJyR0aW1lb3V0JywgKCR0aW1lb3V0KSAtPlxuICByZXBsYWNlOiBmYWxzZVxuICBzY29wZTogdHJ1ZVxuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgIGVsZW0gPSBlbGVtZW50WzBdXG4gICAgbnVtID0gbnVsbFxuICAgIHJlZnJlc2hJbnRlcnZhbCA9IG51bGxcbiAgICBzdGVwcyA9IG51bGxcbiAgICBzdGVwID0gbnVsbFxuICAgIGNvdW50VG8gPSBudWxsXG4gICAgaW5jcmVtZW50ID0gbnVsbFxuXG4gICAgY2FsY3VsYXRlID0gLT5cbiAgICAgIHJlZnJlc2hJbnRlcnZhbCA9IDMwXG4gICAgICBzdGVwID0gMFxuICAgICAgc2NvcGUudGltb3V0SWQgPSBudWxsXG4gICAgICBjb3VudFRvID0gcGFyc2VJbnQoYXR0cnMuZXhDb3VudFRvKSB8fCAwXG4gICAgICBzY29wZS52YWx1ZSA9IHBhcnNlSW50KGF0dHJzLnZhbHVlLCAxMCkgfHwgMFxuICAgICAgZHVyYXRpb24gPSAocGFyc2VGbG9hdChhdHRycy5kdXJhdGlvbikgKiAxMDAwKSB8fCAwXG5cbiAgICAgIHN0ZXBzID0gTWF0aC5jZWlsKGR1cmF0aW9uIC8gcmVmcmVzaEludGVydmFsKVxuICAgICAgaW5jcmVtZW50ID0gKGNvdW50VG8gLSBzY29wZS52YWx1ZSkgLyBzdGVwc1xuICAgICAgbnVtID0gc2NvcGUudmFsdWVcbiAgICAgIHJldHVyblxuXG4gICAgdGljayA9IC0+XG4gICAgICBzY29wZS50aW1vdXRJZCA9ICR0aW1lb3V0KC0+XG4gICAgICAgIG51bSArPSBpbmNyZW1lbnRcbiAgICAgICAgc3RlcCsrXG4gICAgICAgIGlmIHN0ZXAgPj0gc3RlcHNcbiAgICAgICAgICAkdGltZW91dC5jYW5jZWwoc2NvcGUudGltb3V0SWQpXG4gICAgICAgICAgbnVtID0gY291bnRUb1xuICAgICAgICAgIGVsZW0udGV4dENvbnRlbnQgPSBjb3VudFRvXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBlbGVtLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChudW0pXG4gICAgICAgICAgdGljaygpXG4gICAgICAsIHJlZnJlc2hJbnRlcnZhbClcbiAgICAgIHJldHVyblxuXG4gICAgc3RhcnQgPSAtPlxuICAgICAgJHRpbWVvdXQuY2FuY2VsKHNjb3BlLnRpbW91dElkKSAgaWYgc2NvcGUudGltb3V0SWQ/XG4gICAgICBjYWxjdWxhdGUoKVxuICAgICAgdGljaygpXG4gICAgICByZXR1cm5cblxuICAgIGF0dHJzLiRvYnNlcnZlICdleENvdW50VG8nLCAodmFsKSAtPiBzdGFydCgpICBpZiB2YWw/XG4gICAgYXR0cnMuJG9ic2VydmUgJ3ZhbHVlJywgLT4gc3RhcnQoKVxuICAgIHJldHVyblxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RpcmVjdGl2ZXMvY291bnRUby5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmRvbUluaXQnLCBbXVxuXG4uZGlyZWN0aXZlICdleERvbUluaXQnLCBbLT5cbiAgcmVzdHJpY3Q6ICdBJyxcbiAgbGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgLT5cbiAgICBhdHRycy4kb2JzZXJ2ZSAnZXhEb21Jbml0JywgKHZhbHVlKSAtPiBzY29wZS4kZXZhbCh2YWx1ZSk/KGVsZW1lbnQpXG4gICAgcmV0dXJuXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGlyZWN0aXZlcy9kb21Jbml0LmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMuZm9jdXNNZScsIFtdXG5cbi5kaXJlY3RpdmUgJ2V4Rm9jdXNNZScsIFstPlxuICBzY29wZTpcbiAgICB0cmlnZ2VyOiAnPWV4Rm9jdXNNZSdcbiAgbGluazogKHNjb3BlLCBlbGVtZW50KSAtPlxuICAgIHNjb3BlLiR3YXRjaCAndHJpZ2dlcicsICh2YWx1ZSkgLT5cbiAgICAgIGlmIHR5cGVvZiB2YWx1ZSBpcyAnYm9vbGVhbidcbiAgICAgICAgZWxlbWVudFtpZiB2YWx1ZSB0aGVuICdmb2N1cycgZWxzZSAnYmx1ciddPygpXG4gICAgICAgIHNjb3BlLnRyaWdnZXIgPSBudWxsXG4gICAgICByZXR1cm5cbiAgICByZXR1cm5cbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kaXJlY3RpdmVzL2ZvY3VzTWUuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5sb3dlcicsIFtdXG5cbi5kaXJlY3RpdmUgJ2V4TG93ZXInLCBbLT5cbiAgcmVxdWlyZTogJ25nTW9kZWwnXG4gIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMsIG1vZGVsQ3RybCkgLT5cbiAgICB0b0xvd2VyID0gKGlucHV0VmFsdWUpIC0+XG4gICAgICBsb3dlcmVkID0gaWYgaW5wdXRWYWx1ZSB0aGVuIGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSBlbHNlIGlucHV0VmFsdWVcbiAgICAgIHVubGVzcyBsb3dlcmVkIGlzIGlucHV0VmFsdWVcbiAgICAgICAgZWxlbSA9IGVsZW1lbnRbMF1cbiAgICAgICAgc3RhcnQgPSBlbGVtLnNlbGVjdGlvblN0YXJ0XG4gICAgICAgIGVuZCA9IGVsZW0uc2VsZWN0aW9uRW5kXG4gICAgICAgIG1vZGVsQ3RybC4kc2V0Vmlld1ZhbHVlIGxvd2VyZWRcbiAgICAgICAgbW9kZWxDdHJsLiRyZW5kZXIoKVxuICAgICAgICBlbGVtLnNldFNlbGVjdGlvblJhbmdlPyhzdGFydCwgZW5kKVxuICAgICAgbG93ZXJlZFxuXG4gICAgbW9kZWxDdHJsLiRwYXJzZXJzLnB1c2ggdG9Mb3dlclxuICAgIHRvTG93ZXIgc2NvcGVbYXR0cnMubmdNb2RlbF1cbiAgICByZXR1cm5cbl1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RpcmVjdGl2ZXMvbG93ZXIuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5yZXBlYXREb25lJywgW11cblxuLmRpcmVjdGl2ZSAnZXhSZXBlYXREb25lJywgWy0+XG4gIHJlc3RyaWN0OiAnQScsXG4gIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpIC0+XG4gICAgaWYgKGF0dHJzLm5nUmVwZWF0PyBvciBhdHRycy5uZ1JlcGVhdFN0YXJ0PykgYW5kIHNjb3BlLiRsYXN0XG4gICAgICBhdHRycy4kb2JzZXJ2ZSAnZXhSZXBlYXREb25lJywgKHZhbHVlKSAtPiBzY29wZS4kZXZhbCh2YWx1ZSk/KGVsZW1lbnQpXG4gICAgcmV0dXJuXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGlyZWN0aXZlcy9yZXBlYXREb25lLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMucm90YXRlMmQnLCBbXVxuXG4uZGlyZWN0aXZlICdleFJvdGF0ZTJkJywgWy0+XG4gIHNjb3BlOlxuICAgIHZhbHVlOiAnPWV4Um90YXRlMmQnXG4gICAgbGltaXQ6ICc9J1xuICAgIGFuZ2xlOiAnPSdcbiAgbGluazogKHNjb3BlLCBlbGVtZW50KSAtPlxuICAgIHNjb3BlLiR3YXRjaENvbGxlY3Rpb24gJ1t2YWx1ZSwgbGltaXQsIGFuZ2xlXScsICh2YWx1ZXMpIC0+XG4gICAgICB2YWx1ZSA9IHZhbHVlc1swXSBvciAwXG4gICAgICBsaW1pdCA9IHZhbHVlc1sxXSBvciAxMFxuICAgICAgYW5nbGUgPSB2YWx1ZXNbMl0gb3IgMzYwXG4gICAgICBkZWdyZWUgPSB2YWx1ZSAqIGFuZ2xlIC8gbGltaXRcbiAgICAgIGVsZW1lbnQuY3NzXG4gICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICdyb3RhdGUoJyArIGRlZ3JlZSArICdkZWcpJ1xuICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBkZWdyZWUgKyAnZGVnKSdcbiAgICAgICAgJ3RyYW5zZm9ybSc6ICdyb3RhdGUoJyArIGRlZ3JlZSArICdkZWcpJ1xuICAgICAgcmV0dXJuXG4gICAgcmV0dXJuXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGlyZWN0aXZlcy9yb3RhdGUyZC5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLnVwcGVyJywgW11cblxuLmRpcmVjdGl2ZSAnZXhVcHBlcicsIFstPlxuICByZXF1aXJlOiAnbmdNb2RlbCdcbiAgbGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycywgbW9kZWxDdHJsKSAtPlxuICAgIHRvVXBwZXIgPSAoaW5wdXRWYWx1ZSkgLT5cbiAgICAgIHVwcGVyZWQgPSBpZiBpbnB1dFZhbHVlIHRoZW4gaW5wdXRWYWx1ZS50b1VwcGVyQ2FzZSgpIGVsc2UgaW5wdXRWYWx1ZVxuICAgICAgdW5sZXNzIHVwcGVyZWQgaXMgaW5wdXRWYWx1ZVxuICAgICAgICBlbGVtID0gZWxlbWVudFswXVxuICAgICAgICBzdGFydCA9IGVsZW0uc2VsZWN0aW9uU3RhcnRcbiAgICAgICAgZW5kID0gZWxlbS5zZWxlY3Rpb25FbmRcbiAgICAgICAgbW9kZWxDdHJsLiRzZXRWaWV3VmFsdWUgdXBwZXJlZFxuICAgICAgICBtb2RlbEN0cmwuJHJlbmRlcigpXG4gICAgICAgIGVsZW0uc2V0U2VsZWN0aW9uUmFuZ2U/KHN0YXJ0LCBlbmQpXG4gICAgICB1cHBlcmVkXG5cbiAgICBtb2RlbEN0cmwuJHBhcnNlcnMucHVzaCB0b1VwcGVyXG4gICAgdG9VcHBlciBzY29wZVthdHRycy5uZ01vZGVsXVxuICAgIHJldHVyblxuXVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGlyZWN0aXZlcy91cHBlci5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5maWx0ZXJzLmFycmF5cycsIFtdXG5cbi5maWx0ZXIgJ21ha2VBcnJheScsIFstPiAoaW5wdXQpIC0+IGlmIGFuZ3VsYXIuaXNBcnJheSBpbnB1dCB0aGVuIGlucHV0IGVsc2UgJC5tYWtlQXJyYXkoaW5wdXQpXVxuXG4uZmlsdGVyICdyYW5nZScsIFstPiAoZnJvbSwgdG8sIHN0ZXAgPSAxKSAtPlxuICBpc051bWJlciA9IHR5cGVvZiBmcm9tIGlzICdudW1iZXInIGFuZCB0eXBlb2YgdG8gaXMgJ251bWJlcidcbiAgYmVnaW4gPSBpZiBpc051bWJlciB0aGVuIGZyb20gZWxzZSBmcm9tLnRvU3RyaW5nKCkuY2hhckNvZGVBdCgwKVxuICBlbmQgPSBpZiBpc051bWJlciB0aGVuIHRvIGVsc2UgdG8udG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApXG4gIGZvciBpIGluIFtiZWdpbi4uZW5kXSBieSAoaWYgYmVnaW4gPiBlbmQgdGhlbiAtc3RlcCBlbHNlIHN0ZXApXG4gICAgaWYgaXNOdW1iZXIgdGhlbiBpIGVsc2UgU3RyaW5nLmZyb21DaGFyQ29kZShpKVxuXVxuXG4uZmlsdGVyICdqb2luJywgWy0+IChpbnB1dCwgc2VwKSAtPiAkLm1ha2VBcnJheShpbnB1dCkuam9pbihzZXApXVxuXG4uZmlsdGVyICdjb21iaW5lJywgWyckcGFyc2UnLCAoJHBhcnNlKSAtPiAoaW5wdXQsIHRyYW5zZm9ybWVycy4uLikgLT5cbiAgaW5wdXQgPSBbaW5wdXRdICB1bmxlc3MgYW5ndWxhci5pc0FycmF5IGlucHV0XG4gIChmb3IgdmFsdWUgaW4gaW5wdXRcbiAgICBmb3IgdCBpbiB0cmFuc2Zvcm1lcnNcbiAgICAgIGlmIGFuZ3VsYXIuaXNGdW5jdGlvbiB0XG4gICAgICAgIHZhbHVlID0gdCh2YWx1ZSlcbiAgICAgIGVsc2UgaWYgdHlwZW9mIHQgaXMgJ3N0cmluZydcbiAgICAgICAgdmFsdWUgPSBzd2l0Y2ggdFxuICAgICAgICAgIHdoZW4gJz1pbnRlZ2VyJyB0aGVuIHBhcnNlSW50KHZhbHVlKVxuICAgICAgICAgIHdoZW4gJz1mbG9hdCcgICB0aGVuIHBhcnNlRmxvYXQodmFsdWUpXG4gICAgICAgICAgZWxzZSAkcGFyc2UodCkodmFsdWUpXG4gICAgdmFsdWVcbiAgKS5yZWR1Y2UgKHQsIHYpIC0+IHQgKyB2XG5dXG5cbi5maWx0ZXIgJ2xpbWl0JywgWy0+IChpbnB1dCwgcGFnZSwgaXRlbXNQZXJQYWdlKSAtPlxuICBmcm9tID0gKHBhZ2UgLSAxKSAqIGl0ZW1zUGVyUGFnZVxuICB0byA9IGZyb20gKyBpdGVtc1BlclBhZ2VcbiAgJC5tYWtlQXJyYXkoaW5wdXQpW2Zyb20uLi50b11cbl1cblxuLmZpbHRlciAndHJpbScsIFstPiAoaW5wdXQpIC0+XG4gIGlmIGFuZ3VsYXIuaXNBcnJheSBpbnB1dFxuICAgIGE/LnRvU3RyaW5nPygpPy50cmltPygpICBmb3IgYSBpbiBpbnB1dFxuICBlbHNlXG4gICAgaW5wdXQ/LnRvU3RyaW5nPygpPy50cmltPygpXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZmlsdGVycy9hcnJheXMuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZmlsdGVycy5zdHJpbmdzJywgW11cblxuLmZpbHRlciAndHJ1c3RBcycsIFsnJHNjZScsICgkc2NlKSAtPiAoaW5wdXQsIHR5cGUpIC0+ICRzY2UudHJ1c3RBcyh0eXBlLCBpbnB1dCldXG4uZmlsdGVyICd0cnVzdEFzQ3NzJywgWyckc2NlJywgKCRzY2UpIC0+ICRzY2UudHJ1c3RBc0Nzc11cbi5maWx0ZXIgJ3RydXN0QXNIdG1sJywgWyckc2NlJywgKCRzY2UpIC0+ICRzY2UudHJ1c3RBc0h0bWxdXG4uZmlsdGVyICd0cnVzdEFzSnMnLCBbJyRzY2UnLCAoJHNjZSkgLT4gJHNjZS50cnVzdEFzSnNdXG4uZmlsdGVyICd0cnVzdEFzUmVzb3VyY2VVcmwnLCBbJyRzY2UnLCAoJHNjZSkgLT4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmxdXG4uZmlsdGVyICd0cnVzdEFzVXJsJywgWyckc2NlJywgKCRzY2UpIC0+ICRzY2UudHJ1c3RBc1VybF1cblxuLmZpbHRlciAncmVwbGFjZScsIFstPiAoaW5wdXQsIHNlYXJjaCwgcmVwbGFjZW1lbnQsIG9wdGlvbnMpIC0+XG4gIHNlYXJjaCA9IG5ldyBSZWdFeHAoKHNlYXJjaCBvciAnJykudG9TdHJpbmcoKSwgb3B0aW9ucykgIHVubGVzcyBzZWFyY2ggaW5zdGFuY2VvZiBSZWdFeHBcbiAgKGlucHV0IG9yICcnKS50b1N0cmluZygpLnJlcGxhY2Uoc2VhcmNoLCByZXBsYWNlbWVudClcbl1cblxuLmZpbHRlciAnbmwyYnInLCBbLT4gKGlucHV0KSAtPiAoaW5wdXQgb3IgJycpLnRvU3RyaW5nKCkucmVwbGFjZSgvKFxcclxcbnxcXG5cXHJ8XFxyfFxcbikvZywgJzxici8+JyldXG5cbi5maWx0ZXIgJ2JyMm5sJywgWy0+IChpbnB1dCkgLT4gKGlucHV0IG9yICcnKS50b1N0cmluZygpLnJlcGxhY2UoLyg8YnI+fDxiclxcLz4pL2csICdcXG4nKV1cblxuLmZpbHRlciAnc3BhY2UybmJzcCcsIFstPiAoaW5wdXQpIC0+IChpbnB1dCBvciAnJykudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHMvZywgJyZuYnNwOycpXVxuXG4uZmlsdGVyICduYnNwMnNwYWNlJywgWy0+IChpbnB1dCkgLT4gKGlucHV0IG9yICcnKS50b1N0cmluZygpLnJlcGxhY2UoLyZuYnNwOy9nLCAnICcpXVxuXG4uZmlsdGVyICdzcGxpdCcsIFstPiAoaW5wdXQsIHNlcGFyYXRvcnMsIGxpbWl0KSAtPlxuICB1bmxlc3MgaW5wdXQ/IHRoZW4gaW5wdXRcbiAgZWxzZSBpbnB1dC50b1N0cmluZygpLnNwbGl0KG5ldyBSZWdFeHAoXG4gICAgKGlmIGFuZ3VsYXIuaXNBcnJheSBzZXBhcmF0b3JzIHRoZW4gc2VwYXJhdG9ycy5qb2luKCd8JykgZWxzZSBzZXBhcmF0b3JzKS50b1N0cmluZygpXG4gICksIGxpbWl0KVxuXVxuXG4uZmlsdGVyICdjdXRzdHJpbmcnLCBbLT4gKGlucHV0LCBtYXhMZW5ndGggPSAxMCwgc3VmZml4ID0gJy4uLicpIC0+XG4gIHVubGVzcyBpbnB1dD8gdGhlbiBpbnB1dFxuICBlbHNlXG4gICAgaW5wdXRTdHJpbmcgPSBpbnB1dC50b1N0cmluZygpXG4gICAgaW5wdXRTdHJpbmcgPSBpbnB1dFN0cmluZ1swLi4ubWF4TGVuZ3RoXSArIHN1ZmZpeCAgaWYgaW5wdXRTdHJpbmcubGVuZ3RoID4gbWF4TGVuZ3RoIC0gc3VmZml4Lmxlbmd0aFxuICAgIGlucHV0U3RyaW5nXG5dXG5cbi5maWx0ZXIgJ3JvdW5kY3V0c3RyaW5nJywgWy0+IChpbnB1dCwgc2VhcmNoLCBtYXhMZW5ndGggPSAyMCwgcHJlZml4ID0gJy4uLicsIHN1ZmZpeCA9ICcuLi4nKSAtPlxuICB1bmxlc3MgaW5wdXQ/IHRoZW4gaW5wdXRcbiAgZWxzZVxuICAgIGlucHV0U3RyaW5nID0gaW5wdXQudG9TdHJpbmcoKVxuICAgIHNlYXJjaFN0cmluZyA9IChzZWFyY2ggb3IgJycpLnRvU3RyaW5nKClcbiAgICBpID0gaW5wdXRTdHJpbmcuaW5kZXhPZihzZWFyY2hTdHJpbmcpXG4gICAgaWYgaSBpcyAtMVxuICAgICAgaW5wdXRTdHJpbmcgPSBpbnB1dFN0cmluZ1swLi4ubWF4TGVuZ3RoXSArIHN1ZmZpeCAgaWYgaW5wdXRTdHJpbmcubGVuZ3RoID4gbWF4TGVuZ3RoIC0gc3VmZml4Lmxlbmd0aFxuICAgICAgaW5wdXRTdHJpbmdcbiAgICBlbHNlXG4gICAgICAoZG9DdXQgPSAoYmVmb3JlLCBhZnRlciwgc3RyaW5nLCByZXN0TGVuZ3RoKSAtPlxuICAgICAgICBpZiByZXN0TGVuZ3RoIDw9IDAgb3IgYmVmb3JlLmxlbmd0aCBpcyAwIGFuZCBhZnRlci5sZW5ndGggaXMgMFxuICAgICAgICAgIGVtcHR5T3JQcmVmaXggPSBpZiBiZWZvcmUubGVuZ3RoID4gMCB0aGVuIHByZWZpeCBlbHNlICcnXG4gICAgICAgICAgZW1wdHlPclN1ZmZpeCA9IGlmIGFmdGVyLmxlbmd0aCA+IDAgdGhlbiBzdWZmaXggZWxzZSAnJ1xuICAgICAgICAgIGVtcHR5T3JQcmVmaXggKyBzdHJpbmcgKyBlbXB0eU9yU3VmZml4XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBoYWxmTGVuZ3RoID0gcmVzdExlbmd0aCAvIDJcbiAgICAgICAgICBpZiBoYWxmTGVuZ3RoIDwgMVxuICAgICAgICAgICAgZG9DdXQoYmVmb3JlWzAuLi4tMV0sIGFmdGVyLCBiZWZvcmVbLTEuLi5dICsgc3RyaW5nLCAwKVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHBpZWNlT2ZCZWZvcmUgPSBiZWZvcmVbLWhhbGZMZW5ndGguLi5dXG4gICAgICAgICAgICBwaWVjZU9mQWZ0ZXIgPSBhZnRlclswLi4uaGFsZkxlbmd0aF1cbiAgICAgICAgICAgIHJlc3RPZkJlZm9yZSA9IGJlZm9yZVswLi4uLWhhbGZMZW5ndGhdXG4gICAgICAgICAgICByZXN0T2ZBZnRlciA9IGFmdGVyW2hhbGZMZW5ndGguLi5dXG4gICAgICAgICAgICBkb0N1dChcbiAgICAgICAgICAgICAgcmVzdE9mQmVmb3JlLFxuICAgICAgICAgICAgICByZXN0T2ZBZnRlcixcbiAgICAgICAgICAgICAgcGllY2VPZkJlZm9yZSArIHN0cmluZyArIHBpZWNlT2ZBZnRlcixcbiAgICAgICAgICAgICAgcmVzdExlbmd0aCAtIHBpZWNlT2ZCZWZvcmUubGVuZ3RoIC0gcGllY2VPZkFmdGVyLmxlbmd0aFxuICAgICAgICAgICAgKVxuICAgICAgKShcbiAgICAgICAgaW5wdXRTdHJpbmdbMC4uLmldLFxuICAgICAgICBpbnB1dFN0cmluZ1tpICsgc2VhcmNoU3RyaW5nLmxlbmd0aC4uLl0sXG4gICAgICAgIHNlYXJjaFN0cmluZyxcbiAgICAgICAgbWF4TGVuZ3RoIC0gc2VhcmNoU3RyaW5nLmxlbmd0aCAtIHByZWZpeC5sZW5ndGggLSBzdWZmaXgubGVuZ3RoXG4gICAgICApXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZmlsdGVycy9zdHJpbmdzLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLnNlcnZpY2VzLmxvY2F0aW9uU3RhdGUnLCBbXVxuXG4ucnVuIFtcbiAgJyRyb290U2NvcGUnLCAnJHdpbmRvdycsICckbG9jYXRpb24nXG4gICgkcm9vdFNjb3BlLCAkd2luZG93LCAkbG9jYXRpb24pIC0+XG4gICAgJHJvb3RTY29wZS4kb24gJyRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MnLCAtPiAkbG9jYXRpb24uJCRhY3R1YWxQYXRoID0gJGxvY2F0aW9uLnBhdGgoKVxuICAgICRyb290U2NvcGUuJHdhdGNoICgtPiAkbG9jYXRpb24ucGF0aCgpKSwgKG5ld0xvY2F0aW9uKSAtPiAkbG9jYXRpb24uaXNIaXN0b3J5Q2hhbmdlZCA9ICRsb2NhdGlvbi4kJGFjdHVhbFBhdGggaXMgbmV3TG9jYXRpb25cbiAgICByZXR1cm5cbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zZXJ2aWNlcy9sb2NhdGlvblN0YXRlLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLnNlcnZpY2VzLnBsYXlSb3V0ZXMnLCBbXVxuXG4ucHJvdmlkZXIgJyRwbGF5Um91dGVzJywgWy0+XG4gIEBqc1JvdXRlcyA9IHdpbmRvdy5Sb3V0ZXNcbiAgQCRnZXQgPSBbXG4gICAgJyRodHRwJywgJyRsb2NhdGlvbidcbiAgICAoJGh0dHAsICRsb2NhdGlvbikgPT5cbiAgICAgIHdyYXBIdHRwID0gKGZuKSAtPiAtPlxuICAgICAgICByb3V0ZU9iamVjdCA9IGZuLmFwcGx5KEAsIGFyZ3VtZW50cylcbiAgICAgICAgaHR0cE1ldGhvZCA9IHJvdXRlT2JqZWN0Lm1ldGhvZC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGFic29sdXRlVVJMID0gcm91dGVPYmplY3QuYWJzb2x1dGVVUkwoKVxuICAgICAgICBob3N0ID0gYWJzb2x1dGVVUkwubWF0Y2goL15odHRwcz86XFwvXFwvKFteXFwvPyNdKykoPzpbXFwvPyNdfCQpL2kpP1sxXVxuICAgICAgICB1cmwgPSBpZiAkbG9jYXRpb24uaG9zdCgpIGlzIGhvc3QgdGhlbiByb3V0ZU9iamVjdC51cmwgZWxzZSBhYnNvbHV0ZVVSTFxuICAgICAgICByZXMgPVxuICAgICAgICAgICRyb3V0ZTogcm91dGVPYmplY3RcbiAgICAgICAgICBtZXRob2Q6IGh0dHBNZXRob2RcbiAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgIGFic29sdXRlVVJMOiByb3V0ZU9iamVjdC5hYnNvbHV0ZVVSTFxuICAgICAgICAgIHdlYlNvY2tldFVSTDogcm91dGVPYmplY3Qud2ViU29ja2V0VVJMXG4gICAgICAgIHJlc1todHRwTWV0aG9kXSA9IChvcHRpb25zKSAtPiAkaHR0cFtodHRwTWV0aG9kXSh1cmwsIG9wdGlvbnMpXG4gICAgICAgIHJlc1xuXG4gICAgICAoYWRkUm91dGVzID0gKHBsYXlSb3V0ZXNPYmplY3QsIGpzUm91dGVzT2JqZWN0KSAtPlxuICAgICAgICBmb3Iga2V5LCB2YWx1ZSBvZiBqc1JvdXRlc09iamVjdFxuICAgICAgICAgIGlmIGFuZ3VsYXIuaXNGdW5jdGlvbiB2YWx1ZVxuICAgICAgICAgICAgcGxheVJvdXRlc09iamVjdFtrZXldID0gd3JhcEh0dHAodmFsdWUpXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgcGxheVJvdXRlc09iamVjdFtrZXldID0ge30gIHVubGVzcyBrZXkgb2YgcGxheVJvdXRlc09iamVjdFxuICAgICAgICAgICAgYWRkUm91dGVzKHBsYXlSb3V0ZXNPYmplY3Rba2V5XSwgdmFsdWUpXG4gICAgICAgIHJldHVyblxuICAgICAgKShwbGF5Um91dGVzID0ge30sIEBqc1JvdXRlcylcbiAgICAgIHBsYXlSb3V0ZXNcbiAgXVxuICByZXR1cm5cbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zZXJ2aWNlcy9wbGF5Um91dGVzLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFnbG9iYWwuZG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkuZXh0ZW5kcyByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFycy93aW5kb3cuanNcbiAqKi8iLCIndXNlIHN0cmljdCdcblxucmVxdWlyZSgnLi9sb2NhdGlvblN0YXRlLmNvZmZlZScpXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuc2VydmljZXMucmV0YWluU2Nyb2xsJywgWyduZ0V4dGVuZHMuc2VydmljZXMubG9jYXRpb25TdGF0ZSddXG5cbi5wcm92aWRlciAnJHJldGFpblNjcm9sbCcsIFstPlxuICBAdGFyZ2V0ID0gbnVsbFxuICBAaW5hY3RpdmVPbmNlID0gZmFsc2VcbiAgQHRyYWNraW5nID0gZmFsc2VcbiAgQHBvc2l0aW9ucyA9IHt9XG4gIEBtYXhUcnlDb3VudCA9IDEwXG4gIEB3aGV0aGVyU2Nyb2xsRXZhbHVhdG9yID0gWyckbG9jYXRpb24nLCAoJGxvY2F0aW9uKSAtPiAkbG9jYXRpb24uaXNIaXN0b3J5Q2hhbmdlZF1cbiAgQGlzRGVsYXllZEV2YWx1YXRvciA9IFstPiBmYWxzZV1cbiAgQCRnZXQgPSBbLT4gQF1cbiAgcmV0dXJuXG5dXG5cbi5ydW4gW1xuICAnJHJvb3RTY29wZScsICckcmV0YWluU2Nyb2xsJywgJyRsb2NhdGlvbicsICckdGltZW91dCcsICckaW5qZWN0b3InXG4gICgkcm9vdFNjb3BlLCAkcmV0YWluU2Nyb2xsLCAkbG9jYXRpb24sICR0aW1lb3V0LCAkaW5qZWN0b3IpIC0+XG4gICAgJHRhcmdldCA9ICQoJHJldGFpblNjcm9sbC50YXJnZXQgb3Igd2luZG93KVxuICAgICR0YXJnZXQub24gJ3Njcm9sbCcsIC0+ICRyZXRhaW5TY3JvbGwucG9zaXRpb25zWyRsb2NhdGlvbi51cmwoKV0gPSAkdGFyZ2V0LnNjcm9sbFRvcCgpICBpZiAkcmV0YWluU2Nyb2xsLnRyYWNraW5nXG5cbiAgICAkcm9vdFNjb3BlLiRvbiAnJGxvY2F0aW9uQ2hhbmdlU3VjY2VzcycsIC0+ICRyZXRhaW5TY3JvbGwuaW5hY3RpdmVPbmNlID0gJHJldGFpblNjcm9sbC50cmFja2luZyA9IGZhbHNlXG4gICAgJHJvb3RTY29wZS4kb24gJyR2aWV3Q29udGVudExvYWRlZCcsIChlKSAtPlxuICAgICAgaWYgJHJldGFpblNjcm9sbC5pbmFjdGl2ZU9uY2Ugb3Igbm90ICRpbmplY3Rvci5pbnZva2UoJHJldGFpblNjcm9sbC53aGV0aGVyU2Nyb2xsRXZhbHVhdG9yKVxuICAgICAgICBjb25zb2xlLmxvZyBcIm1vdmUgdG8gc2Nyb2xsIHRvcCAlb1wiLCAkdGFyZ2V0WzBdXG4gICAgICAgICR0YXJnZXQuc2Nyb2xsVG9wKDApXG4gICAgICAgICRyZXRhaW5TY3JvbGwudHJhY2tpbmcgPSB0cnVlXG4gICAgICBlbHNlXG4gICAgICAgIGlzQ2FuY2VsID0gZmFsc2VcbiAgICAgICAgY2FuY2VsU2Nyb2xsaW5nID0gLT4gJHJldGFpblNjcm9sbC50cmFja2luZyA9IHRydWU7IGNvbnNvbGUubG9nICdDYW5jZWxlZCBzY3JvbGxpbmcgJW8nLCAkdGFyZ2V0WzBdXG4gICAgICAgIG9mZlNjb3BlRGVzdHJveSA9IGUudGFyZ2V0U2NvcGUuJG9uICckZGVzdHJveScsIC0+IGlzQ2FuY2VsID0gdHJ1ZTsgb2ZmU2Nyb2xsQ2FuY2VsZXIoKVxuICAgICAgICBvZmZTY3JvbGxDYW5jZWxlciA9IC0+ICR0YXJnZXQub2ZmICdzY3JvbGwucmV0YWluU2Nyb2xsLWNhbmNlbGVyJyArIGUudGFyZ2V0U2NvcGUuJGlkXG4gICAgICAgIG9uU2Nyb2xsQ2FuY2VsZXIgPSAtPiAkdGFyZ2V0Lm9uZSAnc2Nyb2xsLnJldGFpblNjcm9sbC1jYW5jZWxlcicgKyBlLnRhcmdldFNjb3BlLiRpZCwgLT4gaXNDYW5jZWwgPSB0cnVlOyBvZmZTY29wZURlc3Ryb3koKVxuICAgICAgICAkdGltZW91dCgtPlxuICAgICAgICAgIGlmIGlzQ2FuY2VsIHRoZW4gY2FuY2VsU2Nyb2xsaW5nKClcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB0cnlDb3VudCA9ICRyZXRhaW5TY3JvbGwubWF4VHJ5Q291bnRcbiAgICAgICAgICAgIHNjcm9sbFRvcCA9ICRyZXRhaW5TY3JvbGwucG9zaXRpb25zWyRsb2NhdGlvbi51cmwoKV0gb3IgMFxuICAgICAgICAgICAgKHRyeVNjcm9sbCA9IC0+XG4gICAgICAgICAgICAgIGlmIGlzQ2FuY2VsIHRoZW4gY2FuY2VsU2Nyb2xsaW5nKClcbiAgICAgICAgICAgICAgZWxzZSBpZiAkaW5qZWN0b3IuaW52b2tlKCRyZXRhaW5TY3JvbGwuaXNEZWxheWVkRXZhbHVhdG9yKSB0aGVuICR0aW1lb3V0KHRyeVNjcm9sbCwgMjAwKVxuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgb2ZmU2Nyb2xsQ2FuY2VsZXIoKVxuICAgICAgICAgICAgICAgICR0YXJnZXQuc2Nyb2xsVG9wKHNjcm9sbFRvcClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyBcIiN7MSArICRyZXRhaW5TY3JvbGwubWF4VHJ5Q291bnQgLSB0cnlDb3VudH0gdHJ5IG1vdmUgdG8gc2Nyb2xsaW5nICN7JHRhcmdldC5zY3JvbGxUb3AoKX0gLyAje3Njcm9sbFRvcH0gJW9cIiwgJHRhcmdldFswXVxuICAgICAgICAgICAgICAgIGlmICR0YXJnZXQuc2Nyb2xsVG9wKCkgaXMgc2Nyb2xsVG9wIG9yIC0tdHJ5Q291bnQgPD0gMFxuICAgICAgICAgICAgICAgICAgJHJldGFpblNjcm9sbC50cmFja2luZyA9IHRydWVcbiAgICAgICAgICAgICAgICAgIG9mZlNjb3BlRGVzdHJveSgpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgb25TY3JvbGxDYW5jZWxlcigpXG4gICAgICAgICAgICAgICAgICAkdGltZW91dCh0cnlTY3JvbGwsIDEwMClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICApKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgLCAwKVxuICAgICAgcmV0dXJuXG4gICAgcmV0dXJuXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2VydmljZXMvcmV0YWluU2Nyb2xsLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuc2VydmljZXMuc2VhcmNoRm9ybScsIFtdXG5cbi5mYWN0b3J5ICckc2VhcmNoRm9ybScsIFstPiAob3B0aW9ucykgLT5cblxuICBjbGFzcyBTZWFyY2hGb3JtXG4gICAgY29uc3RydWN0b3I6IChAb3B0aW9ucykgLT5cbiAgICAgIGlmIGFuZ3VsYXIuaXNGdW5jdGlvbiBAb3B0aW9uc1xuICAgICAgICBAb3B0aW9ucyA9IGFjdGlvbjogQG9wdGlvbnNcbiAgICAgIEBvcHRpb25zID0gYW5ndWxhci5leHRlbmQoXG4gICAgICAgIGRlZmF1bHRzOiB7fVxuICAgICAgICBwcmVTdWJtaXQ6IChmb3JtLCBmaWx0ZXJzLCB1bmZpbHRlcnMpIC0+XG4gICAgICAgIHByZVJlc2V0OiAoZm9ybSkgLT5cbiAgICAgICAgc3VibWl0OiAoZm9ybSwgZmlsdGVycywgdW5maWx0ZXJzKSAtPlxuICAgICAgICByZXNldDogKGZvcm0pIC0+XG4gICAgICAgIGFjdGlvbjogKGZvcm0pIC0+XG4gICAgICAgICN0cmFuc2Zvcm06IChrZXksIHZhbHVlKSAtPiB2YWx1ZVxuICAgICAgLCBAb3B0aW9ucylcblxuICAgICAgQGN1cnJlbnQgPSBhbmd1bGFyLmNvcHkoQG9wdGlvbnMuZGVmYXVsdHMpIG9yIHt9XG4gICAgICBAZm9ybSA9IGFuZ3VsYXIuY29weShAb3B0aW9ucy5kZWZhdWx0cykgb3Ige31cblxuICAgIGlzUHJpc3RpbmU6IC0+IGFuZ3VsYXIuZXF1YWxzKEBjdXJyZW50LCBAZm9ybSlcbiAgICBpc0RpcnR5OiAtPiBub3QgQGlzUHJpc3RpbmUoKVxuICAgIGlzQ2hhbmdlZDogLT4gbm90IGFuZ3VsYXIuZXF1YWxzKEBjdXJyZW50LCBAb3B0aW9ucy5kZWZhdWx0cylcblxuICAgIHN1Ym1pdDogKGZvcm0sIGZpbHRlcnMsIHVuZmlsdGVycykgLT5cbiAgICAgIGlmIEBvcHRpb25zLnByZVN1Ym1pdD8oZm9ybSwgZmlsdGVycywgdW5maWx0ZXJzKSBpc250IGZhbHNlXG4gICAgICAgIGlmIGZpbHRlcnM/XG4gICAgICAgICAgaXNGaWx0ZXJlZCA9IChba2V5LCB2YWx1ZV0gIGZvciBrZXksIHZhbHVlIG9mIGZpbHRlcnMgb3Ige30pLmV2ZXJ5IChrZXlXaXRoVmFsdWUpID0+XG4gICAgICAgICAgICBba2V5LCB2YWx1ZV0gPSBrZXlXaXRoVmFsdWVcbiAgICAgICAgICAgIGFuZ3VsYXIuZXF1YWxzKEBmb3JtW2tleV0sIHZhbHVlLCB0cnVlKVxuICAgICAgICAgIGFuZ3VsYXIuZXh0ZW5kKEBmb3JtLCBhbmd1bGFyLmNvcHkoaWYgaXNGaWx0ZXJlZCB0aGVuIHVuZmlsdGVycyBlbHNlIGZpbHRlcnMpKVxuICAgICAgICBAY3VycmVudCA9IGFuZ3VsYXIuY29weShAZm9ybSlcbiAgICAgICAgQG9wdGlvbnMuc3VibWl0Pyhmb3JtLCBmaWx0ZXJzLCB1bmZpbHRlcnMpXG4gICAgICAgIEBvcHRpb25zLmFjdGlvbj8oZm9ybSlcbiAgICAgIEBcblxuICAgIHJlc2V0OiAoZm9ybSkgLT5cbiAgICAgIGlmIEBvcHRpb25zLnByZVJlc2V0Pyhmb3JtKSBpc250IGZhbHNlXG4gICAgICAgIGZvcm0/LiRzZXRQcmlzdGluZT8oKVxuICAgICAgICBAY3VycmVudCA9IGFuZ3VsYXIuY29weShAb3B0aW9ucy5kZWZhdWx0cykgb3Ige31cbiAgICAgICAgQGZvcm0gPSBhbmd1bGFyLmNvcHkoQG9wdGlvbnMuZGVmYXVsdHMpIG9yIHt9XG4gICAgICAgIEBvcHRpb25zLnJlc2V0Pyhmb3JtKVxuICAgICAgICBAb3B0aW9ucy5hY3Rpb24/KGZvcm0pXG4gICAgICBAXG5cbiAgICBwYXJhbXM6IChyZWZyZXNoLCBkZWZhdWx0cykgLT5cbiAgICAgIFtkZWZhdWx0cywgcmVmcmVzaF0gPSBbcmVmcmVzaCwgZmFsc2VdICBpZiBhbmd1bGFyLmlzT2JqZWN0IHJlZnJlc2hcblxuICAgICAgcGFyYW1zID0gaWYgcmVmcmVzaCBpcyB0cnVlXG4gICAgICAgIGFuZ3VsYXIuY29weShAY3VycmVudClcbiAgICAgIGVsc2VcbiAgICAgICAgYW5ndWxhci5jb3B5KEBmb3JtID0gYW5ndWxhci5jb3B5KEBjdXJyZW50KSlcblxuICAgICAgZm9yIGtleSBvZiBAb3B0aW9ucy5kZWZhdWx0c1xuICAgICAgICBwYXJhbXNba2V5XSA9IHBhcmFtc1trZXldLmZpbHRlcigoYSkgLT4gISFhKSAgaWYgYW5ndWxhci5pc0FycmF5IHBhcmFtc1trZXldXG5cbiAgICAgIHBhcmFtcyA9IGFuZ3VsYXIuZXh0ZW5kIHBhcmFtcywgYW5ndWxhci5jb3B5KGRlZmF1bHRzKVxuXG4gICAgICBpZiBhbmd1bGFyLmlzRnVuY3Rpb24gQG9wdGlvbnMudHJhbnNmb3JtXG4gICAgICAgIHBhcmFtc1trZXldID0gQG9wdGlvbnMudHJhbnNmb3JtKGtleSwgdmFsdWUpICBmb3Iga2V5LCB2YWx1ZSBvZiBwYXJhbXNcblxuICAgICAgcGFyYW1zXG5cbiAgbmV3IFNlYXJjaEZvcm0ob3B0aW9ucylcbl1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcnZpY2VzL3NlYXJjaEZvcm0uY29mZmVlXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==