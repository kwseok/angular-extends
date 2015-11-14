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
	            elem.setSelectionRange(start, end);
	          }
	          return lowered;
	        };
	        modelCtrl.$parsers.push(toLower);
	        toLower(scope[attrs.ngModel]);
	
	        /*
	         // store current positions in variables
	        var start = this.selectionStart,
	            end = this.selectionEnd;
	        
	        // do your stuff
	        $(this).val( $(this).val().toLowerCase() );
	        
	        // restore from variables...
	        this.setSelectionRange(start, end);
	         */
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
	            elem.setSelectionRange(start, end);
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
	                return ajax.call(ajax, [].concat.call([url], args));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhMDE1ODg5ZTA3YTBiYTdmM2MwYSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvYW5ndWxhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFycy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9jb3VudFRvLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9kb21Jbml0LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9mb2N1c01lLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9sb3dlci5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvcmVwZWF0RG9uZS5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvcm90YXRlMmQuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL3VwcGVyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy9hcnJheXMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXJzL3N0cmluZ3MuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9sb2NhdGlvblN0YXRlLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGxheVJvdXRlcy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvd2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yZXRhaW5TY3JvbGwuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zZWFyY2hGb3JtLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0EsNERBQVksQ0FBQzs7cUJBRU4sQ0FBNkI7O3FCQUM3QixDQUE2Qjs7cUJBQzdCLENBQTZCOztxQkFDN0IsQ0FBMkI7O3FCQUMzQixFQUFnQzs7cUJBQ2hDLEVBQThCOztxQkFDOUIsRUFBMkI7O3FCQUMzQixFQUF5Qjs7cUJBQ3pCLEVBQTBCOztxQkFDMUIsRUFBaUM7O3FCQUNqQyxFQUE4Qjs7cUJBQzlCLEVBQWdDOztxQkFDaEMsRUFBOEI7O0FBRXJDLFFBQU8sQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FDbkMsOEJBQThCLEVBQzlCLDhCQUE4QixFQUM5Qiw4QkFBOEIsRUFDOUIsNEJBQTRCLEVBQzVCLGlDQUFpQyxFQUNqQywrQkFBK0IsRUFDL0IsNEJBQTRCLENBQy9CLENBQUMsQ0FBQzs7QUFFSCxRQUFPLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQ2hDLDBCQUEwQixFQUMxQiwyQkFBMkIsQ0FDOUIsQ0FBQyxDQUFDOztBQUVILFFBQU8sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FDakMsK0JBQStCLEVBQy9CLCtCQUErQixDQUNsQyxDQUFD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UCxTQUFRLFNBQUMsT0FBRCxFQUFVLFFBQVY7QUFDTjtXQUFBLElBQTJDLE9BQU8sQ0FBQyxRQUFSLENBQWlCLE9BQWpCLENBQTNDO2FBQUEsTUFBc0IsQ0FBQyxPQUFELEVBQVUsS0FBVixDQUF0QixFQUFDLGlCQUFELEVBQVcsaUJBQVg7O1dBRUEsU0FBWSxZQUFXLElBQWQsR0FDUCxPQUFPLENBQUMsSUFBUixDQUFhLElBQUMsUUFBZCxDQURPLEdBR1AsT0FBTyxDQUFDLElBQVIsQ0FBYSxJQUFDLEtBQUQsR0FBUSxPQUFPLENBQUMsSUFBUixDQUFhLElBQUMsUUFBZCxDQUFyQjtBQUVGO2FBQ0UsSUFBaUQsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsTUFBTyxLQUF2QixDQUFqRDtlQUFBLE1BQU8sS0FBUCxHQUFjLE1BQU8sS0FBSSxDQUFDLE1BQVosQ0FBbUIsU0FBQyxDQUFEO3dCQUFPLENBQUMsQ0FBQztlQUFULENBQW5CLEVBQWQ7O0FBREY7V0FHQSxTQUFTLE9BQU8sQ0FBQyxNQUFSLENBQWUsTUFBZixFQUF1QixPQUFPLENBQUMsSUFBUixDQUFhLFFBQWIsQ0FBdkI7V0FFVCxJQUFHLE9BQU8sQ0FBQyxVQUFSLENBQW1CLElBQUMsUUFBTyxDQUFDLFNBQTVCLENBQUg7QUFDRTs7ZUFBQSxNQUFPLEtBQVAsR0FBYyxJQUFDLFFBQU8sQ0FBQyxTQUFULENBQW1CLEdBQW5CLEVBQXdCLEtBQXhCO0FBQWQsY0FERjs7a0JBR0E7U0FoQk07Ozs7O2NBa0JOLGVBQVcsT0FBWDtLQTlEc0I7R0FBSCxDQUFEO0VBRnhCIiwiZmlsZSI6ImFuZ3VsYXItZXh0ZW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcImFuZ3VsYXJcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wianF1ZXJ5XCIsIFwiYW5ndWxhclwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwiYW5ndWxhclwiKSkgOiBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJhbmd1bGFyXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYTAxNTg4OWUwN2EwYmE3ZjNjMGFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9kaXJlY3RpdmVzL2NvdW50VG8uY29mZmVlJ1xuaW1wb3J0ICcuL2RpcmVjdGl2ZXMvZG9tSW5pdC5jb2ZmZWUnXG5pbXBvcnQgJy4vZGlyZWN0aXZlcy9mb2N1c01lLmNvZmZlZSdcbmltcG9ydCAnLi9kaXJlY3RpdmVzL2xvd2VyLmNvZmZlZSdcbmltcG9ydCAnLi9kaXJlY3RpdmVzL3JlcGVhdERvbmUuY29mZmVlJ1xuaW1wb3J0ICcuL2RpcmVjdGl2ZXMvcm90YXRlMmQuY29mZmVlJ1xuaW1wb3J0ICcuL2RpcmVjdGl2ZXMvdXBwZXIuY29mZmVlJ1xuaW1wb3J0ICcuL2ZpbHRlcnMvYXJyYXlzLmNvZmZlZSdcbmltcG9ydCAnLi9maWx0ZXJzL3N0cmluZ3MuY29mZmVlJ1xuaW1wb3J0ICcuL3NlcnZpY2VzL2xvY2F0aW9uU3RhdGUuY29mZmVlJ1xuaW1wb3J0ICcuL3NlcnZpY2VzL3BsYXlSb3V0ZXMuY29mZmVlJ1xuaW1wb3J0ICcuL3NlcnZpY2VzL3JldGFpblNjcm9sbC5jb2ZmZWUnXG5pbXBvcnQgJy4vc2VydmljZXMvc2VhcmNoRm9ybS5jb2ZmZWUnXG5cbmFuZ3VsYXIubW9kdWxlKCduZ0V4dGVuZHMuZGlyZWN0aXZlcycsIFtcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMuY291bnRUbycsXG4gICAgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmRvbUluaXQnLFxuICAgICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5mb2N1c01lJyxcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMubG93ZXInLFxuICAgICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5yZXBlYXREb25lJyxcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMucm90YXRlMmQnLFxuICAgICduZ0V4dGVuZHMuZGlyZWN0aXZlcy51cHBlcidcbl0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnbmdFeHRlbmRzLmZpbHRlcnMnLCBbXG4gICAgJ25nRXh0ZW5kcy5maWx0ZXJzLmFycmF5cycsXG4gICAgJ25nRXh0ZW5kcy5maWx0ZXJzLnN0cmluZ3MnXG5dKTtcblxuYW5ndWxhci5tb2R1bGUoJ25nRXh0ZW5kcy5zZXJ2aWNlcycsIFtcbiAgICAnbmdFeHRlbmRzLnNlcnZpY2VzLnBsYXlSb3V0ZXMnLFxuICAgICduZ0V4dGVuZHMuc2VydmljZXMuc2VhcmNoRm9ybSdcbl0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnbmdFeHRlbmRzJywgW1xuICAgICduZ0V4dGVuZHMuZGlyZWN0aXZlcycsXG4gICAgJ25nRXh0ZW5kcy5maWx0ZXJzJyxcbiAgICAnbmdFeHRlbmRzLnNlcnZpY2VzJ1xuXSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcblxuaWYgKCEkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQW5ndWxhci5leHRlbmRzIHJlcXVpcmVzIGEgQW5ndWxhckpTXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL2FuZ3VsYXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuaWYgKCEkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQW5ndWxhci5leHRlbmRzIHJlcXVpcmVzIGEgalF1ZXJ5XCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL2pxdWVyeS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdC5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifVxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFuZ3VsYXJcIlxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMuY291bnRUbycsIFtdXG5cbi5kaXJlY3RpdmUgJ2V4Q291bnRUbycsIFsnJHRpbWVvdXQnLCAoJHRpbWVvdXQpIC0+XG4gIHJlcGxhY2U6IGZhbHNlXG4gIHNjb3BlOiB0cnVlXG4gIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpIC0+XG4gICAgZWxlbSA9IGVsZW1lbnRbMF1cbiAgICBudW0gPSBudWxsXG4gICAgcmVmcmVzaEludGVydmFsID0gbnVsbFxuICAgIHN0ZXBzID0gbnVsbFxuICAgIHN0ZXAgPSBudWxsXG4gICAgY291bnRUbyA9IG51bGxcbiAgICBpbmNyZW1lbnQgPSBudWxsXG5cbiAgICBjYWxjdWxhdGUgPSAtPlxuICAgICAgcmVmcmVzaEludGVydmFsID0gMzBcbiAgICAgIHN0ZXAgPSAwXG4gICAgICBzY29wZS50aW1vdXRJZCA9IG51bGxcbiAgICAgIGNvdW50VG8gPSBwYXJzZUludChhdHRycy5leENvdW50VG8pIHx8IDBcbiAgICAgIHNjb3BlLnZhbHVlID0gcGFyc2VJbnQoYXR0cnMudmFsdWUsIDEwKSB8fCAwXG4gICAgICBkdXJhdGlvbiA9IChwYXJzZUZsb2F0KGF0dHJzLmR1cmF0aW9uKSAqIDEwMDApIHx8IDBcblxuICAgICAgc3RlcHMgPSBNYXRoLmNlaWwoZHVyYXRpb24gLyByZWZyZXNoSW50ZXJ2YWwpXG4gICAgICBpbmNyZW1lbnQgPSAoY291bnRUbyAtIHNjb3BlLnZhbHVlKSAvIHN0ZXBzXG4gICAgICBudW0gPSBzY29wZS52YWx1ZVxuICAgICAgcmV0dXJuXG5cbiAgICB0aWNrID0gLT5cbiAgICAgIHNjb3BlLnRpbW91dElkID0gJHRpbWVvdXQoLT5cbiAgICAgICAgbnVtICs9IGluY3JlbWVudFxuICAgICAgICBzdGVwKytcbiAgICAgICAgaWYgc3RlcCA+PSBzdGVwc1xuICAgICAgICAgICR0aW1lb3V0LmNhbmNlbChzY29wZS50aW1vdXRJZClcbiAgICAgICAgICBudW0gPSBjb3VudFRvXG4gICAgICAgICAgZWxlbS50ZXh0Q29udGVudCA9IGNvdW50VG9cbiAgICAgICAgZWxzZVxuICAgICAgICAgIGVsZW0udGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKG51bSlcbiAgICAgICAgICB0aWNrKClcbiAgICAgICwgcmVmcmVzaEludGVydmFsKVxuICAgICAgcmV0dXJuXG5cbiAgICBzdGFydCA9IC0+XG4gICAgICAkdGltZW91dC5jYW5jZWwoc2NvcGUudGltb3V0SWQpICBpZiBzY29wZS50aW1vdXRJZD9cbiAgICAgIGNhbGN1bGF0ZSgpXG4gICAgICB0aWNrKClcbiAgICAgIHJldHVyblxuXG4gICAgYXR0cnMuJG9ic2VydmUgJ2V4Q291bnRUbycsICh2YWwpIC0+IHN0YXJ0KCkgIGlmIHZhbD9cbiAgICBhdHRycy4kb2JzZXJ2ZSAndmFsdWUnLCAtPiBzdGFydCgpXG4gICAgcmV0dXJuXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGlyZWN0aXZlcy9jb3VudFRvLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMuZG9tSW5pdCcsIFtdXG5cbi5kaXJlY3RpdmUgJ2V4RG9tSW5pdCcsIFstPlxuICByZXN0cmljdDogJ0EnLFxuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgIGF0dHJzLiRvYnNlcnZlICdleERvbUluaXQnLCAodmFsdWUpIC0+IHNjb3BlLiRldmFsKHZhbHVlKT8oZWxlbWVudClcbiAgICByZXR1cm5cbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kaXJlY3RpdmVzL2RvbUluaXQuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5mb2N1c01lJywgW11cblxuLmRpcmVjdGl2ZSAnZXhGb2N1c01lJywgWy0+XG4gIHNjb3BlOlxuICAgIHRyaWdnZXI6ICc9ZXhGb2N1c01lJ1xuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQpIC0+XG4gICAgc2NvcGUuJHdhdGNoICd0cmlnZ2VyJywgKHZhbHVlKSAtPlxuICAgICAgaWYgdHlwZW9mIHZhbHVlIGlzICdib29sZWFuJ1xuICAgICAgICBlbGVtZW50W2lmIHZhbHVlIHRoZW4gJ2ZvY3VzJyBlbHNlICdibHVyJ10/KClcbiAgICAgICAgc2NvcGUudHJpZ2dlciA9IG51bGxcbiAgICAgIHJldHVyblxuICAgIHJldHVyblxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RpcmVjdGl2ZXMvZm9jdXNNZS5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmxvd2VyJywgW11cblxuLmRpcmVjdGl2ZSAnZXhMb3dlcicsIFstPlxuICByZXF1aXJlOiAnbmdNb2RlbCdcbiAgbGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycywgbW9kZWxDdHJsKSAtPlxuICAgIHRvTG93ZXIgPSAoaW5wdXRWYWx1ZSkgLT5cbiAgICAgIGxvd2VyZWQgPSBpZiBpbnB1dFZhbHVlIHRoZW4gaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpIGVsc2UgaW5wdXRWYWx1ZVxuICAgICAgdW5sZXNzIGxvd2VyZWQgaXMgaW5wdXRWYWx1ZVxuICAgICAgICBlbGVtID0gZWxlbWVudFswXVxuICAgICAgICBzdGFydCA9IGVsZW0uc2VsZWN0aW9uU3RhcnRcbiAgICAgICAgZW5kID0gZWxlbS5zZWxlY3Rpb25FbmRcbiAgICAgICAgbW9kZWxDdHJsLiRzZXRWaWV3VmFsdWUgbG93ZXJlZFxuICAgICAgICBtb2RlbEN0cmwuJHJlbmRlcigpXG4gICAgICAgIGVsZW0uc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZClcbiAgICAgIGxvd2VyZWRcblxuICAgIG1vZGVsQ3RybC4kcGFyc2Vycy5wdXNoIHRvTG93ZXJcbiAgICB0b0xvd2VyIHNjb3BlW2F0dHJzLm5nTW9kZWxdXG4gICAgcmV0dXJuXG5cbiAgICAjIyNcbiAgICAgLy8gc3RvcmUgY3VycmVudCBwb3NpdGlvbnMgaW4gdmFyaWFibGVzXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgZW5kID0gdGhpcy5zZWxlY3Rpb25FbmQ7XG5cbiAgICAvLyBkbyB5b3VyIHN0dWZmXG4gICAgJCh0aGlzKS52YWwoICQodGhpcykudmFsKCkudG9Mb3dlckNhc2UoKSApO1xuXG4gICAgLy8gcmVzdG9yZSBmcm9tIHZhcmlhYmxlcy4uLlxuICAgIHRoaXMuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCk7XG4gICAgIyMjXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGlyZWN0aXZlcy9sb3dlci5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLnJlcGVhdERvbmUnLCBbXVxuXG4uZGlyZWN0aXZlICdleFJlcGVhdERvbmUnLCBbLT5cbiAgcmVzdHJpY3Q6ICdBJyxcbiAgbGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgLT5cbiAgICBpZiAoYXR0cnMubmdSZXBlYXQ/IG9yIGF0dHJzLm5nUmVwZWF0U3RhcnQ/KSBhbmQgc2NvcGUuJGxhc3RcbiAgICAgIGF0dHJzLiRvYnNlcnZlICdleFJlcGVhdERvbmUnLCAodmFsdWUpIC0+IHNjb3BlLiRldmFsKHZhbHVlKT8oZWxlbWVudClcbiAgICByZXR1cm5cbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kaXJlY3RpdmVzL3JlcGVhdERvbmUuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5yb3RhdGUyZCcsIFtdXG5cbi5kaXJlY3RpdmUgJ2V4Um90YXRlMmQnLCBbLT5cbiAgc2NvcGU6XG4gICAgdmFsdWU6ICc9ZXhSb3RhdGUyZCdcbiAgICBsaW1pdDogJz0nXG4gICAgYW5nbGU6ICc9J1xuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQpIC0+XG4gICAgc2NvcGUuJHdhdGNoQ29sbGVjdGlvbiAnW3ZhbHVlLCBsaW1pdCwgYW5nbGVdJywgKHZhbHVlcykgLT5cbiAgICAgIHZhbHVlID0gdmFsdWVzWzBdIG9yIDBcbiAgICAgIGxpbWl0ID0gdmFsdWVzWzFdIG9yIDEwXG4gICAgICBhbmdsZSA9IHZhbHVlc1syXSBvciAzNjBcbiAgICAgIGRlZ3JlZSA9IHZhbHVlICogYW5nbGUgLyBsaW1pdFxuICAgICAgZWxlbWVudC5jc3NcbiAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3JvdGF0ZSgnICsgZGVncmVlICsgJ2RlZyknXG4gICAgICAgICctbW96LXRyYW5zZm9ybSc6ICdyb3RhdGUoJyArIGRlZ3JlZSArICdkZWcpJ1xuICAgICAgICAndHJhbnNmb3JtJzogJ3JvdGF0ZSgnICsgZGVncmVlICsgJ2RlZyknXG4gICAgICByZXR1cm5cbiAgICByZXR1cm5cbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kaXJlY3RpdmVzL3JvdGF0ZTJkLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMudXBwZXInLCBbXVxuXG4uZGlyZWN0aXZlICdleFVwcGVyJywgWy0+XG4gIHJlcXVpcmU6ICduZ01vZGVsJ1xuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBtb2RlbEN0cmwpIC0+XG4gICAgdG9VcHBlciA9IChpbnB1dFZhbHVlKSAtPlxuICAgICAgdXBwZXJlZCA9IGlmIGlucHV0VmFsdWUgdGhlbiBpbnB1dFZhbHVlLnRvVXBwZXJDYXNlKCkgZWxzZSBpbnB1dFZhbHVlXG4gICAgICB1bmxlc3MgdXBwZXJlZCBpcyBpbnB1dFZhbHVlXG4gICAgICAgIGVsZW0gPSBlbGVtZW50WzBdXG4gICAgICAgIHN0YXJ0ID0gZWxlbS5zZWxlY3Rpb25TdGFydFxuICAgICAgICBlbmQgPSBlbGVtLnNlbGVjdGlvbkVuZFxuICAgICAgICBtb2RlbEN0cmwuJHNldFZpZXdWYWx1ZSB1cHBlcmVkXG4gICAgICAgIG1vZGVsQ3RybC4kcmVuZGVyKClcbiAgICAgICAgZWxlbS5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kKVxuICAgICAgdXBwZXJlZFxuXG4gICAgbW9kZWxDdHJsLiRwYXJzZXJzLnB1c2ggdG9VcHBlclxuICAgIHRvVXBwZXIgc2NvcGVbYXR0cnMubmdNb2RlbF1cbiAgICByZXR1cm5cbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kaXJlY3RpdmVzL3VwcGVyLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmZpbHRlcnMuYXJyYXlzJywgW11cblxuLmZpbHRlciAnbWFrZUFycmF5JywgWy0+IChpbnB1dCkgLT4gaWYgYW5ndWxhci5pc0FycmF5IGlucHV0IHRoZW4gaW5wdXQgZWxzZSAkLm1ha2VBcnJheShpbnB1dCldXG5cbi5maWx0ZXIgJ3JhbmdlJywgWy0+IChmcm9tLCB0bywgc3RlcCA9IDEpIC0+XG4gIGlzTnVtYmVyID0gdHlwZW9mIGZyb20gaXMgJ251bWJlcicgYW5kIHR5cGVvZiB0byBpcyAnbnVtYmVyJ1xuICBiZWdpbiA9IGlmIGlzTnVtYmVyIHRoZW4gZnJvbSBlbHNlIGZyb20udG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApXG4gIGVuZCA9IGlmIGlzTnVtYmVyIHRoZW4gdG8gZWxzZSB0by50b1N0cmluZygpLmNoYXJDb2RlQXQoMClcbiAgZm9yIGkgaW4gW2JlZ2luLi5lbmRdIGJ5IChpZiBiZWdpbiA+IGVuZCB0aGVuIC1zdGVwIGVsc2Ugc3RlcClcbiAgICBpZiBpc051bWJlciB0aGVuIGkgZWxzZSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXG5dXG5cbi5maWx0ZXIgJ2pvaW4nLCBbLT4gKGlucHV0LCBzZXApIC0+ICQubWFrZUFycmF5KGlucHV0KS5qb2luKHNlcCldXG5cbi5maWx0ZXIgJ2NvbWJpbmUnLCBbJyRwYXJzZScsICgkcGFyc2UpIC0+IChpbnB1dCwgdHJhbnNmb3JtZXJzLi4uKSAtPlxuICBpbnB1dCA9IFtpbnB1dF0gIHVubGVzcyBhbmd1bGFyLmlzQXJyYXkgaW5wdXRcbiAgKGZvciB2YWx1ZSBpbiBpbnB1dFxuICAgIGZvciB0IGluIHRyYW5zZm9ybWVyc1xuICAgICAgaWYgYW5ndWxhci5pc0Z1bmN0aW9uIHRcbiAgICAgICAgdmFsdWUgPSB0KHZhbHVlKVxuICAgICAgZWxzZSBpZiB0eXBlb2YgdCBpcyAnc3RyaW5nJ1xuICAgICAgICB2YWx1ZSA9IHN3aXRjaCB0XG4gICAgICAgICAgd2hlbiAnPWludGVnZXInIHRoZW4gcGFyc2VJbnQodmFsdWUpXG4gICAgICAgICAgd2hlbiAnPWZsb2F0JyAgIHRoZW4gcGFyc2VGbG9hdCh2YWx1ZSlcbiAgICAgICAgICBlbHNlICRwYXJzZSh0KSh2YWx1ZSlcbiAgICB2YWx1ZVxuICApLnJlZHVjZSAodCwgdikgLT4gdCArIHZcbl1cblxuLmZpbHRlciAnbGltaXQnLCBbLT4gKGlucHV0LCBwYWdlLCBpdGVtc1BlclBhZ2UpIC0+XG4gIGZyb20gPSAocGFnZSAtIDEpICogaXRlbXNQZXJQYWdlXG4gIHRvID0gZnJvbSArIGl0ZW1zUGVyUGFnZVxuICAkLm1ha2VBcnJheShpbnB1dClbZnJvbS4uLnRvXVxuXVxuXG4uZmlsdGVyICd0cmltJywgWy0+IChpbnB1dCkgLT5cbiAgaWYgYW5ndWxhci5pc0FycmF5IGlucHV0XG4gICAgYT8udG9TdHJpbmc/KCk/LnRyaW0/KCkgIGZvciBhIGluIGlucHV0XG4gIGVsc2VcbiAgICBpbnB1dD8udG9TdHJpbmc/KCk/LnRyaW0/KClcbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9maWx0ZXJzL2FycmF5cy5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5maWx0ZXJzLnN0cmluZ3MnLCBbXVxuXG4uZmlsdGVyICd0cnVzdEFzJywgWyckc2NlJywgKCRzY2UpIC0+IChpbnB1dCwgdHlwZSkgLT4gJHNjZS50cnVzdEFzKHR5cGUsIGlucHV0KV1cbi5maWx0ZXIgJ3RydXN0QXNDc3MnLCBbJyRzY2UnLCAoJHNjZSkgLT4gJHNjZS50cnVzdEFzQ3NzXVxuLmZpbHRlciAndHJ1c3RBc0h0bWwnLCBbJyRzY2UnLCAoJHNjZSkgLT4gJHNjZS50cnVzdEFzSHRtbF1cbi5maWx0ZXIgJ3RydXN0QXNKcycsIFsnJHNjZScsICgkc2NlKSAtPiAkc2NlLnRydXN0QXNKc11cbi5maWx0ZXIgJ3RydXN0QXNSZXNvdXJjZVVybCcsIFsnJHNjZScsICgkc2NlKSAtPiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybF1cbi5maWx0ZXIgJ3RydXN0QXNVcmwnLCBbJyRzY2UnLCAoJHNjZSkgLT4gJHNjZS50cnVzdEFzVXJsXVxuXG4uZmlsdGVyICdyZXBsYWNlJywgWy0+IChpbnB1dCwgc2VhcmNoLCByZXBsYWNlbWVudCwgb3B0aW9ucykgLT5cbiAgc2VhcmNoID0gbmV3IFJlZ0V4cCgoc2VhcmNoIG9yICcnKS50b1N0cmluZygpLCBvcHRpb25zKSAgdW5sZXNzIHNlYXJjaCBpbnN0YW5jZW9mIFJlZ0V4cFxuICAoaW5wdXQgb3IgJycpLnRvU3RyaW5nKCkucmVwbGFjZShzZWFyY2gsIHJlcGxhY2VtZW50KVxuXVxuXG4uZmlsdGVyICdubDJicicsIFstPiAoaW5wdXQpIC0+IChpbnB1dCBvciAnJykudG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxyXFxufFxcblxccnxcXHJ8XFxuKS9nLCAnPGJyLz4nKV1cblxuLmZpbHRlciAnYnIybmwnLCBbLT4gKGlucHV0KSAtPiAoaW5wdXQgb3IgJycpLnRvU3RyaW5nKCkucmVwbGFjZSgvKDxicj58PGJyXFwvPikvZywgJ1xcbicpXVxuXG4uZmlsdGVyICdzcGFjZTJuYnNwJywgWy0+IChpbnB1dCkgLT4gKGlucHV0IG9yICcnKS50b1N0cmluZygpLnJlcGxhY2UoL1xccy9nLCAnJm5ic3A7JyldXG5cbi5maWx0ZXIgJ25ic3Ayc3BhY2UnLCBbLT4gKGlucHV0KSAtPiAoaW5wdXQgb3IgJycpLnRvU3RyaW5nKCkucmVwbGFjZSgvJm5ic3A7L2csICcgJyldXG5cbi5maWx0ZXIgJ3NwbGl0JywgWy0+IChpbnB1dCwgc2VwYXJhdG9ycywgbGltaXQpIC0+XG4gIHVubGVzcyBpbnB1dD8gdGhlbiBpbnB1dFxuICBlbHNlIGlucHV0LnRvU3RyaW5nKCkuc3BsaXQobmV3IFJlZ0V4cChcbiAgICAoaWYgYW5ndWxhci5pc0FycmF5IHNlcGFyYXRvcnMgdGhlbiBzZXBhcmF0b3JzLmpvaW4oJ3wnKSBlbHNlIHNlcGFyYXRvcnMpLnRvU3RyaW5nKClcbiAgKSwgbGltaXQpXG5dXG5cbi5maWx0ZXIgJ2N1dHN0cmluZycsIFstPiAoaW5wdXQsIG1heExlbmd0aCA9IDEwLCBzdWZmaXggPSAnLi4uJykgLT5cbiAgdW5sZXNzIGlucHV0PyB0aGVuIGlucHV0XG4gIGVsc2VcbiAgICBpbnB1dFN0cmluZyA9IGlucHV0LnRvU3RyaW5nKClcbiAgICBpbnB1dFN0cmluZyA9IGlucHV0U3RyaW5nWzAuLi5tYXhMZW5ndGhdICsgc3VmZml4ICBpZiBpbnB1dFN0cmluZy5sZW5ndGggPiBtYXhMZW5ndGggLSBzdWZmaXgubGVuZ3RoXG4gICAgaW5wdXRTdHJpbmdcbl1cblxuLmZpbHRlciAncm91bmRjdXRzdHJpbmcnLCBbLT4gKGlucHV0LCBzZWFyY2gsIG1heExlbmd0aCA9IDIwLCBwcmVmaXggPSAnLi4uJywgc3VmZml4ID0gJy4uLicpIC0+XG4gIHVubGVzcyBpbnB1dD8gdGhlbiBpbnB1dFxuICBlbHNlXG4gICAgaW5wdXRTdHJpbmcgPSBpbnB1dC50b1N0cmluZygpXG4gICAgc2VhcmNoU3RyaW5nID0gKHNlYXJjaCBvciAnJykudG9TdHJpbmcoKVxuICAgIGkgPSBpbnB1dFN0cmluZy5pbmRleE9mKHNlYXJjaFN0cmluZylcbiAgICBpZiBpIGlzIC0xXG4gICAgICBpbnB1dFN0cmluZyA9IGlucHV0U3RyaW5nWzAuLi5tYXhMZW5ndGhdICsgc3VmZml4ICBpZiBpbnB1dFN0cmluZy5sZW5ndGggPiBtYXhMZW5ndGggLSBzdWZmaXgubGVuZ3RoXG4gICAgICBpbnB1dFN0cmluZ1xuICAgIGVsc2VcbiAgICAgIChkb0N1dCA9IChiZWZvcmUsIGFmdGVyLCBzdHJpbmcsIHJlc3RMZW5ndGgpIC0+XG4gICAgICAgIGlmIHJlc3RMZW5ndGggPD0gMCBvciBiZWZvcmUubGVuZ3RoIGlzIDAgYW5kIGFmdGVyLmxlbmd0aCBpcyAwXG4gICAgICAgICAgZW1wdHlPclByZWZpeCA9IGlmIGJlZm9yZS5sZW5ndGggPiAwIHRoZW4gcHJlZml4IGVsc2UgJydcbiAgICAgICAgICBlbXB0eU9yU3VmZml4ID0gaWYgYWZ0ZXIubGVuZ3RoID4gMCB0aGVuIHN1ZmZpeCBlbHNlICcnXG4gICAgICAgICAgZW1wdHlPclByZWZpeCArIHN0cmluZyArIGVtcHR5T3JTdWZmaXhcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGhhbGZMZW5ndGggPSByZXN0TGVuZ3RoIC8gMlxuICAgICAgICAgIGlmIGhhbGZMZW5ndGggPCAxXG4gICAgICAgICAgICBkb0N1dChiZWZvcmVbMC4uLi0xXSwgYWZ0ZXIsIGJlZm9yZVstMS4uLl0gKyBzdHJpbmcsIDApXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgcGllY2VPZkJlZm9yZSA9IGJlZm9yZVstaGFsZkxlbmd0aC4uLl1cbiAgICAgICAgICAgIHBpZWNlT2ZBZnRlciA9IGFmdGVyWzAuLi5oYWxmTGVuZ3RoXVxuICAgICAgICAgICAgcmVzdE9mQmVmb3JlID0gYmVmb3JlWzAuLi4taGFsZkxlbmd0aF1cbiAgICAgICAgICAgIHJlc3RPZkFmdGVyID0gYWZ0ZXJbaGFsZkxlbmd0aC4uLl1cbiAgICAgICAgICAgIGRvQ3V0KFxuICAgICAgICAgICAgICByZXN0T2ZCZWZvcmUsXG4gICAgICAgICAgICAgIHJlc3RPZkFmdGVyLFxuICAgICAgICAgICAgICBwaWVjZU9mQmVmb3JlICsgc3RyaW5nICsgcGllY2VPZkFmdGVyLFxuICAgICAgICAgICAgICByZXN0TGVuZ3RoIC0gcGllY2VPZkJlZm9yZS5sZW5ndGggLSBwaWVjZU9mQWZ0ZXIubGVuZ3RoXG4gICAgICAgICAgICApXG4gICAgICApKFxuICAgICAgICBpbnB1dFN0cmluZ1swLi4uaV0sXG4gICAgICAgIGlucHV0U3RyaW5nW2kgKyBzZWFyY2hTdHJpbmcubGVuZ3RoLi4uXSxcbiAgICAgICAgc2VhcmNoU3RyaW5nLFxuICAgICAgICBtYXhMZW5ndGggLSBzZWFyY2hTdHJpbmcubGVuZ3RoIC0gcHJlZml4Lmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGhcbiAgICAgIClcbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9maWx0ZXJzL3N0cmluZ3MuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuc2VydmljZXMubG9jYXRpb25TdGF0ZScsIFtdXG5cbi5ydW4gW1xuICAnJHJvb3RTY29wZScsICckd2luZG93JywgJyRsb2NhdGlvbidcbiAgKCRyb290U2NvcGUsICR3aW5kb3csICRsb2NhdGlvbikgLT5cbiAgICAkcm9vdFNjb3BlLiRvbiAnJGxvY2F0aW9uQ2hhbmdlU3VjY2VzcycsIC0+ICRsb2NhdGlvbi4kJGFjdHVhbFBhdGggPSAkbG9jYXRpb24ucGF0aCgpXG4gICAgJHJvb3RTY29wZS4kd2F0Y2ggKC0+ICRsb2NhdGlvbi5wYXRoKCkpLCAobmV3TG9jYXRpb24pIC0+ICRsb2NhdGlvbi5pc0hpc3RvcnlDaGFuZ2VkID0gJGxvY2F0aW9uLiQkYWN0dWFsUGF0aCBpcyBuZXdMb2NhdGlvblxuICAgIHJldHVyblxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcnZpY2VzL2xvY2F0aW9uU3RhdGUuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuc2VydmljZXMucGxheVJvdXRlcycsIFtdXG5cbi5wcm92aWRlciAnJHBsYXlSb3V0ZXMnLCBbLT5cbiAgQGpzUm91dGVzID0gd2luZG93LlJvdXRlc1xuICBAJGdldCA9IFtcbiAgICAnJGh0dHAnLCAnJGxvY2F0aW9uJ1xuICAgICgkaHR0cCwgJGxvY2F0aW9uKSA9PlxuICAgICAgd3JhcEh0dHAgPSAoZm4pIC0+IC0+XG4gICAgICAgIHJvdXRlT2JqZWN0ID0gZm4uYXBwbHkoQCwgYXJndW1lbnRzKVxuICAgICAgICBodHRwTWV0aG9kID0gcm91dGVPYmplY3QubWV0aG9kLnRvTG93ZXJDYXNlKClcbiAgICAgICAgYWJzb2x1dGVVUkwgPSByb3V0ZU9iamVjdC5hYnNvbHV0ZVVSTCgpXG4gICAgICAgIGhvc3QgPSBhYnNvbHV0ZVVSTC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW15cXC8/I10rKSg/OltcXC8/I118JCkvaSk/WzFdXG4gICAgICAgIHVybCA9IGlmICRsb2NhdGlvbi5ob3N0KCkgaXMgaG9zdCB0aGVuIHJvdXRlT2JqZWN0LnVybCBlbHNlIGFic29sdXRlVVJMXG4gICAgICAgIHJlcyA9XG4gICAgICAgICAgJHJvdXRlOiByb3V0ZU9iamVjdFxuICAgICAgICAgIG1ldGhvZDogaHR0cE1ldGhvZFxuICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgYWJzb2x1dGVVUkw6IHJvdXRlT2JqZWN0LmFic29sdXRlVVJMXG4gICAgICAgICAgd2ViU29ja2V0VVJMOiByb3V0ZU9iamVjdC53ZWJTb2NrZXRVUkxcbiAgICAgICAgcmVzW2h0dHBNZXRob2RdID0gKGFyZ3MuLi4pIC0+XG4gICAgICAgICAgYWpheCA9ICRodHRwW2h0dHBNZXRob2RdXG4gICAgICAgICAgYWpheC5jYWxsKGFqYXgsIFtdLmNvbmNhdC5jYWxsKFt1cmxdLCBhcmdzKSlcbiAgICAgICAgcmVzXG5cbiAgICAgIChhZGRSb3V0ZXMgPSAocGxheVJvdXRlc09iamVjdCwganNSb3V0ZXNPYmplY3QpIC0+XG4gICAgICAgIGZvciBrZXksIHZhbHVlIG9mIGpzUm91dGVzT2JqZWN0XG4gICAgICAgICAgaWYgYW5ndWxhci5pc0Z1bmN0aW9uIHZhbHVlXG4gICAgICAgICAgICBwbGF5Um91dGVzT2JqZWN0W2tleV0gPSB3cmFwSHR0cCh2YWx1ZSlcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBwbGF5Um91dGVzT2JqZWN0W2tleV0gPSB7fSAgdW5sZXNzIGtleSBvZiBwbGF5Um91dGVzT2JqZWN0XG4gICAgICAgICAgICBhZGRSb3V0ZXMocGxheVJvdXRlc09iamVjdFtrZXldLCB2YWx1ZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICApKHBsYXlSb3V0ZXMgPSB7fSwgQGpzUm91dGVzKVxuICAgICAgcGxheVJvdXRlc1xuICBdXG4gIHJldHVyblxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcnZpY2VzL3BsYXlSb3V0ZXMuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIWdsb2JhbC5kb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImpRdWVyeS5leHRlbmRzIHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWw7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL3dpbmRvdy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5yZXF1aXJlKCcuL2xvY2F0aW9uU3RhdGUuY29mZmVlJylcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5zZXJ2aWNlcy5yZXRhaW5TY3JvbGwnLCBbJ25nRXh0ZW5kcy5zZXJ2aWNlcy5sb2NhdGlvblN0YXRlJ11cblxuLnByb3ZpZGVyICckcmV0YWluU2Nyb2xsJywgWy0+XG4gIEB0YXJnZXQgPSBudWxsXG4gIEBpbmFjdGl2ZU9uY2UgPSBmYWxzZVxuICBAdHJhY2tpbmcgPSBmYWxzZVxuICBAcG9zaXRpb25zID0ge31cbiAgQG1heFRyeUNvdW50ID0gMTBcbiAgQHdoZXRoZXJTY3JvbGxFdmFsdWF0b3IgPSBbJyRsb2NhdGlvbicsICgkbG9jYXRpb24pIC0+ICRsb2NhdGlvbi5pc0hpc3RvcnlDaGFuZ2VkXVxuICBAaXNEZWxheWVkRXZhbHVhdG9yID0gWy0+IGZhbHNlXVxuICBAJGdldCA9IFstPiBAXVxuICByZXR1cm5cbl1cblxuLnJ1biBbXG4gICckcm9vdFNjb3BlJywgJyRyZXRhaW5TY3JvbGwnLCAnJGxvY2F0aW9uJywgJyR0aW1lb3V0JywgJyRpbmplY3RvcidcbiAgKCRyb290U2NvcGUsICRyZXRhaW5TY3JvbGwsICRsb2NhdGlvbiwgJHRpbWVvdXQsICRpbmplY3RvcikgLT5cbiAgICAkdGFyZ2V0ID0gJCgkcmV0YWluU2Nyb2xsLnRhcmdldCBvciB3aW5kb3cpXG4gICAgJHRhcmdldC5vbiAnc2Nyb2xsJywgLT4gJHJldGFpblNjcm9sbC5wb3NpdGlvbnNbJGxvY2F0aW9uLnVybCgpXSA9ICR0YXJnZXQuc2Nyb2xsVG9wKCkgIGlmICRyZXRhaW5TY3JvbGwudHJhY2tpbmdcblxuICAgICRyb290U2NvcGUuJG9uICckbG9jYXRpb25DaGFuZ2VTdWNjZXNzJywgLT4gJHJldGFpblNjcm9sbC5pbmFjdGl2ZU9uY2UgPSAkcmV0YWluU2Nyb2xsLnRyYWNraW5nID0gZmFsc2VcbiAgICAkcm9vdFNjb3BlLiRvbiAnJHZpZXdDb250ZW50TG9hZGVkJywgKGUpIC0+XG4gICAgICBpZiAkcmV0YWluU2Nyb2xsLmluYWN0aXZlT25jZSBvciBub3QgJGluamVjdG9yLmludm9rZSgkcmV0YWluU2Nyb2xsLndoZXRoZXJTY3JvbGxFdmFsdWF0b3IpXG4gICAgICAgIGNvbnNvbGUubG9nIFwibW92ZSB0byBzY3JvbGwgdG9wICVvXCIsICR0YXJnZXRbMF1cbiAgICAgICAgJHRhcmdldC5zY3JvbGxUb3AoMClcbiAgICAgICAgJHJldGFpblNjcm9sbC50cmFja2luZyA9IHRydWVcbiAgICAgIGVsc2VcbiAgICAgICAgaXNDYW5jZWwgPSBmYWxzZVxuICAgICAgICBjYW5jZWxTY3JvbGxpbmcgPSAtPiAkcmV0YWluU2Nyb2xsLnRyYWNraW5nID0gdHJ1ZTsgY29uc29sZS5sb2cgJ0NhbmNlbGVkIHNjcm9sbGluZyAlbycsICR0YXJnZXRbMF1cbiAgICAgICAgb2ZmU2NvcGVEZXN0cm95ID0gZS50YXJnZXRTY29wZS4kb24gJyRkZXN0cm95JywgLT4gaXNDYW5jZWwgPSB0cnVlOyBvZmZTY3JvbGxDYW5jZWxlcigpXG4gICAgICAgIG9mZlNjcm9sbENhbmNlbGVyID0gLT4gJHRhcmdldC5vZmYgJ3Njcm9sbC5yZXRhaW5TY3JvbGwtY2FuY2VsZXInICsgZS50YXJnZXRTY29wZS4kaWRcbiAgICAgICAgb25TY3JvbGxDYW5jZWxlciA9IC0+ICR0YXJnZXQub25lICdzY3JvbGwucmV0YWluU2Nyb2xsLWNhbmNlbGVyJyArIGUudGFyZ2V0U2NvcGUuJGlkLCAtPiBpc0NhbmNlbCA9IHRydWU7IG9mZlNjb3BlRGVzdHJveSgpXG4gICAgICAgICR0aW1lb3V0KC0+XG4gICAgICAgICAgaWYgaXNDYW5jZWwgdGhlbiBjYW5jZWxTY3JvbGxpbmcoKVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRyeUNvdW50ID0gJHJldGFpblNjcm9sbC5tYXhUcnlDb3VudFxuICAgICAgICAgICAgc2Nyb2xsVG9wID0gJHJldGFpblNjcm9sbC5wb3NpdGlvbnNbJGxvY2F0aW9uLnVybCgpXSBvciAwXG4gICAgICAgICAgICAodHJ5U2Nyb2xsID0gLT5cbiAgICAgICAgICAgICAgaWYgaXNDYW5jZWwgdGhlbiBjYW5jZWxTY3JvbGxpbmcoKVxuICAgICAgICAgICAgICBlbHNlIGlmICRpbmplY3Rvci5pbnZva2UoJHJldGFpblNjcm9sbC5pc0RlbGF5ZWRFdmFsdWF0b3IpIHRoZW4gJHRpbWVvdXQodHJ5U2Nyb2xsLCAyMDApXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBvZmZTY3JvbGxDYW5jZWxlcigpXG4gICAgICAgICAgICAgICAgJHRhcmdldC5zY3JvbGxUb3Aoc2Nyb2xsVG9wKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nIFwiI3sxICsgJHJldGFpblNjcm9sbC5tYXhUcnlDb3VudCAtIHRyeUNvdW50fSB0cnkgbW92ZSB0byBzY3JvbGxpbmcgI3skdGFyZ2V0LnNjcm9sbFRvcCgpfSAvICN7c2Nyb2xsVG9wfSAlb1wiLCAkdGFyZ2V0WzBdXG4gICAgICAgICAgICAgICAgaWYgJHRhcmdldC5zY3JvbGxUb3AoKSBpcyBzY3JvbGxUb3Agb3IgLS10cnlDb3VudCA8PSAwXG4gICAgICAgICAgICAgICAgICAkcmV0YWluU2Nyb2xsLnRyYWNraW5nID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgb2ZmU2NvcGVEZXN0cm95KClcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICBvblNjcm9sbENhbmNlbGVyKClcbiAgICAgICAgICAgICAgICAgICR0aW1lb3V0KHRyeVNjcm9sbCwgMTAwKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICkoKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICAsIDApXG4gICAgICByZXR1cm5cbiAgICByZXR1cm5cbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zZXJ2aWNlcy9yZXRhaW5TY3JvbGwuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5zZXJ2aWNlcy5zZWFyY2hGb3JtJywgW11cblxuLmZhY3RvcnkgJyRzZWFyY2hGb3JtJywgWy0+IChvcHRpb25zKSAtPlxuXG4gIGNsYXNzIFNlYXJjaEZvcm1cbiAgICBjb25zdHJ1Y3RvcjogKEBvcHRpb25zKSAtPlxuICAgICAgaWYgYW5ndWxhci5pc0Z1bmN0aW9uIEBvcHRpb25zXG4gICAgICAgIEBvcHRpb25zID0gYWN0aW9uOiBAb3B0aW9uc1xuICAgICAgQG9wdGlvbnMgPSBhbmd1bGFyLmV4dGVuZChcbiAgICAgICAgZGVmYXVsdHM6IHt9XG4gICAgICAgIHByZVN1Ym1pdDogKGZvcm0sIGZpbHRlcnMsIHVuZmlsdGVycykgLT5cbiAgICAgICAgcHJlUmVzZXQ6IChmb3JtKSAtPlxuICAgICAgICBzdWJtaXQ6IChmb3JtLCBmaWx0ZXJzLCB1bmZpbHRlcnMpIC0+XG4gICAgICAgIHJlc2V0OiAoZm9ybSkgLT5cbiAgICAgICAgYWN0aW9uOiAoZm9ybSkgLT5cbiAgICAgICAgI3RyYW5zZm9ybTogKGtleSwgdmFsdWUpIC0+IHZhbHVlXG4gICAgICAsIEBvcHRpb25zKVxuXG4gICAgICBAY3VycmVudCA9IGFuZ3VsYXIuY29weShAb3B0aW9ucy5kZWZhdWx0cykgb3Ige31cbiAgICAgIEBmb3JtID0gYW5ndWxhci5jb3B5KEBvcHRpb25zLmRlZmF1bHRzKSBvciB7fVxuXG4gICAgaXNQcmlzdGluZTogLT4gYW5ndWxhci5lcXVhbHMoQGN1cnJlbnQsIEBmb3JtKVxuICAgIGlzRGlydHk6IC0+IG5vdCBAaXNQcmlzdGluZSgpXG4gICAgaXNDaGFuZ2VkOiAtPiBub3QgYW5ndWxhci5lcXVhbHMoQGN1cnJlbnQsIEBvcHRpb25zLmRlZmF1bHRzKVxuXG4gICAgc3VibWl0OiAoZm9ybSwgZmlsdGVycywgdW5maWx0ZXJzKSAtPlxuICAgICAgaWYgQG9wdGlvbnMucHJlU3VibWl0Pyhmb3JtLCBmaWx0ZXJzLCB1bmZpbHRlcnMpIGlzbnQgZmFsc2VcbiAgICAgICAgaWYgZmlsdGVycz9cbiAgICAgICAgICBpc0ZpbHRlcmVkID0gKFtrZXksIHZhbHVlXSAgZm9yIGtleSwgdmFsdWUgb2YgZmlsdGVycyBvciB7fSkuZXZlcnkgKGtleVdpdGhWYWx1ZSkgPT5cbiAgICAgICAgICAgIFtrZXksIHZhbHVlXSA9IGtleVdpdGhWYWx1ZVxuICAgICAgICAgICAgYW5ndWxhci5lcXVhbHMoQGZvcm1ba2V5XSwgdmFsdWUsIHRydWUpXG4gICAgICAgICAgYW5ndWxhci5leHRlbmQoQGZvcm0sIGFuZ3VsYXIuY29weShpZiBpc0ZpbHRlcmVkIHRoZW4gdW5maWx0ZXJzIGVsc2UgZmlsdGVycykpXG4gICAgICAgIEBjdXJyZW50ID0gYW5ndWxhci5jb3B5KEBmb3JtKVxuICAgICAgICBAb3B0aW9ucy5zdWJtaXQ/KGZvcm0sIGZpbHRlcnMsIHVuZmlsdGVycylcbiAgICAgICAgQG9wdGlvbnMuYWN0aW9uPyhmb3JtKVxuICAgICAgQFxuXG4gICAgcmVzZXQ6IChmb3JtKSAtPlxuICAgICAgaWYgQG9wdGlvbnMucHJlUmVzZXQ/KGZvcm0pIGlzbnQgZmFsc2VcbiAgICAgICAgZm9ybT8uJHNldFByaXN0aW5lPygpXG4gICAgICAgIEBjdXJyZW50ID0gYW5ndWxhci5jb3B5KEBvcHRpb25zLmRlZmF1bHRzKSBvciB7fVxuICAgICAgICBAZm9ybSA9IGFuZ3VsYXIuY29weShAb3B0aW9ucy5kZWZhdWx0cykgb3Ige31cbiAgICAgICAgQG9wdGlvbnMucmVzZXQ/KGZvcm0pXG4gICAgICAgIEBvcHRpb25zLmFjdGlvbj8oZm9ybSlcbiAgICAgIEBcblxuICAgIHBhcmFtczogKHJlZnJlc2gsIGRlZmF1bHRzKSAtPlxuICAgICAgW2RlZmF1bHRzLCByZWZyZXNoXSA9IFtyZWZyZXNoLCBmYWxzZV0gIGlmIGFuZ3VsYXIuaXNPYmplY3QgcmVmcmVzaFxuXG4gICAgICBwYXJhbXMgPSBpZiByZWZyZXNoIGlzIHRydWVcbiAgICAgICAgYW5ndWxhci5jb3B5KEBjdXJyZW50KVxuICAgICAgZWxzZVxuICAgICAgICBhbmd1bGFyLmNvcHkoQGZvcm0gPSBhbmd1bGFyLmNvcHkoQGN1cnJlbnQpKVxuXG4gICAgICBmb3Iga2V5IG9mIEBvcHRpb25zLmRlZmF1bHRzXG4gICAgICAgIHBhcmFtc1trZXldID0gcGFyYW1zW2tleV0uZmlsdGVyKChhKSAtPiAhIWEpICBpZiBhbmd1bGFyLmlzQXJyYXkgcGFyYW1zW2tleV1cblxuICAgICAgcGFyYW1zID0gYW5ndWxhci5leHRlbmQgcGFyYW1zLCBhbmd1bGFyLmNvcHkoZGVmYXVsdHMpXG5cbiAgICAgIGlmIGFuZ3VsYXIuaXNGdW5jdGlvbiBAb3B0aW9ucy50cmFuc2Zvcm1cbiAgICAgICAgcGFyYW1zW2tleV0gPSBAb3B0aW9ucy50cmFuc2Zvcm0oa2V5LCB2YWx1ZSkgIGZvciBrZXksIHZhbHVlIG9mIHBhcmFtc1xuXG4gICAgICBwYXJhbXNcblxuICBuZXcgU2VhcmNoRm9ybShvcHRpb25zKVxuXVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2VydmljZXMvc2VhcmNoRm9ybS5jb2ZmZWVcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9