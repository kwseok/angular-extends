(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"), require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery", "angular"], factory);
	else if(typeof exports === 'object')
		exports["angular"] = factory(require("jquery"), require("angular"));
	else
		root["angular"] = factory(root["jQuery"], root["angular"]);
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
	
	//TODO: should be coding...
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	__webpack_require__(6);
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	angular.module('ngExtends.directives', ['ngExtends.directives.changeTagsTo', 'ngExtends.directives.changeTagsToArray', 'ngExtends.directives.countTo']);
	
	exports['default'] = angular.module('ngExtends', ['ngExtends.directives']);
	module.exports = exports['default'];
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
	    throw new Error("jQuery.extends requires a jQuery");
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
	module.exports = angular.module('ngExtends.directives.changeTagsTo', []).constant('extChangeTagsToConfig', {
	  seperator: '|'
	}).directive('extChangeTagsTo', [
	  'extChangeTagsToConfig', '$parse', 'uniqueFilter', function(extChangeTagsToConfig, $parse, uniqueFilter) {
	    return {
	      restrict: 'AC',
	      require: 'tagsInput',
	      link: function(scope, element, attrs) {
	        var getModel, getTo, seperator, setModel, setTo;
	        getModel = $parse(attrs.ngModel);
	        setModel = getModel.assign;
	        getTo = $parse(attrs.changeTagsTo);
	        setTo = getTo.assign;
	        seperator = extChangeTagsToConfig.seperator;
	        attrs.$observe('extChangeTagsToSeperator', function(value) {
	          return seperator = value || extChangeTagsToConfig.seperator;
	        });
	        scope.$watch(getTo, function(value) {
	          var ref, tag, tags;
	          tags = uniqueFilter(value != null ? typeof value.split === "function" ? (ref = value.split(seperator)) != null ? typeof ref.filter === "function" ? ref.filter(function(a) {
	            return !!a;
	          }) : void 0 : void 0 : void 0 : void 0) || [];
	          return setModel(scope, (function() {
	            var i, len, results;
	            results = [];
	            for (i = 0, len = tags.length; i < len; i++) {
	              tag = tags[i];
	              results.push({
	                text: tag
	              });
	            }
	            return results;
	          })());
	        });
	        scope.$watchCollection(function() {
	          var i, len, ref, results, tag;
	          ref = getModel(scope) || [];
	          results = [];
	          for (i = 0, len = ref.length; i < len; i++) {
	            tag = ref[i];
	            results.push(tag.text);
	          }
	          return results;
	        }, function(tags) {
	          var tag;
	          if ((tags != null) && (setTo != null)) {
	            return setTo(scope, ((function() {
	              var i, len, ref, results;
	              ref = tags || [];
	              results = [];
	              for (i = 0, len = ref.length; i < len; i++) {
	                tag = ref[i];
	                results.push(tag);
	              }
	              return results;
	            })()).join(seperator));
	          }
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

	/* WEBPACK VAR INJECTION */(function(angular, $) {'use strict';
	module.exports = angular.module('ngExtends.directives.changeTagsToArray', []).directive('extChangeTagsToArray', [
	  '$parse', 'uniqueFilter', function($parse, uniqueFilter) {
	    return {
	      restrict: 'AC',
	      require: 'tagsInput',
	      link: function(scope, element, attrs) {
	        var getModel, getTo, setModel, setTo;
	        getModel = $parse(attrs.ngModel);
	        setModel = getModel.assign;
	        getTo = $parse(attrs.changeTagsToArray);
	        setTo = getTo.assign;
	        scope.$watch(getTo, function(value) {
	          var tag;
	          return setModel(scope, (function() {
	            var i, len, ref, results;
	            ref = uniqueFilter($.makeArray(value));
	            results = [];
	            for (i = 0, len = ref.length; i < len; i++) {
	              tag = ref[i];
	              results.push({
	                text: tag
	              });
	            }
	            return results;
	          })());
	        });
	        scope.$watchCollection(function() {
	          var i, len, ref, results, tag;
	          ref = getModel(scope) || [];
	          results = [];
	          for (i = 0, len = ref.length; i < len; i++) {
	            tag = ref[i];
	            results.push(tag.text);
	          }
	          return results;
	        }, function(tags) {
	          var tag;
	          if ((tags != null) && (setTo != null)) {
	            return setTo(scope, (function() {
	              var i, len, ref, results;
	              ref = tags || [];
	              results = [];
	              for (i = 0, len = ref.length; i < len; i++) {
	                tag = ref[i];
	                results.push(tag);
	              }
	              return results;
	            })());
	          }
	        });
	        return void 0;
	      }
	    };
	  }
	]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(2)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {'use strict';
	module.exports = angular.module('ngExtends.directives.countTo', []).directive('extCountTo', [
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
	          countTo = parseInt(attrs.countTo) || 0;
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
	        attrs.$observe('countTo', function(val) {
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlZDRiN2Q4NDNhYzhhNzAxNjAzOSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvYW5ndWxhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFycy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9jaGFuZ2VUYWdzVG8uY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL2NoYW5nZVRhZ3NUb0FycmF5LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9jb3VudFRvLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0EsNERBQVksQ0FBQzs7Ozs7Ozs7cUJBSU4sQ0FBa0M7O3FCQUNsQyxDQUF1Qzs7cUJBQ3ZDLENBQTZCOztBQUVw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LElBQTZCLElBQTlCLEtBQXVDO1dBRWxELFFBQVEsSUFBSSxDQUFDLElBQUwsQ0FBVSxXQUFXLGVBQXJCO1dBQ1IsWUFBWSxDQUFDLFVBQVUsS0FBSyxDQUFDLEtBQWpCLElBQTBCO2tCQUN0QyxNQUFNLEtBQUssQ0FBQztTQVZGO1NBWVosT0FBTztrQkFDTCxLQUFLLENBQUMsUUFBTixHQUFpQixTQUFTO2FBQ3hCLE9BQU87YUFDUDthQUNBLElBQUcsUUFBUSxLQUFYO2VBQ0UsUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsS0FBSyxDQUFDLFFBQXRCO2VBQ0EsTUFBTTtzQkFDTixJQUFJLENBQUMsV0FBTCxHQUFtQixRQUhyQjtjQUFBO2VBS0UsSUFBSSxDQUFDLFdBQUwsR0FBbUIsSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYO3NCQUNuQixPQU5GOztXQUh3QixDQUFULEVBVWYsZUFWZTtTQURaO1NBYVAsUUFBUTtXQUNOLElBQW9DLHNCQUFwQzthQUFBLFFBQVEsQ0FBQyxNQUFULENBQWdCLEtBQUssQ0FBQyxRQUF0Qjs7V0FDQTtrQkFDQTtTQUhNO1NBS1IsS0FBSyxDQUFDLFFBQU4sQ0FBZSxTQUFmLEVBQTBCLFNBQUMsR0FBRDtXQUFTLElBQVksV0FBWjtvQkFBQTs7U0FBVCxDQUExQjtTQUNBLEtBQUssQ0FBQyxRQUFOLENBQWUsT0FBZixFQUF3QjtrQkFBRztTQUFILENBQXhCO2dCQUVBO09BMUNJLENBRk47O0dBRG9DLENBQWI7RUFGUiIsImZpbGUiOiJhbmd1bGFyLWV4dGVuZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIiksIHJlcXVpcmUoXCJhbmd1bGFyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImpxdWVyeVwiLCBcImFuZ3VsYXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYW5ndWxhclwiXSA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcImFuZ3VsYXJcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImFuZ3VsYXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJhbmd1bGFyXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZWQ0YjdkODQzYWM4YTcwMTYwMzlcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbi8vVE9ETzogc2hvdWxkIGJlIGNvZGluZy4uLlxuXG5pbXBvcnQgJy4vZGlyZWN0aXZlcy9jaGFuZ2VUYWdzVG8uY29mZmVlJ1xuaW1wb3J0ICcuL2RpcmVjdGl2ZXMvY2hhbmdlVGFnc1RvQXJyYXkuY29mZmVlJ1xuaW1wb3J0ICcuL2RpcmVjdGl2ZXMvY291bnRUby5jb2ZmZWUnXG5cbmFuZ3VsYXIubW9kdWxlKCduZ0V4dGVuZHMuZGlyZWN0aXZlcycsIFtcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMuY2hhbmdlVGFnc1RvJyxcbiAgICAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMuY2hhbmdlVGFnc1RvQXJyYXknLFxuICAgICduZ0V4dGVuZHMuZGlyZWN0aXZlcy5jb3VudFRvJ1xuXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFuZ3VsYXIubW9kdWxlKCduZ0V4dGVuZHMnLCBbXG4gICAgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzJ1xuXSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcblxuaWYgKCEkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQW5ndWxhci5leHRlbmRzIHJlcXVpcmVzIGEgQW5ndWxhckpTXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL2FuZ3VsYXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuaWYgKCEkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5LmV4dGVuZHMgcmVxdWlyZXMgYSBqUXVlcnlcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gJDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvanF1ZXJ5LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9XG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYW5ndWxhclwiXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmNoYW5nZVRhZ3NUbycsIFtdXG5cbi5jb25zdGFudCAnZXh0Q2hhbmdlVGFnc1RvQ29uZmlnJyxcbiAgc2VwZXJhdG9yOiAnfCdcblxuLmRpcmVjdGl2ZSAnZXh0Q2hhbmdlVGFnc1RvJywgW1xuICAnZXh0Q2hhbmdlVGFnc1RvQ29uZmlnJywgJyRwYXJzZScsICd1bmlxdWVGaWx0ZXInXG4gIChleHRDaGFuZ2VUYWdzVG9Db25maWcsICRwYXJzZSwgdW5pcXVlRmlsdGVyKSAtPlxuICAgIHJlc3RyaWN0OiAnQUMnXG4gICAgcmVxdWlyZTogJ3RhZ3NJbnB1dCdcbiAgICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgICAgZ2V0TW9kZWwgPSAkcGFyc2UoYXR0cnMubmdNb2RlbClcbiAgICAgIHNldE1vZGVsID0gZ2V0TW9kZWwuYXNzaWduXG4gICAgICBnZXRUbyA9ICRwYXJzZShhdHRycy5jaGFuZ2VUYWdzVG8pXG4gICAgICBzZXRUbyA9IGdldFRvLmFzc2lnblxuXG4gICAgICBzZXBlcmF0b3IgPSBleHRDaGFuZ2VUYWdzVG9Db25maWcuc2VwZXJhdG9yXG4gICAgICBhdHRycy4kb2JzZXJ2ZSAnZXh0Q2hhbmdlVGFnc1RvU2VwZXJhdG9yJywgKHZhbHVlKSAtPlxuICAgICAgICBzZXBlcmF0b3IgPSB2YWx1ZSBvciBleHRDaGFuZ2VUYWdzVG9Db25maWcuc2VwZXJhdG9yXG5cbiAgICAgIHNjb3BlLiR3YXRjaCBnZXRUbywgKHZhbHVlKSAtPlxuICAgICAgICB0YWdzID0gdW5pcXVlRmlsdGVyKHZhbHVlPy5zcGxpdD8oc2VwZXJhdG9yKT8uZmlsdGVyPygoYSkgLT4gISFhKSkgb3IgW11cbiAgICAgICAgc2V0TW9kZWwoc2NvcGUsIHRleHQ6IHRhZyAgZm9yIHRhZyBpbiB0YWdzKVxuXG4gICAgICBzY29wZS4kd2F0Y2hDb2xsZWN0aW9uIC0+XG4gICAgICAgIHRhZy50ZXh0ICBmb3IgdGFnIGluIGdldE1vZGVsKHNjb3BlKSBvciBbXVxuICAgICAgLCAodGFncykgLT4gaWYgdGFncz8gYW5kIHNldFRvP1xuICAgICAgICBzZXRUbyhzY29wZSwgKHRhZyAgZm9yIHRhZyBpbiB0YWdzIG9yIFtdKS5qb2luKHNlcGVyYXRvcikpXG5cbiAgICAgIHVuZGVmaW5lZFxuXVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGlyZWN0aXZlcy9jaGFuZ2VUYWdzVG8uY29mZmVlXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUgJ25nRXh0ZW5kcy5kaXJlY3RpdmVzLmNoYW5nZVRhZ3NUb0FycmF5JywgW11cblxuLmRpcmVjdGl2ZSAnZXh0Q2hhbmdlVGFnc1RvQXJyYXknLCBbXG4gICckcGFyc2UnLCAndW5pcXVlRmlsdGVyJ1xuICAoJHBhcnNlLCB1bmlxdWVGaWx0ZXIpIC0+XG4gICAgcmVzdHJpY3Q6ICdBQydcbiAgICByZXF1aXJlOiAndGFnc0lucHV0J1xuICAgIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpIC0+XG4gICAgICBnZXRNb2RlbCA9ICRwYXJzZShhdHRycy5uZ01vZGVsKVxuICAgICAgc2V0TW9kZWwgPSBnZXRNb2RlbC5hc3NpZ25cbiAgICAgIGdldFRvID0gJHBhcnNlKGF0dHJzLmNoYW5nZVRhZ3NUb0FycmF5KVxuICAgICAgc2V0VG8gPSBnZXRUby5hc3NpZ25cblxuICAgICAgc2NvcGUuJHdhdGNoIGdldFRvLCAodmFsdWUpIC0+XG4gICAgICAgIHNldE1vZGVsKHNjb3BlLCB0ZXh0OiB0YWcgIGZvciB0YWcgaW4gdW5pcXVlRmlsdGVyKCQubWFrZUFycmF5KHZhbHVlKSkpXG5cbiAgICAgIHNjb3BlLiR3YXRjaENvbGxlY3Rpb24gLT5cbiAgICAgICAgdGFnLnRleHQgIGZvciB0YWcgaW4gZ2V0TW9kZWwoc2NvcGUpIG9yIFtdXG4gICAgICAsICh0YWdzKSAtPiBpZiB0YWdzPyBhbmQgc2V0VG8/XG4gICAgICAgIHNldFRvKHNjb3BlLCB0YWcgIGZvciB0YWcgaW4gdGFncyBvciBbXSlcblxuICAgICAgdW5kZWZpbmVkXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGlyZWN0aXZlcy9jaGFuZ2VUYWdzVG9BcnJheS5jb2ZmZWVcbiAqKi8iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSAnbmdFeHRlbmRzLmRpcmVjdGl2ZXMuY291bnRUbycsIFtdXG5cbi5kaXJlY3RpdmUgJ2V4dENvdW50VG8nLCBbJyR0aW1lb3V0JywgKCR0aW1lb3V0KSAtPlxuICByZXBsYWNlOiBmYWxzZVxuICBzY29wZTogdHJ1ZVxuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgIGVsZW0gPSBlbGVtZW50WzBdXG4gICAgbnVtID0gbnVsbFxuICAgIHJlZnJlc2hJbnRlcnZhbCA9IG51bGxcbiAgICBzdGVwcyA9IG51bGxcbiAgICBzdGVwID0gbnVsbFxuICAgIGNvdW50VG8gPSBudWxsXG4gICAgaW5jcmVtZW50ID0gbnVsbFxuXG4gICAgY2FsY3VsYXRlID0gLT5cbiAgICAgIHJlZnJlc2hJbnRlcnZhbCA9IDMwXG4gICAgICBzdGVwID0gMFxuICAgICAgc2NvcGUudGltb3V0SWQgPSBudWxsXG4gICAgICBjb3VudFRvID0gcGFyc2VJbnQoYXR0cnMuY291bnRUbykgfHwgMFxuICAgICAgc2NvcGUudmFsdWUgPSBwYXJzZUludChhdHRycy52YWx1ZSwgMTApIHx8IDBcbiAgICAgIGR1cmF0aW9uID0gKHBhcnNlRmxvYXQoYXR0cnMuZHVyYXRpb24pICogMTAwMCkgfHwgMFxuXG4gICAgICBzdGVwcyA9IE1hdGguY2VpbChkdXJhdGlvbiAvIHJlZnJlc2hJbnRlcnZhbClcbiAgICAgIGluY3JlbWVudCA9IChjb3VudFRvIC0gc2NvcGUudmFsdWUpIC8gc3RlcHNcbiAgICAgIG51bSA9IHNjb3BlLnZhbHVlXG5cbiAgICB0aWNrID0gLT5cbiAgICAgIHNjb3BlLnRpbW91dElkID0gJHRpbWVvdXQoLT5cbiAgICAgICAgbnVtICs9IGluY3JlbWVudFxuICAgICAgICBzdGVwKytcbiAgICAgICAgaWYgc3RlcCA+PSBzdGVwc1xuICAgICAgICAgICR0aW1lb3V0LmNhbmNlbChzY29wZS50aW1vdXRJZClcbiAgICAgICAgICBudW0gPSBjb3VudFRvXG4gICAgICAgICAgZWxlbS50ZXh0Q29udGVudCA9IGNvdW50VG9cbiAgICAgICAgZWxzZVxuICAgICAgICAgIGVsZW0udGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKG51bSlcbiAgICAgICAgICB0aWNrKClcbiAgICAgICwgcmVmcmVzaEludGVydmFsKVxuXG4gICAgc3RhcnQgPSAtPlxuICAgICAgJHRpbWVvdXQuY2FuY2VsKHNjb3BlLnRpbW91dElkKSAgaWYgc2NvcGUudGltb3V0SWQ/XG4gICAgICBjYWxjdWxhdGUoKVxuICAgICAgdGljaygpXG5cbiAgICBhdHRycy4kb2JzZXJ2ZSAnY291bnRUbycsICh2YWwpIC0+IHN0YXJ0KCkgIGlmIHZhbD9cbiAgICBhdHRycy4kb2JzZXJ2ZSAndmFsdWUnLCAtPiBzdGFydCgpXG5cbiAgICB1bmRlZmluZWRcbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kaXJlY3RpdmVzL2NvdW50VG8uY29mZmVlXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==