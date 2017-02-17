<<<<<<< HEAD
try {
				var AG_onLoad = function(func) {
					if(document.readyState === "complete" || document.readyState === "interactive") func();
					else if(document.addEventListener) document.addEventListener("DOMContentLoaded", func);
					else if(document.attachEvent) document.attachEvent("DOMContentLoaded", func)
				};
				var AG_removeElementById = function(id) {
					var element = document.getElementById(id);
					if(element && element.parentNode) {
						element.parentNode.removeChild(element);
					}
				};
				var AG_removeElementBySelector = function(selector) {
					if(!document.querySelectorAll) {
						return;
					}
					var nodes = document.querySelectorAll(selector);
					if(nodes) {
						for(var i = 0; i < nodes.length; i++) {
							if(nodes[i] && nodes[i].parentNode) {
								nodes[i].parentNode.removeChild(nodes[i]);
							}
						}
					}
				};
				var AG_each = function(selector, fn) {
					if(!document.querySelectorAll) return;
					var elements = document.querySelectorAll(selector);
					for(var i = 0; i < elements.length; i++) {
						fn(elements[i]);
					};
				};
				var AG_removeParent = function(el, fn) {
					while(el && el.parentNode) {
						if(fn(el)) {
							el.parentNode.removeChild(el);
							return;
						}
						el = el.parentNode;
					}
				};
				navigator.getBattery = undefined;
				(function() {
					window.Ya = window.Ya || {};
					window.Ya.Metrika = function() {
						var noop = function() {};
						this.addFileExtension = noop;
						this.extLink = noop;
						this.file = noop;
						this.hit = noop;
						this.notBounce = noop;
						this.params = noop;
						this.reachGoal = noop;
						this.replacePhones = noop;
						this.clickmap = noop;
						this.trackLinks = noop;
					};
				})();
				var _gaq = [];
				var _gat = {
					_getTracker: function() {
						return {
							_initData: function() {},
							_trackPageview: function() {},
							_trackEvent: function() {},
							_setAllowLinker: function() {},
							_setCustomVar: function() {}
						}
					},
					_createTracker: function() {
						return this._getTracker();
					},
					_anonymizeIp: function() {}
				};

				function urchinTracker() {};
			} catch(ex) {
				console.error('Error executing AG js: ' + ex);
=======
try {
				var AG_onLoad = function(func) {
					if(document.readyState === "complete" || document.readyState === "interactive") func();
					else if(document.addEventListener) document.addEventListener("DOMContentLoaded", func);
					else if(document.attachEvent) document.attachEvent("DOMContentLoaded", func)
				};
				var AG_removeElementById = function(id) {
					var element = document.getElementById(id);
					if(element && element.parentNode) {
						element.parentNode.removeChild(element);
					}
				};
				var AG_removeElementBySelector = function(selector) {
					if(!document.querySelectorAll) {
						return;
					}
					var nodes = document.querySelectorAll(selector);
					if(nodes) {
						for(var i = 0; i < nodes.length; i++) {
							if(nodes[i] && nodes[i].parentNode) {
								nodes[i].parentNode.removeChild(nodes[i]);
							}
						}
					}
				};
				var AG_each = function(selector, fn) {
					if(!document.querySelectorAll) return;
					var elements = document.querySelectorAll(selector);
					for(var i = 0; i < elements.length; i++) {
						fn(elements[i]);
					};
				};
				var AG_removeParent = function(el, fn) {
					while(el && el.parentNode) {
						if(fn(el)) {
							el.parentNode.removeChild(el);
							return;
						}
						el = el.parentNode;
					}
				};
				navigator.getBattery = undefined;
				(function() {
					window.Ya = window.Ya || {};
					window.Ya.Metrika = function() {
						var noop = function() {};
						this.addFileExtension = noop;
						this.extLink = noop;
						this.file = noop;
						this.hit = noop;
						this.notBounce = noop;
						this.params = noop;
						this.reachGoal = noop;
						this.replacePhones = noop;
						this.clickmap = noop;
						this.trackLinks = noop;
					};
				})();
				var _gaq = [];
				var _gat = {
					_getTracker: function() {
						return {
							_initData: function() {},
							_trackPageview: function() {},
							_trackEvent: function() {},
							_setAllowLinker: function() {},
							_setCustomVar: function() {}
						}
					},
					_createTracker: function() {
						return this._getTracker();
					},
					_anonymizeIp: function() {}
				};

				function urchinTracker() {};
			} catch(ex) {
				console.error('Error executing AG js: ' + ex);
>>>>>>> dcc7485a3afe6ad910b4fa6b968c8b2e63a59166
			}