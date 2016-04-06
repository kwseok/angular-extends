(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular")) : factory(root["angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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
	
	__webpack_require__(3);
	
	__webpack_require__(4);
	
	__webpack_require__(5);
	
	__webpack_require__(6);
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	__webpack_require__(9);
	
	__webpack_require__(10);
	
	__webpack_require__(11);
	
	__webpack_require__(12);
	
	__webpack_require__(14);
	
	angular.module('ngExtends.directives', ['ngExtends.directives.countTo', 'ngExtends.directives.domInit', 'ngExtends.directives.focusMe', 'ngExtends.directives.lower', 'ngExtends.directives.repeatDone', 'ngExtends.directives.rotate2d', 'ngExtends.directives.upper']);
	
	angular.module('ngExtends.filters', ['ngExtends.filters.arrays', 'ngExtends.filters.strings']);
	
	angular.module('ngExtends.services', ['ngExtends.services.playRoutes', 'ngExtends.services.searchForm']);
	
	angular.module('ngExtends', ['ngExtends.directives', 'ngExtends.filters', 'ngExtends.services']);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(2);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (!_angular2.default) {
	    throw new Error("Angular.extends requires a AngularJS");
	}
	
	module.exports = _angular2.default;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
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
/* 4 */
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
/* 5 */
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
	          var base, name;
	          if (typeof value === 'boolean') {
	            if (typeof (base = element[0])[name = value ? 'focus' : 'blur'] === "function") {
	              base[name]();
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	var slice = [].slice;
	
	angular.module('ngExtends.filters.arrays', []).filter('makeArray', [
	  function() {
	    return function(input) {
	      if (angular.isArray(input)) {
	        return input;
	      } else if (input == null) {
	        return [];
	      } else {
	        return [input];
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
	  'makeArrayFilter', function(makeArrayFilter) {
	    return function(input, sep) {
	      return makeArrayFilter(input).join(sep);
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
	  'makeArrayFilter', function(makeArrayFilter) {
	    return function(input, page, itemsPerPage) {
	      var from, to;
	      from = (page - 1) * itemsPerPage;
	      to = from + itemsPerPage;
	      return makeArrayFilter(input).slice(from, to);
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 11 */
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
/* 12 */
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
	              res.send = res.ajax = function(options) {
	                options = options || {};
	                options.method = httpMethod;
	                options.url = url;
	                return $http(options);
	              };
	              res[httpMethod] = function() {
	                var ajax, args;
	                args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	                return (ajax = $http[httpMethod]).apply(ajax, [].concat.call([url], args));
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(13)))

/***/ },
/* 13 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	if (!global.document) {
	    throw new Error("Angular.extends requires a window with a document");
	}
	
	module.exports = global;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 14 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwNGM1ZWJkZmU2M2Y0MGJmNDc0YSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvYW5ndWxhci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvY291bnRUby5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvZG9tSW5pdC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvZm9jdXNNZS5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvbG93ZXIuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL3JlcGVhdERvbmUuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL3JvdGF0ZTJkLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy91cHBlci5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlcnMvYXJyYXlzLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy9zdHJpbmdzLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGxheVJvdXRlcy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvd2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zZWFyY2hGb3JtLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtB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R0EsU0FBUyxPQUFPLENBQUMsTUFBUixDQUFlLE1BQWYsRUFBdUIsT0FBTyxDQUFDLElBQVIsQ0FBYSxRQUFiLENBQXZCO1dBRVQsSUFBRyxPQUFPLENBQUMsVUFBUixDQUFtQixJQUFDLFFBQU8sQ0FBQyxTQUE1QixDQUFIO0FBQ0U7O2VBQUEsTUFBTyxLQUFQLEdBQWMsSUFBQyxRQUFPLENBQUMsU0FBVCxDQUFtQixHQUFuQixFQUF3QixLQUF4QjtBQUFkLGNBREY7O2tCQUdBO1NBaEJNOzs7OztjQWtCTixlQUFXLE9BQVg7S0E5RHNCO0dBQUgsQ0FBRDtFQUZ4QiIsImZpbGUiOiJhbmd1bGFyLWV4dGVuZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJhbmd1bGFyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImFuZ3VsYXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcImFuZ3VsYXJcIikpIDogZmFjdG9yeShyb290W1wiYW5ndWxhclwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMDRjNWViZGZlNjNmNDBiZjQ3NGFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9kaXJlY3RpdmVzL2NvdW50VG8uY29mZmVlJ1xuaW1wb3J0ICcuL2RpcmVjdGl2ZXMvZG9tSW5pdC5jb2ZmZWUnXG5pbXBvcnQgJy4vZGlyZWN0aXZlcy9mb2N1c01lLmNvZmZlZSdcbmltcG9ydCAnLi9kaXJlY3RpdmVzL2xvd2VyLmNvZmZlZSdcbmltcG9ydCAnLi9kaXJlY3RpdmVzL3JlcGVhdERvbmUuY29mZmVlJ1xuaW1wb3J0ICcuL2RpcmVjdGl2ZXMvcm90YXRlMmQuY29mZmVlJ1xuaW1wb3J0ICcuL2RpcmVjdGl2ZXMvdXBwZXIuY29mZmVlJ1xuaW1wb3J0ICcuL2ZpbHRlcnMvYXJyYXlzLmNvZmZlZSdcbmltcG9ydCAnLi9maWx0ZXJzL3N0cmluZ3MuY29mZmVlJ1xuaW1wb3J0ICcuL3NlcnZpY2VzL3BsYXlSb3V0ZXMuY29mZmVlJ1xuaW1wb3J0ICcuL3NlcnZpY2VzL3NlYXJjaEZvcm0uY29mZmVlJ1xuXG5hbmd1bGFyLm1vZHVsZSgnbmdFeHRlbmRzLmRpcmVjdGl2ZXMnLCBbXG4gICAgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmNvdW50VG8nLFxuICAgICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5kb21Jbml0JyxcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMuZm9jdXNNZScsXG4gICAgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmxvd2VyJyxcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMucmVwZWF0RG9uZScsXG4gICAgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLnJvdGF0ZTJkJyxcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMudXBwZXInXG5dKTtcblxuYW5ndWxhci5tb2R1bGUoJ25nRXh0ZW5kcy5maWx0ZXJzJywgW1xuICAgICduZ0V4dGVuZHMuZmlsdGVycy5hcnJheXMnLFxuICAgICduZ0V4dGVuZHMuZmlsdGVycy5zdHJpbmdzJ1xuXSk7XG5cbmFuZ3VsYXIubW9kdWxlKCduZ0V4dGVuZHMuc2VydmljZXMnLCBbXG4gICAgJ25nRXh0ZW5kcy5zZXJ2aWNlcy5wbGF5Um91dGVzJyxcbiAgICAnbmdFeHRlbmRzLnNlcnZpY2VzLnNlYXJjaEZvcm0nXG5dKTtcblxuYW5ndWxhci5tb2R1bGUoJ25nRXh0ZW5kcycsIFtcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMnLFxuICAgICduZ0V4dGVuZHMuZmlsdGVycycsXG4gICAgJ25nRXh0ZW5kcy5zZXJ2aWNlcydcbl0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXG5cbmlmICghYW5ndWxhcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFuZ3VsYXIuZXh0ZW5kcyByZXF1aXJlcyBhIEFuZ3VsYXJKU1wiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFycy9hbmd1bGFyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYW5ndWxhclwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5jb3VudFRvJywgW11cblxuLmRpcmVjdGl2ZSAnZXhDb3VudFRvJywgWyckdGltZW91dCcsICgkdGltZW91dCkgLT5cbiAgcmVwbGFjZTogZmFsc2VcbiAgc2NvcGU6IHRydWVcbiAgbGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgLT5cbiAgICBlbGVtID0gZWxlbWVudFswXVxuICAgIG51bSA9IG51bGxcbiAgICByZWZyZXNoSW50ZXJ2YWwgPSBudWxsXG4gICAgc3RlcHMgPSBudWxsXG4gICAgc3RlcCA9IG51bGxcbiAgICBjb3VudFRvID0gbnVsbFxuICAgIGluY3JlbWVudCA9IG51bGxcblxuICAgIGNhbGN1bGF0ZSA9IC0+XG4gICAgICByZWZyZXNoSW50ZXJ2YWwgPSAzMFxuICAgICAgc3RlcCA9IDBcbiAgICAgIHNjb3BlLnRpbW91dElkID0gbnVsbFxuICAgICAgY291bnRUbyA9IHBhcnNlSW50KGF0dHJzLmV4Q291bnRUbykgfHwgMFxuICAgICAgc2NvcGUudmFsdWUgPSBwYXJzZUludChhdHRycy52YWx1ZSwgMTApIHx8IDBcbiAgICAgIGR1cmF0aW9uID0gKHBhcnNlRmxvYXQoYXR0cnMuZHVyYXRpb24pICogMTAwMCkgfHwgMFxuXG4gICAgICBzdGVwcyA9IE1hdGguY2VpbChkdXJhdGlvbiAvIHJlZnJlc2hJbnRlcnZhbClcbiAgICAgIGluY3JlbWVudCA9IChjb3VudFRvIC0gc2NvcGUudmFsdWUpIC8gc3RlcHNcbiAgICAgIG51bSA9IHNjb3BlLnZhbHVlXG4gICAgICByZXR1cm5cblxuICAgIHRpY2sgPSAtPlxuICAgICAgc2NvcGUudGltb3V0SWQgPSAkdGltZW91dCgtPlxuICAgICAgICBudW0gKz0gaW5jcmVtZW50XG4gICAgICAgIHN0ZXArK1xuICAgICAgICBpZiBzdGVwID49IHN0ZXBzXG4gICAgICAgICAgJHRpbWVvdXQuY2FuY2VsKHNjb3BlLnRpbW91dElkKVxuICAgICAgICAgIG51bSA9IGNvdW50VG9cbiAgICAgICAgICBlbGVtLnRleHRDb250ZW50ID0gY291bnRUb1xuICAgICAgICBlbHNlXG4gICAgICAgICAgZWxlbS50ZXh0Q29udGVudCA9IE1hdGgucm91bmQobnVtKVxuICAgICAgICAgIHRpY2soKVxuICAgICAgLCByZWZyZXNoSW50ZXJ2YWwpXG4gICAgICByZXR1cm5cblxuICAgIHN0YXJ0ID0gLT5cbiAgICAgICR0aW1lb3V0LmNhbmNlbChzY29wZS50aW1vdXRJZCkgIGlmIHNjb3BlLnRpbW91dElkP1xuICAgICAgY2FsY3VsYXRlKClcbiAgICAgIHRpY2soKVxuICAgICAgcmV0dXJuXG5cbiAgICBhdHRycy4kb2JzZXJ2ZSAnZXhDb3VudFRvJywgKHZhbCkgLT4gc3RhcnQoKSAgaWYgdmFsP1xuICAgIGF0dHJzLiRvYnNlcnZlICd2YWx1ZScsIC0+IHN0YXJ0KClcbiAgICByZXR1cm5cbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kaXJlY3RpdmVzL2NvdW50VG8uY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5kb21Jbml0JywgW11cblxuLmRpcmVjdGl2ZSAnZXhEb21Jbml0JywgWy0+XG4gIHJlc3RyaWN0OiAnQScsXG4gIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpIC0+XG4gICAgYXR0cnMuJG9ic2VydmUgJ2V4RG9tSW5pdCcsICh2YWx1ZSkgLT4gc2NvcGUuJGV2YWwodmFsdWUpPyhlbGVtZW50KVxuICAgIHJldHVyblxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RpcmVjdGl2ZXMvZG9tSW5pdC5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmZvY3VzTWUnLCBbXVxuXG4uZGlyZWN0aXZlICdleEZvY3VzTWUnLCBbLT5cbiAgc2NvcGU6XG4gICAgdHJpZ2dlcjogJz1leEZvY3VzTWUnXG4gIGxpbms6IChzY29wZSwgZWxlbWVudCkgLT5cbiAgICBzY29wZS4kd2F0Y2ggJ3RyaWdnZXInLCAodmFsdWUpIC0+XG4gICAgICBpZiB0eXBlb2YgdmFsdWUgaXMgJ2Jvb2xlYW4nXG4gICAgICAgIGVsZW1lbnRbMF1baWYgdmFsdWUgdGhlbiAnZm9jdXMnIGVsc2UgJ2JsdXInXT8oKVxuICAgICAgICBzY29wZS50cmlnZ2VyID0gbnVsbFxuICAgICAgcmV0dXJuXG4gICAgcmV0dXJuXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGlyZWN0aXZlcy9mb2N1c01lLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMubG93ZXInLCBbXVxuXG4uZGlyZWN0aXZlICdleExvd2VyJywgWy0+XG4gIHJlcXVpcmU6ICduZ01vZGVsJ1xuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBtb2RlbEN0cmwpIC0+XG4gICAgdG9Mb3dlciA9IChpbnB1dFZhbHVlKSAtPlxuICAgICAgbG93ZXJlZCA9IGlmIGlucHV0VmFsdWUgdGhlbiBpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkgZWxzZSBpbnB1dFZhbHVlXG4gICAgICB1bmxlc3MgbG93ZXJlZCBpcyBpbnB1dFZhbHVlXG4gICAgICAgIGVsZW0gPSBlbGVtZW50WzBdXG4gICAgICAgIHN0YXJ0ID0gZWxlbS5zZWxlY3Rpb25TdGFydFxuICAgICAgICBlbmQgPSBlbGVtLnNlbGVjdGlvbkVuZFxuICAgICAgICBtb2RlbEN0cmwuJHNldFZpZXdWYWx1ZSBsb3dlcmVkXG4gICAgICAgIG1vZGVsQ3RybC4kcmVuZGVyKClcbiAgICAgICAgZWxlbS5zZXRTZWxlY3Rpb25SYW5nZT8oc3RhcnQsIGVuZClcbiAgICAgIGxvd2VyZWRcblxuICAgIG1vZGVsQ3RybC4kcGFyc2Vycy5wdXNoIHRvTG93ZXJcbiAgICB0b0xvd2VyIHNjb3BlW2F0dHJzLm5nTW9kZWxdXG4gICAgcmV0dXJuXG5dXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kaXJlY3RpdmVzL2xvd2VyLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMucmVwZWF0RG9uZScsIFtdXG5cbi5kaXJlY3RpdmUgJ2V4UmVwZWF0RG9uZScsIFstPlxuICByZXN0cmljdDogJ0EnLFxuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgIGlmIChhdHRycy5uZ1JlcGVhdD8gb3IgYXR0cnMubmdSZXBlYXRTdGFydD8pIGFuZCBzY29wZS4kbGFzdFxuICAgICAgYXR0cnMuJG9ic2VydmUgJ2V4UmVwZWF0RG9uZScsICh2YWx1ZSkgLT4gc2NvcGUuJGV2YWwodmFsdWUpPyhlbGVtZW50KVxuICAgIHJldHVyblxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RpcmVjdGl2ZXMvcmVwZWF0RG9uZS5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLnJvdGF0ZTJkJywgW11cblxuLmRpcmVjdGl2ZSAnZXhSb3RhdGUyZCcsIFstPlxuICBzY29wZTpcbiAgICB2YWx1ZTogJz1leFJvdGF0ZTJkJ1xuICAgIGxpbWl0OiAnPSdcbiAgICBhbmdsZTogJz0nXG4gIGxpbms6IChzY29wZSwgZWxlbWVudCkgLT5cbiAgICBzY29wZS4kd2F0Y2hDb2xsZWN0aW9uICdbdmFsdWUsIGxpbWl0LCBhbmdsZV0nLCAodmFsdWVzKSAtPlxuICAgICAgdmFsdWUgPSB2YWx1ZXNbMF0gb3IgMFxuICAgICAgbGltaXQgPSB2YWx1ZXNbMV0gb3IgMTBcbiAgICAgIGFuZ2xlID0gdmFsdWVzWzJdIG9yIDM2MFxuICAgICAgZGVncmVlID0gdmFsdWUgKiBhbmdsZSAvIGxpbWl0XG4gICAgICBlbGVtZW50LmNzc1xuICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBkZWdyZWUgKyAnZGVnKSdcbiAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogJ3JvdGF0ZSgnICsgZGVncmVlICsgJ2RlZyknXG4gICAgICAgICd0cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBkZWdyZWUgKyAnZGVnKSdcbiAgICAgIHJldHVyblxuICAgIHJldHVyblxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RpcmVjdGl2ZXMvcm90YXRlMmQuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZGlyZWN0aXZlcy51cHBlcicsIFtdXG5cbi5kaXJlY3RpdmUgJ2V4VXBwZXInLCBbLT5cbiAgcmVxdWlyZTogJ25nTW9kZWwnXG4gIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMsIG1vZGVsQ3RybCkgLT5cbiAgICB0b1VwcGVyID0gKGlucHV0VmFsdWUpIC0+XG4gICAgICB1cHBlcmVkID0gaWYgaW5wdXRWYWx1ZSB0aGVuIGlucHV0VmFsdWUudG9VcHBlckNhc2UoKSBlbHNlIGlucHV0VmFsdWVcbiAgICAgIHVubGVzcyB1cHBlcmVkIGlzIGlucHV0VmFsdWVcbiAgICAgICAgZWxlbSA9IGVsZW1lbnRbMF1cbiAgICAgICAgc3RhcnQgPSBlbGVtLnNlbGVjdGlvblN0YXJ0XG4gICAgICAgIGVuZCA9IGVsZW0uc2VsZWN0aW9uRW5kXG4gICAgICAgIG1vZGVsQ3RybC4kc2V0Vmlld1ZhbHVlIHVwcGVyZWRcbiAgICAgICAgbW9kZWxDdHJsLiRyZW5kZXIoKVxuICAgICAgICBlbGVtLnNldFNlbGVjdGlvblJhbmdlPyhzdGFydCwgZW5kKVxuICAgICAgdXBwZXJlZFxuXG4gICAgbW9kZWxDdHJsLiRwYXJzZXJzLnB1c2ggdG9VcHBlclxuICAgIHRvVXBwZXIgc2NvcGVbYXR0cnMubmdNb2RlbF1cbiAgICByZXR1cm5cbl1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RpcmVjdGl2ZXMvdXBwZXIuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZmlsdGVycy5hcnJheXMnLCBbXVxuXG4uZmlsdGVyICdtYWtlQXJyYXknLCBbLT4gKGlucHV0KSAtPlxuICBpZiBhbmd1bGFyLmlzQXJyYXkoaW5wdXQpIHRoZW4gaW5wdXRcbiAgZWxzZSB1bmxlc3MgaW5wdXQ/IHRoZW4gW11cbiAgZWxzZSBbaW5wdXRdXG5dXG5cbi5maWx0ZXIgJ3JhbmdlJywgWy0+IChmcm9tLCB0bywgc3RlcCA9IDEpIC0+XG4gIGlzTnVtYmVyID0gdHlwZW9mIGZyb20gaXMgJ251bWJlcicgYW5kIHR5cGVvZiB0byBpcyAnbnVtYmVyJ1xuICBiZWdpbiA9IGlmIGlzTnVtYmVyIHRoZW4gZnJvbSBlbHNlIGZyb20udG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApXG4gIGVuZCA9IGlmIGlzTnVtYmVyIHRoZW4gdG8gZWxzZSB0by50b1N0cmluZygpLmNoYXJDb2RlQXQoMClcbiAgZm9yIGkgaW4gW2JlZ2luLi5lbmRdIGJ5IChpZiBiZWdpbiA+IGVuZCB0aGVuIC1zdGVwIGVsc2Ugc3RlcClcbiAgICBpZiBpc051bWJlciB0aGVuIGkgZWxzZSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXG5dXG5cbi5maWx0ZXIgJ2pvaW4nLCBbJ21ha2VBcnJheUZpbHRlcicsIChtYWtlQXJyYXlGaWx0ZXIpIC0+IChpbnB1dCwgc2VwKSAtPiBtYWtlQXJyYXlGaWx0ZXIoaW5wdXQpLmpvaW4oc2VwKV1cblxuLmZpbHRlciAnY29tYmluZScsIFsnJHBhcnNlJywgKCRwYXJzZSkgLT4gKGlucHV0LCB0cmFuc2Zvcm1lcnMuLi4pIC0+XG4gIGlucHV0ID0gW2lucHV0XSAgdW5sZXNzIGFuZ3VsYXIuaXNBcnJheSBpbnB1dFxuICAoZm9yIHZhbHVlIGluIGlucHV0XG4gICAgZm9yIHQgaW4gdHJhbnNmb3JtZXJzXG4gICAgICBpZiBhbmd1bGFyLmlzRnVuY3Rpb24gdFxuICAgICAgICB2YWx1ZSA9IHQodmFsdWUpXG4gICAgICBlbHNlIGlmIHR5cGVvZiB0IGlzICdzdHJpbmcnXG4gICAgICAgIHZhbHVlID0gc3dpdGNoIHRcbiAgICAgICAgICB3aGVuICc9aW50ZWdlcicgdGhlbiBwYXJzZUludCh2YWx1ZSlcbiAgICAgICAgICB3aGVuICc9ZmxvYXQnICAgdGhlbiBwYXJzZUZsb2F0KHZhbHVlKVxuICAgICAgICAgIGVsc2UgJHBhcnNlKHQpKHZhbHVlKVxuICAgIHZhbHVlXG4gICkucmVkdWNlICh0LCB2KSAtPiB0ICsgdlxuXVxuXG4uZmlsdGVyICdsaW1pdCcsIFsnbWFrZUFycmF5RmlsdGVyJywgKG1ha2VBcnJheUZpbHRlcikgLT4gKGlucHV0LCBwYWdlLCBpdGVtc1BlclBhZ2UpIC0+XG4gIGZyb20gPSAocGFnZSAtIDEpICogaXRlbXNQZXJQYWdlXG4gIHRvID0gZnJvbSArIGl0ZW1zUGVyUGFnZVxuICBtYWtlQXJyYXlGaWx0ZXIoaW5wdXQpW2Zyb20uLi50b11cbl1cblxuLmZpbHRlciAndHJpbScsIFstPiAoaW5wdXQpIC0+XG4gIGlmIGFuZ3VsYXIuaXNBcnJheSBpbnB1dFxuICAgIGE/LnRvU3RyaW5nPygpPy50cmltPygpICBmb3IgYSBpbiBpbnB1dFxuICBlbHNlXG4gICAgaW5wdXQ/LnRvU3RyaW5nPygpPy50cmltPygpXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZmlsdGVycy9hcnJheXMuY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXIubW9kdWxlICduZ0V4dGVuZHMuZmlsdGVycy5zdHJpbmdzJywgW11cblxuLmZpbHRlciAndHJ1c3RBcycsIFsnJHNjZScsICgkc2NlKSAtPiAoaW5wdXQsIHR5cGUpIC0+ICRzY2UudHJ1c3RBcyh0eXBlLCBpbnB1dCldXG4uZmlsdGVyICd0cnVzdEFzQ3NzJywgWyckc2NlJywgKCRzY2UpIC0+ICRzY2UudHJ1c3RBc0Nzc11cbi5maWx0ZXIgJ3RydXN0QXNIdG1sJywgWyckc2NlJywgKCRzY2UpIC0+ICRzY2UudHJ1c3RBc0h0bWxdXG4uZmlsdGVyICd0cnVzdEFzSnMnLCBbJyRzY2UnLCAoJHNjZSkgLT4gJHNjZS50cnVzdEFzSnNdXG4uZmlsdGVyICd0cnVzdEFzUmVzb3VyY2VVcmwnLCBbJyRzY2UnLCAoJHNjZSkgLT4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmxdXG4uZmlsdGVyICd0cnVzdEFzVXJsJywgWyckc2NlJywgKCRzY2UpIC0+ICRzY2UudHJ1c3RBc1VybF1cblxuLmZpbHRlciAncmVwbGFjZScsIFstPiAoaW5wdXQsIHNlYXJjaCwgcmVwbGFjZW1lbnQsIG9wdGlvbnMpIC0+XG4gIHNlYXJjaCA9IG5ldyBSZWdFeHAoKHNlYXJjaCBvciAnJykudG9TdHJpbmcoKSwgb3B0aW9ucykgIHVubGVzcyBzZWFyY2ggaW5zdGFuY2VvZiBSZWdFeHBcbiAgKGlucHV0IG9yICcnKS50b1N0cmluZygpLnJlcGxhY2Uoc2VhcmNoLCByZXBsYWNlbWVudClcbl1cblxuLmZpbHRlciAnbmwyYnInLCBbLT4gKGlucHV0KSAtPiAoaW5wdXQgb3IgJycpLnRvU3RyaW5nKCkucmVwbGFjZSgvKFxcclxcbnxcXG5cXHJ8XFxyfFxcbikvZywgJzxici8+JyldXG5cbi5maWx0ZXIgJ2JyMm5sJywgWy0+IChpbnB1dCkgLT4gKGlucHV0IG9yICcnKS50b1N0cmluZygpLnJlcGxhY2UoLyg8YnI+fDxiclxcLz4pL2csICdcXG4nKV1cblxuLmZpbHRlciAnc3BhY2UybmJzcCcsIFstPiAoaW5wdXQpIC0+IChpbnB1dCBvciAnJykudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHMvZywgJyZuYnNwOycpXVxuXG4uZmlsdGVyICduYnNwMnNwYWNlJywgWy0+IChpbnB1dCkgLT4gKGlucHV0IG9yICcnKS50b1N0cmluZygpLnJlcGxhY2UoLyZuYnNwOy9nLCAnICcpXVxuXG4uZmlsdGVyICdzcGxpdCcsIFstPiAoaW5wdXQsIHNlcGFyYXRvcnMsIGxpbWl0KSAtPlxuICB1bmxlc3MgaW5wdXQ/IHRoZW4gaW5wdXRcbiAgZWxzZSBpbnB1dC50b1N0cmluZygpLnNwbGl0KG5ldyBSZWdFeHAoXG4gICAgKGlmIGFuZ3VsYXIuaXNBcnJheSBzZXBhcmF0b3JzIHRoZW4gc2VwYXJhdG9ycy5qb2luKCd8JykgZWxzZSBzZXBhcmF0b3JzKS50b1N0cmluZygpXG4gICksIGxpbWl0KVxuXVxuXG4uZmlsdGVyICdjdXRzdHJpbmcnLCBbLT4gKGlucHV0LCBtYXhMZW5ndGggPSAxMCwgc3VmZml4ID0gJy4uLicpIC0+XG4gIHVubGVzcyBpbnB1dD8gdGhlbiBpbnB1dFxuICBlbHNlXG4gICAgaW5wdXRTdHJpbmcgPSBpbnB1dC50b1N0cmluZygpXG4gICAgaW5wdXRTdHJpbmcgPSBpbnB1dFN0cmluZ1swLi4ubWF4TGVuZ3RoXSArIHN1ZmZpeCAgaWYgaW5wdXRTdHJpbmcubGVuZ3RoID4gbWF4TGVuZ3RoIC0gc3VmZml4Lmxlbmd0aFxuICAgIGlucHV0U3RyaW5nXG5dXG5cbi5maWx0ZXIgJ3JvdW5kY3V0c3RyaW5nJywgWy0+IChpbnB1dCwgc2VhcmNoLCBtYXhMZW5ndGggPSAyMCwgcHJlZml4ID0gJy4uLicsIHN1ZmZpeCA9ICcuLi4nKSAtPlxuICB1bmxlc3MgaW5wdXQ/IHRoZW4gaW5wdXRcbiAgZWxzZVxuICAgIGlucHV0U3RyaW5nID0gaW5wdXQudG9TdHJpbmcoKVxuICAgIHNlYXJjaFN0cmluZyA9IChzZWFyY2ggb3IgJycpLnRvU3RyaW5nKClcbiAgICBpID0gaW5wdXRTdHJpbmcuaW5kZXhPZihzZWFyY2hTdHJpbmcpXG4gICAgaWYgaSBpcyAtMVxuICAgICAgaW5wdXRTdHJpbmcgPSBpbnB1dFN0cmluZ1swLi4ubWF4TGVuZ3RoXSArIHN1ZmZpeCAgaWYgaW5wdXRTdHJpbmcubGVuZ3RoID4gbWF4TGVuZ3RoIC0gc3VmZml4Lmxlbmd0aFxuICAgICAgaW5wdXRTdHJpbmdcbiAgICBlbHNlXG4gICAgICAoZG9DdXQgPSAoYmVmb3JlLCBhZnRlciwgc3RyaW5nLCByZXN0TGVuZ3RoKSAtPlxuICAgICAgICBpZiByZXN0TGVuZ3RoIDw9IDAgb3IgYmVmb3JlLmxlbmd0aCBpcyAwIGFuZCBhZnRlci5sZW5ndGggaXMgMFxuICAgICAgICAgIGVtcHR5T3JQcmVmaXggPSBpZiBiZWZvcmUubGVuZ3RoID4gMCB0aGVuIHByZWZpeCBlbHNlICcnXG4gICAgICAgICAgZW1wdHlPclN1ZmZpeCA9IGlmIGFmdGVyLmxlbmd0aCA+IDAgdGhlbiBzdWZmaXggZWxzZSAnJ1xuICAgICAgICAgIGVtcHR5T3JQcmVmaXggKyBzdHJpbmcgKyBlbXB0eU9yU3VmZml4XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBoYWxmTGVuZ3RoID0gcmVzdExlbmd0aCAvIDJcbiAgICAgICAgICBpZiBoYWxmTGVuZ3RoIDwgMVxuICAgICAgICAgICAgZG9DdXQoYmVmb3JlWzAuLi4tMV0sIGFmdGVyLCBiZWZvcmVbLTEuLi5dICsgc3RyaW5nLCAwKVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHBpZWNlT2ZCZWZvcmUgPSBiZWZvcmVbLWhhbGZMZW5ndGguLi5dXG4gICAgICAgICAgICBwaWVjZU9mQWZ0ZXIgPSBhZnRlclswLi4uaGFsZkxlbmd0aF1cbiAgICAgICAgICAgIHJlc3RPZkJlZm9yZSA9IGJlZm9yZVswLi4uLWhhbGZMZW5ndGhdXG4gICAgICAgICAgICByZXN0T2ZBZnRlciA9IGFmdGVyW2hhbGZMZW5ndGguLi5dXG4gICAgICAgICAgICBkb0N1dChcbiAgICAgICAgICAgICAgcmVzdE9mQmVmb3JlLFxuICAgICAgICAgICAgICByZXN0T2ZBZnRlcixcbiAgICAgICAgICAgICAgcGllY2VPZkJlZm9yZSArIHN0cmluZyArIHBpZWNlT2ZBZnRlcixcbiAgICAgICAgICAgICAgcmVzdExlbmd0aCAtIHBpZWNlT2ZCZWZvcmUubGVuZ3RoIC0gcGllY2VPZkFmdGVyLmxlbmd0aFxuICAgICAgICAgICAgKVxuICAgICAgKShcbiAgICAgICAgaW5wdXRTdHJpbmdbMC4uLmldLFxuICAgICAgICBpbnB1dFN0cmluZ1tpICsgc2VhcmNoU3RyaW5nLmxlbmd0aC4uLl0sXG4gICAgICAgIHNlYXJjaFN0cmluZyxcbiAgICAgICAgbWF4TGVuZ3RoIC0gc2VhcmNoU3RyaW5nLmxlbmd0aCAtIHByZWZpeC5sZW5ndGggLSBzdWZmaXgubGVuZ3RoXG4gICAgICApXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZmlsdGVycy9zdHJpbmdzLmNvZmZlZVxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLnNlcnZpY2VzLnBsYXlSb3V0ZXMnLCBbXVxuXG4ucHJvdmlkZXIgJyRwbGF5Um91dGVzJywgWy0+XG4gIEBqc1JvdXRlcyA9IHdpbmRvdy5Sb3V0ZXNcbiAgQCRnZXQgPSBbXG4gICAgJyRodHRwJywgJyRsb2NhdGlvbidcbiAgICAoJGh0dHAsICRsb2NhdGlvbikgPT5cbiAgICAgIHdyYXBIdHRwID0gKGZuKSAtPiAtPlxuICAgICAgICByb3V0ZU9iamVjdCA9IGZuLmFwcGx5KEAsIGFyZ3VtZW50cylcbiAgICAgICAgaHR0cE1ldGhvZCA9IHJvdXRlT2JqZWN0Lm1ldGhvZC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGFic29sdXRlVVJMID0gcm91dGVPYmplY3QuYWJzb2x1dGVVUkwoKVxuICAgICAgICBob3N0ID0gYWJzb2x1dGVVUkwubWF0Y2goL15odHRwcz86XFwvXFwvKFteXFwvPyNdKykoPzpbXFwvPyNdfCQpL2kpP1sxXVxuICAgICAgICB1cmwgPSBpZiAkbG9jYXRpb24uaG9zdCgpIGlzIGhvc3QgdGhlbiByb3V0ZU9iamVjdC51cmwgZWxzZSBhYnNvbHV0ZVVSTFxuICAgICAgICByZXMgPVxuICAgICAgICAgICRyb3V0ZTogcm91dGVPYmplY3RcbiAgICAgICAgICBtZXRob2Q6IGh0dHBNZXRob2RcbiAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgIGFic29sdXRlVVJMOiByb3V0ZU9iamVjdC5hYnNvbHV0ZVVSTFxuICAgICAgICAgIHdlYlNvY2tldFVSTDogcm91dGVPYmplY3Qud2ViU29ja2V0VVJMXG4gICAgICAgIHJlcy5zZW5kID0gcmVzLmFqYXggPSAob3B0aW9ucykgLT5cbiAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucyBvciB7fVxuICAgICAgICAgIG9wdGlvbnMubWV0aG9kID0gaHR0cE1ldGhvZFxuICAgICAgICAgIG9wdGlvbnMudXJsID0gdXJsXG4gICAgICAgICAgJGh0dHAob3B0aW9ucylcbiAgICAgICAgcmVzW2h0dHBNZXRob2RdID0gKGFyZ3MuLi4pIC0+XG4gICAgICAgICAgKGFqYXggPSAkaHR0cFtodHRwTWV0aG9kXSkuYXBwbHkoYWpheCwgW10uY29uY2F0LmNhbGwoW3VybF0sIGFyZ3MpKVxuICAgICAgICByZXNcblxuICAgICAgKGFkZFJvdXRlcyA9IChwbGF5Um91dGVzT2JqZWN0LCBqc1JvdXRlc09iamVjdCkgLT5cbiAgICAgICAgZm9yIGtleSwgdmFsdWUgb2YganNSb3V0ZXNPYmplY3RcbiAgICAgICAgICBpZiBhbmd1bGFyLmlzRnVuY3Rpb24gdmFsdWVcbiAgICAgICAgICAgIHBsYXlSb3V0ZXNPYmplY3Rba2V5XSA9IHdyYXBIdHRwKHZhbHVlKVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHBsYXlSb3V0ZXNPYmplY3Rba2V5XSA9IHt9ICB1bmxlc3Mga2V5IG9mIHBsYXlSb3V0ZXNPYmplY3RcbiAgICAgICAgICAgIGFkZFJvdXRlcyhwbGF5Um91dGVzT2JqZWN0W2tleV0sIHZhbHVlKVxuICAgICAgICByZXR1cm5cbiAgICAgICkocGxheVJvdXRlcyA9IHt9LCBAanNSb3V0ZXMpXG4gICAgICBwbGF5Um91dGVzXG4gIF1cbiAgcmV0dXJuXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2VydmljZXMvcGxheVJvdXRlcy5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmICghZ2xvYmFsLmRvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQW5ndWxhci5leHRlbmRzIHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWw7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL3dpbmRvdy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLnNlcnZpY2VzLnNlYXJjaEZvcm0nLCBbXVxuXG4uZmFjdG9yeSAnJHNlYXJjaEZvcm0nLCBbLT4gKG9wdGlvbnMpIC0+XG5cbiAgY2xhc3MgU2VhcmNoRm9ybVxuICAgIGNvbnN0cnVjdG9yOiAoQG9wdGlvbnMpIC0+XG4gICAgICBpZiBhbmd1bGFyLmlzRnVuY3Rpb24gQG9wdGlvbnNcbiAgICAgICAgQG9wdGlvbnMgPSBhY3Rpb246IEBvcHRpb25zXG4gICAgICBAb3B0aW9ucyA9IGFuZ3VsYXIuZXh0ZW5kKFxuICAgICAgICBkZWZhdWx0czoge31cbiAgICAgICAgcHJlU3VibWl0OiAoZm9ybSwgZmlsdGVycywgdW5maWx0ZXJzKSAtPlxuICAgICAgICBwcmVSZXNldDogKGZvcm0pIC0+XG4gICAgICAgIHN1Ym1pdDogKGZvcm0sIGZpbHRlcnMsIHVuZmlsdGVycykgLT5cbiAgICAgICAgcmVzZXQ6IChmb3JtKSAtPlxuICAgICAgICBhY3Rpb246IChmb3JtKSAtPlxuICAgICAgICAjdHJhbnNmb3JtOiAoa2V5LCB2YWx1ZSkgLT4gdmFsdWVcbiAgICAgICwgQG9wdGlvbnMpXG5cbiAgICAgIEBjdXJyZW50ID0gYW5ndWxhci5jb3B5KEBvcHRpb25zLmRlZmF1bHRzKSBvciB7fVxuICAgICAgQGZvcm0gPSBhbmd1bGFyLmNvcHkoQG9wdGlvbnMuZGVmYXVsdHMpIG9yIHt9XG5cbiAgICBpc1ByaXN0aW5lOiAtPiBhbmd1bGFyLmVxdWFscyhAY3VycmVudCwgQGZvcm0pXG4gICAgaXNEaXJ0eTogLT4gbm90IEBpc1ByaXN0aW5lKClcbiAgICBpc0NoYW5nZWQ6IC0+IG5vdCBhbmd1bGFyLmVxdWFscyhAY3VycmVudCwgQG9wdGlvbnMuZGVmYXVsdHMpXG5cbiAgICBzdWJtaXQ6IChmb3JtLCBmaWx0ZXJzLCB1bmZpbHRlcnMpIC0+XG4gICAgICBpZiBAb3B0aW9ucy5wcmVTdWJtaXQ/KGZvcm0sIGZpbHRlcnMsIHVuZmlsdGVycykgaXNudCBmYWxzZVxuICAgICAgICBpZiBmaWx0ZXJzP1xuICAgICAgICAgIGlzRmlsdGVyZWQgPSAoW2tleSwgdmFsdWVdICBmb3Iga2V5LCB2YWx1ZSBvZiBmaWx0ZXJzIG9yIHt9KS5ldmVyeSAoa2V5V2l0aFZhbHVlKSA9PlxuICAgICAgICAgICAgW2tleSwgdmFsdWVdID0ga2V5V2l0aFZhbHVlXG4gICAgICAgICAgICBhbmd1bGFyLmVxdWFscyhAZm9ybVtrZXldLCB2YWx1ZSwgdHJ1ZSlcbiAgICAgICAgICBhbmd1bGFyLmV4dGVuZChAZm9ybSwgYW5ndWxhci5jb3B5KGlmIGlzRmlsdGVyZWQgdGhlbiB1bmZpbHRlcnMgZWxzZSBmaWx0ZXJzKSlcbiAgICAgICAgQGN1cnJlbnQgPSBhbmd1bGFyLmNvcHkoQGZvcm0pXG4gICAgICAgIEBvcHRpb25zLnN1Ym1pdD8oZm9ybSwgZmlsdGVycywgdW5maWx0ZXJzKVxuICAgICAgICBAb3B0aW9ucy5hY3Rpb24/KGZvcm0pXG4gICAgICBAXG5cbiAgICByZXNldDogKGZvcm0pIC0+XG4gICAgICBpZiBAb3B0aW9ucy5wcmVSZXNldD8oZm9ybSkgaXNudCBmYWxzZVxuICAgICAgICBmb3JtPy4kc2V0UHJpc3RpbmU/KClcbiAgICAgICAgQGN1cnJlbnQgPSBhbmd1bGFyLmNvcHkoQG9wdGlvbnMuZGVmYXVsdHMpIG9yIHt9XG4gICAgICAgIEBmb3JtID0gYW5ndWxhci5jb3B5KEBvcHRpb25zLmRlZmF1bHRzKSBvciB7fVxuICAgICAgICBAb3B0aW9ucy5yZXNldD8oZm9ybSlcbiAgICAgICAgQG9wdGlvbnMuYWN0aW9uPyhmb3JtKVxuICAgICAgQFxuXG4gICAgcGFyYW1zOiAocmVmcmVzaCwgZGVmYXVsdHMpIC0+XG4gICAgICBbZGVmYXVsdHMsIHJlZnJlc2hdID0gW3JlZnJlc2gsIGZhbHNlXSAgaWYgYW5ndWxhci5pc09iamVjdCByZWZyZXNoXG5cbiAgICAgIHBhcmFtcyA9IGlmIHJlZnJlc2ggaXMgdHJ1ZVxuICAgICAgICBhbmd1bGFyLmNvcHkoQGN1cnJlbnQpXG4gICAgICBlbHNlXG4gICAgICAgIGFuZ3VsYXIuY29weShAZm9ybSA9IGFuZ3VsYXIuY29weShAY3VycmVudCkpXG5cbiAgICAgIGZvciBrZXkgb2YgQG9wdGlvbnMuZGVmYXVsdHNcbiAgICAgICAgcGFyYW1zW2tleV0gPSBwYXJhbXNba2V5XS5maWx0ZXIoKGEpIC0+ICEhYSkgIGlmIGFuZ3VsYXIuaXNBcnJheSBwYXJhbXNba2V5XVxuXG4gICAgICBwYXJhbXMgPSBhbmd1bGFyLmV4dGVuZCBwYXJhbXMsIGFuZ3VsYXIuY29weShkZWZhdWx0cylcblxuICAgICAgaWYgYW5ndWxhci5pc0Z1bmN0aW9uIEBvcHRpb25zLnRyYW5zZm9ybVxuICAgICAgICBwYXJhbXNba2V5XSA9IEBvcHRpb25zLnRyYW5zZm9ybShrZXksIHZhbHVlKSAgZm9yIGtleSwgdmFsdWUgb2YgcGFyYW1zXG5cbiAgICAgIHBhcmFtc1xuXG4gIG5ldyBTZWFyY2hGb3JtKG9wdGlvbnMpXG5dXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zZXJ2aWNlcy9zZWFyY2hGb3JtLmNvZmZlZVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=