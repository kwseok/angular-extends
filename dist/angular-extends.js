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
	var slice = [].slice;
	
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
	              res[httpMethod] = function() {
	                var ajax, args;
	                args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	                ajax = $http[httpMethod];
	                return ajax.apply(ajax, [].concat.call([url], args));
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
	    throw new Error("Angular.extends requires a window with a document");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0ZDBiNDg4NzgxNjhjN2QyM2ZmYiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvYW5ndWxhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFycy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9jb3VudFRvLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9kb21Jbml0LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9mb2N1c01lLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9sb3dlci5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvcmVwZWF0RG9uZS5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvcm90YXRlMmQuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL3VwcGVyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy9hcnJheXMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXJzL3N0cmluZ3MuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9sb2NhdGlvblN0YXRlLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGxheVJvdXRlcy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvd2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yZXRhaW5TY3JvbGwuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zZWFyY2hGb3JtLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0EsNERBQVksQ0FBQzs7cUJBRU4sQ0FBNkI7O3FCQUM3QixDQUE2Qjs7cUJBQzdCLENBQTZCOztxQkFDN0IsQ0FBMkI7O3FCQUMzQixFQUFnQzs7cUJBQ2hDLEVBQThCOztxQkFDOUIsRUFBMkI7O3FCQUMzQixFQUF5Qjs7cUJBQ3pCLEVBQTBCOztxQkFDMUIsRUFBaUM7O3FCQUNqQyxFQUE4Qjs7cUJBQzlCLEVBQWdDOztxQkFDaEMsRUFBOEI7O0FBRXJDLFFBQU8sQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FDbkMsOEJBQThCLEVBQzlCLDhCQUE4QixFQUM5Qiw4QkFBOEIsRUFDOUIsNEJBQTRCLEVBQzVCLGlDQUFpQyxFQUNqQywrQkFBK0IsRUFDL0IsNEJBQTRCLENBQy9CLENBQUMsQ0FBQzs7QUFFSCxRQUFPLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQ2hDLDBCQUEwQixFQUMxQiwyQkFBMkIsQ0FDOUIsQ0FBQyxDQUFDOztBQUVILFFBQU8sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FDakMsK0JBQStCLEVBQy9CLCtCQUErQixDQUNsQyxDQUFD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QUFDLFFBQVIsQ0FBaUIsT0FBakIsQ0FBM0M7YUFBQSxNQUFzQixDQUFDLE9BQUQsRUFBVSxLQUFWLENBQXRCLEVBQUMsaUJBQUQsRUFBVyxpQkFBWDs7V0FFQSxTQUFZLFlBQVcsSUFBZCxHQUNQLE9BQU8sQ0FBQyxJQUFSLENBQWEsSUFBQyxRQUFkLENBRE8sR0FHUCxPQUFPLENBQUMsSUFBUixDQUFhLElBQUMsS0FBRCxHQUFRLE9BQU8sQ0FBQyxJQUFSLENBQWEsSUFBQyxRQUFkLENBQXJCO0FBRUY7YUFDRSxJQUFpRCxPQUFPLENBQUMsT0FBUixDQUFnQixNQUFPLEtBQXZCLENBQWpEO2VBQUEsTUFBTyxLQUFQLEdBQWMsTUFBTyxLQUFJLENBQUMsTUFBWixDQUFtQixTQUFDLENBQUQ7d0JBQU8sQ0FBQyxDQUFDO2VBQVQsQ0FBbkIsRUFBZDs7QUFERjtXQUdBLFNBQVMsT0FBTyxDQUFDLE1BQVIsQ0FBZSxNQUFmLEVBQXVCLE9BQU8sQ0FBQyxJQUFSLENBQWEsUUFBYixDQUF2QjtXQUVULElBQUcsT0FBTyxDQUFDLFVBQVIsQ0FBbUIsSUFBQyxRQUFPLENBQUMsU0FBNUIsQ0FBSDtBQUNFOztlQUFBLE1BQU8sS0FBUCxHQUFjLElBQUMsUUFBTyxDQUFDLFNBQVQsQ0FBbUIsR0FBbkIsRUFBd0IsS0FBeEI7QUFBZCxjQURGOztrQkFHQTtTQWhCTTs7Ozs7Y0FrQk4sZUFBVyxPQUFYO0tBOURzQjtHQUFILENBQUQ7RUFGeEIiLCJmaWxlIjoiYW5ndWxhci1leHRlbmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwiYW5ndWxhclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJqcXVlcnlcIiwgXCJhbmd1bGFyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIiksIHJlcXVpcmUoXCJhbmd1bGFyXCIpKSA6IGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSwgcm9vdFtcImFuZ3VsYXJcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0ZDBiNDg4NzgxNjhjN2QyM2ZmYlxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL2RpcmVjdGl2ZXMvY291bnRUby5jb2ZmZWUnXG5pbXBvcnQgJy4vZGlyZWN0aXZlcy9kb21Jbml0LmNvZmZlZSdcbmltcG9ydCAnLi9kaXJlY3RpdmVzL2ZvY3VzTWUuY29mZmVlJ1xuaW1wb3J0ICcuL2RpcmVjdGl2ZXMvbG93ZXIuY29mZmVlJ1xuaW1wb3J0ICcuL2RpcmVjdGl2ZXMvcmVwZWF0RG9uZS5jb2ZmZWUnXG5pbXBvcnQgJy4vZGlyZWN0aXZlcy9yb3RhdGUyZC5jb2ZmZWUnXG5pbXBvcnQgJy4vZGlyZWN0aXZlcy91cHBlci5jb2ZmZWUnXG5pbXBvcnQgJy4vZmlsdGVycy9hcnJheXMuY29mZmVlJ1xuaW1wb3J0ICcuL2ZpbHRlcnMvc3RyaW5ncy5jb2ZmZWUnXG5pbXBvcnQgJy4vc2VydmljZXMvbG9jYXRpb25TdGF0ZS5jb2ZmZWUnXG5pbXBvcnQgJy4vc2VydmljZXMvcGxheVJvdXRlcy5jb2ZmZWUnXG5pbXBvcnQgJy4vc2VydmljZXMvcmV0YWluU2Nyb2xsLmNvZmZlZSdcbmltcG9ydCAnLi9zZXJ2aWNlcy9zZWFyY2hGb3JtLmNvZmZlZSdcblxuYW5ndWxhci5tb2R1bGUoJ25nRXh0ZW5kcy5kaXJlY3RpdmVzJywgW1xuICAgICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5jb3VudFRvJyxcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMuZG9tSW5pdCcsXG4gICAgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmZvY3VzTWUnLFxuICAgICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5sb3dlcicsXG4gICAgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLnJlcGVhdERvbmUnLFxuICAgICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5yb3RhdGUyZCcsXG4gICAgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLnVwcGVyJ1xuXSk7XG5cbmFuZ3VsYXIubW9kdWxlKCduZ0V4dGVuZHMuZmlsdGVycycsIFtcbiAgICAnbmdFeHRlbmRzLmZpbHRlcnMuYXJyYXlzJyxcbiAgICAnbmdFeHRlbmRzLmZpbHRlcnMuc3RyaW5ncydcbl0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnbmdFeHRlbmRzLnNlcnZpY2VzJywgW1xuICAgICduZ0V4dGVuZHMuc2VydmljZXMucGxheVJvdXRlcycsXG4gICAgJ25nRXh0ZW5kcy5zZXJ2aWNlcy5zZWFyY2hGb3JtJ1xuXSk7XG5cbmFuZ3VsYXIubW9kdWxlKCduZ0V4dGVuZHMnLCBbXG4gICAgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzJyxcbiAgICAnbmdFeHRlbmRzLmZpbHRlcnMnLFxuICAgICduZ0V4dGVuZHMuc2VydmljZXMnXG5dKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xuXG5pZiAoISQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbmd1bGFyLmV4dGVuZHMgcmVxdWlyZXMgYSBBbmd1bGFySlNcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvYW5ndWxhci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG5pZiAoISQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbmd1bGFyLmV4dGVuZHMgcmVxdWlyZXMgYSBqUXVlcnlcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gJDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvanF1ZXJ5LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9XG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYW5ndWxhclwiXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5jb3VudFRvJywgW11cblxuLmRpcmVjdGl2ZSAnZXhDb3VudFRvJywgWyckdGltZW91dCcsICgkdGltZW91dCkgLT5cbiAgcmVwbGFjZTogZmFsc2VcbiAgc2NvcGU6IHRydWVcbiAgbGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgLT5cbiAgICBlbGVtID0gZWxlbWVudFswXVxuICAgIG51bSA9IG51bGxcbiAgICByZWZyZXNoSW50ZXJ2YWwgPSBudWxsXG4gICAgc3RlcHMgPSBudWxsXG4gICAgc3RlcCA9IG51bGxcbiAgICBjb3VudFRvID0gbnVsbFxuICAgIGluY3JlbWVudCA9IG51bGxcblxuICAgIGNhbGN1bGF0ZSA9IC0+XG4gICAgICByZWZyZXNoSW50ZXJ2YWwgPSAzMFxuICAgICAgc3RlcCA9IDBcbiAgICAgIHNjb3BlLnRpbW91dElkID0gbnVsbFxuICAgICAgY291bnRUbyA9IHBhcnNlSW50KGF0dHJzLmV4Q291bnRUbykgfHwgMFxuICAgICAgc2NvcGUudmFsdWUgPSBwYXJzZUludChhdHRycy52YWx1ZSwgMTApIHx8IDBcbiAgICAgIGR1cmF0aW9uID0gKHBhcnNlRmxvYXQoYXR0cnMuZHVyYXRpb24pICogMTAwMCkgfHwgMFxuXG4gICAgICBzdGVwcyA9IE1hdGguY2VpbChkdXJhdGlvbiAvIHJlZnJlc2hJbnRlcnZhbClcbiAgICAgIGluY3JlbWVudCA9IChjb3VudFRvIC0gc2NvcGUudmFsdWUpIC8gc3RlcHNcbiAgICAgIG51bSA9IHNjb3BlLnZhbHVlXG4gICAgICByZXR1cm5cblxuICAgIHRpY2sgPSAtPlxuICAgICAgc2NvcGUudGltb3V0SWQgPSAkdGltZW91dCgtPlxuICAgICAgICBudW0gKz0gaW5jcmVtZW50XG4gICAgICAgIHN0ZXArK1xuICAgICAgICBpZiBzdGVwID49IHN0ZXBzXG4gICAgICAgICAgJHRpbWVvdXQuY2FuY2VsKHNjb3BlLnRpbW91dElkKVxuICAgICAgICAgIG51bSA9IGNvdW50VG9cbiAgICAgICAgICBlbGVtLnRleHRDb250ZW50ID0gY291bnRUb1xuICAgICAgICBlbHNlXG4gICAgICAgICAgZWxlbS50ZXh0Q29udGVudCA9IE1hdGgucm91bmQobnVtKVxuICAgICAgICAgIHRpY2soKVxuICAgICAgLCByZWZyZXNoSW50ZXJ2YWwpXG4gICAgICByZXR1cm5cblxuICAgIHN0YXJ0ID0gLT5cbiAgICAgICR0aW1lb3V0LmNhbmNlbChzY29wZS50aW1vdXRJZCkgIGlmIHNjb3BlLnRpbW91dElkP1xuICAgICAgY2FsY3VsYXRlKClcbiAgICAgIHRpY2soKVxuICAgICAgcmV0dXJuXG5cbiAgICBhdHRycy4kb2JzZXJ2ZSAnZXhDb3VudFRvJywgKHZhbCkgLT4gc3RhcnQoKSAgaWYgdmFsP1xuICAgIGF0dHJzLiRvYnNlcnZlICd2YWx1ZScsIC0+IHN0YXJ0KClcbiAgICByZXR1cm5cbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kaXJlY3RpdmVzL2NvdW50VG8uY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5kb21Jbml0JywgW11cblxuLmRpcmVjdGl2ZSAnZXhEb21Jbml0JywgWy0+XG4gIHJlc3RyaWN0OiAnQScsXG4gIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpIC0+XG4gICAgYXR0cnMuJG9ic2VydmUgJ2V4RG9tSW5pdCcsICh2YWx1ZSkgLT4gc2NvcGUuJGV2YWwodmFsdWUpPyhlbGVtZW50KVxuICAgIHJldHVyblxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RpcmVjdGl2ZXMvZG9tSW5pdC5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmZvY3VzTWUnLCBbXVxuXG4uZGlyZWN0aXZlICdleEZvY3VzTWUnLCBbLT5cbiAgc2NvcGU6XG4gICAgdHJpZ2dlcjogJz1leEZvY3VzTWUnXG4gIGxpbms6IChzY29wZSwgZWxlbWVudCkgLT5cbiAgICBzY29wZS4kd2F0Y2ggJ3RyaWdnZXInLCAodmFsdWUpIC0+XG4gICAgICBpZiB0eXBlb2YgdmFsdWUgaXMgJ2Jvb2xlYW4nXG4gICAgICAgIGVsZW1lbnRbaWYgdmFsdWUgdGhlbiAnZm9jdXMnIGVsc2UgJ2JsdXInXT8oKVxuICAgICAgICBzY29wZS50cmlnZ2VyID0gbnVsbFxuICAgICAgcmV0dXJuXG4gICAgcmV0dXJuXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGlyZWN0aXZlcy9mb2N1c01lLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMubG93ZXInLCBbXVxuXG4uZGlyZWN0aXZlICdleExvd2VyJywgWy0+XG4gIHJlcXVpcmU6ICduZ01vZGVsJ1xuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBtb2RlbEN0cmwpIC0+XG4gICAgdG9Mb3dlciA9IChpbnB1dFZhbHVlKSAtPlxuICAgICAgbG93ZXJlZCA9IGlmIGlucHV0VmFsdWUgdGhlbiBpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkgZWxzZSBpbnB1dFZhbHVlXG4gICAgICB1bmxlc3MgbG93ZXJlZCBpcyBpbnB1dFZhbHVlXG4gICAgICAgIGVsZW0gPSBlbGVtZW50WzBdXG4gICAgICAgIHN0YXJ0ID0gZWxlbS5zZWxlY3Rpb25TdGFydFxuICAgICAgICBlbmQgPSBlbGVtLnNlbGVjdGlvbkVuZFxuICAgICAgICBtb2RlbEN0cmwuJHNldFZpZXdWYWx1ZSBsb3dlcmVkXG4gICAgICAgIG1vZGVsQ3RybC4kcmVuZGVyKClcbiAgICAgICAgZWxlbS5zZXRTZWxlY3Rpb25SYW5nZT8oc3RhcnQsIGVuZClcbiAgICAgIGxvd2VyZWRcblxuICAgIG1vZGVsQ3RybC4kcGFyc2Vycy5wdXNoIHRvTG93ZXJcbiAgICB0b0xvd2VyIHNjb3BlW2F0dHJzLm5nTW9kZWxdXG4gICAgcmV0dXJuXG5dXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kaXJlY3RpdmVzL2xvd2VyLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMucmVwZWF0RG9uZScsIFtdXG5cbi5kaXJlY3RpdmUgJ2V4UmVwZWF0RG9uZScsIFstPlxuICByZXN0cmljdDogJ0EnLFxuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgIGlmIChhdHRycy5uZ1JlcGVhdD8gb3IgYXR0cnMubmdSZXBlYXRTdGFydD8pIGFuZCBzY29wZS4kbGFzdFxuICAgICAgYXR0cnMuJG9ic2VydmUgJ2V4UmVwZWF0RG9uZScsICh2YWx1ZSkgLT4gc2NvcGUuJGV2YWwodmFsdWUpPyhlbGVtZW50KVxuICAgIHJldHVyblxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RpcmVjdGl2ZXMvcmVwZWF0RG9uZS5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLnJvdGF0ZTJkJywgW11cblxuLmRpcmVjdGl2ZSAnZXhSb3RhdGUyZCcsIFstPlxuICBzY29wZTpcbiAgICB2YWx1ZTogJz1leFJvdGF0ZTJkJ1xuICAgIGxpbWl0OiAnPSdcbiAgICBhbmdsZTogJz0nXG4gIGxpbms6IChzY29wZSwgZWxlbWVudCkgLT5cbiAgICBzY29wZS4kd2F0Y2hDb2xsZWN0aW9uICdbdmFsdWUsIGxpbWl0LCBhbmdsZV0nLCAodmFsdWVzKSAtPlxuICAgICAgdmFsdWUgPSB2YWx1ZXNbMF0gb3IgMFxuICAgICAgbGltaXQgPSB2YWx1ZXNbMV0gb3IgMTBcbiAgICAgIGFuZ2xlID0gdmFsdWVzWzJdIG9yIDM2MFxuICAgICAgZGVncmVlID0gdmFsdWUgKiBhbmdsZSAvIGxpbWl0XG4gICAgICBlbGVtZW50LmNzc1xuICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBkZWdyZWUgKyAnZGVnKSdcbiAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogJ3JvdGF0ZSgnICsgZGVncmVlICsgJ2RlZyknXG4gICAgICAgICd0cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBkZWdyZWUgKyAnZGVnKSdcbiAgICAgIHJldHVyblxuICAgIHJldHVyblxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RpcmVjdGl2ZXMvcm90YXRlMmQuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZGlyZWN0aXZlcy51cHBlcicsIFtdXG5cbi5kaXJlY3RpdmUgJ2V4VXBwZXInLCBbLT5cbiAgcmVxdWlyZTogJ25nTW9kZWwnXG4gIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMsIG1vZGVsQ3RybCkgLT5cbiAgICB0b1VwcGVyID0gKGlucHV0VmFsdWUpIC0+XG4gICAgICB1cHBlcmVkID0gaWYgaW5wdXRWYWx1ZSB0aGVuIGlucHV0VmFsdWUudG9VcHBlckNhc2UoKSBlbHNlIGlucHV0VmFsdWVcbiAgICAgIHVubGVzcyB1cHBlcmVkIGlzIGlucHV0VmFsdWVcbiAgICAgICAgZWxlbSA9IGVsZW1lbnRbMF1cbiAgICAgICAgc3RhcnQgPSBlbGVtLnNlbGVjdGlvblN0YXJ0XG4gICAgICAgIGVuZCA9IGVsZW0uc2VsZWN0aW9uRW5kXG4gICAgICAgIG1vZGVsQ3RybC4kc2V0Vmlld1ZhbHVlIHVwcGVyZWRcbiAgICAgICAgbW9kZWxDdHJsLiRyZW5kZXIoKVxuICAgICAgICBlbGVtLnNldFNlbGVjdGlvblJhbmdlPyhzdGFydCwgZW5kKVxuICAgICAgdXBwZXJlZFxuXG4gICAgbW9kZWxDdHJsLiRwYXJzZXJzLnB1c2ggdG9VcHBlclxuICAgIHRvVXBwZXIgc2NvcGVbYXR0cnMubmdNb2RlbF1cbiAgICByZXR1cm5cbl1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RpcmVjdGl2ZXMvdXBwZXIuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZmlsdGVycy5hcnJheXMnLCBbXVxuXG4uZmlsdGVyICdtYWtlQXJyYXknLCBbLT4gKGlucHV0KSAtPiBpZiBhbmd1bGFyLmlzQXJyYXkgaW5wdXQgdGhlbiBpbnB1dCBlbHNlICQubWFrZUFycmF5KGlucHV0KV1cblxuLmZpbHRlciAncmFuZ2UnLCBbLT4gKGZyb20sIHRvLCBzdGVwID0gMSkgLT5cbiAgaXNOdW1iZXIgPSB0eXBlb2YgZnJvbSBpcyAnbnVtYmVyJyBhbmQgdHlwZW9mIHRvIGlzICdudW1iZXInXG4gIGJlZ2luID0gaWYgaXNOdW1iZXIgdGhlbiBmcm9tIGVsc2UgZnJvbS50b1N0cmluZygpLmNoYXJDb2RlQXQoMClcbiAgZW5kID0gaWYgaXNOdW1iZXIgdGhlbiB0byBlbHNlIHRvLnRvU3RyaW5nKCkuY2hhckNvZGVBdCgwKVxuICBmb3IgaSBpbiBbYmVnaW4uLmVuZF0gYnkgKGlmIGJlZ2luID4gZW5kIHRoZW4gLXN0ZXAgZWxzZSBzdGVwKVxuICAgIGlmIGlzTnVtYmVyIHRoZW4gaSBlbHNlIFN0cmluZy5mcm9tQ2hhckNvZGUoaSlcbl1cblxuLmZpbHRlciAnam9pbicsIFstPiAoaW5wdXQsIHNlcCkgLT4gJC5tYWtlQXJyYXkoaW5wdXQpLmpvaW4oc2VwKV1cblxuLmZpbHRlciAnY29tYmluZScsIFsnJHBhcnNlJywgKCRwYXJzZSkgLT4gKGlucHV0LCB0cmFuc2Zvcm1lcnMuLi4pIC0+XG4gIGlucHV0ID0gW2lucHV0XSAgdW5sZXNzIGFuZ3VsYXIuaXNBcnJheSBpbnB1dFxuICAoZm9yIHZhbHVlIGluIGlucHV0XG4gICAgZm9yIHQgaW4gdHJhbnNmb3JtZXJzXG4gICAgICBpZiBhbmd1bGFyLmlzRnVuY3Rpb24gdFxuICAgICAgICB2YWx1ZSA9IHQodmFsdWUpXG4gICAgICBlbHNlIGlmIHR5cGVvZiB0IGlzICdzdHJpbmcnXG4gICAgICAgIHZhbHVlID0gc3dpdGNoIHRcbiAgICAgICAgICB3aGVuICc9aW50ZWdlcicgdGhlbiBwYXJzZUludCh2YWx1ZSlcbiAgICAgICAgICB3aGVuICc9ZmxvYXQnICAgdGhlbiBwYXJzZUZsb2F0KHZhbHVlKVxuICAgICAgICAgIGVsc2UgJHBhcnNlKHQpKHZhbHVlKVxuICAgIHZhbHVlXG4gICkucmVkdWNlICh0LCB2KSAtPiB0ICsgdlxuXVxuXG4uZmlsdGVyICdsaW1pdCcsIFstPiAoaW5wdXQsIHBhZ2UsIGl0ZW1zUGVyUGFnZSkgLT5cbiAgZnJvbSA9IChwYWdlIC0gMSkgKiBpdGVtc1BlclBhZ2VcbiAgdG8gPSBmcm9tICsgaXRlbXNQZXJQYWdlXG4gICQubWFrZUFycmF5KGlucHV0KVtmcm9tLi4udG9dXG5dXG5cbi5maWx0ZXIgJ3RyaW0nLCBbLT4gKGlucHV0KSAtPlxuICBpZiBhbmd1bGFyLmlzQXJyYXkgaW5wdXRcbiAgICBhPy50b1N0cmluZz8oKT8udHJpbT8oKSAgZm9yIGEgaW4gaW5wdXRcbiAgZWxzZVxuICAgIGlucHV0Py50b1N0cmluZz8oKT8udHJpbT8oKVxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ZpbHRlcnMvYXJyYXlzLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmZpbHRlcnMuc3RyaW5ncycsIFtdXG5cbi5maWx0ZXIgJ3RydXN0QXMnLCBbJyRzY2UnLCAoJHNjZSkgLT4gKGlucHV0LCB0eXBlKSAtPiAkc2NlLnRydXN0QXModHlwZSwgaW5wdXQpXVxuLmZpbHRlciAndHJ1c3RBc0NzcycsIFsnJHNjZScsICgkc2NlKSAtPiAkc2NlLnRydXN0QXNDc3NdXG4uZmlsdGVyICd0cnVzdEFzSHRtbCcsIFsnJHNjZScsICgkc2NlKSAtPiAkc2NlLnRydXN0QXNIdG1sXVxuLmZpbHRlciAndHJ1c3RBc0pzJywgWyckc2NlJywgKCRzY2UpIC0+ICRzY2UudHJ1c3RBc0pzXVxuLmZpbHRlciAndHJ1c3RBc1Jlc291cmNlVXJsJywgWyckc2NlJywgKCRzY2UpIC0+ICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsXVxuLmZpbHRlciAndHJ1c3RBc1VybCcsIFsnJHNjZScsICgkc2NlKSAtPiAkc2NlLnRydXN0QXNVcmxdXG5cbi5maWx0ZXIgJ3JlcGxhY2UnLCBbLT4gKGlucHV0LCBzZWFyY2gsIHJlcGxhY2VtZW50LCBvcHRpb25zKSAtPlxuICBzZWFyY2ggPSBuZXcgUmVnRXhwKChzZWFyY2ggb3IgJycpLnRvU3RyaW5nKCksIG9wdGlvbnMpICB1bmxlc3Mgc2VhcmNoIGluc3RhbmNlb2YgUmVnRXhwXG4gIChpbnB1dCBvciAnJykudG9TdHJpbmcoKS5yZXBsYWNlKHNlYXJjaCwgcmVwbGFjZW1lbnQpXG5dXG5cbi5maWx0ZXIgJ25sMmJyJywgWy0+IChpbnB1dCkgLT4gKGlucHV0IG9yICcnKS50b1N0cmluZygpLnJlcGxhY2UoLyhcXHJcXG58XFxuXFxyfFxccnxcXG4pL2csICc8YnIvPicpXVxuXG4uZmlsdGVyICdicjJubCcsIFstPiAoaW5wdXQpIC0+IChpbnB1dCBvciAnJykudG9TdHJpbmcoKS5yZXBsYWNlKC8oPGJyPnw8YnJcXC8+KS9nLCAnXFxuJyldXG5cbi5maWx0ZXIgJ3NwYWNlMm5ic3AnLCBbLT4gKGlucHV0KSAtPiAoaW5wdXQgb3IgJycpLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxzL2csICcmbmJzcDsnKV1cblxuLmZpbHRlciAnbmJzcDJzcGFjZScsIFstPiAoaW5wdXQpIC0+IChpbnB1dCBvciAnJykudG9TdHJpbmcoKS5yZXBsYWNlKC8mbmJzcDsvZywgJyAnKV1cblxuLmZpbHRlciAnc3BsaXQnLCBbLT4gKGlucHV0LCBzZXBhcmF0b3JzLCBsaW1pdCkgLT5cbiAgdW5sZXNzIGlucHV0PyB0aGVuIGlucHV0XG4gIGVsc2UgaW5wdXQudG9TdHJpbmcoKS5zcGxpdChuZXcgUmVnRXhwKFxuICAgIChpZiBhbmd1bGFyLmlzQXJyYXkgc2VwYXJhdG9ycyB0aGVuIHNlcGFyYXRvcnMuam9pbignfCcpIGVsc2Ugc2VwYXJhdG9ycykudG9TdHJpbmcoKVxuICApLCBsaW1pdClcbl1cblxuLmZpbHRlciAnY3V0c3RyaW5nJywgWy0+IChpbnB1dCwgbWF4TGVuZ3RoID0gMTAsIHN1ZmZpeCA9ICcuLi4nKSAtPlxuICB1bmxlc3MgaW5wdXQ/IHRoZW4gaW5wdXRcbiAgZWxzZVxuICAgIGlucHV0U3RyaW5nID0gaW5wdXQudG9TdHJpbmcoKVxuICAgIGlucHV0U3RyaW5nID0gaW5wdXRTdHJpbmdbMC4uLm1heExlbmd0aF0gKyBzdWZmaXggIGlmIGlucHV0U3RyaW5nLmxlbmd0aCA+IG1heExlbmd0aCAtIHN1ZmZpeC5sZW5ndGhcbiAgICBpbnB1dFN0cmluZ1xuXVxuXG4uZmlsdGVyICdyb3VuZGN1dHN0cmluZycsIFstPiAoaW5wdXQsIHNlYXJjaCwgbWF4TGVuZ3RoID0gMjAsIHByZWZpeCA9ICcuLi4nLCBzdWZmaXggPSAnLi4uJykgLT5cbiAgdW5sZXNzIGlucHV0PyB0aGVuIGlucHV0XG4gIGVsc2VcbiAgICBpbnB1dFN0cmluZyA9IGlucHV0LnRvU3RyaW5nKClcbiAgICBzZWFyY2hTdHJpbmcgPSAoc2VhcmNoIG9yICcnKS50b1N0cmluZygpXG4gICAgaSA9IGlucHV0U3RyaW5nLmluZGV4T2Yoc2VhcmNoU3RyaW5nKVxuICAgIGlmIGkgaXMgLTFcbiAgICAgIGlucHV0U3RyaW5nID0gaW5wdXRTdHJpbmdbMC4uLm1heExlbmd0aF0gKyBzdWZmaXggIGlmIGlucHV0U3RyaW5nLmxlbmd0aCA+IG1heExlbmd0aCAtIHN1ZmZpeC5sZW5ndGhcbiAgICAgIGlucHV0U3RyaW5nXG4gICAgZWxzZVxuICAgICAgKGRvQ3V0ID0gKGJlZm9yZSwgYWZ0ZXIsIHN0cmluZywgcmVzdExlbmd0aCkgLT5cbiAgICAgICAgaWYgcmVzdExlbmd0aCA8PSAwIG9yIGJlZm9yZS5sZW5ndGggaXMgMCBhbmQgYWZ0ZXIubGVuZ3RoIGlzIDBcbiAgICAgICAgICBlbXB0eU9yUHJlZml4ID0gaWYgYmVmb3JlLmxlbmd0aCA+IDAgdGhlbiBwcmVmaXggZWxzZSAnJ1xuICAgICAgICAgIGVtcHR5T3JTdWZmaXggPSBpZiBhZnRlci5sZW5ndGggPiAwIHRoZW4gc3VmZml4IGVsc2UgJydcbiAgICAgICAgICBlbXB0eU9yUHJlZml4ICsgc3RyaW5nICsgZW1wdHlPclN1ZmZpeFxuICAgICAgICBlbHNlXG4gICAgICAgICAgaGFsZkxlbmd0aCA9IHJlc3RMZW5ndGggLyAyXG4gICAgICAgICAgaWYgaGFsZkxlbmd0aCA8IDFcbiAgICAgICAgICAgIGRvQ3V0KGJlZm9yZVswLi4uLTFdLCBhZnRlciwgYmVmb3JlWy0xLi4uXSArIHN0cmluZywgMClcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBwaWVjZU9mQmVmb3JlID0gYmVmb3JlWy1oYWxmTGVuZ3RoLi4uXVxuICAgICAgICAgICAgcGllY2VPZkFmdGVyID0gYWZ0ZXJbMC4uLmhhbGZMZW5ndGhdXG4gICAgICAgICAgICByZXN0T2ZCZWZvcmUgPSBiZWZvcmVbMC4uLi1oYWxmTGVuZ3RoXVxuICAgICAgICAgICAgcmVzdE9mQWZ0ZXIgPSBhZnRlcltoYWxmTGVuZ3RoLi4uXVxuICAgICAgICAgICAgZG9DdXQoXG4gICAgICAgICAgICAgIHJlc3RPZkJlZm9yZSxcbiAgICAgICAgICAgICAgcmVzdE9mQWZ0ZXIsXG4gICAgICAgICAgICAgIHBpZWNlT2ZCZWZvcmUgKyBzdHJpbmcgKyBwaWVjZU9mQWZ0ZXIsXG4gICAgICAgICAgICAgIHJlc3RMZW5ndGggLSBwaWVjZU9mQmVmb3JlLmxlbmd0aCAtIHBpZWNlT2ZBZnRlci5sZW5ndGhcbiAgICAgICAgICAgIClcbiAgICAgICkoXG4gICAgICAgIGlucHV0U3RyaW5nWzAuLi5pXSxcbiAgICAgICAgaW5wdXRTdHJpbmdbaSArIHNlYXJjaFN0cmluZy5sZW5ndGguLi5dLFxuICAgICAgICBzZWFyY2hTdHJpbmcsXG4gICAgICAgIG1heExlbmd0aCAtIHNlYXJjaFN0cmluZy5sZW5ndGggLSBwcmVmaXgubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aFxuICAgICAgKVxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ZpbHRlcnMvc3RyaW5ncy5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5zZXJ2aWNlcy5sb2NhdGlvblN0YXRlJywgW11cblxuLnJ1biBbXG4gICckcm9vdFNjb3BlJywgJyR3aW5kb3cnLCAnJGxvY2F0aW9uJ1xuICAoJHJvb3RTY29wZSwgJHdpbmRvdywgJGxvY2F0aW9uKSAtPlxuICAgICRyb290U2NvcGUuJG9uICckbG9jYXRpb25DaGFuZ2VTdWNjZXNzJywgLT4gJGxvY2F0aW9uLiQkYWN0dWFsUGF0aCA9ICRsb2NhdGlvbi5wYXRoKClcbiAgICAkcm9vdFNjb3BlLiR3YXRjaCAoLT4gJGxvY2F0aW9uLnBhdGgoKSksIChuZXdMb2NhdGlvbikgLT4gJGxvY2F0aW9uLmlzSGlzdG9yeUNoYW5nZWQgPSAkbG9jYXRpb24uJCRhY3R1YWxQYXRoIGlzIG5ld0xvY2F0aW9uXG4gICAgcmV0dXJuXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2VydmljZXMvbG9jYXRpb25TdGF0ZS5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5zZXJ2aWNlcy5wbGF5Um91dGVzJywgW11cblxuLnByb3ZpZGVyICckcGxheVJvdXRlcycsIFstPlxuICBAanNSb3V0ZXMgPSB3aW5kb3cuUm91dGVzXG4gIEAkZ2V0ID0gW1xuICAgICckaHR0cCcsICckbG9jYXRpb24nXG4gICAgKCRodHRwLCAkbG9jYXRpb24pID0+XG4gICAgICB3cmFwSHR0cCA9IChmbikgLT4gLT5cbiAgICAgICAgcm91dGVPYmplY3QgPSBmbi5hcHBseShALCBhcmd1bWVudHMpXG4gICAgICAgIGh0dHBNZXRob2QgPSByb3V0ZU9iamVjdC5tZXRob2QudG9Mb3dlckNhc2UoKVxuICAgICAgICBhYnNvbHV0ZVVSTCA9IHJvdXRlT2JqZWN0LmFic29sdXRlVVJMKClcbiAgICAgICAgaG9zdCA9IGFic29sdXRlVVJMLm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXlxcLz8jXSspKD86W1xcLz8jXXwkKS9pKT9bMV1cbiAgICAgICAgdXJsID0gaWYgJGxvY2F0aW9uLmhvc3QoKSBpcyBob3N0IHRoZW4gcm91dGVPYmplY3QudXJsIGVsc2UgYWJzb2x1dGVVUkxcbiAgICAgICAgcmVzID1cbiAgICAgICAgICAkcm91dGU6IHJvdXRlT2JqZWN0XG4gICAgICAgICAgbWV0aG9kOiBodHRwTWV0aG9kXG4gICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICBhYnNvbHV0ZVVSTDogcm91dGVPYmplY3QuYWJzb2x1dGVVUkxcbiAgICAgICAgICB3ZWJTb2NrZXRVUkw6IHJvdXRlT2JqZWN0LndlYlNvY2tldFVSTFxuICAgICAgICByZXNbaHR0cE1ldGhvZF0gPSAoYXJncy4uLikgLT5cbiAgICAgICAgICBhamF4ID0gJGh0dHBbaHR0cE1ldGhvZF1cbiAgICAgICAgICBhamF4LmFwcGx5KGFqYXgsIFtdLmNvbmNhdC5jYWxsKFt1cmxdLCBhcmdzKSlcbiAgICAgICAgcmVzXG5cbiAgICAgIChhZGRSb3V0ZXMgPSAocGxheVJvdXRlc09iamVjdCwganNSb3V0ZXNPYmplY3QpIC0+XG4gICAgICAgIGZvciBrZXksIHZhbHVlIG9mIGpzUm91dGVzT2JqZWN0XG4gICAgICAgICAgaWYgYW5ndWxhci5pc0Z1bmN0aW9uIHZhbHVlXG4gICAgICAgICAgICBwbGF5Um91dGVzT2JqZWN0W2tleV0gPSB3cmFwSHR0cCh2YWx1ZSlcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBwbGF5Um91dGVzT2JqZWN0W2tleV0gPSB7fSAgdW5sZXNzIGtleSBvZiBwbGF5Um91dGVzT2JqZWN0XG4gICAgICAgICAgICBhZGRSb3V0ZXMocGxheVJvdXRlc09iamVjdFtrZXldLCB2YWx1ZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICApKHBsYXlSb3V0ZXMgPSB7fSwgQGpzUm91dGVzKVxuICAgICAgcGxheVJvdXRlc1xuICBdXG4gIHJldHVyblxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcnZpY2VzL3BsYXlSb3V0ZXMuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIWdsb2JhbC5kb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFuZ3VsYXIuZXh0ZW5kcyByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFycy93aW5kb3cuanNcbiAqKi8iLCIndXNlIHN0cmljdCdcblxucmVxdWlyZSgnLi9sb2NhdGlvblN0YXRlLmNvZmZlZScpXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuc2VydmljZXMucmV0YWluU2Nyb2xsJywgWyduZ0V4dGVuZHMuc2VydmljZXMubG9jYXRpb25TdGF0ZSddXG5cbi5wcm92aWRlciAnJHJldGFpblNjcm9sbCcsIFstPlxuICBAdGFyZ2V0ID0gbnVsbFxuICBAaW5hY3RpdmVPbmNlID0gZmFsc2VcbiAgQHRyYWNraW5nID0gZmFsc2VcbiAgQHBvc2l0aW9ucyA9IHt9XG4gIEBtYXhUcnlDb3VudCA9IDEwXG4gIEB3aGV0aGVyU2Nyb2xsRXZhbHVhdG9yID0gWyckbG9jYXRpb24nLCAoJGxvY2F0aW9uKSAtPiAkbG9jYXRpb24uaXNIaXN0b3J5Q2hhbmdlZF1cbiAgQGlzRGVsYXllZEV2YWx1YXRvciA9IFstPiBmYWxzZV1cbiAgQCRnZXQgPSBbLT4gQF1cbiAgcmV0dXJuXG5dXG5cbi5ydW4gW1xuICAnJHJvb3RTY29wZScsICckcmV0YWluU2Nyb2xsJywgJyRsb2NhdGlvbicsICckdGltZW91dCcsICckaW5qZWN0b3InXG4gICgkcm9vdFNjb3BlLCAkcmV0YWluU2Nyb2xsLCAkbG9jYXRpb24sICR0aW1lb3V0LCAkaW5qZWN0b3IpIC0+XG4gICAgJHRhcmdldCA9ICQoJHJldGFpblNjcm9sbC50YXJnZXQgb3Igd2luZG93KVxuICAgICR0YXJnZXQub24gJ3Njcm9sbCcsIC0+ICRyZXRhaW5TY3JvbGwucG9zaXRpb25zWyRsb2NhdGlvbi51cmwoKV0gPSAkdGFyZ2V0LnNjcm9sbFRvcCgpICBpZiAkcmV0YWluU2Nyb2xsLnRyYWNraW5nXG5cbiAgICAkcm9vdFNjb3BlLiRvbiAnJGxvY2F0aW9uQ2hhbmdlU3VjY2VzcycsIC0+ICRyZXRhaW5TY3JvbGwuaW5hY3RpdmVPbmNlID0gJHJldGFpblNjcm9sbC50cmFja2luZyA9IGZhbHNlXG4gICAgJHJvb3RTY29wZS4kb24gJyR2aWV3Q29udGVudExvYWRlZCcsIChlKSAtPlxuICAgICAgaWYgJHJldGFpblNjcm9sbC5pbmFjdGl2ZU9uY2Ugb3Igbm90ICRpbmplY3Rvci5pbnZva2UoJHJldGFpblNjcm9sbC53aGV0aGVyU2Nyb2xsRXZhbHVhdG9yKVxuICAgICAgICBjb25zb2xlLmxvZyBcIm1vdmUgdG8gc2Nyb2xsIHRvcCAlb1wiLCAkdGFyZ2V0WzBdXG4gICAgICAgICR0YXJnZXQuc2Nyb2xsVG9wKDApXG4gICAgICAgICRyZXRhaW5TY3JvbGwudHJhY2tpbmcgPSB0cnVlXG4gICAgICBlbHNlXG4gICAgICAgIGlzQ2FuY2VsID0gZmFsc2VcbiAgICAgICAgY2FuY2VsU2Nyb2xsaW5nID0gLT4gJHJldGFpblNjcm9sbC50cmFja2luZyA9IHRydWU7IGNvbnNvbGUubG9nICdDYW5jZWxlZCBzY3JvbGxpbmcgJW8nLCAkdGFyZ2V0WzBdXG4gICAgICAgIG9mZlNjb3BlRGVzdHJveSA9IGUudGFyZ2V0U2NvcGUuJG9uICckZGVzdHJveScsIC0+IGlzQ2FuY2VsID0gdHJ1ZTsgb2ZmU2Nyb2xsQ2FuY2VsZXIoKVxuICAgICAgICBvZmZTY3JvbGxDYW5jZWxlciA9IC0+ICR0YXJnZXQub2ZmICdzY3JvbGwucmV0YWluU2Nyb2xsLWNhbmNlbGVyJyArIGUudGFyZ2V0U2NvcGUuJGlkXG4gICAgICAgIG9uU2Nyb2xsQ2FuY2VsZXIgPSAtPiAkdGFyZ2V0Lm9uZSAnc2Nyb2xsLnJldGFpblNjcm9sbC1jYW5jZWxlcicgKyBlLnRhcmdldFNjb3BlLiRpZCwgLT4gaXNDYW5jZWwgPSB0cnVlOyBvZmZTY29wZURlc3Ryb3koKVxuICAgICAgICAkdGltZW91dCgtPlxuICAgICAgICAgIGlmIGlzQ2FuY2VsIHRoZW4gY2FuY2VsU2Nyb2xsaW5nKClcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB0cnlDb3VudCA9ICRyZXRhaW5TY3JvbGwubWF4VHJ5Q291bnRcbiAgICAgICAgICAgIHNjcm9sbFRvcCA9ICRyZXRhaW5TY3JvbGwucG9zaXRpb25zWyRsb2NhdGlvbi51cmwoKV0gb3IgMFxuICAgICAgICAgICAgKHRyeVNjcm9sbCA9IC0+XG4gICAgICAgICAgICAgIGlmIGlzQ2FuY2VsIHRoZW4gY2FuY2VsU2Nyb2xsaW5nKClcbiAgICAgICAgICAgICAgZWxzZSBpZiAkaW5qZWN0b3IuaW52b2tlKCRyZXRhaW5TY3JvbGwuaXNEZWxheWVkRXZhbHVhdG9yKSB0aGVuICR0aW1lb3V0KHRyeVNjcm9sbCwgMjAwKVxuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgb2ZmU2Nyb2xsQ2FuY2VsZXIoKVxuICAgICAgICAgICAgICAgICR0YXJnZXQuc2Nyb2xsVG9wKHNjcm9sbFRvcClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyBcIiN7MSArICRyZXRhaW5TY3JvbGwubWF4VHJ5Q291bnQgLSB0cnlDb3VudH0gdHJ5IG1vdmUgdG8gc2Nyb2xsaW5nICN7JHRhcmdldC5zY3JvbGxUb3AoKX0gLyAje3Njcm9sbFRvcH0gJW9cIiwgJHRhcmdldFswXVxuICAgICAgICAgICAgICAgIGlmICR0YXJnZXQuc2Nyb2xsVG9wKCkgaXMgc2Nyb2xsVG9wIG9yIC0tdHJ5Q291bnQgPD0gMFxuICAgICAgICAgICAgICAgICAgJHJldGFpblNjcm9sbC50cmFja2luZyA9IHRydWVcbiAgICAgICAgICAgICAgICAgIG9mZlNjb3BlRGVzdHJveSgpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgb25TY3JvbGxDYW5jZWxlcigpXG4gICAgICAgICAgICAgICAgICAkdGltZW91dCh0cnlTY3JvbGwsIDEwMClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICApKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgLCAwKVxuICAgICAgcmV0dXJuXG4gICAgcmV0dXJuXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2VydmljZXMvcmV0YWluU2Nyb2xsLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuc2VydmljZXMuc2VhcmNoRm9ybScsIFtdXG5cbi5mYWN0b3J5ICckc2VhcmNoRm9ybScsIFstPiAob3B0aW9ucykgLT5cblxuICBjbGFzcyBTZWFyY2hGb3JtXG4gICAgY29uc3RydWN0b3I6IChAb3B0aW9ucykgLT5cbiAgICAgIGlmIGFuZ3VsYXIuaXNGdW5jdGlvbiBAb3B0aW9uc1xuICAgICAgICBAb3B0aW9ucyA9IGFjdGlvbjogQG9wdGlvbnNcbiAgICAgIEBvcHRpb25zID0gYW5ndWxhci5leHRlbmQoXG4gICAgICAgIGRlZmF1bHRzOiB7fVxuICAgICAgICBwcmVTdWJtaXQ6IChmb3JtLCBmaWx0ZXJzLCB1bmZpbHRlcnMpIC0+XG4gICAgICAgIHByZVJlc2V0OiAoZm9ybSkgLT5cbiAgICAgICAgc3VibWl0OiAoZm9ybSwgZmlsdGVycywgdW5maWx0ZXJzKSAtPlxuICAgICAgICByZXNldDogKGZvcm0pIC0+XG4gICAgICAgIGFjdGlvbjogKGZvcm0pIC0+XG4gICAgICAgICN0cmFuc2Zvcm06IChrZXksIHZhbHVlKSAtPiB2YWx1ZVxuICAgICAgLCBAb3B0aW9ucylcblxuICAgICAgQGN1cnJlbnQgPSBhbmd1bGFyLmNvcHkoQG9wdGlvbnMuZGVmYXVsdHMpIG9yIHt9XG4gICAgICBAZm9ybSA9IGFuZ3VsYXIuY29weShAb3B0aW9ucy5kZWZhdWx0cykgb3Ige31cblxuICAgIGlzUHJpc3RpbmU6IC0+IGFuZ3VsYXIuZXF1YWxzKEBjdXJyZW50LCBAZm9ybSlcbiAgICBpc0RpcnR5OiAtPiBub3QgQGlzUHJpc3RpbmUoKVxuICAgIGlzQ2hhbmdlZDogLT4gbm90IGFuZ3VsYXIuZXF1YWxzKEBjdXJyZW50LCBAb3B0aW9ucy5kZWZhdWx0cylcblxuICAgIHN1Ym1pdDogKGZvcm0sIGZpbHRlcnMsIHVuZmlsdGVycykgLT5cbiAgICAgIGlmIEBvcHRpb25zLnByZVN1Ym1pdD8oZm9ybSwgZmlsdGVycywgdW5maWx0ZXJzKSBpc250IGZhbHNlXG4gICAgICAgIGlmIGZpbHRlcnM/XG4gICAgICAgICAgaXNGaWx0ZXJlZCA9IChba2V5LCB2YWx1ZV0gIGZvciBrZXksIHZhbHVlIG9mIGZpbHRlcnMgb3Ige30pLmV2ZXJ5IChrZXlXaXRoVmFsdWUpID0+XG4gICAgICAgICAgICBba2V5LCB2YWx1ZV0gPSBrZXlXaXRoVmFsdWVcbiAgICAgICAgICAgIGFuZ3VsYXIuZXF1YWxzKEBmb3JtW2tleV0sIHZhbHVlLCB0cnVlKVxuICAgICAgICAgIGFuZ3VsYXIuZXh0ZW5kKEBmb3JtLCBhbmd1bGFyLmNvcHkoaWYgaXNGaWx0ZXJlZCB0aGVuIHVuZmlsdGVycyBlbHNlIGZpbHRlcnMpKVxuICAgICAgICBAY3VycmVudCA9IGFuZ3VsYXIuY29weShAZm9ybSlcbiAgICAgICAgQG9wdGlvbnMuc3VibWl0Pyhmb3JtLCBmaWx0ZXJzLCB1bmZpbHRlcnMpXG4gICAgICAgIEBvcHRpb25zLmFjdGlvbj8oZm9ybSlcbiAgICAgIEBcblxuICAgIHJlc2V0OiAoZm9ybSkgLT5cbiAgICAgIGlmIEBvcHRpb25zLnByZVJlc2V0Pyhmb3JtKSBpc250IGZhbHNlXG4gICAgICAgIGZvcm0/LiRzZXRQcmlzdGluZT8oKVxuICAgICAgICBAY3VycmVudCA9IGFuZ3VsYXIuY29weShAb3B0aW9ucy5kZWZhdWx0cykgb3Ige31cbiAgICAgICAgQGZvcm0gPSBhbmd1bGFyLmNvcHkoQG9wdGlvbnMuZGVmYXVsdHMpIG9yIHt9XG4gICAgICAgIEBvcHRpb25zLnJlc2V0Pyhmb3JtKVxuICAgICAgICBAb3B0aW9ucy5hY3Rpb24/KGZvcm0pXG4gICAgICBAXG5cbiAgICBwYXJhbXM6IChyZWZyZXNoLCBkZWZhdWx0cykgLT5cbiAgICAgIFtkZWZhdWx0cywgcmVmcmVzaF0gPSBbcmVmcmVzaCwgZmFsc2VdICBpZiBhbmd1bGFyLmlzT2JqZWN0IHJlZnJlc2hcblxuICAgICAgcGFyYW1zID0gaWYgcmVmcmVzaCBpcyB0cnVlXG4gICAgICAgIGFuZ3VsYXIuY29weShAY3VycmVudClcbiAgICAgIGVsc2VcbiAgICAgICAgYW5ndWxhci5jb3B5KEBmb3JtID0gYW5ndWxhci5jb3B5KEBjdXJyZW50KSlcblxuICAgICAgZm9yIGtleSBvZiBAb3B0aW9ucy5kZWZhdWx0c1xuICAgICAgICBwYXJhbXNba2V5XSA9IHBhcmFtc1trZXldLmZpbHRlcigoYSkgLT4gISFhKSAgaWYgYW5ndWxhci5pc0FycmF5IHBhcmFtc1trZXldXG5cbiAgICAgIHBhcmFtcyA9IGFuZ3VsYXIuZXh0ZW5kIHBhcmFtcywgYW5ndWxhci5jb3B5KGRlZmF1bHRzKVxuXG4gICAgICBpZiBhbmd1bGFyLmlzRnVuY3Rpb24gQG9wdGlvbnMudHJhbnNmb3JtXG4gICAgICAgIHBhcmFtc1trZXldID0gQG9wdGlvbnMudHJhbnNmb3JtKGtleSwgdmFsdWUpICBmb3Iga2V5LCB2YWx1ZSBvZiBwYXJhbXNcblxuICAgICAgcGFyYW1zXG5cbiAgbmV3IFNlYXJjaEZvcm0ob3B0aW9ucylcbl1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcnZpY2VzL3NlYXJjaEZvcm0uY29mZmVlXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==