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
	angular.module('ngExtends.directives.countTo', []).directive('extCountTo', [
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
	          countTo = parseInt(attrs.extCountTo) || 0;
	          scope.value = parseInt(attrs.value, 10) || 0;
	          duration = (parseFloat(attrs.duration) * 1000) || 0;
	          steps = Math.ceil(duration / refreshInterval);
	          increment = (countTo - scope.value) / steps;
	          return num = scope.value;
	        };
	        tick = function() {
	          return scope.timoutId = $timeout(function() {
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
	          return tick();
	        };
	        attrs.$observe('extCountTo', function(val) {
	          if (val != null) {
	            return start();
	          }
	        });
	        attrs.$observe('value', function() {
	          return start();
	        });
	        return void 0;
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	angular.module('ngExtends.directives.domInit', []).directive('extDomInit', [
	  function() {
	    return {
	      restrict: 'A',
	      link: function(scope, element, attrs) {
	        attrs.$observe('extDomInit', function(value) {
	          var base;
	          return typeof (base = scope.$eval(value)) === "function" ? base(element) : void 0;
	        });
	        return void 0;
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	angular.module('ngExtends.directives.focusMe', []).directive('extFocusMe', [
	  function() {
	    return {
	      scope: {
	        trigger: '=extFocusMe'
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
	          return void 0;
	        });
	        return void 0;
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	angular.module('ngExtends.directives.lower', []).directive('extLower', [
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
	        return void 0;
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	angular.module('ngExtends.directives.repeatDone', []).directive('extRepeatDone', [
	  function() {
	    return {
	      restrict: 'A',
	      link: function(scope, element, attrs) {
	        if (((attrs.ngRepeat != null) || (attrs.ngRepeatStart != null)) && scope.$last) {
	          attrs.$observe('extRepeatDone', function(value) {
	            var base;
	            return typeof (base = scope.$eval(value)) === "function" ? base(element) : void 0;
	          });
	        }
	        return void 0;
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	angular.module('ngExtends.directives.rotate2d', []).directive('extRotate2d', [
	  function() {
	    return {
	      scope: {
	        value: '=extRotate2d',
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
	          return void 0;
	        });
	        return void 0;
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	angular.module('ngExtends.directives.upper', []).directive('extUpper', [
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
	        return void 0;
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
	  function() {
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
	                    return $.obj.get(value, t);
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
	    return $sce.trustAs;
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
	    return function(input, search, replacement) {
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
	      var s;
	      if (input == null) {
	        return input;
	      } else {
	        return input.toString().split(new RegExp(angular.isArray(separators) ? ((function() {
	          var j, len, results;
	          results = [];
	          for (j = 0, len = separators.length; j < len; j++) {
	            s = separators[j];
	            results.push(RegExp.escape(s));
	          }
	          return results;
	        })()).join('|') : RegExp.escape(separators)), limit);
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
	    return void 0;
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
	            return void 0;
	          })(playRoutes = {}, _this.jsRoutes);
	          return playRoutes;
	        };
	      })(this)
	    ];
	    return void 0;
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
	    return void 0;
	  }
	]).run([
	  '$rootScope', 'retainScroll', '$location', '$timeout', '$injector', function($rootScope, retainScroll, $location, $timeout, $injector) {
	    var $target;
	    $target = $(retainScroll.target || window);
	    $target.on('scroll', function() {
	      if (retainScroll.tracking) {
	        return retainScroll.positions[$location.url()] = $target.scrollTop();
	      }
	    });
	    $rootScope.$on('$routeChangeSuccess', function() {
	      return retainScroll.inactive = retainScroll.tracking = false;
	    });
	    $rootScope.$on('$stateChangeSuccess', function() {
	      return retainScroll.inactive = retainScroll.tracking = false;
	    });
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
	              return void 0;
	            })();
	          }
	          return void 0;
	        }, 100);
	      }
	      return void 0;
	    });
	    return void 0;
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
	      defaults: {}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyYjc5MTk4YzE1MDNjNWMyMWNlZiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvYW5ndWxhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFycy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9jb3VudFRvLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9kb21Jbml0LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9mb2N1c01lLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9sb3dlci5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvcmVwZWF0RG9uZS5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvcm90YXRlMmQuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL3VwcGVyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy9hcnJheXMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXJzL3N0cmluZ3MuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9sb2NhdGlvblN0YXRlLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGxheVJvdXRlcy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvd2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yZXRhaW5TY3JvbGwuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zZWFyY2hGb3JtLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0EsNERBQVksQ0FBQzs7cUJBRU4sQ0FBNkI7O3FCQUM3QixDQUE2Qjs7cUJBQzdCLENBQTZCOztxQkFDN0IsQ0FBMkI7O3FCQUMzQixFQUFnQzs7cUJBQ2hDLEVBQThCOztxQkFDOUIsRUFBMkI7O3FCQUMzQixFQUF5Qjs7cUJBQ3pCLEVBQTBCOztxQkFDMUIsRUFBaUM7O3FCQUNqQyxFQUE4Qjs7cUJBQzlCLEVBQWdDOztxQkFDaEMsRUFBOEI7O0FBRXJDLFFBQU8sQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FDbkMsOEJBQThCLEVBQzlCLDhCQUE4QixFQUM5Qiw4QkFBOEIsRUFDOUIsNEJBQTRCLEVBQzVCLGlDQUFpQyxFQUNqQywrQkFBK0IsRUFDL0IsNEJBQTRCLENBQy9CLENBQUMsQ0FBQzs7QUFFSCxRQUFPLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQ2hDLDBCQUEwQixFQUMxQiwyQkFBMkIsQ0FDOUIsQ0FBQyxDQUFDOztBQUVILFFBQU8sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FDakMsa0NBQWtDLEVBQ2xDLCtCQUErQixFQUMvQixpQ0FBaUMsRUFDakMsK0JBQStCLENBQ2xDLENBQUMsQ0FBQzs7QUFFSCxRQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUN4QixzQkFBc0IsRUFDdEIsbUJBQW1CLEVBQ25CLG9CQUFvQixDQUN2QixDQUFDLEM7Ozs7Ozs7QUMxQ0Ysc0RBQVksQ0FBQzs7OztvQ0FFTyxDQUFTOzs7O0FBRTdCLEtBQUksQ0FBQyxDQUFDLEVBQUU7QUFDSixXQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7RUFDM0Q7O0FBRUQsT0FBTSxDQUFDLE9BQU8sdUJBQVUsQzs7Ozs7OztBQ1J4QixhQUFZLENBQUM7Ozs7bUNBRUMsQ0FBUTs7OztBQUV0QixLQUFJLG9CQUFFLEVBQUU7QUFDSixXQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7RUFDeEQ7O0FBRUQsT0FBTSxDQUFDLE9BQU8sc0JBQUksQzs7Ozs7O0FDUmxCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkI7Ozs7OztBQ1JBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFFQSxRQUFPLENBQUMsTUFBUixDQUFlLDhCQUFmLEVBQStDLEVBQS9DLENBRUEsQ0FBQyxTQUZELENBRVcsWUFGWCxFQUV5QjtHQUFDLFVBQUQsRUFBYSxTQUFDLFFBQUQ7WUFDcEM7T0FBQSxTQUFTLEtBQVQ7T0FDQSxPQUFPLElBRFA7T0FFQSxNQUFNLFNBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsS0FBakI7QUFDSjtTQUFBLE9BQU8sT0FBUTtTQUNmLE1BQU07U0FDTixrQkFBa0I7U0FDbEIsUUFBUTtTQUNSLE9BQU87U0FDUCxVQUFVO1NBQ1YsWUFBWTtTQUVaLFlBQVk7QUFDVjtXQUFBLGtCQUFrQjtXQUNsQixPQUFPO1dBQ1AsS0FBSyxDQUFDLFFBQU4sR0FBaUI7V0FDakIsVUFBVSxTQUFTLEtBQUssQ0FBQyxVQUFmLEtBQThCO1dBQ3hDLEtBQUssQ0FBQyxLQUFOLEdBQWMsU0FBUyxLQUFLLENBQUMsS0FBZixFQUFzQixFQUF0QixLQUE2QjtXQUMzQyxXQUFXLENBQUMsV0FBVyxLQUFLLENBQUMsUUFBakIsSUFBNkIsSUFBOUIsS0FBdUM7V0FFbEQsUUFBUSxJQUFJLENBQUMsSUFBTCxDQUFVLFdBQVcsZUFBckI7V0FDUixZQUFZLENBQUMsVUFBVSxLQUFLLENBQUMsS0FBakIsSUFBMEI7a0JBQ3RDLE1BQU0sS0FBSyxDQUFDO1NBVkY7U0FZWixPQUFPO2tCQUNMLEtBQUssQ0FBQyxRQUFOLEdBQWlCLFNBQVM7YUFDeEIsT0FBTzthQUNQO2FBQ0EsSUFBRyxRQUFRLEtBQVg7ZUFDRSxRQUFRLENBQUMsTUFBVCxDQUFnQixLQUFLLENBQUMsUUFBdEI7ZUFDQSxNQUFNO3NCQUNOLElBQUksQ0FBQyxXQUFMLEdBQW1CLFFBSHJCO2NBQUE7ZUFLRSxJQUFJLENBQUMsV0FBTCxHQUFtQixJQUFJLENBQUMsS0FBTCxDQUFXLEdBQVg7c0JBQ25CLE9BTkY7O1dBSHdCLENBQVQsRUFVZixlQVZlO1NBRFo7U0FhUCxRQUFRO1dBQ04sSUFBb0Msc0JBQXBDO2FBQUEsUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsS0FBSyxDQUFDLFFBQXRCOztXQUNBO2tCQUNBO1NBSE07U0FLUixLQUFLLENBQUMsUUFBTixDQUFlLFlBQWYsRUFBNkIsU0FBQyxHQUFEO1dBQVMsSUFBWSxXQUFaO29CQUFBOztTQUFULENBQTdCO1NBQ0EsS0FBSyxDQUFDLFFBQU4sQ0FBZSxPQUFmLEVBQXdCO2tCQUFHO1NBQUgsQ0FBeEI7Z0JBRUE7T0ExQ0ksQ0FGTjs7R0FEb0MsQ0FBYjtFQUZ6Qjs7Ozs7Ozs7QUNGQTtBQUVBLFFBQU8sQ0FBQyxNQUFSLENBQWUsOEJBQWYsRUFBK0MsRUFBL0MsQ0FFQSxDQUFDLFNBRkQsQ0FFVyxZQUZYLEVBRXlCO0dBQUM7WUFDeEI7T0FBQSxVQUFVLEdBQVY7T0FDQSxNQUFNLFNBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsS0FBakI7U0FDSixLQUFLLENBQUMsUUFBTixDQUFlLFlBQWYsRUFBNkIsU0FBQyxLQUFEO0FBQVc7MkVBQW9CO1NBQS9CLENBQTdCO2dCQUNBO09BRkksQ0FETjs7R0FEd0IsQ0FBRDtFQUZ6Qjs7Ozs7Ozs7QUNGQTtBQUVBLFFBQU8sQ0FBQyxNQUFSLENBQWUsOEJBQWYsRUFBK0MsRUFBL0MsQ0FFQSxDQUFDLFNBRkQsQ0FFVyxZQUZYLEVBRXlCO0dBQUM7WUFDeEI7T0FBQSxPQUNFO1NBQUEsU0FBUyxhQUFUO1FBREY7T0FFQSxNQUFNLFNBQUMsS0FBRCxFQUFRLE9BQVI7U0FDSixLQUFLLENBQUMsTUFBTixDQUFhLFNBQWIsRUFBd0IsU0FBQyxLQUFEO0FBQ3RCO1dBQUEsSUFBRyxPQUFPLEtBQVAsS0FBZ0IsU0FBbkI7O2VBQ0U7O2FBQ0EsS0FBSyxDQUFDLE9BQU4sR0FBZ0IsS0FGbEI7O2tCQUdBO1NBSnNCLENBQXhCO2dCQUtBO09BTkksQ0FGTjs7R0FEd0IsQ0FBRDtFQUZ6Qjs7Ozs7Ozs7QUNGQTtBQUVBLFFBQU8sQ0FBQyxNQUFSLENBQWUsNEJBQWYsRUFBNkMsRUFBN0MsQ0FFQSxDQUFDLFNBRkQsQ0FFVyxVQUZYLEVBRXVCO0dBQUM7WUFDdEI7T0FBQSxTQUFTLFNBQVQ7T0FDQSxNQUFNLFNBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsS0FBakIsRUFBd0IsU0FBeEI7QUFDSjtTQUFBLFVBQVUsU0FBQyxVQUFEO0FBQ1I7V0FBQSxVQUFhLFVBQUgsR0FBbUIsVUFBVSxDQUFDLFdBQVgsRUFBbkIsR0FBaUQ7V0FDM0QsSUFBTyxZQUFXLFVBQWxCO2FBQ0UsU0FBUyxDQUFDLGFBQVYsQ0FBd0IsT0FBeEI7YUFDQSxTQUFTLENBQUMsT0FBVixHQUZGOztrQkFHQTtTQUxRO1NBT1YsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFuQixDQUF3QixPQUF4QjtTQUNBLFFBQVEsS0FBTSxNQUFLLENBQUMsT0FBTixDQUFkO2dCQUNBO09BVkksQ0FETjs7R0FEc0IsQ0FBRDtFQUZ2Qjs7Ozs7Ozs7QUNGQTtBQUVBLFFBQU8sQ0FBQyxNQUFSLENBQWUsaUNBQWYsRUFBa0QsRUFBbEQsQ0FFQSxDQUFDLFNBRkQsQ0FFVyxlQUZYLEVBRTRCO0dBQUM7WUFDM0I7T0FBQSxVQUFVLEdBQVY7T0FDQSxNQUFNLFNBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsS0FBakI7U0FDSixJQUFHLENBQUMsNEJBQW1CLDZCQUFwQixLQUE4QyxLQUFLLENBQUMsS0FBdkQ7V0FDRSxLQUFLLENBQUMsUUFBTixDQUFlLGVBQWYsRUFBZ0MsU0FBQyxLQUFEO0FBQVc7NkVBQW9CO1dBQS9CLENBQWhDLEVBREY7O2dCQUVBO09BSEksQ0FETjs7R0FEMkIsQ0FBRDtFQUY1Qjs7Ozs7Ozs7QUNGQTtBQUVBLFFBQU8sQ0FBQyxNQUFSLENBQWUsK0JBQWYsRUFBZ0QsRUFBaEQsQ0FFQSxDQUFDLFNBRkQsQ0FFVyxhQUZYLEVBRTBCO0dBQUM7WUFDekI7T0FBQSxPQUNFO1NBQUEsT0FBTyxjQUFQO1NBQ0EsT0FBTyxHQURQO1NBRUEsT0FBTyxHQUZQO1FBREY7T0FJQSxNQUFNLFNBQUMsS0FBRCxFQUFRLE9BQVI7U0FDSixLQUFLLENBQUMsZ0JBQU4sQ0FBdUIsdUJBQXZCLEVBQWdELFNBQUMsTUFBRDtBQUM5QztXQUFBLFFBQVEsTUFBTyxHQUFQLElBQWE7V0FDckIsUUFBUSxNQUFPLEdBQVAsSUFBYTtXQUNyQixRQUFRLE1BQU8sR0FBUCxJQUFhO1dBQ3JCLFNBQVMsUUFBUSxLQUFSLEdBQWdCO1dBQ3pCLE9BQU8sQ0FBQyxHQUFSLENBQ0U7YUFBQSxxQkFBcUIsWUFBWSxNQUFaLEdBQXFCLE1BQTFDO2FBQ0Esa0JBQWtCLFlBQVksTUFBWixHQUFxQixNQUR2QzthQUVBLGFBQWEsWUFBWSxNQUFaLEdBQXFCLE1BRmxDO1lBREY7a0JBSUE7U0FUOEMsQ0FBaEQ7Z0JBVUE7T0FYSSxDQUpOOztHQUR5QixDQUFEO0VBRjFCOzs7Ozs7OztBQ0ZBO0FBRUEsUUFBTyxDQUFDLE1BQVIsQ0FBZSw0QkFBZixFQUE2QyxFQUE3QyxDQUVBLENBQUMsU0FGRCxDQUVXLFVBRlgsRUFFdUI7R0FBQztZQUN0QjtPQUFBLFNBQVMsU0FBVDtPQUNBLE1BQU0sU0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixLQUFqQixFQUF3QixTQUF4QjtBQUNKO1NBQUEsVUFBVSxTQUFDLFVBQUQ7QUFDUjtXQUFBLFVBQWEsVUFBSCxHQUFtQixVQUFVLENBQUMsV0FBWCxFQUFuQixHQUFpRDtXQUMzRCxJQUFPLFlBQVcsVUFBbEI7YUFDRSxTQUFTLENBQUMsYUFBVixDQUF3QixPQUF4QjthQUNBLFNBQVMsQ0FBQyxPQUFWLEdBRkY7O2tCQUdBO1NBTFE7U0FPVixTQUFTLENBQUMsUUFBUSxDQUFDLElBQW5CLENBQXdCLE9BQXhCO1NBQ0EsUUFBUSxLQUFNLE1BQUssQ0FBQyxPQUFOLENBQWQ7Z0JBQ0E7T0FWSSxDQUROOztHQURzQixDQUFEO0VBRnZCOzs7Ozs7OztBQ0ZBO0FBQUE7O0FBRUEsUUFBTyxDQUFDLE1BQVIsQ0FBZSwwQkFBZixFQUEyQyxFQUEzQyxDQUVBLENBQUMsTUFGRCxDQUVRLFdBRlIsRUFFcUI7R0FBQztZQUFHLFNBQUMsS0FBRDtPQUFXLElBQUcsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsS0FBaEIsQ0FBSDtnQkFBOEIsTUFBOUI7UUFBQTtnQkFBeUMsQ0FBQyxDQUFDLFNBQUYsQ0FBWSxLQUFaLEVBQXpDOztLQUFYO0dBQUgsQ0FBRDtFQUZyQixDQUlBLENBQUMsTUFKRCxDQUlRLE9BSlIsRUFJaUI7R0FBQztZQUFHLFNBQUMsSUFBRCxFQUFPLEVBQVAsRUFBVyxJQUFYO0FBQ25COztTQUQ4QixPQUFPOztPQUNyQyxXQUFXLE9BQU8sSUFBUCxLQUFlLFFBQWYsSUFBNEIsT0FBTyxFQUFQLEtBQWE7T0FDcEQsUUFBVyxRQUFILEdBQWlCLElBQWpCLEdBQTJCLElBQUksQ0FBQyxRQUFMLEVBQWUsQ0FBQyxVQUFoQixDQUEyQixDQUEzQjtPQUNuQyxNQUFTLFFBQUgsR0FBaUIsRUFBakIsR0FBeUIsRUFBRSxDQUFDLFFBQUgsRUFBYSxDQUFDLFVBQWQsQ0FBeUIsQ0FBekI7QUFDL0I7WUFBUyxxSEFBVDtTQUNFLElBQUcsUUFBSDt3QkFBaUIsR0FBakI7VUFBQTt3QkFBd0IsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsQ0FBcEIsR0FBeEI7O0FBREY7O0tBSm1CO0dBQUgsQ0FBRDtFQUpqQixDQVlBLENBQUMsTUFaRCxDQVlRLE1BWlIsRUFZZ0I7R0FBQztZQUFHLFNBQUMsS0FBRCxFQUFRLEdBQVI7Y0FBZ0IsQ0FBQyxDQUFDLFNBQUYsQ0FBWSxLQUFaLENBQWtCLENBQUMsSUFBbkIsQ0FBd0IsR0FBeEI7S0FBaEI7R0FBSCxDQUFEO0VBWmhCLENBY0EsQ0FBQyxNQWRELENBY1EsU0FkUixFQWNtQjtHQUFDO1lBQUc7QUFDckI7T0FEc0Isc0JBQU87T0FDN0IsS0FBd0IsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsS0FBaEIsQ0FBeEI7U0FBQSxRQUFRLENBQUMsS0FBRCxFQUFSOztjQUNBOztBQUFDO2NBQUE7O0FBQ0M7O2FBQ0UsSUFBRyxPQUFPLENBQUMsVUFBUixDQUFtQixDQUFuQixDQUFIO2VBQ0UsUUFBUSxFQUFFLEtBQUYsRUFEVjtjQUFBLE1BRUssSUFBRyxPQUFPLENBQVAsS0FBWSxRQUFmO2VBQ0g7QUFBUSx5QkFBTyxDQUFQO0FBQUEsd0JBQ0QsVUFEQzs0QkFDZSxTQUFTLEtBQVQ7QUFEZix3QkFFRCxRQUZDOzRCQUVlLFdBQVcsS0FBWDtBQUZmOzRCQUdELENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBTixDQUFVLEtBQVYsRUFBaUIsQ0FBakI7QUFIQztvQkFETDs7QUFIUDt3QkFRQTtBQVREOztXQUFELENBVUMsQ0FBQyxNQVZGLENBVVMsU0FBQyxDQUFELEVBQUksQ0FBSjtnQkFBVSxJQUFJO09BQWQsQ0FWVDtLQUZxQjtHQUFILENBQUQ7RUFkbkIsQ0E2QkEsQ0FBQyxNQTdCRCxDQTZCUSxPQTdCUixFQTZCaUI7R0FBQztZQUFHLFNBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxZQUFkO0FBQ25CO09BQUEsT0FBTyxDQUFDLE9BQU8sQ0FBUixJQUFhO09BQ3BCLEtBQUssT0FBTztjQUNaLENBQUMsQ0FBQyxTQUFGLENBQVksS0FBWixDQUFtQjtLQUhBO0dBQUgsQ0FBRDtFQTdCakIsQ0FtQ0EsQ0FBQyxNQW5DRCxDQW1DUSxNQW5DUixFQW1DZ0I7R0FBQztZQUFHLFNBQUMsS0FBRDtBQUNsQjtPQUFBLElBQUcsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsS0FBaEIsQ0FBSDtBQUNFO2NBQUE7OzBJQUFjLENBQUU7QUFBaEI7d0JBREY7UUFBQTtpSkFHb0IsQ0FBRSwyQ0FIdEI7O0tBRGtCO0dBQUgsQ0FBRDtFQW5DaEI7Ozs7Ozs7O0FDRkE7QUFFQSxRQUFPLENBQUMsTUFBUixDQUFlLDJCQUFmLEVBQTRDLEVBQTVDLENBRUEsQ0FBQyxNQUZELENBRVEsU0FGUixFQUVtQjtHQUFDLE1BQUQsRUFBUyxTQUFDLElBQUQ7WUFBVSxJQUFJLENBQUM7R0FBZixDQUFUO0VBRm5CLENBR0EsQ0FBQyxNQUhELENBR1EsWUFIUixFQUdzQjtHQUFDLE1BQUQsRUFBUyxTQUFDLElBQUQ7WUFBVSxJQUFJLENBQUM7R0FBZixDQUFUO0VBSHRCLENBSUEsQ0FBQyxNQUpELENBSVEsYUFKUixFQUl1QjtHQUFDLE1BQUQsRUFBUyxTQUFDLElBQUQ7WUFBVSxJQUFJLENBQUM7R0FBZixDQUFUO0VBSnZCLENBS0EsQ0FBQyxNQUxELENBS1EsV0FMUixFQUtxQjtHQUFDLE1BQUQsRUFBUyxTQUFDLElBQUQ7WUFBVSxJQUFJLENBQUM7R0FBZixDQUFUO0VBTHJCLENBTUEsQ0FBQyxNQU5ELENBTVEsb0JBTlIsRUFNOEI7R0FBQyxNQUFELEVBQVMsU0FBQyxJQUFEO1lBQVUsSUFBSSxDQUFDO0dBQWYsQ0FBVDtFQU45QixDQU9BLENBQUMsTUFQRCxDQU9RLFlBUFIsRUFPc0I7R0FBQyxNQUFELEVBQVMsU0FBQyxJQUFEO1lBQVUsSUFBSSxDQUFDO0dBQWYsQ0FBVDtFQVB0QixDQVNBLENBQUMsTUFURCxDQVNRLFNBVFIsRUFTbUI7R0FBQztZQUFHLFNBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0IsV0FBaEI7Y0FBZ0MsQ0FBQyxTQUFTLEVBQVYsQ0FBYSxDQUFDLFFBQWQsRUFBd0IsQ0FBQyxPQUF6QixDQUFpQyxNQUFqQyxFQUF5QyxXQUF6QztLQUFoQztHQUFILENBQUQ7RUFUbkIsQ0FXQSxDQUFDLE1BWEQsQ0FXUSxPQVhSLEVBV2lCO0dBQUM7WUFBRyxTQUFDLEtBQUQ7Y0FBVyxDQUFDLFNBQVMsRUFBVixDQUFhLENBQUMsUUFBZCxFQUF3QixDQUFDLE9BQXpCLENBQWlDLG9CQUFqQyxFQUF1RCxPQUF2RDtLQUFYO0dBQUgsQ0FBRDtFQVhqQixDQWFBLENBQUMsTUFiRCxDQWFRLE9BYlIsRUFhaUI7R0FBQztZQUFHLFNBQUMsS0FBRDtjQUFXLENBQUMsU0FBUyxFQUFWLENBQWEsQ0FBQyxRQUFkLEVBQXdCLENBQUMsT0FBekIsQ0FBaUMsZ0JBQWpDLEVBQW1ELElBQW5EO0tBQVg7R0FBSCxDQUFEO0VBYmpCLENBZUEsQ0FBQyxNQWZELENBZVEsWUFmUixFQWVzQjtHQUFDO1lBQUcsU0FBQyxLQUFEO2NBQVcsQ0FBQyxTQUFTLEVBQVYsQ0FBYSxDQUFDLFFBQWQsRUFBd0IsQ0FBQyxPQUF6QixDQUFpQyxLQUFqQyxFQUF3QyxRQUF4QztLQUFYO0dBQUgsQ0FBRDtFQWZ0QixDQWlCQSxDQUFDLE1BakJELENBaUJRLFlBakJSLEVBaUJzQjtHQUFDO1lBQUcsU0FBQyxLQUFEO2NBQVcsQ0FBQyxTQUFTLEVBQVYsQ0FBYSxDQUFDLFFBQWQsRUFBd0IsQ0FBQyxPQUF6QixDQUFpQyxTQUFqQyxFQUE0QyxHQUE1QztLQUFYO0dBQUgsQ0FBRDtFQWpCdEIsQ0FtQkEsQ0FBQyxNQW5CRCxDQW1CUSxPQW5CUixFQW1CaUI7R0FBQztZQUFHLFNBQUMsS0FBRCxFQUFRLFVBQVIsRUFBb0IsS0FBcEI7QUFDbkI7T0FBQSxJQUFPLGFBQVA7Z0JBQW1CLE1BQW5CO1FBQUE7Z0JBQ0ssS0FBSyxDQUFDLFFBQU4sRUFBZ0IsQ0FBQyxLQUFqQixDQUEyQixXQUMzQixPQUFPLENBQUMsT0FBUixDQUFnQixVQUFoQixDQUFILEdBQ0U7O0FBQUM7Z0JBQUE7OzBCQUFBLE1BQU0sQ0FBQyxNQUFQLENBQWMsQ0FBZDtBQUFBOzthQUFELENBQXVDLENBQUMsSUFBeEMsQ0FBNkMsR0FBN0MsQ0FERixHQUdFLE1BQU0sQ0FBQyxNQUFQLENBQWMsVUFBZCxDQUo0QixDQUEzQixFQUtGLEtBTEUsRUFETDs7S0FEbUI7R0FBSCxDQUFEO0VBbkJqQixDQTZCQSxDQUFDLE1BN0JELENBNkJRLFdBN0JSLEVBNkJxQjtHQUFDO1lBQUcsU0FBQyxLQUFELEVBQVEsU0FBUixFQUF3QixNQUF4QjtBQUN2Qjs7U0FEK0IsWUFBWTs7O1NBQUksU0FBUzs7T0FDeEQsSUFBTyxhQUFQO2dCQUFtQixNQUFuQjtRQUFBO1NBRUUsY0FBYyxLQUFLLENBQUMsUUFBTjtTQUNkLElBQXNELFdBQVcsQ0FBQyxNQUFaLEdBQXFCLFlBQVksTUFBTSxDQUFDLE1BQTlGO1dBQUEsY0FBYyxXQUFZLG9CQUFaLEdBQTZCLE9BQTNDOztnQkFDQSxZQUpGOztLQUR1QjtHQUFILENBQUQ7RUE3QnJCLENBcUNBLENBQUMsTUFyQ0QsQ0FxQ1EsZ0JBckNSLEVBcUMwQjtHQUFDO1lBQUcsU0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixTQUFoQixFQUFnQyxNQUFoQyxFQUFnRCxNQUFoRDtBQUM1Qjs7U0FENEMsWUFBWTs7O1NBQUksU0FBUzs7O1NBQU8sU0FBUzs7T0FDckYsSUFBTyxhQUFQO2dCQUFtQixNQUFuQjtRQUFBO1NBRUUsY0FBYyxLQUFLLENBQUMsUUFBTjtTQUNkLGVBQWUsQ0FBQyxVQUFVLEVBQVgsQ0FBYyxDQUFDLFFBQWY7U0FDZixJQUFJLFdBQVcsQ0FBQyxPQUFaLENBQW9CLFlBQXBCO1NBQ0osSUFBRyxNQUFLLENBQUMsQ0FBVDtXQUNFLElBQXNELFdBQVcsQ0FBQyxNQUFaLEdBQXFCLFlBQVksTUFBTSxDQUFDLE1BQTlGO2FBQUEsY0FBYyxXQUFZLG9CQUFaLEdBQTZCLE9BQTNDOztrQkFDQSxZQUZGO1VBQUE7a0JBSUUsQ0FBQyxRQUFRLFNBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsTUFBaEIsRUFBd0IsVUFBeEI7QUFDUDthQUFBLElBQUcsY0FBYyxDQUFkLElBQW1CLE1BQU0sQ0FBQyxNQUFQLEtBQWlCLENBQXBDLElBQTBDLEtBQUssQ0FBQyxNQUFOLEtBQWdCLENBQTdEO2VBQ0UsZ0JBQW1CLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLENBQW5CLEdBQTBCLE1BQTFCLEdBQXNDO2VBQ3RELGdCQUFtQixLQUFLLENBQUMsTUFBTixHQUFlLENBQWxCLEdBQXlCLE1BQXpCLEdBQXFDO3NCQUNyRCxnQkFBZ0IsTUFBaEIsR0FBeUIsY0FIM0I7Y0FBQTtlQUtFLGFBQWEsYUFBYTtlQUMxQixJQUFHLGFBQWEsQ0FBaEI7d0JBQ0UsTUFBTSxNQUFPLGFBQWIsRUFBc0IsS0FBdEIsRUFBNkIsTUFBTyxVQUFQLEdBQWdCLE1BQTdDLEVBQXFELENBQXJELEVBREY7Z0JBQUE7aUJBR0UsZ0JBQWdCLE1BQU87aUJBQ3ZCLGVBQWUsS0FBTTtpQkFDckIsZUFBZSxNQUFPO2lCQUN0QixjQUFjLEtBQU07d0JBQ3BCLE1BQ0UsWUFERixFQUVFLFdBRkYsRUFHRSxnQkFBZ0IsTUFBaEIsR0FBeUIsWUFIM0IsRUFJRSxhQUFhLGFBQWEsQ0FBQyxNQUEzQixHQUFvQyxZQUFZLENBQUMsTUFKbkQsRUFQRjtnQkFORjs7V0FETyxDQUFULEVBcUJFLFdBQVksWUFyQmQsRUFzQkUsV0FBWSwrQkF0QmQsRUF1QkUsWUF2QkYsRUF3QkUsWUFBWSxZQUFZLENBQUMsTUFBekIsR0FBa0MsTUFBTSxDQUFDLE1BQXpDLEdBQWtELE1BQU0sQ0FBQyxNQXhCM0QsRUFKRjtVQUxGOztLQUQ0QjtHQUFILENBQUQ7RUFyQzFCOzs7Ozs7OztBQ0ZBO0FBRUEsUUFBTyxDQUFDLE1BQVIsQ0FBZSxrQ0FBZixFQUFtRCxFQUFuRCxDQUVBLENBQUMsR0FGRCxDQUVLO0dBQ0gsWUFERyxFQUNXLFNBRFgsRUFDc0IsV0FEdEIsRUFFSCxTQUFDLFVBQUQsRUFBYSxPQUFiLEVBQXNCLFNBQXRCO0tBQ0UsVUFBVSxDQUFDLEdBQVgsQ0FBZSx3QkFBZixFQUF5QztjQUFHLFNBQVMsQ0FBQyxZQUFWLEdBQXlCLFNBQVMsQ0FBQyxJQUFWO0tBQTVCLENBQXpDO0tBQ0EsVUFBVSxDQUFDLE1BQVgsQ0FBa0IsQ0FBQztjQUFHLFNBQVMsQ0FBQyxJQUFWO0tBQUgsQ0FBRCxDQUFsQixFQUF5QyxTQUFDLFdBQUQ7Y0FBaUIsU0FBUyxDQUFDLGdCQUFWLEdBQTZCLFNBQVMsQ0FBQyxZQUFWLEtBQTBCO0tBQXhFLENBQXpDO1lBQ0E7R0FIRixDQUZHO0VBRkw7Ozs7Ozs7O0FDRkE7QUFFQSxRQUFPLENBQUMsTUFBUixDQUFlLCtCQUFmLEVBQWdELEVBQWhELENBRUEsQ0FBQyxRQUZELENBRVUsWUFGVixFQUV3QjtHQUFDO0tBQ3ZCLElBQUMsU0FBRCxHQUFZLE1BQU0sQ0FBQztLQUNuQixJQUFDLEtBQUQsR0FBUTtPQUFDLE9BQUQsRUFBVTtnQkFBQSxTQUFDLEtBQUQ7QUFDaEI7V0FBQSxXQUFXLFNBQUMsRUFBRDtvQkFBUTtBQUNqQjtlQUFBLGNBQWMsRUFBRSxDQUFDLEtBQUgsQ0FBUyxJQUFULEVBQVksU0FBWjtlQUNkLGFBQWEsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFuQjtlQUNiLE1BQU0sV0FBVyxDQUFDO2VBQ2xCLE1BQ0U7aUJBQUEsUUFBUSxXQUFSO2lCQUNBLFFBQVEsVUFEUjtpQkFFQSxLQUFLLEdBRkw7aUJBR0EsYUFBYSxXQUFXLENBQUMsV0FIekI7aUJBSUEsY0FBYyxXQUFXLENBQUMsWUFKMUI7O2VBS0YsR0FBSSxZQUFKLEdBQWtCLFNBQUMsT0FBRDt3QkFBYSxLQUFNLFlBQU4sQ0FBa0IsR0FBbEIsRUFBdUIsT0FBdkI7ZUFBYjtzQkFDbEI7YUFYaUI7V0FBUjtXQWFYLENBQUMsWUFBWSxTQUFDLGdCQUFELEVBQW1CLGNBQW5CO0FBQ1g7QUFBQTs7ZUFDRSxJQUFHLE9BQU8sQ0FBQyxVQUFSLENBQW1CLEtBQW5CLENBQUg7aUJBQ0UsZ0JBQWlCLEtBQWpCLEdBQXdCLFNBQVMsS0FBVCxFQUQxQjtnQkFBQTtpQkFHRSxNQUFtQyxPQUFPLGdCQUExQzttQkFBQSxnQkFBaUIsS0FBakIsR0FBd0IsR0FBeEI7O2lCQUNBLFVBQVUsZ0JBQWlCLEtBQTNCLEVBQWlDLEtBQWpDLEVBSkY7O0FBREY7b0JBTUE7V0FQVyxDQUFiLEVBUUUsYUFBYSxFQVJmLEVBUW1CLEtBQUMsU0FScEI7a0JBU0E7U0F2QmdCO09BQUEsUUFBVjs7WUF5QlI7R0EzQnVCLENBQUQ7RUFGeEI7Ozs7Ozs7O0FDRkEsMkRBQVksQ0FBQzs7QUFFYixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtBQUNsQixXQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7RUFDdkU7O0FBRUQsT0FBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLEM7Ozs7Ozs7QUNOdkI7QUFFQSxxQkFBUSxFQUFSOztBQUVBLFFBQU8sQ0FBQyxNQUFSLENBQWUsaUNBQWYsRUFBa0QsQ0FBQyxrQ0FBRCxDQUFsRCxDQUVBLENBQUMsUUFGRCxDQUVVLGNBRlYsRUFFMEI7R0FBQztLQUN6QixJQUFDLE9BQUQsR0FBVTtLQUNWLElBQUMsU0FBRCxHQUFZO0tBQ1osSUFBQyxTQUFELEdBQVk7S0FDWixJQUFDLFVBQUQsR0FBYTtLQUNiLElBQUMsWUFBRCxHQUFlO0tBQ2YsSUFBQyx1QkFBRCxHQUEwQjtPQUFDLFdBQUQsRUFBYyxTQUFDLFNBQUQ7Z0JBQWUsU0FBUyxDQUFDO09BQXpCLENBQWQ7O0tBQzFCLElBQUMsbUJBQUQsR0FBc0I7T0FBQztnQkFBRztPQUFILENBQUQ7O0tBQ3RCLElBQUMsS0FBRCxHQUFRO09BQUM7Z0JBQUc7T0FBSCxDQUFEOztZQUNSO0dBVHlCLENBQUQ7RUFGMUIsQ0FjQSxDQUFDLEdBZEQsQ0FjSztHQUNILFlBREcsRUFDVyxjQURYLEVBQzJCLFdBRDNCLEVBQ3dDLFVBRHhDLEVBQ29ELFdBRHBELEVBRUgsU0FBQyxVQUFELEVBQWEsWUFBYixFQUEyQixTQUEzQixFQUFzQyxRQUF0QyxFQUFnRCxTQUFoRDtBQUNFO0tBQUEsVUFBVSxFQUFFLFlBQVksQ0FBQyxNQUFiLElBQXVCLE1BQXpCO0tBQ1YsT0FBTyxDQUFDLEVBQVIsQ0FBVyxRQUFYLEVBQXFCO09BQUcsSUFBa0UsWUFBWSxDQUFDLFFBQS9FO2dCQUFBLFlBQVksQ0FBQyxTQUFVLFVBQVMsQ0FBQyxHQUFWLEdBQXZCLEdBQTBDLE9BQU8sQ0FBQyxTQUFSLEdBQTFDOztLQUFILENBQXJCO0tBRUEsVUFBVSxDQUFDLEdBQVgsQ0FBZSxxQkFBZixFQUFzQztjQUFHLFlBQVksQ0FBQyxRQUFiLEdBQXdCLFlBQVksQ0FBQyxRQUFiLEdBQXdCO0tBQW5ELENBQXRDO0tBQ0EsVUFBVSxDQUFDLEdBQVgsQ0FBZSxxQkFBZixFQUFzQztjQUFHLFlBQVksQ0FBQyxRQUFiLEdBQXdCLFlBQVksQ0FBQyxRQUFiLEdBQXdCO0tBQW5ELENBQXRDO0tBQ0EsVUFBVSxDQUFDLEdBQVgsQ0FBZSxvQkFBZixFQUFxQyxTQUFDLENBQUQ7QUFDbkM7T0FBQSxJQUFHLFlBQVksQ0FBQyxRQUFiLElBQXlCLENBQUksU0FBUyxDQUFDLE1BQVYsQ0FBaUIsWUFBWSxDQUFDLHNCQUE5QixDQUFoQztTQUNFLE9BQU8sQ0FBQyxHQUFSLENBQVksdUJBQVosRUFBcUMsT0FBUSxHQUE3QztTQUNBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLENBQWxCO1NBQ0EsWUFBWSxDQUFDLFFBQWIsR0FBd0IsS0FIMUI7UUFBQTtTQUtFLFdBQVc7U0FDWCxrQkFBa0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFkLENBQWtCLFVBQWxCLEVBQThCO1dBQUcsV0FBVztrQkFBTTtTQUFwQixDQUE5QjtTQUNsQixvQkFBb0I7a0JBQUcsT0FBTyxDQUFDLEdBQVIsQ0FBWSxpQ0FBaUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUEzRDtTQUFIO1NBQ3BCLG1CQUFtQjtrQkFBRyxPQUFPLENBQUMsR0FBUixDQUFZLGlDQUFpQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQTNELEVBQWdFO2FBQUcsV0FBVztvQkFBTTtXQUFwQixDQUFoRTtTQUFIO1NBQ25CLFNBQVM7QUFDUDtXQUFBLElBQUcsUUFBSDthQUNFLE9BQU8sQ0FBQyxHQUFSLENBQVkscUJBQVosRUFBbUMsT0FBUSxHQUEzQzthQUNBLFlBQVksQ0FBQyxRQUFiLEdBQXdCLEtBRjFCO1lBQUE7YUFJRSxXQUFXLFlBQVksQ0FBQzthQUN4QixZQUFZLFlBQVksQ0FBQyxTQUFVLFVBQVMsQ0FBQyxHQUFWLEdBQXZCLElBQTJDO2FBQ3ZELENBQUMsWUFBWTtlQUNYLElBQUcsUUFBSDtpQkFDRSxPQUFPLENBQUMsR0FBUixDQUFZLHFCQUFaLEVBQW1DLE9BQVEsR0FBM0M7aUJBQ0EsWUFBWSxDQUFDLFFBQWIsR0FBd0IsS0FGMUI7Z0JBQUEsTUFHSyxJQUFHLFNBQVMsQ0FBQyxNQUFWLENBQWlCLFlBQVksQ0FBQyxrQkFBOUIsQ0FBSDtpQkFDSCxTQUFTLFNBQVQsRUFBb0IsR0FBcEIsRUFERztnQkFBQTtpQkFHSDtpQkFDQSxPQUFPLENBQUMsU0FBUixDQUFrQixTQUFsQjtpQkFDQSxPQUFPLENBQUMsR0FBUixDQUFjLENBQUMsSUFBSSxZQUFZLENBQUMsV0FBakIsR0FBK0IsUUFBaEMsSUFBeUMsc0JBQXpDLEdBQThELENBQUMsT0FBTyxDQUFDLFNBQVIsRUFBRCxDQUE5RCxHQUFtRixLQUFuRixHQUF3RixTQUF4RixHQUFrRyxLQUFoSCxFQUFzSCxPQUFRLEdBQTlIO2lCQUNBLElBQUcsT0FBTyxDQUFDLFNBQVIsT0FBdUIsU0FBdkIsSUFBb0MsRUFBRSxRQUFGLElBQWMsQ0FBckQ7bUJBQ0UsWUFBWSxDQUFDLFFBQWIsR0FBd0I7bUJBQ3hCLGtCQUZGO2tCQUFBO21CQUlFO21CQUNBLFNBQVMsU0FBVCxFQUFvQixHQUFwQixFQUxGO2tCQU5HOztzQkFZTDthQWhCVyxDQUFiLElBTkY7O2tCQXdCQTtTQXpCTyxDQUFULEVBMEJFLEdBMUJGLEVBVEY7O2NBb0NBO0tBckNtQyxDQUFyQztZQXNDQTtHQTVDRixDQUZHO0VBZEw7Ozs7Ozs7O0FDSkE7QUFBQTs7QUFFTTtHQUNTLG9CQUFDLFFBQUQ7S0FBQyxJQUFDLFdBQUQ7S0FDWixJQUFDLFFBQUQsR0FDdUIsT0FBTyxDQUFDLFVBQVIsQ0FBbUIsSUFBQyxRQUFwQixDQUFyQjtPQUFBLFFBQVEsSUFBQyxRQUFUO01BQUE7S0FDRixJQUFDLFFBQUQsR0FBVyxPQUFPLENBQUMsTUFBUixDQUNUO09BQUEsVUFBVSxFQUFWO01BRFMsRUFRVCxJQUFDLFFBUlE7S0FVWCxJQUFDLFFBQUQsR0FBVyxPQUFPLENBQUMsSUFBUixDQUFhLElBQUMsUUFBTyxDQUFDLFFBQXRCLEtBQW1DO0tBQzlDLElBQUMsS0FBRCxHQUFRLE9BQU8sQ0FBQyxJQUFSLENBQWEsSUFBQyxRQUFPLENBQUMsUUFBdEIsS0FBbUM7R0FkaEM7O3dCQWdCYixhQUFZO1lBQUcsT0FBTyxDQUFDLE1BQVIsQ0FBZSxJQUFDLFFBQWhCLEVBQXlCLElBQUMsS0FBMUI7R0FBSDs7d0JBQ1osVUFBUztZQUFHLENBQUksSUFBQyxXQUFEO0dBQVA7O3dCQUNULFlBQVc7WUFBRyxDQUFJLE9BQU8sQ0FBQyxNQUFSLENBQWUsSUFBQyxRQUFoQixFQUF5QixJQUFDLFFBQU8sQ0FBQyxRQUFsQztHQUFQOzt3QkFFWCxTQUFRLFNBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0IsU0FBaEI7QUFDTjtLQUFBLGlFQUFXLENBQUMsVUFBVyxNQUFNLFNBQVMsb0JBQW5DLEtBQW1ELEtBQXREO09BQ0UsSUFBRyxlQUFIO1NBQ0UsYUFBYTs7QUFBQztBQUFBO2dCQUFBOzswQkFBQSxDQUFDLEdBQUQsRUFBTSxLQUFOO0FBQUE7O2FBQUQsQ0FBK0MsQ0FBQyxLQUFoRCxDQUFzRDtrQkFBQSxTQUFDLFlBQUQ7QUFDakU7YUFBQyxxQkFBRCxFQUFNO29CQUNOLE9BQU8sQ0FBQyxNQUFSLENBQWUsS0FBQyxLQUFLLEtBQXJCLEVBQTJCLEtBQTNCLEVBQWtDLElBQWxDO1dBRmlFO1NBQUEsUUFBdEQ7U0FHYixPQUFPLENBQUMsTUFBUixDQUFlLElBQUMsS0FBaEIsRUFBc0IsT0FBTyxDQUFDLElBQVIsQ0FBZ0IsVUFBSCxHQUFtQixTQUFuQixHQUFrQyxPQUEvQyxDQUF0QixFQUpGOztPQUtBLElBQUMsUUFBRCxHQUFXLE9BQU8sQ0FBQyxJQUFSLENBQWEsSUFBQyxLQUFkOztjQUNILENBQUMsT0FBUSxNQUFNLFNBQVM7OztjQUN4QixDQUFDLE9BQVE7UUFSbkI7O1lBU0E7R0FWTTs7d0JBWVIsUUFBTyxTQUFDLElBQUQ7QUFDTDtLQUFBLGdFQUFXLENBQUMsU0FBVSxlQUFuQixLQUE4QixLQUFqQzs7O1dBQ0UsSUFBSSxDQUFFOzs7T0FDTixJQUFDLFFBQUQsR0FBVyxPQUFPLENBQUMsSUFBUixDQUFhLElBQUMsUUFBTyxDQUFDLFFBQXRCLEtBQW1DO09BQzlDLElBQUMsS0FBRCxHQUFRLE9BQU8sQ0FBQyxJQUFSLENBQWEsSUFBQyxRQUFPLENBQUMsUUFBdEIsS0FBbUM7O2NBQ25DLENBQUMsTUFBTzs7O2NBQ1IsQ0FBQyxPQUFRO1FBTG5COztZQU1BO0dBUEs7O3dCQVNQLFNBQVEsU0FBQyxPQUFELEVBQVUsUUFBVjtBQUNOO0tBQUEsSUFBMkMsT0FBTyxDQUFDLFFBQVIsQ0FBaUIsT0FBakIsQ0FBM0M7T0FBQSxNQUFzQixDQUFDLE9BQUQsRUFBVSxLQUFWLENBQXRCLEVBQUMsaUJBQUQsRUFBVyxpQkFBWDs7S0FFQSxTQUFZLFlBQVcsSUFBZCxHQUNQLE9BQU8sQ0FBQyxJQUFSLENBQWEsSUFBQyxRQUFkLENBRE8sR0FHUCxPQUFPLENBQUMsSUFBUixDQUFhLElBQUMsS0FBRCxHQUFRLE9BQU8sQ0FBQyxJQUFSLENBQWEsSUFBQyxRQUFkLENBQXJCO0FBRUY7T0FDRSxJQUFpRCxPQUFPLENBQUMsT0FBUixDQUFnQixNQUFPLEtBQXZCLENBQWpEO1NBQUEsTUFBTyxLQUFQLEdBQWMsTUFBTyxLQUFJLENBQUMsTUFBWixDQUFtQixTQUFDLENBQUQ7a0JBQU8sQ0FBQyxDQUFDO1NBQVQsQ0FBbkIsRUFBZDs7QUFERjtLQUdBLFNBQVMsT0FBTyxDQUFDLE1BQVIsQ0FBZSxNQUFmLEVBQXVCLE9BQU8sQ0FBQyxJQUFSLENBQWEsUUFBYixDQUF2QjtLQUVULElBQUcsT0FBTyxDQUFDLFVBQVIsQ0FBbUIsSUFBQyxRQUFPLENBQUMsU0FBNUIsQ0FBSDtBQUNFOztTQUFBLE1BQU8sS0FBUCxHQUFjLElBQUMsUUFBTyxDQUFDLFNBQVQsQ0FBbUIsR0FBbkIsRUFBd0IsS0FBeEI7QUFBZCxRQURGOztZQUdBO0dBaEJNOzs7Ozs7QUFrQlYsUUFBTyxDQUFDLE1BQVIsQ0FBZSwrQkFBZixFQUFnRCxFQUFoRCxDQUVBLENBQUMsT0FGRCxDQUVTLFlBRlQsRUFFdUI7R0FBQztZQUFHLFNBQUMsT0FBRDtjQUFpQixlQUFXLE9BQVg7S0FBakI7R0FBSCxDQUFEO0VBRnZCIiwiZmlsZSI6ImFuZ3VsYXItZXh0ZW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcImFuZ3VsYXJcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wianF1ZXJ5XCIsIFwiYW5ndWxhclwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwiYW5ndWxhclwiKSkgOiBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJhbmd1bGFyXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMmI3OTE5OGMxNTAzYzVjMjFjZWZcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9kaXJlY3RpdmVzL2NvdW50VG8uY29mZmVlJ1xuaW1wb3J0ICcuL2RpcmVjdGl2ZXMvZG9tSW5pdC5jb2ZmZWUnXG5pbXBvcnQgJy4vZGlyZWN0aXZlcy9mb2N1c01lLmNvZmZlZSdcbmltcG9ydCAnLi9kaXJlY3RpdmVzL2xvd2VyLmNvZmZlZSdcbmltcG9ydCAnLi9kaXJlY3RpdmVzL3JlcGVhdERvbmUuY29mZmVlJ1xuaW1wb3J0ICcuL2RpcmVjdGl2ZXMvcm90YXRlMmQuY29mZmVlJ1xuaW1wb3J0ICcuL2RpcmVjdGl2ZXMvdXBwZXIuY29mZmVlJ1xuaW1wb3J0ICcuL2ZpbHRlcnMvYXJyYXlzLmNvZmZlZSdcbmltcG9ydCAnLi9maWx0ZXJzL3N0cmluZ3MuY29mZmVlJ1xuaW1wb3J0ICcuL3NlcnZpY2VzL2xvY2F0aW9uU3RhdGUuY29mZmVlJ1xuaW1wb3J0ICcuL3NlcnZpY2VzL3BsYXlSb3V0ZXMuY29mZmVlJ1xuaW1wb3J0ICcuL3NlcnZpY2VzL3JldGFpblNjcm9sbC5jb2ZmZWUnXG5pbXBvcnQgJy4vc2VydmljZXMvc2VhcmNoRm9ybS5jb2ZmZWUnXG5cbmFuZ3VsYXIubW9kdWxlKCduZ0V4dGVuZHMuZGlyZWN0aXZlcycsIFtcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMuY291bnRUbycsXG4gICAgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmRvbUluaXQnLFxuICAgICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5mb2N1c01lJyxcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMubG93ZXInLFxuICAgICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5yZXBlYXREb25lJyxcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMucm90YXRlMmQnLFxuICAgICduZ0V4dGVuZHMuZGlyZWN0aXZlcy51cHBlcidcbl0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnbmdFeHRlbmRzLmZpbHRlcnMnLCBbXG4gICAgJ25nRXh0ZW5kcy5maWx0ZXJzLmFycmF5cycsXG4gICAgJ25nRXh0ZW5kcy5maWx0ZXJzLnN0cmluZ3MnXG5dKTtcblxuYW5ndWxhci5tb2R1bGUoJ25nRXh0ZW5kcy5zZXJ2aWNlcycsIFtcbiAgICAnbmdFeHRlbmRzLnNlcnZpY2VzLmxvY2F0aW9uU3RhdGUnLFxuICAgICduZ0V4dGVuZHMuc2VydmljZXMucGxheVJvdXRlcycsXG4gICAgJ25nRXh0ZW5kcy5zZXJ2aWNlcy5yZXRhaW5TY3JvbGwnLFxuICAgICduZ0V4dGVuZHMuc2VydmljZXMuc2VhcmNoRm9ybSdcbl0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnbmdFeHRlbmRzJywgW1xuICAgICduZ0V4dGVuZHMuZGlyZWN0aXZlcycsXG4gICAgJ25nRXh0ZW5kcy5maWx0ZXJzJyxcbiAgICAnbmdFeHRlbmRzLnNlcnZpY2VzJ1xuXSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcblxuaWYgKCEkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQW5ndWxhci5leHRlbmRzIHJlcXVpcmVzIGEgQW5ndWxhckpTXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL2FuZ3VsYXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuaWYgKCEkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQW5ndWxhci5leHRlbmRzIHJlcXVpcmVzIGEgalF1ZXJ5XCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL2pxdWVyeS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdC5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifVxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFuZ3VsYXJcIlxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMuY291bnRUbycsIFtdXG5cbi5kaXJlY3RpdmUgJ2V4dENvdW50VG8nLCBbJyR0aW1lb3V0JywgKCR0aW1lb3V0KSAtPlxuICByZXBsYWNlOiBmYWxzZVxuICBzY29wZTogdHJ1ZVxuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgIGVsZW0gPSBlbGVtZW50WzBdXG4gICAgbnVtID0gbnVsbFxuICAgIHJlZnJlc2hJbnRlcnZhbCA9IG51bGxcbiAgICBzdGVwcyA9IG51bGxcbiAgICBzdGVwID0gbnVsbFxuICAgIGNvdW50VG8gPSBudWxsXG4gICAgaW5jcmVtZW50ID0gbnVsbFxuXG4gICAgY2FsY3VsYXRlID0gLT5cbiAgICAgIHJlZnJlc2hJbnRlcnZhbCA9IDMwXG4gICAgICBzdGVwID0gMFxuICAgICAgc2NvcGUudGltb3V0SWQgPSBudWxsXG4gICAgICBjb3VudFRvID0gcGFyc2VJbnQoYXR0cnMuZXh0Q291bnRUbykgfHwgMFxuICAgICAgc2NvcGUudmFsdWUgPSBwYXJzZUludChhdHRycy52YWx1ZSwgMTApIHx8IDBcbiAgICAgIGR1cmF0aW9uID0gKHBhcnNlRmxvYXQoYXR0cnMuZHVyYXRpb24pICogMTAwMCkgfHwgMFxuXG4gICAgICBzdGVwcyA9IE1hdGguY2VpbChkdXJhdGlvbiAvIHJlZnJlc2hJbnRlcnZhbClcbiAgICAgIGluY3JlbWVudCA9IChjb3VudFRvIC0gc2NvcGUudmFsdWUpIC8gc3RlcHNcbiAgICAgIG51bSA9IHNjb3BlLnZhbHVlXG5cbiAgICB0aWNrID0gLT5cbiAgICAgIHNjb3BlLnRpbW91dElkID0gJHRpbWVvdXQoLT5cbiAgICAgICAgbnVtICs9IGluY3JlbWVudFxuICAgICAgICBzdGVwKytcbiAgICAgICAgaWYgc3RlcCA+PSBzdGVwc1xuICAgICAgICAgICR0aW1lb3V0LmNhbmNlbChzY29wZS50aW1vdXRJZClcbiAgICAgICAgICBudW0gPSBjb3VudFRvXG4gICAgICAgICAgZWxlbS50ZXh0Q29udGVudCA9IGNvdW50VG9cbiAgICAgICAgZWxzZVxuICAgICAgICAgIGVsZW0udGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKG51bSlcbiAgICAgICAgICB0aWNrKClcbiAgICAgICwgcmVmcmVzaEludGVydmFsKVxuXG4gICAgc3RhcnQgPSAtPlxuICAgICAgJHRpbWVvdXQuY2FuY2VsKHNjb3BlLnRpbW91dElkKSAgaWYgc2NvcGUudGltb3V0SWQ/XG4gICAgICBjYWxjdWxhdGUoKVxuICAgICAgdGljaygpXG5cbiAgICBhdHRycy4kb2JzZXJ2ZSAnZXh0Q291bnRUbycsICh2YWwpIC0+IHN0YXJ0KCkgIGlmIHZhbD9cbiAgICBhdHRycy4kb2JzZXJ2ZSAndmFsdWUnLCAtPiBzdGFydCgpXG5cbiAgICB1bmRlZmluZWRcbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kaXJlY3RpdmVzL2NvdW50VG8uY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5kb21Jbml0JywgW11cblxuLmRpcmVjdGl2ZSAnZXh0RG9tSW5pdCcsIFstPlxuICByZXN0cmljdDogJ0EnLFxuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgIGF0dHJzLiRvYnNlcnZlICdleHREb21Jbml0JywgKHZhbHVlKSAtPiBzY29wZS4kZXZhbCh2YWx1ZSk/KGVsZW1lbnQpXG4gICAgdW5kZWZpbmVkXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGlyZWN0aXZlcy9kb21Jbml0LmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMuZm9jdXNNZScsIFtdXG5cbi5kaXJlY3RpdmUgJ2V4dEZvY3VzTWUnLCBbLT5cbiAgc2NvcGU6XG4gICAgdHJpZ2dlcjogJz1leHRGb2N1c01lJ1xuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQpIC0+XG4gICAgc2NvcGUuJHdhdGNoICd0cmlnZ2VyJywgKHZhbHVlKSAtPlxuICAgICAgaWYgdHlwZW9mIHZhbHVlIGlzICdib29sZWFuJ1xuICAgICAgICBlbGVtZW50W2lmIHZhbHVlIHRoZW4gJ2ZvY3VzJyBlbHNlICdibHVyJ10/KClcbiAgICAgICAgc2NvcGUudHJpZ2dlciA9IG51bGxcbiAgICAgIHVuZGVmaW5lZFxuICAgIHVuZGVmaW5lZFxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RpcmVjdGl2ZXMvZm9jdXNNZS5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmxvd2VyJywgW11cblxuLmRpcmVjdGl2ZSAnZXh0TG93ZXInLCBbLT5cbiAgcmVxdWlyZTogJ25nTW9kZWwnXG4gIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMsIG1vZGVsQ3RybCkgLT5cbiAgICB0b0xvd2VyID0gKGlucHV0VmFsdWUpIC0+XG4gICAgICBsb3dlcmVkID0gaWYgaW5wdXRWYWx1ZSB0aGVuIGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSBlbHNlIGlucHV0VmFsdWVcbiAgICAgIHVubGVzcyBsb3dlcmVkIGlzIGlucHV0VmFsdWVcbiAgICAgICAgbW9kZWxDdHJsLiRzZXRWaWV3VmFsdWUgbG93ZXJlZFxuICAgICAgICBtb2RlbEN0cmwuJHJlbmRlcigpXG4gICAgICBsb3dlcmVkXG5cbiAgICBtb2RlbEN0cmwuJHBhcnNlcnMucHVzaCB0b0xvd2VyXG4gICAgdG9Mb3dlciBzY29wZVthdHRycy5uZ01vZGVsXVxuICAgIHVuZGVmaW5lZFxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RpcmVjdGl2ZXMvbG93ZXIuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5yZXBlYXREb25lJywgW11cblxuLmRpcmVjdGl2ZSAnZXh0UmVwZWF0RG9uZScsIFstPlxuICByZXN0cmljdDogJ0EnLFxuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgIGlmIChhdHRycy5uZ1JlcGVhdD8gb3IgYXR0cnMubmdSZXBlYXRTdGFydD8pIGFuZCBzY29wZS4kbGFzdFxuICAgICAgYXR0cnMuJG9ic2VydmUgJ2V4dFJlcGVhdERvbmUnLCAodmFsdWUpIC0+IHNjb3BlLiRldmFsKHZhbHVlKT8oZWxlbWVudClcbiAgICB1bmRlZmluZWRcbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kaXJlY3RpdmVzL3JlcGVhdERvbmUuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5yb3RhdGUyZCcsIFtdXG5cbi5kaXJlY3RpdmUgJ2V4dFJvdGF0ZTJkJywgWy0+XG4gIHNjb3BlOlxuICAgIHZhbHVlOiAnPWV4dFJvdGF0ZTJkJ1xuICAgIGxpbWl0OiAnPSdcbiAgICBhbmdsZTogJz0nXG4gIGxpbms6IChzY29wZSwgZWxlbWVudCkgLT5cbiAgICBzY29wZS4kd2F0Y2hDb2xsZWN0aW9uICdbdmFsdWUsIGxpbWl0LCBhbmdsZV0nLCAodmFsdWVzKSAtPlxuICAgICAgdmFsdWUgPSB2YWx1ZXNbMF0gb3IgMFxuICAgICAgbGltaXQgPSB2YWx1ZXNbMV0gb3IgMTBcbiAgICAgIGFuZ2xlID0gdmFsdWVzWzJdIG9yIDM2MFxuICAgICAgZGVncmVlID0gdmFsdWUgKiBhbmdsZSAvIGxpbWl0XG4gICAgICBlbGVtZW50LmNzc1xuICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBkZWdyZWUgKyAnZGVnKSdcbiAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogJ3JvdGF0ZSgnICsgZGVncmVlICsgJ2RlZyknXG4gICAgICAgICd0cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBkZWdyZWUgKyAnZGVnKSdcbiAgICAgIHVuZGVmaW5lZFxuICAgIHVuZGVmaW5lZFxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RpcmVjdGl2ZXMvcm90YXRlMmQuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZGlyZWN0aXZlcy51cHBlcicsIFtdXG5cbi5kaXJlY3RpdmUgJ2V4dFVwcGVyJywgWy0+XG4gIHJlcXVpcmU6ICduZ01vZGVsJ1xuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBtb2RlbEN0cmwpIC0+XG4gICAgdG9VcHBlciA9IChpbnB1dFZhbHVlKSAtPlxuICAgICAgdXBwZXJlZCA9IGlmIGlucHV0VmFsdWUgdGhlbiBpbnB1dFZhbHVlLnRvVXBwZXJDYXNlKCkgZWxzZSBpbnB1dFZhbHVlXG4gICAgICB1bmxlc3MgdXBwZXJlZCBpcyBpbnB1dFZhbHVlXG4gICAgICAgIG1vZGVsQ3RybC4kc2V0Vmlld1ZhbHVlIHVwcGVyZWRcbiAgICAgICAgbW9kZWxDdHJsLiRyZW5kZXIoKVxuICAgICAgdXBwZXJlZFxuXG4gICAgbW9kZWxDdHJsLiRwYXJzZXJzLnB1c2ggdG9VcHBlclxuICAgIHRvVXBwZXIgc2NvcGVbYXR0cnMubmdNb2RlbF1cbiAgICB1bmRlZmluZWRcbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kaXJlY3RpdmVzL3VwcGVyLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmZpbHRlcnMuYXJyYXlzJywgW11cblxuLmZpbHRlciAnbWFrZUFycmF5JywgWy0+IChpbnB1dCkgLT4gaWYgYW5ndWxhci5pc0FycmF5IGlucHV0IHRoZW4gaW5wdXQgZWxzZSAkLm1ha2VBcnJheShpbnB1dCldXG5cbi5maWx0ZXIgJ3JhbmdlJywgWy0+IChmcm9tLCB0bywgc3RlcCA9IDEpIC0+XG4gIGlzTnVtYmVyID0gdHlwZW9mIGZyb20gaXMgJ251bWJlcicgYW5kIHR5cGVvZiB0byBpcyAnbnVtYmVyJ1xuICBiZWdpbiA9IGlmIGlzTnVtYmVyIHRoZW4gZnJvbSBlbHNlIGZyb20udG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApXG4gIGVuZCA9IGlmIGlzTnVtYmVyIHRoZW4gdG8gZWxzZSB0by50b1N0cmluZygpLmNoYXJDb2RlQXQoMClcbiAgZm9yIGkgaW4gW2JlZ2luLi5lbmRdIGJ5IChpZiBiZWdpbiA+IGVuZCB0aGVuIC1zdGVwIGVsc2Ugc3RlcClcbiAgICBpZiBpc051bWJlciB0aGVuIGkgZWxzZSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXG5dXG5cbi5maWx0ZXIgJ2pvaW4nLCBbLT4gKGlucHV0LCBzZXApIC0+ICQubWFrZUFycmF5KGlucHV0KS5qb2luKHNlcCldXG5cbi5maWx0ZXIgJ2NvbWJpbmUnLCBbLT4gKGlucHV0LCB0cmFuc2Zvcm1lcnMuLi4pIC0+XG4gIGlucHV0ID0gW2lucHV0XSAgdW5sZXNzIGFuZ3VsYXIuaXNBcnJheSBpbnB1dFxuICAoZm9yIHZhbHVlIGluIGlucHV0XG4gICAgZm9yIHQgaW4gdHJhbnNmb3JtZXJzXG4gICAgICBpZiBhbmd1bGFyLmlzRnVuY3Rpb24gdFxuICAgICAgICB2YWx1ZSA9IHQodmFsdWUpXG4gICAgICBlbHNlIGlmIHR5cGVvZiB0IGlzICdzdHJpbmcnXG4gICAgICAgIHZhbHVlID0gc3dpdGNoIHRcbiAgICAgICAgICB3aGVuICc9aW50ZWdlcicgdGhlbiBwYXJzZUludCh2YWx1ZSlcbiAgICAgICAgICB3aGVuICc9ZmxvYXQnICAgdGhlbiBwYXJzZUZsb2F0KHZhbHVlKVxuICAgICAgICAgIGVsc2UgJC5vYmouZ2V0KHZhbHVlLCB0KVxuICAgIHZhbHVlXG4gICkucmVkdWNlICh0LCB2KSAtPiB0ICsgdlxuXVxuXG4uZmlsdGVyICdsaW1pdCcsIFstPiAoaW5wdXQsIHBhZ2UsIGl0ZW1zUGVyUGFnZSkgLT5cbiAgZnJvbSA9IChwYWdlIC0gMSkgKiBpdGVtc1BlclBhZ2VcbiAgdG8gPSBmcm9tICsgaXRlbXNQZXJQYWdlXG4gICQubWFrZUFycmF5KGlucHV0KVtmcm9tLi4udG9dXG5dXG5cbi5maWx0ZXIgJ3RyaW0nLCBbLT4gKGlucHV0KSAtPlxuICBpZiBhbmd1bGFyLmlzQXJyYXkgaW5wdXRcbiAgICBhPy50b1N0cmluZz8oKT8udHJpbT8oKSAgZm9yIGEgaW4gaW5wdXRcbiAgZWxzZVxuICAgIGlucHV0Py50b1N0cmluZz8oKT8udHJpbT8oKVxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ZpbHRlcnMvYXJyYXlzLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmZpbHRlcnMuc3RyaW5ncycsIFtdXG5cbi5maWx0ZXIgJ3RydXN0QXMnLCBbJyRzY2UnLCAoJHNjZSkgLT4gJHNjZS50cnVzdEFzXVxuLmZpbHRlciAndHJ1c3RBc0NzcycsIFsnJHNjZScsICgkc2NlKSAtPiAkc2NlLnRydXN0QXNDc3NdXG4uZmlsdGVyICd0cnVzdEFzSHRtbCcsIFsnJHNjZScsICgkc2NlKSAtPiAkc2NlLnRydXN0QXNIdG1sXVxuLmZpbHRlciAndHJ1c3RBc0pzJywgWyckc2NlJywgKCRzY2UpIC0+ICRzY2UudHJ1c3RBc0pzXVxuLmZpbHRlciAndHJ1c3RBc1Jlc291cmNlVXJsJywgWyckc2NlJywgKCRzY2UpIC0+ICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsXVxuLmZpbHRlciAndHJ1c3RBc1VybCcsIFsnJHNjZScsICgkc2NlKSAtPiAkc2NlLnRydXN0QXNVcmxdXG5cbi5maWx0ZXIgJ3JlcGxhY2UnLCBbLT4gKGlucHV0LCBzZWFyY2gsIHJlcGxhY2VtZW50KSAtPiAoaW5wdXQgb3IgJycpLnRvU3RyaW5nKCkucmVwbGFjZShzZWFyY2gsIHJlcGxhY2VtZW50KV1cblxuLmZpbHRlciAnbmwyYnInLCBbLT4gKGlucHV0KSAtPiAoaW5wdXQgb3IgJycpLnRvU3RyaW5nKCkucmVwbGFjZSgvKFxcclxcbnxcXG5cXHJ8XFxyfFxcbikvZywgJzxici8+JyldXG5cbi5maWx0ZXIgJ2JyMm5sJywgWy0+IChpbnB1dCkgLT4gKGlucHV0IG9yICcnKS50b1N0cmluZygpLnJlcGxhY2UoLyg8YnI+fDxiclxcLz4pL2csICdcXG4nKV1cblxuLmZpbHRlciAnc3BhY2UybmJzcCcsIFstPiAoaW5wdXQpIC0+IChpbnB1dCBvciAnJykudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHMvZywgJyZuYnNwOycpXVxuXG4uZmlsdGVyICduYnNwMnNwYWNlJywgWy0+IChpbnB1dCkgLT4gKGlucHV0IG9yICcnKS50b1N0cmluZygpLnJlcGxhY2UoLyZuYnNwOy9nLCAnICcpXVxuXG4uZmlsdGVyICdzcGxpdCcsIFstPiAoaW5wdXQsIHNlcGFyYXRvcnMsIGxpbWl0KSAtPlxuICB1bmxlc3MgaW5wdXQ/IHRoZW4gaW5wdXRcbiAgZWxzZSBpbnB1dC50b1N0cmluZygpLnNwbGl0KG5ldyBSZWdFeHAoXG4gICAgaWYgYW5ndWxhci5pc0FycmF5IHNlcGFyYXRvcnNcbiAgICAgIChSZWdFeHAuZXNjYXBlKHMpICBmb3IgcyBpbiBzZXBhcmF0b3JzKS5qb2luKCd8JylcbiAgICBlbHNlXG4gICAgICBSZWdFeHAuZXNjYXBlKHNlcGFyYXRvcnMpXG4gICksIGxpbWl0KVxuXVxuXG4uZmlsdGVyICdjdXRzdHJpbmcnLCBbLT4gKGlucHV0LCBtYXhMZW5ndGggPSAxMCwgc3VmZml4ID0gJy4uLicpIC0+XG4gIHVubGVzcyBpbnB1dD8gdGhlbiBpbnB1dFxuICBlbHNlXG4gICAgaW5wdXRTdHJpbmcgPSBpbnB1dC50b1N0cmluZygpXG4gICAgaW5wdXRTdHJpbmcgPSBpbnB1dFN0cmluZ1swLi4ubWF4TGVuZ3RoXSArIHN1ZmZpeCAgaWYgaW5wdXRTdHJpbmcubGVuZ3RoID4gbWF4TGVuZ3RoIC0gc3VmZml4Lmxlbmd0aFxuICAgIGlucHV0U3RyaW5nXG5dXG5cbi5maWx0ZXIgJ3JvdW5kY3V0c3RyaW5nJywgWy0+IChpbnB1dCwgc2VhcmNoLCBtYXhMZW5ndGggPSAyMCwgcHJlZml4ID0gJy4uLicsIHN1ZmZpeCA9ICcuLi4nKSAtPlxuICB1bmxlc3MgaW5wdXQ/IHRoZW4gaW5wdXRcbiAgZWxzZVxuICAgIGlucHV0U3RyaW5nID0gaW5wdXQudG9TdHJpbmcoKVxuICAgIHNlYXJjaFN0cmluZyA9IChzZWFyY2ggb3IgJycpLnRvU3RyaW5nKClcbiAgICBpID0gaW5wdXRTdHJpbmcuaW5kZXhPZihzZWFyY2hTdHJpbmcpXG4gICAgaWYgaSBpcyAtMVxuICAgICAgaW5wdXRTdHJpbmcgPSBpbnB1dFN0cmluZ1swLi4ubWF4TGVuZ3RoXSArIHN1ZmZpeCAgaWYgaW5wdXRTdHJpbmcubGVuZ3RoID4gbWF4TGVuZ3RoIC0gc3VmZml4Lmxlbmd0aFxuICAgICAgaW5wdXRTdHJpbmdcbiAgICBlbHNlXG4gICAgICAoZG9DdXQgPSAoYmVmb3JlLCBhZnRlciwgc3RyaW5nLCByZXN0TGVuZ3RoKSAtPlxuICAgICAgICBpZiByZXN0TGVuZ3RoIDw9IDAgb3IgYmVmb3JlLmxlbmd0aCBpcyAwIGFuZCBhZnRlci5sZW5ndGggaXMgMFxuICAgICAgICAgIGVtcHR5T3JQcmVmaXggPSBpZiBiZWZvcmUubGVuZ3RoID4gMCB0aGVuIHByZWZpeCBlbHNlICcnXG4gICAgICAgICAgZW1wdHlPclN1ZmZpeCA9IGlmIGFmdGVyLmxlbmd0aCA+IDAgdGhlbiBzdWZmaXggZWxzZSAnJ1xuICAgICAgICAgIGVtcHR5T3JQcmVmaXggKyBzdHJpbmcgKyBlbXB0eU9yU3VmZml4XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBoYWxmTGVuZ3RoID0gcmVzdExlbmd0aCAvIDJcbiAgICAgICAgICBpZiBoYWxmTGVuZ3RoIDwgMVxuICAgICAgICAgICAgZG9DdXQoYmVmb3JlWzAuLi4tMV0sIGFmdGVyLCBiZWZvcmVbLTEuLi5dICsgc3RyaW5nLCAwKVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHBpZWNlT2ZCZWZvcmUgPSBiZWZvcmVbLWhhbGZMZW5ndGguLi5dXG4gICAgICAgICAgICBwaWVjZU9mQWZ0ZXIgPSBhZnRlclswLi4uaGFsZkxlbmd0aF1cbiAgICAgICAgICAgIHJlc3RPZkJlZm9yZSA9IGJlZm9yZVswLi4uLWhhbGZMZW5ndGhdXG4gICAgICAgICAgICByZXN0T2ZBZnRlciA9IGFmdGVyW2hhbGZMZW5ndGguLi5dXG4gICAgICAgICAgICBkb0N1dChcbiAgICAgICAgICAgICAgcmVzdE9mQmVmb3JlLFxuICAgICAgICAgICAgICByZXN0T2ZBZnRlcixcbiAgICAgICAgICAgICAgcGllY2VPZkJlZm9yZSArIHN0cmluZyArIHBpZWNlT2ZBZnRlcixcbiAgICAgICAgICAgICAgcmVzdExlbmd0aCAtIHBpZWNlT2ZCZWZvcmUubGVuZ3RoIC0gcGllY2VPZkFmdGVyLmxlbmd0aFxuICAgICAgICAgICAgKVxuICAgICAgKShcbiAgICAgICAgaW5wdXRTdHJpbmdbMC4uLmldLFxuICAgICAgICBpbnB1dFN0cmluZ1tpICsgc2VhcmNoU3RyaW5nLmxlbmd0aC4uLl0sXG4gICAgICAgIHNlYXJjaFN0cmluZyxcbiAgICAgICAgbWF4TGVuZ3RoIC0gc2VhcmNoU3RyaW5nLmxlbmd0aCAtIHByZWZpeC5sZW5ndGggLSBzdWZmaXgubGVuZ3RoXG4gICAgICApXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZmlsdGVycy9zdHJpbmdzLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLnNlcnZpY2VzLmxvY2F0aW9uU3RhdGUnLCBbXVxuXG4ucnVuIFtcbiAgJyRyb290U2NvcGUnLCAnJHdpbmRvdycsICckbG9jYXRpb24nXG4gICgkcm9vdFNjb3BlLCAkd2luZG93LCAkbG9jYXRpb24pIC0+XG4gICAgJHJvb3RTY29wZS4kb24gJyRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MnLCAtPiAkbG9jYXRpb24uJCRhY3R1YWxQYXRoID0gJGxvY2F0aW9uLnBhdGgoKVxuICAgICRyb290U2NvcGUuJHdhdGNoICgtPiAkbG9jYXRpb24ucGF0aCgpKSwgKG5ld0xvY2F0aW9uKSAtPiAkbG9jYXRpb24uaXNIaXN0b3J5Q2hhbmdlZCA9ICRsb2NhdGlvbi4kJGFjdHVhbFBhdGggaXMgbmV3TG9jYXRpb25cbiAgICB1bmRlZmluZWRcbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zZXJ2aWNlcy9sb2NhdGlvblN0YXRlLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLnNlcnZpY2VzLnBsYXlSb3V0ZXMnLCBbXVxuXG4ucHJvdmlkZXIgJ3BsYXlSb3V0ZXMnLCBbLT5cbiAgQGpzUm91dGVzID0gd2luZG93LlJvdXRlc1xuICBAJGdldCA9IFsnJGh0dHAnLCAoJGh0dHApID0+XG4gICAgd3JhcEh0dHAgPSAoZm4pIC0+IC0+XG4gICAgICByb3V0ZU9iamVjdCA9IGZuLmFwcGx5KEAsIGFyZ3VtZW50cylcbiAgICAgIGh0dHBNZXRob2QgPSByb3V0ZU9iamVjdC5tZXRob2QudG9Mb3dlckNhc2UoKVxuICAgICAgdXJsID0gcm91dGVPYmplY3QudXJsXG4gICAgICByZXMgPVxuICAgICAgICAkcm91dGU6IHJvdXRlT2JqZWN0XG4gICAgICAgIG1ldGhvZDogaHR0cE1ldGhvZFxuICAgICAgICB1cmw6IHVybFxuICAgICAgICBhYnNvbHV0ZVVybDogcm91dGVPYmplY3QuYWJzb2x1dGVVUkxcbiAgICAgICAgd2ViU29ja2V0VXJsOiByb3V0ZU9iamVjdC53ZWJTb2NrZXRVUkxcbiAgICAgIHJlc1todHRwTWV0aG9kXSA9IChvcHRpb25zKSAtPiAkaHR0cFtodHRwTWV0aG9kXSh1cmwsIG9wdGlvbnMpXG4gICAgICByZXNcblxuICAgIChhZGRSb3V0ZXMgPSAocGxheVJvdXRlc09iamVjdCwganNSb3V0ZXNPYmplY3QpIC0+XG4gICAgICBmb3Iga2V5LCB2YWx1ZSBvZiBqc1JvdXRlc09iamVjdFxuICAgICAgICBpZiBhbmd1bGFyLmlzRnVuY3Rpb24gdmFsdWVcbiAgICAgICAgICBwbGF5Um91dGVzT2JqZWN0W2tleV0gPSB3cmFwSHR0cCh2YWx1ZSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHBsYXlSb3V0ZXNPYmplY3Rba2V5XSA9IHt9ICB1bmxlc3Mga2V5IG9mIHBsYXlSb3V0ZXNPYmplY3RcbiAgICAgICAgICBhZGRSb3V0ZXMocGxheVJvdXRlc09iamVjdFtrZXldLCB2YWx1ZSlcbiAgICAgIHVuZGVmaW5lZFxuICAgICkocGxheVJvdXRlcyA9IHt9LCBAanNSb3V0ZXMpXG4gICAgcGxheVJvdXRlc1xuICBdXG4gIHVuZGVmaW5lZFxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcnZpY2VzL3BsYXlSb3V0ZXMuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIWdsb2JhbC5kb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImpRdWVyeS5leHRlbmRzIHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWw7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL3dpbmRvdy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5yZXF1aXJlKCcuL2xvY2F0aW9uU3RhdGUuY29mZmVlJylcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5zZXJ2aWNlcy5yZXRhaW5TY3JvbGwnLCBbJ25nRXh0ZW5kcy5zZXJ2aWNlcy5sb2NhdGlvblN0YXRlJ11cblxuLnByb3ZpZGVyICdyZXRhaW5TY3JvbGwnLCBbLT5cbiAgQHRhcmdldCA9IG51bGxcbiAgQGluYWN0aXZlID0gZmFsc2VcbiAgQHRyYWNraW5nID0gZmFsc2VcbiAgQHBvc2l0aW9ucyA9IHt9XG4gIEBtYXhUcnlDb3VudCA9IDEwXG4gIEB3aGV0aGVyU2Nyb2xsRXZhbHVhdG9yID0gWyckbG9jYXRpb24nLCAoJGxvY2F0aW9uKSAtPiAkbG9jYXRpb24uaXNIaXN0b3J5Q2hhbmdlZF1cbiAgQGlzRGVsYXllZEV2YWx1YXRvciA9IFstPiBmYWxzZV1cbiAgQCRnZXQgPSBbLT4gQF1cbiAgdW5kZWZpbmVkXG5dXG5cbi5ydW4gW1xuICAnJHJvb3RTY29wZScsICdyZXRhaW5TY3JvbGwnLCAnJGxvY2F0aW9uJywgJyR0aW1lb3V0JywgJyRpbmplY3RvcidcbiAgKCRyb290U2NvcGUsIHJldGFpblNjcm9sbCwgJGxvY2F0aW9uLCAkdGltZW91dCwgJGluamVjdG9yKSAtPlxuICAgICR0YXJnZXQgPSAkKHJldGFpblNjcm9sbC50YXJnZXQgb3Igd2luZG93KVxuICAgICR0YXJnZXQub24gJ3Njcm9sbCcsIC0+IHJldGFpblNjcm9sbC5wb3NpdGlvbnNbJGxvY2F0aW9uLnVybCgpXSA9ICR0YXJnZXQuc2Nyb2xsVG9wKCkgIGlmIHJldGFpblNjcm9sbC50cmFja2luZ1xuXG4gICAgJHJvb3RTY29wZS4kb24gJyRyb3V0ZUNoYW5nZVN1Y2Nlc3MnLCAtPiByZXRhaW5TY3JvbGwuaW5hY3RpdmUgPSByZXRhaW5TY3JvbGwudHJhY2tpbmcgPSBmYWxzZVxuICAgICRyb290U2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdWNjZXNzJywgLT4gcmV0YWluU2Nyb2xsLmluYWN0aXZlID0gcmV0YWluU2Nyb2xsLnRyYWNraW5nID0gZmFsc2VcbiAgICAkcm9vdFNjb3BlLiRvbiAnJHZpZXdDb250ZW50TG9hZGVkJywgKGUpIC0+XG4gICAgICBpZiByZXRhaW5TY3JvbGwuaW5hY3RpdmUgb3Igbm90ICRpbmplY3Rvci5pbnZva2UocmV0YWluU2Nyb2xsLndoZXRoZXJTY3JvbGxFdmFsdWF0b3IpXG4gICAgICAgIGNvbnNvbGUubG9nIFwibW92ZSB0byBzY3JvbGwgdG9wICVvXCIsICR0YXJnZXRbMF1cbiAgICAgICAgJHRhcmdldC5zY3JvbGxUb3AoMClcbiAgICAgICAgcmV0YWluU2Nyb2xsLnRyYWNraW5nID0gdHJ1ZVxuICAgICAgZWxzZVxuICAgICAgICBpc0NhbmNlbCA9IGZhbHNlXG4gICAgICAgIG9mZlNjb3BlRGVzdHJveSA9IGUudGFyZ2V0U2NvcGUuJG9uICckZGVzdHJveScsIC0+IGlzQ2FuY2VsID0gdHJ1ZTsgb2ZmU2Nyb2xsQ2FuY2VsZXIoKVxuICAgICAgICBvZmZTY3JvbGxDYW5jZWxlciA9IC0+ICR0YXJnZXQub2ZmICdzY3JvbGwucmV0YWluU2Nyb2xsLWNhbmNlbGVyJyArIGUudGFyZ2V0U2NvcGUuJGlkXG4gICAgICAgIG9uU2Nyb2xsQ2FuY2VsZXIgPSAtPiAkdGFyZ2V0Lm9uZSAnc2Nyb2xsLnJldGFpblNjcm9sbC1jYW5jZWxlcicgKyBlLnRhcmdldFNjb3BlLiRpZCwgLT4gaXNDYW5jZWwgPSB0cnVlOyBvZmZTY29wZURlc3Ryb3koKVxuICAgICAgICAkdGltZW91dCgtPlxuICAgICAgICAgIGlmIGlzQ2FuY2VsXG4gICAgICAgICAgICBjb25zb2xlLmxvZyAnQ2FuY2VsIHNjcm9sbGluZyAlbycsICR0YXJnZXRbMF1cbiAgICAgICAgICAgIHJldGFpblNjcm9sbC50cmFja2luZyA9IHRydWVcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB0cnlDb3VudCA9IHJldGFpblNjcm9sbC5tYXhUcnlDb3VudFxuICAgICAgICAgICAgc2Nyb2xsVG9wID0gcmV0YWluU2Nyb2xsLnBvc2l0aW9uc1skbG9jYXRpb24udXJsKCldIG9yIDBcbiAgICAgICAgICAgICh0cnlTY3JvbGwgPSAtPlxuICAgICAgICAgICAgICBpZiBpc0NhbmNlbFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nICdDYW5jZWwgc2Nyb2xsaW5nICVvJywgJHRhcmdldFswXVxuICAgICAgICAgICAgICAgIHJldGFpblNjcm9sbC50cmFja2luZyA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZSBpZiAkaW5qZWN0b3IuaW52b2tlKHJldGFpblNjcm9sbC5pc0RlbGF5ZWRFdmFsdWF0b3IpXG4gICAgICAgICAgICAgICAgJHRpbWVvdXQodHJ5U2Nyb2xsLCAyMDApXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBvZmZTY3JvbGxDYW5jZWxlcigpXG4gICAgICAgICAgICAgICAgJHRhcmdldC5zY3JvbGxUb3Aoc2Nyb2xsVG9wKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nIFwiI3sxICsgcmV0YWluU2Nyb2xsLm1heFRyeUNvdW50IC0gdHJ5Q291bnR9IHRyeSBtb3ZlIHRvIHNjcm9sbCAjeyR0YXJnZXQuc2Nyb2xsVG9wKCl9IC8gI3tzY3JvbGxUb3B9ICVvXCIsICR0YXJnZXRbMF1cbiAgICAgICAgICAgICAgICBpZiAkdGFyZ2V0LnNjcm9sbFRvcCgpIGlzIHNjcm9sbFRvcCBvciAtLXRyeUNvdW50IDw9IDBcbiAgICAgICAgICAgICAgICAgIHJldGFpblNjcm9sbC50cmFja2luZyA9IHRydWVcbiAgICAgICAgICAgICAgICAgIG9mZlNjb3BlRGVzdHJveSgpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgb25TY3JvbGxDYW5jZWxlcigpXG4gICAgICAgICAgICAgICAgICAkdGltZW91dCh0cnlTY3JvbGwsIDEwMClcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICApKClcbiAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgLCAxMDApXG4gICAgICB1bmRlZmluZWRcbiAgICB1bmRlZmluZWRcbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zZXJ2aWNlcy9yZXRhaW5TY3JvbGwuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmNsYXNzIFNlYXJjaEZvcm1cbiAgY29uc3RydWN0b3I6IChAb3B0aW9ucykgLT5cbiAgICBAb3B0aW9ucyA9XG4gICAgICBhY3Rpb246IEBvcHRpb25zICBpZiBhbmd1bGFyLmlzRnVuY3Rpb24gQG9wdGlvbnNcbiAgICBAb3B0aW9ucyA9IGFuZ3VsYXIuZXh0ZW5kKFxuICAgICAgZGVmYXVsdHM6IHt9XG4gICAgICAjcHJlU3VibWl0OiAoZm9ybSwgZmlsdGVycywgdW5maWx0ZXJzKSAtPlxuICAgICAgI3ByZVJlc2V0OiAoZm9ybSkgLT5cbiAgICAgICNzdWJtaXQ6IChmb3JtLCBmaWx0ZXJzLCB1bmZpbHRlcnMpIC0+XG4gICAgICAjcmVzZXQ6IChmb3JtKSAtPlxuICAgICAgI2FjdGlvbjogKGZvcm0pIC0+XG4gICAgICAjdHJhbnNmb3JtOiAoa2V5LCB2YWx1ZSkgLT4gdmFsdWVcbiAgICAsIEBvcHRpb25zKVxuXG4gICAgQGN1cnJlbnQgPSBhbmd1bGFyLmNvcHkoQG9wdGlvbnMuZGVmYXVsdHMpIG9yIHt9XG4gICAgQGZvcm0gPSBhbmd1bGFyLmNvcHkoQG9wdGlvbnMuZGVmYXVsdHMpIG9yIHt9XG5cbiAgaXNQcmlzdGluZTogLT4gYW5ndWxhci5lcXVhbHMoQGN1cnJlbnQsIEBmb3JtKVxuICBpc0RpcnR5OiAtPiBub3QgQGlzUHJpc3RpbmUoKVxuICBpc0NoYW5nZWQ6IC0+IG5vdCBhbmd1bGFyLmVxdWFscyhAY3VycmVudCwgQG9wdGlvbnMuZGVmYXVsdHMpXG5cbiAgc3VibWl0OiAoZm9ybSwgZmlsdGVycywgdW5maWx0ZXJzKSAtPlxuICAgIGlmIEBvcHRpb25zLnByZVN1Ym1pdD8oZm9ybSwgZmlsdGVycywgdW5maWx0ZXJzKSBpc250IGZhbHNlXG4gICAgICBpZiBmaWx0ZXJzP1xuICAgICAgICBpc0ZpbHRlcmVkID0gKFtrZXksIHZhbHVlXSAgZm9yIGtleSwgdmFsdWUgb2YgZmlsdGVycyBvciB7fSkuZXZlcnkgKGtleVdpdGhWYWx1ZSkgPT5cbiAgICAgICAgICBba2V5LCB2YWx1ZV0gPSBrZXlXaXRoVmFsdWVcbiAgICAgICAgICBhbmd1bGFyLmVxdWFscyhAZm9ybVtrZXldLCB2YWx1ZSwgdHJ1ZSlcbiAgICAgICAgYW5ndWxhci5leHRlbmQoQGZvcm0sIGFuZ3VsYXIuY29weShpZiBpc0ZpbHRlcmVkIHRoZW4gdW5maWx0ZXJzIGVsc2UgZmlsdGVycykpXG4gICAgICBAY3VycmVudCA9IGFuZ3VsYXIuY29weShAZm9ybSlcbiAgICAgIEBvcHRpb25zLnN1Ym1pdD8oZm9ybSwgZmlsdGVycywgdW5maWx0ZXJzKVxuICAgICAgQG9wdGlvbnMuYWN0aW9uPyhmb3JtKVxuICAgIEBcblxuICByZXNldDogKGZvcm0pIC0+XG4gICAgaWYgQG9wdGlvbnMucHJlUmVzZXQ/KGZvcm0pIGlzbnQgZmFsc2VcbiAgICAgIGZvcm0/LiRzZXRQcmlzdGluZT8oKVxuICAgICAgQGN1cnJlbnQgPSBhbmd1bGFyLmNvcHkoQG9wdGlvbnMuZGVmYXVsdHMpIG9yIHt9XG4gICAgICBAZm9ybSA9IGFuZ3VsYXIuY29weShAb3B0aW9ucy5kZWZhdWx0cykgb3Ige31cbiAgICAgIEBvcHRpb25zLnJlc2V0Pyhmb3JtKVxuICAgICAgQG9wdGlvbnMuYWN0aW9uPyhmb3JtKVxuICAgIEBcblxuICBwYXJhbXM6IChyZWZyZXNoLCBkZWZhdWx0cykgLT5cbiAgICBbZGVmYXVsdHMsIHJlZnJlc2hdID0gW3JlZnJlc2gsIGZhbHNlXSAgaWYgYW5ndWxhci5pc09iamVjdCByZWZyZXNoXG5cbiAgICBwYXJhbXMgPSBpZiByZWZyZXNoIGlzIHRydWVcbiAgICAgIGFuZ3VsYXIuY29weShAY3VycmVudClcbiAgICBlbHNlXG4gICAgICBhbmd1bGFyLmNvcHkoQGZvcm0gPSBhbmd1bGFyLmNvcHkoQGN1cnJlbnQpKVxuXG4gICAgZm9yIGtleSBvZiBAb3B0aW9ucy5kZWZhdWx0c1xuICAgICAgcGFyYW1zW2tleV0gPSBwYXJhbXNba2V5XS5maWx0ZXIoKGEpIC0+ICEhYSkgIGlmIGFuZ3VsYXIuaXNBcnJheSBwYXJhbXNba2V5XVxuXG4gICAgcGFyYW1zID0gYW5ndWxhci5leHRlbmQgcGFyYW1zLCBhbmd1bGFyLmNvcHkoZGVmYXVsdHMpXG5cbiAgICBpZiBhbmd1bGFyLmlzRnVuY3Rpb24gQG9wdGlvbnMudHJhbnNmb3JtXG4gICAgICBwYXJhbXNba2V5XSA9IEBvcHRpb25zLnRyYW5zZm9ybShrZXksIHZhbHVlKSAgZm9yIGtleSwgdmFsdWUgb2YgcGFyYW1zXG5cbiAgICBwYXJhbXNcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5zZXJ2aWNlcy5zZWFyY2hGb3JtJywgW11cblxuLmZhY3RvcnkgJ3NlYXJjaEZvcm0nLCBbLT4gKG9wdGlvbnMpIC0+IG5ldyBTZWFyY2hGb3JtKG9wdGlvbnMpXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcnZpY2VzL3NlYXJjaEZvcm0uY29mZmVlXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==