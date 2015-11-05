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
	        search = new RegExp(search, options);
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
	        return input.toString().split(new RegExp(angular.isArray(separators) ? separators.join('|') : separators), limit);
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
	angular.module('ngExtends.services.playRoutes', []).provider('playRoutes', [
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
	
	angular.module('ngExtends.services.retainScroll', ['ngExtends.services.locationState']).provider('retainScroll', [
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
	  '$rootScope', 'retainScroll', '$location', '$timeout', '$injector', function($rootScope, retainScroll, $location, $timeout, $injector) {
	    var $target, event, i, len, ref;
	    $target = $(retainScroll.target || window);
	    $target.on('scroll', function() {
	      if (retainScroll.tracking) {
	        return retainScroll.positions[$location.url()] = $target.scrollTop();
	      }
	    });
	    ref = ['$routeChangeSuccess', '$stateChangeSuccess'];
	    for (i = 0, len = ref.length; i < len; i++) {
	      event = ref[i];
	      $rootScope.$on(event, function() {
	        return retainScroll.inactive = retainScroll.tracking = false;
	      });
	    }
	    $rootScope.$on('$viewContentLoaded', function(e) {
	      var isCancel, offScopeDestroy, offScrollCanceler, onScrollCanceler;
	      if (retainScroll.inactive || !$injector.invoke(retainScroll.whetherScrollEvaluator)) {
	        console.log("move to scroll top %o", $target[0]);
	        $target.scrollTop(0);
	        retainScroll.tracking = true;
	      } else {
	        isCancel = false;
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
	            console.log('Cancel scrolling %o', $target[0]);
	            retainScroll.tracking = true;
	          } else {
	            tryCount = retainScroll.maxTryCount;
	            scrollTop = retainScroll.positions[$location.url()] || 0;
	            (tryScroll = function() {
	              if (isCancel) {
	                console.log('Cancel scrolling %o', $target[0]);
	                retainScroll.tracking = true;
	              } else if ($injector.invoke(retainScroll.isDelayedEvaluator)) {
	                $timeout(tryScroll, 200);
	              } else {
	                offScrollCanceler();
	                $target.scrollTop(scrollTop);
	                console.log((1 + retainScroll.maxTryCount - tryCount) + " try move to scroll " + ($target.scrollTop()) + " / " + scrollTop + " %o", $target[0]);
	                if ($target.scrollTop() === scrollTop || --tryCount <= 0) {
	                  retainScroll.tracking = true;
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
	
	angular.module('ngExtends.services.searchForm', []).factory('searchForm', [
	  function() {
	    return function(options) {
	      return new SearchForm(options);
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjMDdiYjQwOTExMDUzMTM5ZjQ2OSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvYW5ndWxhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFycy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9jb3VudFRvLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9kb21Jbml0LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9mb2N1c01lLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9sb3dlci5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvcmVwZWF0RG9uZS5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvcm90YXRlMmQuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL3VwcGVyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy9hcnJheXMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXJzL3N0cmluZ3MuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9sb2NhdGlvblN0YXRlLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGxheVJvdXRlcy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvd2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yZXRhaW5TY3JvbGwuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zZWFyY2hGb3JtLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0EsNERBQVksQ0FBQzs7cUJBRU4sQ0FBNkI7O3FCQUM3QixDQUE2Qjs7cUJBQzdCLENBQTZCOztxQkFDN0IsQ0FBMkI7O3FCQUMzQixFQUFnQzs7cUJBQ2hDLEVBQThCOztxQkFDOUIsRUFBMkI7O3FCQUMzQixFQUF5Qjs7cUJBQ3pCLEVBQTBCOztxQkFDMUIsRUFBaUM7O3FCQUNqQyxFQUE4Qjs7cUJBQzlCLEVBQWdDOztxQkFDaEMsRUFBOEI7O0FBRXJDLFFBQU8sQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FDbkMsOEJBQThCLEVBQzlCLDhCQUE4QixFQUM5Qiw4QkFBOEIsRUFDOUIsNEJBQTRCLEVBQzVCLGlDQUFpQyxFQUNqQywrQkFBK0IsRUFDL0IsNEJBQTRCLENBQy9CLENBQUMsQ0FBQzs7QUFFSCxRQUFPLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQ2hDLDBCQUEwQixFQUMxQiwyQkFBMkIsQ0FDOUIsQ0FBQyxDQUFDOztBQUVILFFBQU8sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FDakMsa0NBQWtDLEVBQ2xDLCtCQUErQixFQUMvQixpQ0FB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QU8sQ0FBQyxVQUFSLENBQW1CLElBQUMsUUFBTyxDQUFDLFNBQTVCLENBQUg7QUFDRTs7U0FBQSxNQUFPLEtBQVAsR0FBYyxJQUFDLFFBQU8sQ0FBQyxTQUFULENBQW1CLEdBQW5CLEVBQXdCLEtBQXhCO0FBQWQsUUFERjs7WUFHQTtHQWhCTTs7Ozs7O0FBa0JWLFFBQU8sQ0FBQyxNQUFSLENBQWUsK0JBQWYsRUFBZ0QsRUFBaEQsQ0FFQSxDQUFDLE9BRkQsQ0FFUyxZQUZULEVBRXVCO0dBQUM7WUFBRyxTQUFDLE9BQUQ7Y0FBaUIsZUFBVyxPQUFYO0tBQWpCO0dBQUgsQ0FBRDtFQUZ2QiIsImZpbGUiOiJhbmd1bGFyLWV4dGVuZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIiksIHJlcXVpcmUoXCJhbmd1bGFyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImpxdWVyeVwiLCBcImFuZ3VsYXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcImFuZ3VsYXJcIikpIDogZmFjdG9yeShyb290W1wialF1ZXJ5XCJdLCByb290W1wiYW5ndWxhclwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGMwN2JiNDA5MTEwNTMxMzlmNDY5XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vZGlyZWN0aXZlcy9jb3VudFRvLmNvZmZlZSdcbmltcG9ydCAnLi9kaXJlY3RpdmVzL2RvbUluaXQuY29mZmVlJ1xuaW1wb3J0ICcuL2RpcmVjdGl2ZXMvZm9jdXNNZS5jb2ZmZWUnXG5pbXBvcnQgJy4vZGlyZWN0aXZlcy9sb3dlci5jb2ZmZWUnXG5pbXBvcnQgJy4vZGlyZWN0aXZlcy9yZXBlYXREb25lLmNvZmZlZSdcbmltcG9ydCAnLi9kaXJlY3RpdmVzL3JvdGF0ZTJkLmNvZmZlZSdcbmltcG9ydCAnLi9kaXJlY3RpdmVzL3VwcGVyLmNvZmZlZSdcbmltcG9ydCAnLi9maWx0ZXJzL2FycmF5cy5jb2ZmZWUnXG5pbXBvcnQgJy4vZmlsdGVycy9zdHJpbmdzLmNvZmZlZSdcbmltcG9ydCAnLi9zZXJ2aWNlcy9sb2NhdGlvblN0YXRlLmNvZmZlZSdcbmltcG9ydCAnLi9zZXJ2aWNlcy9wbGF5Um91dGVzLmNvZmZlZSdcbmltcG9ydCAnLi9zZXJ2aWNlcy9yZXRhaW5TY3JvbGwuY29mZmVlJ1xuaW1wb3J0ICcuL3NlcnZpY2VzL3NlYXJjaEZvcm0uY29mZmVlJ1xuXG5hbmd1bGFyLm1vZHVsZSgnbmdFeHRlbmRzLmRpcmVjdGl2ZXMnLCBbXG4gICAgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmNvdW50VG8nLFxuICAgICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5kb21Jbml0JyxcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMuZm9jdXNNZScsXG4gICAgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmxvd2VyJyxcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMucmVwZWF0RG9uZScsXG4gICAgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLnJvdGF0ZTJkJyxcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMudXBwZXInXG5dKTtcblxuYW5ndWxhci5tb2R1bGUoJ25nRXh0ZW5kcy5maWx0ZXJzJywgW1xuICAgICduZ0V4dGVuZHMuZmlsdGVycy5hcnJheXMnLFxuICAgICduZ0V4dGVuZHMuZmlsdGVycy5zdHJpbmdzJ1xuXSk7XG5cbmFuZ3VsYXIubW9kdWxlKCduZ0V4dGVuZHMuc2VydmljZXMnLCBbXG4gICAgJ25nRXh0ZW5kcy5zZXJ2aWNlcy5sb2NhdGlvblN0YXRlJyxcbiAgICAnbmdFeHRlbmRzLnNlcnZpY2VzLnBsYXlSb3V0ZXMnLFxuICAgICduZ0V4dGVuZHMuc2VydmljZXMucmV0YWluU2Nyb2xsJyxcbiAgICAnbmdFeHRlbmRzLnNlcnZpY2VzLnNlYXJjaEZvcm0nXG5dKTtcblxuYW5ndWxhci5tb2R1bGUoJ25nRXh0ZW5kcycsIFtcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMnLFxuICAgICduZ0V4dGVuZHMuZmlsdGVycycsXG4gICAgJ25nRXh0ZW5kcy5zZXJ2aWNlcydcbl0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXG5cbmlmICghJCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFuZ3VsYXIuZXh0ZW5kcyByZXF1aXJlcyBhIEFuZ3VsYXJKU1wiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFycy9hbmd1bGFyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmlmICghJCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFuZ3VsYXIuZXh0ZW5kcyByZXF1aXJlcyBhIGpRdWVyeVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSAkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFycy9qcXVlcnkuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn1cbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbmd1bGFyXCJcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmNvdW50VG8nLCBbXVxuXG4uZGlyZWN0aXZlICdleENvdW50VG8nLCBbJyR0aW1lb3V0JywgKCR0aW1lb3V0KSAtPlxuICByZXBsYWNlOiBmYWxzZVxuICBzY29wZTogdHJ1ZVxuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgIGVsZW0gPSBlbGVtZW50WzBdXG4gICAgbnVtID0gbnVsbFxuICAgIHJlZnJlc2hJbnRlcnZhbCA9IG51bGxcbiAgICBzdGVwcyA9IG51bGxcbiAgICBzdGVwID0gbnVsbFxuICAgIGNvdW50VG8gPSBudWxsXG4gICAgaW5jcmVtZW50ID0gbnVsbFxuXG4gICAgY2FsY3VsYXRlID0gLT5cbiAgICAgIHJlZnJlc2hJbnRlcnZhbCA9IDMwXG4gICAgICBzdGVwID0gMFxuICAgICAgc2NvcGUudGltb3V0SWQgPSBudWxsXG4gICAgICBjb3VudFRvID0gcGFyc2VJbnQoYXR0cnMuZXhDb3VudFRvKSB8fCAwXG4gICAgICBzY29wZS52YWx1ZSA9IHBhcnNlSW50KGF0dHJzLnZhbHVlLCAxMCkgfHwgMFxuICAgICAgZHVyYXRpb24gPSAocGFyc2VGbG9hdChhdHRycy5kdXJhdGlvbikgKiAxMDAwKSB8fCAwXG5cbiAgICAgIHN0ZXBzID0gTWF0aC5jZWlsKGR1cmF0aW9uIC8gcmVmcmVzaEludGVydmFsKVxuICAgICAgaW5jcmVtZW50ID0gKGNvdW50VG8gLSBzY29wZS52YWx1ZSkgLyBzdGVwc1xuICAgICAgbnVtID0gc2NvcGUudmFsdWVcbiAgICAgIHJldHVyblxuXG4gICAgdGljayA9IC0+XG4gICAgICBzY29wZS50aW1vdXRJZCA9ICR0aW1lb3V0KC0+XG4gICAgICAgIG51bSArPSBpbmNyZW1lbnRcbiAgICAgICAgc3RlcCsrXG4gICAgICAgIGlmIHN0ZXAgPj0gc3RlcHNcbiAgICAgICAgICAkdGltZW91dC5jYW5jZWwoc2NvcGUudGltb3V0SWQpXG4gICAgICAgICAgbnVtID0gY291bnRUb1xuICAgICAgICAgIGVsZW0udGV4dENvbnRlbnQgPSBjb3VudFRvXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBlbGVtLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChudW0pXG4gICAgICAgICAgdGljaygpXG4gICAgICAsIHJlZnJlc2hJbnRlcnZhbClcbiAgICAgIHJldHVyblxuXG4gICAgc3RhcnQgPSAtPlxuICAgICAgJHRpbWVvdXQuY2FuY2VsKHNjb3BlLnRpbW91dElkKSAgaWYgc2NvcGUudGltb3V0SWQ/XG4gICAgICBjYWxjdWxhdGUoKVxuICAgICAgdGljaygpXG4gICAgICByZXR1cm5cblxuICAgIGF0dHJzLiRvYnNlcnZlICdleENvdW50VG8nLCAodmFsKSAtPiBzdGFydCgpICBpZiB2YWw/XG4gICAgYXR0cnMuJG9ic2VydmUgJ3ZhbHVlJywgLT4gc3RhcnQoKVxuICAgIHJldHVyblxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RpcmVjdGl2ZXMvY291bnRUby5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmRvbUluaXQnLCBbXVxuXG4uZGlyZWN0aXZlICdleERvbUluaXQnLCBbLT5cbiAgcmVzdHJpY3Q6ICdBJyxcbiAgbGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgLT5cbiAgICBhdHRycy4kb2JzZXJ2ZSAnZXhEb21Jbml0JywgKHZhbHVlKSAtPiBzY29wZS4kZXZhbCh2YWx1ZSk/KGVsZW1lbnQpXG4gICAgcmV0dXJuXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGlyZWN0aXZlcy9kb21Jbml0LmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMuZm9jdXNNZScsIFtdXG5cbi5kaXJlY3RpdmUgJ2V4Rm9jdXNNZScsIFstPlxuICBzY29wZTpcbiAgICB0cmlnZ2VyOiAnPWV4Rm9jdXNNZSdcbiAgbGluazogKHNjb3BlLCBlbGVtZW50KSAtPlxuICAgIHNjb3BlLiR3YXRjaCAndHJpZ2dlcicsICh2YWx1ZSkgLT5cbiAgICAgIGlmIHR5cGVvZiB2YWx1ZSBpcyAnYm9vbGVhbidcbiAgICAgICAgZWxlbWVudFtpZiB2YWx1ZSB0aGVuICdmb2N1cycgZWxzZSAnYmx1ciddPygpXG4gICAgICAgIHNjb3BlLnRyaWdnZXIgPSBudWxsXG4gICAgICByZXR1cm5cbiAgICByZXR1cm5cbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kaXJlY3RpdmVzL2ZvY3VzTWUuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5sb3dlcicsIFtdXG5cbi5kaXJlY3RpdmUgJ2V4TG93ZXInLCBbLT5cbiAgcmVxdWlyZTogJ25nTW9kZWwnXG4gIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMsIG1vZGVsQ3RybCkgLT5cbiAgICB0b0xvd2VyID0gKGlucHV0VmFsdWUpIC0+XG4gICAgICBsb3dlcmVkID0gaWYgaW5wdXRWYWx1ZSB0aGVuIGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSBlbHNlIGlucHV0VmFsdWVcbiAgICAgIHVubGVzcyBsb3dlcmVkIGlzIGlucHV0VmFsdWVcbiAgICAgICAgbW9kZWxDdHJsLiRzZXRWaWV3VmFsdWUgbG93ZXJlZFxuICAgICAgICBtb2RlbEN0cmwuJHJlbmRlcigpXG4gICAgICBsb3dlcmVkXG5cbiAgICBtb2RlbEN0cmwuJHBhcnNlcnMucHVzaCB0b0xvd2VyXG4gICAgdG9Mb3dlciBzY29wZVthdHRycy5uZ01vZGVsXVxuICAgIHJldHVyblxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RpcmVjdGl2ZXMvbG93ZXIuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5yZXBlYXREb25lJywgW11cblxuLmRpcmVjdGl2ZSAnZXhSZXBlYXREb25lJywgWy0+XG4gIHJlc3RyaWN0OiAnQScsXG4gIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpIC0+XG4gICAgaWYgKGF0dHJzLm5nUmVwZWF0PyBvciBhdHRycy5uZ1JlcGVhdFN0YXJ0PykgYW5kIHNjb3BlLiRsYXN0XG4gICAgICBhdHRycy4kb2JzZXJ2ZSAnZXhSZXBlYXREb25lJywgKHZhbHVlKSAtPiBzY29wZS4kZXZhbCh2YWx1ZSk/KGVsZW1lbnQpXG4gICAgcmV0dXJuXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGlyZWN0aXZlcy9yZXBlYXREb25lLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMucm90YXRlMmQnLCBbXVxuXG4uZGlyZWN0aXZlICdleFJvdGF0ZTJkJywgWy0+XG4gIHNjb3BlOlxuICAgIHZhbHVlOiAnPWV4Um90YXRlMmQnXG4gICAgbGltaXQ6ICc9J1xuICAgIGFuZ2xlOiAnPSdcbiAgbGluazogKHNjb3BlLCBlbGVtZW50KSAtPlxuICAgIHNjb3BlLiR3YXRjaENvbGxlY3Rpb24gJ1t2YWx1ZSwgbGltaXQsIGFuZ2xlXScsICh2YWx1ZXMpIC0+XG4gICAgICB2YWx1ZSA9IHZhbHVlc1swXSBvciAwXG4gICAgICBsaW1pdCA9IHZhbHVlc1sxXSBvciAxMFxuICAgICAgYW5nbGUgPSB2YWx1ZXNbMl0gb3IgMzYwXG4gICAgICBkZWdyZWUgPSB2YWx1ZSAqIGFuZ2xlIC8gbGltaXRcbiAgICAgIGVsZW1lbnQuY3NzXG4gICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICdyb3RhdGUoJyArIGRlZ3JlZSArICdkZWcpJ1xuICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBkZWdyZWUgKyAnZGVnKSdcbiAgICAgICAgJ3RyYW5zZm9ybSc6ICdyb3RhdGUoJyArIGRlZ3JlZSArICdkZWcpJ1xuICAgICAgcmV0dXJuXG4gICAgcmV0dXJuXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGlyZWN0aXZlcy9yb3RhdGUyZC5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLnVwcGVyJywgW11cblxuLmRpcmVjdGl2ZSAnZXhVcHBlcicsIFstPlxuICByZXF1aXJlOiAnbmdNb2RlbCdcbiAgbGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycywgbW9kZWxDdHJsKSAtPlxuICAgIHRvVXBwZXIgPSAoaW5wdXRWYWx1ZSkgLT5cbiAgICAgIHVwcGVyZWQgPSBpZiBpbnB1dFZhbHVlIHRoZW4gaW5wdXRWYWx1ZS50b1VwcGVyQ2FzZSgpIGVsc2UgaW5wdXRWYWx1ZVxuICAgICAgdW5sZXNzIHVwcGVyZWQgaXMgaW5wdXRWYWx1ZVxuICAgICAgICBtb2RlbEN0cmwuJHNldFZpZXdWYWx1ZSB1cHBlcmVkXG4gICAgICAgIG1vZGVsQ3RybC4kcmVuZGVyKClcbiAgICAgIHVwcGVyZWRcblxuICAgIG1vZGVsQ3RybC4kcGFyc2Vycy5wdXNoIHRvVXBwZXJcbiAgICB0b1VwcGVyIHNjb3BlW2F0dHJzLm5nTW9kZWxdXG4gICAgcmV0dXJuXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGlyZWN0aXZlcy91cHBlci5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5maWx0ZXJzLmFycmF5cycsIFtdXG5cbi5maWx0ZXIgJ21ha2VBcnJheScsIFstPiAoaW5wdXQpIC0+IGlmIGFuZ3VsYXIuaXNBcnJheSBpbnB1dCB0aGVuIGlucHV0IGVsc2UgJC5tYWtlQXJyYXkoaW5wdXQpXVxuXG4uZmlsdGVyICdyYW5nZScsIFstPiAoZnJvbSwgdG8sIHN0ZXAgPSAxKSAtPlxuICBpc051bWJlciA9IHR5cGVvZiBmcm9tIGlzICdudW1iZXInIGFuZCB0eXBlb2YgdG8gaXMgJ251bWJlcidcbiAgYmVnaW4gPSBpZiBpc051bWJlciB0aGVuIGZyb20gZWxzZSBmcm9tLnRvU3RyaW5nKCkuY2hhckNvZGVBdCgwKVxuICBlbmQgPSBpZiBpc051bWJlciB0aGVuIHRvIGVsc2UgdG8udG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApXG4gIGZvciBpIGluIFtiZWdpbi4uZW5kXSBieSAoaWYgYmVnaW4gPiBlbmQgdGhlbiAtc3RlcCBlbHNlIHN0ZXApXG4gICAgaWYgaXNOdW1iZXIgdGhlbiBpIGVsc2UgU3RyaW5nLmZyb21DaGFyQ29kZShpKVxuXVxuXG4uZmlsdGVyICdqb2luJywgWy0+IChpbnB1dCwgc2VwKSAtPiAkLm1ha2VBcnJheShpbnB1dCkuam9pbihzZXApXVxuXG4uZmlsdGVyICdjb21iaW5lJywgWyckcGFyc2UnLCAoJHBhcnNlKSAtPiAoaW5wdXQsIHRyYW5zZm9ybWVycy4uLikgLT5cbiAgaW5wdXQgPSBbaW5wdXRdICB1bmxlc3MgYW5ndWxhci5pc0FycmF5IGlucHV0XG4gIChmb3IgdmFsdWUgaW4gaW5wdXRcbiAgICBmb3IgdCBpbiB0cmFuc2Zvcm1lcnNcbiAgICAgIGlmIGFuZ3VsYXIuaXNGdW5jdGlvbiB0XG4gICAgICAgIHZhbHVlID0gdCh2YWx1ZSlcbiAgICAgIGVsc2UgaWYgdHlwZW9mIHQgaXMgJ3N0cmluZydcbiAgICAgICAgdmFsdWUgPSBzd2l0Y2ggdFxuICAgICAgICAgIHdoZW4gJz1pbnRlZ2VyJyB0aGVuIHBhcnNlSW50KHZhbHVlKVxuICAgICAgICAgIHdoZW4gJz1mbG9hdCcgICB0aGVuIHBhcnNlRmxvYXQodmFsdWUpXG4gICAgICAgICAgZWxzZSAkcGFyc2UodCkodmFsdWUpXG4gICAgdmFsdWVcbiAgKS5yZWR1Y2UgKHQsIHYpIC0+IHQgKyB2XG5dXG5cbi5maWx0ZXIgJ2xpbWl0JywgWy0+IChpbnB1dCwgcGFnZSwgaXRlbXNQZXJQYWdlKSAtPlxuICBmcm9tID0gKHBhZ2UgLSAxKSAqIGl0ZW1zUGVyUGFnZVxuICB0byA9IGZyb20gKyBpdGVtc1BlclBhZ2VcbiAgJC5tYWtlQXJyYXkoaW5wdXQpW2Zyb20uLi50b11cbl1cblxuLmZpbHRlciAndHJpbScsIFstPiAoaW5wdXQpIC0+XG4gIGlmIGFuZ3VsYXIuaXNBcnJheSBpbnB1dFxuICAgIGE/LnRvU3RyaW5nPygpPy50cmltPygpICBmb3IgYSBpbiBpbnB1dFxuICBlbHNlXG4gICAgaW5wdXQ/LnRvU3RyaW5nPygpPy50cmltPygpXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZmlsdGVycy9hcnJheXMuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZmlsdGVycy5zdHJpbmdzJywgW11cblxuLmZpbHRlciAndHJ1c3RBcycsIFsnJHNjZScsICgkc2NlKSAtPiAoaW5wdXQsIHR5cGUpIC0+ICRzY2UudHJ1c3RBcyh0eXBlLCBpbnB1dCldXG4uZmlsdGVyICd0cnVzdEFzQ3NzJywgWyckc2NlJywgKCRzY2UpIC0+ICRzY2UudHJ1c3RBc0Nzc11cbi5maWx0ZXIgJ3RydXN0QXNIdG1sJywgWyckc2NlJywgKCRzY2UpIC0+ICRzY2UudHJ1c3RBc0h0bWxdXG4uZmlsdGVyICd0cnVzdEFzSnMnLCBbJyRzY2UnLCAoJHNjZSkgLT4gJHNjZS50cnVzdEFzSnNdXG4uZmlsdGVyICd0cnVzdEFzUmVzb3VyY2VVcmwnLCBbJyRzY2UnLCAoJHNjZSkgLT4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmxdXG4uZmlsdGVyICd0cnVzdEFzVXJsJywgWyckc2NlJywgKCRzY2UpIC0+ICRzY2UudHJ1c3RBc1VybF1cblxuLmZpbHRlciAncmVwbGFjZScsIFstPiAoaW5wdXQsIHNlYXJjaCwgcmVwbGFjZW1lbnQsIG9wdGlvbnMpIC0+XG4gIHNlYXJjaCA9IG5ldyBSZWdFeHAoc2VhcmNoLCBvcHRpb25zKSAgdW5sZXNzIHNlYXJjaCBpbnN0YW5jZW9mIFJlZ0V4cFxuICAoaW5wdXQgb3IgJycpLnRvU3RyaW5nKCkucmVwbGFjZShzZWFyY2gsIHJlcGxhY2VtZW50KVxuXVxuXG4uZmlsdGVyICdubDJicicsIFstPiAoaW5wdXQpIC0+IChpbnB1dCBvciAnJykudG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxyXFxufFxcblxccnxcXHJ8XFxuKS9nLCAnPGJyLz4nKV1cblxuLmZpbHRlciAnYnIybmwnLCBbLT4gKGlucHV0KSAtPiAoaW5wdXQgb3IgJycpLnRvU3RyaW5nKCkucmVwbGFjZSgvKDxicj58PGJyXFwvPikvZywgJ1xcbicpXVxuXG4uZmlsdGVyICdzcGFjZTJuYnNwJywgWy0+IChpbnB1dCkgLT4gKGlucHV0IG9yICcnKS50b1N0cmluZygpLnJlcGxhY2UoL1xccy9nLCAnJm5ic3A7JyldXG5cbi5maWx0ZXIgJ25ic3Ayc3BhY2UnLCBbLT4gKGlucHV0KSAtPiAoaW5wdXQgb3IgJycpLnRvU3RyaW5nKCkucmVwbGFjZSgvJm5ic3A7L2csICcgJyldXG5cbi5maWx0ZXIgJ3NwbGl0JywgWy0+IChpbnB1dCwgc2VwYXJhdG9ycywgbGltaXQpIC0+XG4gIHVubGVzcyBpbnB1dD8gdGhlbiBpbnB1dFxuICBlbHNlIGlucHV0LnRvU3RyaW5nKCkuc3BsaXQobmV3IFJlZ0V4cChcbiAgICBpZiBhbmd1bGFyLmlzQXJyYXkgc2VwYXJhdG9ycyB0aGVuIHNlcGFyYXRvcnMuam9pbignfCcpIGVsc2Ugc2VwYXJhdG9yc1xuICApLCBsaW1pdClcbl1cblxuLmZpbHRlciAnY3V0c3RyaW5nJywgWy0+IChpbnB1dCwgbWF4TGVuZ3RoID0gMTAsIHN1ZmZpeCA9ICcuLi4nKSAtPlxuICB1bmxlc3MgaW5wdXQ/IHRoZW4gaW5wdXRcbiAgZWxzZVxuICAgIGlucHV0U3RyaW5nID0gaW5wdXQudG9TdHJpbmcoKVxuICAgIGlucHV0U3RyaW5nID0gaW5wdXRTdHJpbmdbMC4uLm1heExlbmd0aF0gKyBzdWZmaXggIGlmIGlucHV0U3RyaW5nLmxlbmd0aCA+IG1heExlbmd0aCAtIHN1ZmZpeC5sZW5ndGhcbiAgICBpbnB1dFN0cmluZ1xuXVxuXG4uZmlsdGVyICdyb3VuZGN1dHN0cmluZycsIFstPiAoaW5wdXQsIHNlYXJjaCwgbWF4TGVuZ3RoID0gMjAsIHByZWZpeCA9ICcuLi4nLCBzdWZmaXggPSAnLi4uJykgLT5cbiAgdW5sZXNzIGlucHV0PyB0aGVuIGlucHV0XG4gIGVsc2VcbiAgICBpbnB1dFN0cmluZyA9IGlucHV0LnRvU3RyaW5nKClcbiAgICBzZWFyY2hTdHJpbmcgPSAoc2VhcmNoIG9yICcnKS50b1N0cmluZygpXG4gICAgaSA9IGlucHV0U3RyaW5nLmluZGV4T2Yoc2VhcmNoU3RyaW5nKVxuICAgIGlmIGkgaXMgLTFcbiAgICAgIGlucHV0U3RyaW5nID0gaW5wdXRTdHJpbmdbMC4uLm1heExlbmd0aF0gKyBzdWZmaXggIGlmIGlucHV0U3RyaW5nLmxlbmd0aCA+IG1heExlbmd0aCAtIHN1ZmZpeC5sZW5ndGhcbiAgICAgIGlucHV0U3RyaW5nXG4gICAgZWxzZVxuICAgICAgKGRvQ3V0ID0gKGJlZm9yZSwgYWZ0ZXIsIHN0cmluZywgcmVzdExlbmd0aCkgLT5cbiAgICAgICAgaWYgcmVzdExlbmd0aCA8PSAwIG9yIGJlZm9yZS5sZW5ndGggaXMgMCBhbmQgYWZ0ZXIubGVuZ3RoIGlzIDBcbiAgICAgICAgICBlbXB0eU9yUHJlZml4ID0gaWYgYmVmb3JlLmxlbmd0aCA+IDAgdGhlbiBwcmVmaXggZWxzZSAnJ1xuICAgICAgICAgIGVtcHR5T3JTdWZmaXggPSBpZiBhZnRlci5sZW5ndGggPiAwIHRoZW4gc3VmZml4IGVsc2UgJydcbiAgICAgICAgICBlbXB0eU9yUHJlZml4ICsgc3RyaW5nICsgZW1wdHlPclN1ZmZpeFxuICAgICAgICBlbHNlXG4gICAgICAgICAgaGFsZkxlbmd0aCA9IHJlc3RMZW5ndGggLyAyXG4gICAgICAgICAgaWYgaGFsZkxlbmd0aCA8IDFcbiAgICAgICAgICAgIGRvQ3V0KGJlZm9yZVswLi4uLTFdLCBhZnRlciwgYmVmb3JlWy0xLi4uXSArIHN0cmluZywgMClcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBwaWVjZU9mQmVmb3JlID0gYmVmb3JlWy1oYWxmTGVuZ3RoLi4uXVxuICAgICAgICAgICAgcGllY2VPZkFmdGVyID0gYWZ0ZXJbMC4uLmhhbGZMZW5ndGhdXG4gICAgICAgICAgICByZXN0T2ZCZWZvcmUgPSBiZWZvcmVbMC4uLi1oYWxmTGVuZ3RoXVxuICAgICAgICAgICAgcmVzdE9mQWZ0ZXIgPSBhZnRlcltoYWxmTGVuZ3RoLi4uXVxuICAgICAgICAgICAgZG9DdXQoXG4gICAgICAgICAgICAgIHJlc3RPZkJlZm9yZSxcbiAgICAgICAgICAgICAgcmVzdE9mQWZ0ZXIsXG4gICAgICAgICAgICAgIHBpZWNlT2ZCZWZvcmUgKyBzdHJpbmcgKyBwaWVjZU9mQWZ0ZXIsXG4gICAgICAgICAgICAgIHJlc3RMZW5ndGggLSBwaWVjZU9mQmVmb3JlLmxlbmd0aCAtIHBpZWNlT2ZBZnRlci5sZW5ndGhcbiAgICAgICAgICAgIClcbiAgICAgICkoXG4gICAgICAgIGlucHV0U3RyaW5nWzAuLi5pXSxcbiAgICAgICAgaW5wdXRTdHJpbmdbaSArIHNlYXJjaFN0cmluZy5sZW5ndGguLi5dLFxuICAgICAgICBzZWFyY2hTdHJpbmcsXG4gICAgICAgIG1heExlbmd0aCAtIHNlYXJjaFN0cmluZy5sZW5ndGggLSBwcmVmaXgubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aFxuICAgICAgKVxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ZpbHRlcnMvc3RyaW5ncy5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5zZXJ2aWNlcy5sb2NhdGlvblN0YXRlJywgW11cblxuLnJ1biBbXG4gICckcm9vdFNjb3BlJywgJyR3aW5kb3cnLCAnJGxvY2F0aW9uJ1xuICAoJHJvb3RTY29wZSwgJHdpbmRvdywgJGxvY2F0aW9uKSAtPlxuICAgICRyb290U2NvcGUuJG9uICckbG9jYXRpb25DaGFuZ2VTdWNjZXNzJywgLT4gJGxvY2F0aW9uLiQkYWN0dWFsUGF0aCA9ICRsb2NhdGlvbi5wYXRoKClcbiAgICAkcm9vdFNjb3BlLiR3YXRjaCAoLT4gJGxvY2F0aW9uLnBhdGgoKSksIChuZXdMb2NhdGlvbikgLT4gJGxvY2F0aW9uLmlzSGlzdG9yeUNoYW5nZWQgPSAkbG9jYXRpb24uJCRhY3R1YWxQYXRoIGlzIG5ld0xvY2F0aW9uXG4gICAgcmV0dXJuXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2VydmljZXMvbG9jYXRpb25TdGF0ZS5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5zZXJ2aWNlcy5wbGF5Um91dGVzJywgW11cblxuLnByb3ZpZGVyICdwbGF5Um91dGVzJywgWy0+XG4gIEBqc1JvdXRlcyA9IHdpbmRvdy5Sb3V0ZXNcbiAgQCRnZXQgPSBbJyRodHRwJywgKCRodHRwKSA9PlxuICAgIHdyYXBIdHRwID0gKGZuKSAtPiAtPlxuICAgICAgcm91dGVPYmplY3QgPSBmbi5hcHBseShALCBhcmd1bWVudHMpXG4gICAgICBodHRwTWV0aG9kID0gcm91dGVPYmplY3QubWV0aG9kLnRvTG93ZXJDYXNlKClcbiAgICAgIHVybCA9IHJvdXRlT2JqZWN0LnVybFxuICAgICAgcmVzID1cbiAgICAgICAgJHJvdXRlOiByb3V0ZU9iamVjdFxuICAgICAgICBtZXRob2Q6IGh0dHBNZXRob2RcbiAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgYWJzb2x1dGVVcmw6IHJvdXRlT2JqZWN0LmFic29sdXRlVVJMXG4gICAgICAgIHdlYlNvY2tldFVybDogcm91dGVPYmplY3Qud2ViU29ja2V0VVJMXG4gICAgICByZXNbaHR0cE1ldGhvZF0gPSAob3B0aW9ucykgLT4gJGh0dHBbaHR0cE1ldGhvZF0odXJsLCBvcHRpb25zKVxuICAgICAgcmVzXG5cbiAgICAoYWRkUm91dGVzID0gKHBsYXlSb3V0ZXNPYmplY3QsIGpzUm91dGVzT2JqZWN0KSAtPlxuICAgICAgZm9yIGtleSwgdmFsdWUgb2YganNSb3V0ZXNPYmplY3RcbiAgICAgICAgaWYgYW5ndWxhci5pc0Z1bmN0aW9uIHZhbHVlXG4gICAgICAgICAgcGxheVJvdXRlc09iamVjdFtrZXldID0gd3JhcEh0dHAodmFsdWUpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBwbGF5Um91dGVzT2JqZWN0W2tleV0gPSB7fSAgdW5sZXNzIGtleSBvZiBwbGF5Um91dGVzT2JqZWN0XG4gICAgICAgICAgYWRkUm91dGVzKHBsYXlSb3V0ZXNPYmplY3Rba2V5XSwgdmFsdWUpXG4gICAgICByZXR1cm5cbiAgICApKHBsYXlSb3V0ZXMgPSB7fSwgQGpzUm91dGVzKVxuICAgIHBsYXlSb3V0ZXNcbiAgXVxuICByZXR1cm5cbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zZXJ2aWNlcy9wbGF5Um91dGVzLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKCFnbG9iYWwuZG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkuZXh0ZW5kcyByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFycy93aW5kb3cuanNcbiAqKi8iLCIndXNlIHN0cmljdCdcblxucmVxdWlyZSgnLi9sb2NhdGlvblN0YXRlLmNvZmZlZScpXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuc2VydmljZXMucmV0YWluU2Nyb2xsJywgWyduZ0V4dGVuZHMuc2VydmljZXMubG9jYXRpb25TdGF0ZSddXG5cbi5wcm92aWRlciAncmV0YWluU2Nyb2xsJywgWy0+XG4gIEB0YXJnZXQgPSBudWxsXG4gIEBpbmFjdGl2ZSA9IGZhbHNlXG4gIEB0cmFja2luZyA9IGZhbHNlXG4gIEBwb3NpdGlvbnMgPSB7fVxuICBAbWF4VHJ5Q291bnQgPSAxMFxuICBAd2hldGhlclNjcm9sbEV2YWx1YXRvciA9IFsnJGxvY2F0aW9uJywgKCRsb2NhdGlvbikgLT4gJGxvY2F0aW9uLmlzSGlzdG9yeUNoYW5nZWRdXG4gIEBpc0RlbGF5ZWRFdmFsdWF0b3IgPSBbLT4gZmFsc2VdXG4gIEAkZ2V0ID0gWy0+IEBdXG4gIHJldHVyblxuXVxuXG4ucnVuIFtcbiAgJyRyb290U2NvcGUnLCAncmV0YWluU2Nyb2xsJywgJyRsb2NhdGlvbicsICckdGltZW91dCcsICckaW5qZWN0b3InXG4gICgkcm9vdFNjb3BlLCByZXRhaW5TY3JvbGwsICRsb2NhdGlvbiwgJHRpbWVvdXQsICRpbmplY3RvcikgLT5cbiAgICAkdGFyZ2V0ID0gJChyZXRhaW5TY3JvbGwudGFyZ2V0IG9yIHdpbmRvdylcbiAgICAkdGFyZ2V0Lm9uICdzY3JvbGwnLCAtPiByZXRhaW5TY3JvbGwucG9zaXRpb25zWyRsb2NhdGlvbi51cmwoKV0gPSAkdGFyZ2V0LnNjcm9sbFRvcCgpICBpZiByZXRhaW5TY3JvbGwudHJhY2tpbmdcblxuICAgIGZvciBldmVudCBpbiBbJyRyb3V0ZUNoYW5nZVN1Y2Nlc3MnLCAnJHN0YXRlQ2hhbmdlU3VjY2VzcyddXG4gICAgICAkcm9vdFNjb3BlLiRvbiBldmVudCwgLT4gcmV0YWluU2Nyb2xsLmluYWN0aXZlID0gcmV0YWluU2Nyb2xsLnRyYWNraW5nID0gZmFsc2VcbiAgICAkcm9vdFNjb3BlLiRvbiAnJHZpZXdDb250ZW50TG9hZGVkJywgKGUpIC0+XG4gICAgICBpZiByZXRhaW5TY3JvbGwuaW5hY3RpdmUgb3Igbm90ICRpbmplY3Rvci5pbnZva2UocmV0YWluU2Nyb2xsLndoZXRoZXJTY3JvbGxFdmFsdWF0b3IpXG4gICAgICAgIGNvbnNvbGUubG9nIFwibW92ZSB0byBzY3JvbGwgdG9wICVvXCIsICR0YXJnZXRbMF1cbiAgICAgICAgJHRhcmdldC5zY3JvbGxUb3AoMClcbiAgICAgICAgcmV0YWluU2Nyb2xsLnRyYWNraW5nID0gdHJ1ZVxuICAgICAgZWxzZVxuICAgICAgICBpc0NhbmNlbCA9IGZhbHNlXG4gICAgICAgIG9mZlNjb3BlRGVzdHJveSA9IGUudGFyZ2V0U2NvcGUuJG9uICckZGVzdHJveScsIC0+IGlzQ2FuY2VsID0gdHJ1ZTsgb2ZmU2Nyb2xsQ2FuY2VsZXIoKVxuICAgICAgICBvZmZTY3JvbGxDYW5jZWxlciA9IC0+ICR0YXJnZXQub2ZmICdzY3JvbGwucmV0YWluU2Nyb2xsLWNhbmNlbGVyJyArIGUudGFyZ2V0U2NvcGUuJGlkXG4gICAgICAgIG9uU2Nyb2xsQ2FuY2VsZXIgPSAtPiAkdGFyZ2V0Lm9uZSAnc2Nyb2xsLnJldGFpblNjcm9sbC1jYW5jZWxlcicgKyBlLnRhcmdldFNjb3BlLiRpZCwgLT4gaXNDYW5jZWwgPSB0cnVlOyBvZmZTY29wZURlc3Ryb3koKVxuICAgICAgICAkdGltZW91dCgtPlxuICAgICAgICAgIGlmIGlzQ2FuY2VsXG4gICAgICAgICAgICBjb25zb2xlLmxvZyAnQ2FuY2VsIHNjcm9sbGluZyAlbycsICR0YXJnZXRbMF1cbiAgICAgICAgICAgIHJldGFpblNjcm9sbC50cmFja2luZyA9IHRydWVcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB0cnlDb3VudCA9IHJldGFpblNjcm9sbC5tYXhUcnlDb3VudFxuICAgICAgICAgICAgc2Nyb2xsVG9wID0gcmV0YWluU2Nyb2xsLnBvc2l0aW9uc1skbG9jYXRpb24udXJsKCldIG9yIDBcbiAgICAgICAgICAgICh0cnlTY3JvbGwgPSAtPlxuICAgICAgICAgICAgICBpZiBpc0NhbmNlbFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nICdDYW5jZWwgc2Nyb2xsaW5nICVvJywgJHRhcmdldFswXVxuICAgICAgICAgICAgICAgIHJldGFpblNjcm9sbC50cmFja2luZyA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZSBpZiAkaW5qZWN0b3IuaW52b2tlKHJldGFpblNjcm9sbC5pc0RlbGF5ZWRFdmFsdWF0b3IpXG4gICAgICAgICAgICAgICAgJHRpbWVvdXQodHJ5U2Nyb2xsLCAyMDApXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBvZmZTY3JvbGxDYW5jZWxlcigpXG4gICAgICAgICAgICAgICAgJHRhcmdldC5zY3JvbGxUb3Aoc2Nyb2xsVG9wKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nIFwiI3sxICsgcmV0YWluU2Nyb2xsLm1heFRyeUNvdW50IC0gdHJ5Q291bnR9IHRyeSBtb3ZlIHRvIHNjcm9sbCAjeyR0YXJnZXQuc2Nyb2xsVG9wKCl9IC8gI3tzY3JvbGxUb3B9ICVvXCIsICR0YXJnZXRbMF1cbiAgICAgICAgICAgICAgICBpZiAkdGFyZ2V0LnNjcm9sbFRvcCgpIGlzIHNjcm9sbFRvcCBvciAtLXRyeUNvdW50IDw9IDBcbiAgICAgICAgICAgICAgICAgIHJldGFpblNjcm9sbC50cmFja2luZyA9IHRydWVcbiAgICAgICAgICAgICAgICAgIG9mZlNjb3BlRGVzdHJveSgpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgb25TY3JvbGxDYW5jZWxlcigpXG4gICAgICAgICAgICAgICAgICAkdGltZW91dCh0cnlTY3JvbGwsIDEwMClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICApKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgLCAxMDApXG4gICAgICByZXR1cm5cbiAgICByZXR1cm5cbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zZXJ2aWNlcy9yZXRhaW5TY3JvbGwuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmNsYXNzIFNlYXJjaEZvcm1cbiAgY29uc3RydWN0b3I6IChAb3B0aW9ucykgLT5cbiAgICBAb3B0aW9ucyA9XG4gICAgICBhY3Rpb246IEBvcHRpb25zICBpZiBhbmd1bGFyLmlzRnVuY3Rpb24gQG9wdGlvbnNcbiAgICBAb3B0aW9ucyA9IGFuZ3VsYXIuZXh0ZW5kKFxuICAgICAgZGVmYXVsdHM6IHt9XG4gICAgICBwcmVTdWJtaXQ6IChmb3JtLCBmaWx0ZXJzLCB1bmZpbHRlcnMpIC0+XG4gICAgICBwcmVSZXNldDogKGZvcm0pIC0+XG4gICAgICBzdWJtaXQ6IChmb3JtLCBmaWx0ZXJzLCB1bmZpbHRlcnMpIC0+XG4gICAgICByZXNldDogKGZvcm0pIC0+XG4gICAgICBhY3Rpb246IChmb3JtKSAtPlxuICAgICAgI3RyYW5zZm9ybTogKGtleSwgdmFsdWUpIC0+IHZhbHVlXG4gICAgLCBAb3B0aW9ucylcblxuICAgIEBjdXJyZW50ID0gYW5ndWxhci5jb3B5KEBvcHRpb25zLmRlZmF1bHRzKSBvciB7fVxuICAgIEBmb3JtID0gYW5ndWxhci5jb3B5KEBvcHRpb25zLmRlZmF1bHRzKSBvciB7fVxuXG4gIGlzUHJpc3RpbmU6IC0+IGFuZ3VsYXIuZXF1YWxzKEBjdXJyZW50LCBAZm9ybSlcbiAgaXNEaXJ0eTogLT4gbm90IEBpc1ByaXN0aW5lKClcbiAgaXNDaGFuZ2VkOiAtPiBub3QgYW5ndWxhci5lcXVhbHMoQGN1cnJlbnQsIEBvcHRpb25zLmRlZmF1bHRzKVxuXG4gIHN1Ym1pdDogKGZvcm0sIGZpbHRlcnMsIHVuZmlsdGVycykgLT5cbiAgICBpZiBAb3B0aW9ucy5wcmVTdWJtaXQ/KGZvcm0sIGZpbHRlcnMsIHVuZmlsdGVycykgaXNudCBmYWxzZVxuICAgICAgaWYgZmlsdGVycz9cbiAgICAgICAgaXNGaWx0ZXJlZCA9IChba2V5LCB2YWx1ZV0gIGZvciBrZXksIHZhbHVlIG9mIGZpbHRlcnMgb3Ige30pLmV2ZXJ5IChrZXlXaXRoVmFsdWUpID0+XG4gICAgICAgICAgW2tleSwgdmFsdWVdID0ga2V5V2l0aFZhbHVlXG4gICAgICAgICAgYW5ndWxhci5lcXVhbHMoQGZvcm1ba2V5XSwgdmFsdWUsIHRydWUpXG4gICAgICAgIGFuZ3VsYXIuZXh0ZW5kKEBmb3JtLCBhbmd1bGFyLmNvcHkoaWYgaXNGaWx0ZXJlZCB0aGVuIHVuZmlsdGVycyBlbHNlIGZpbHRlcnMpKVxuICAgICAgQGN1cnJlbnQgPSBhbmd1bGFyLmNvcHkoQGZvcm0pXG4gICAgICBAb3B0aW9ucy5zdWJtaXQ/KGZvcm0sIGZpbHRlcnMsIHVuZmlsdGVycylcbiAgICAgIEBvcHRpb25zLmFjdGlvbj8oZm9ybSlcbiAgICBAXG5cbiAgcmVzZXQ6IChmb3JtKSAtPlxuICAgIGlmIEBvcHRpb25zLnByZVJlc2V0Pyhmb3JtKSBpc250IGZhbHNlXG4gICAgICBmb3JtPy4kc2V0UHJpc3RpbmU/KClcbiAgICAgIEBjdXJyZW50ID0gYW5ndWxhci5jb3B5KEBvcHRpb25zLmRlZmF1bHRzKSBvciB7fVxuICAgICAgQGZvcm0gPSBhbmd1bGFyLmNvcHkoQG9wdGlvbnMuZGVmYXVsdHMpIG9yIHt9XG4gICAgICBAb3B0aW9ucy5yZXNldD8oZm9ybSlcbiAgICAgIEBvcHRpb25zLmFjdGlvbj8oZm9ybSlcbiAgICBAXG5cbiAgcGFyYW1zOiAocmVmcmVzaCwgZGVmYXVsdHMpIC0+XG4gICAgW2RlZmF1bHRzLCByZWZyZXNoXSA9IFtyZWZyZXNoLCBmYWxzZV0gIGlmIGFuZ3VsYXIuaXNPYmplY3QgcmVmcmVzaFxuXG4gICAgcGFyYW1zID0gaWYgcmVmcmVzaCBpcyB0cnVlXG4gICAgICBhbmd1bGFyLmNvcHkoQGN1cnJlbnQpXG4gICAgZWxzZVxuICAgICAgYW5ndWxhci5jb3B5KEBmb3JtID0gYW5ndWxhci5jb3B5KEBjdXJyZW50KSlcblxuICAgIGZvciBrZXkgb2YgQG9wdGlvbnMuZGVmYXVsdHNcbiAgICAgIHBhcmFtc1trZXldID0gcGFyYW1zW2tleV0uZmlsdGVyKChhKSAtPiAhIWEpICBpZiBhbmd1bGFyLmlzQXJyYXkgcGFyYW1zW2tleV1cblxuICAgIHBhcmFtcyA9IGFuZ3VsYXIuZXh0ZW5kIHBhcmFtcywgYW5ndWxhci5jb3B5KGRlZmF1bHRzKVxuXG4gICAgaWYgYW5ndWxhci5pc0Z1bmN0aW9uIEBvcHRpb25zLnRyYW5zZm9ybVxuICAgICAgcGFyYW1zW2tleV0gPSBAb3B0aW9ucy50cmFuc2Zvcm0oa2V5LCB2YWx1ZSkgIGZvciBrZXksIHZhbHVlIG9mIHBhcmFtc1xuXG4gICAgcGFyYW1zXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuc2VydmljZXMuc2VhcmNoRm9ybScsIFtdXG5cbi5mYWN0b3J5ICdzZWFyY2hGb3JtJywgWy0+IChvcHRpb25zKSAtPiBuZXcgU2VhcmNoRm9ybShvcHRpb25zKV1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zZXJ2aWNlcy9zZWFyY2hGb3JtLmNvZmZlZVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=