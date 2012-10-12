// vue.js - Mike Simmonds - https://github.com/simmo/vue

Object.prototype.each = function(callback) {
  if (this == null) return;
  for (var i=0;i<this.length;i++) callback.apply(this[i], [i, this[i]]);
  return this;
};
String.prototype.repeat = function(num) {
  return new Array(num + 1).join(this);
};

var vue = {
  _initalized: false, _listeners: [], _timer: false, _sheets: 0, _rules: 0,
  _handelQuery: function(query) {
    clearTimeout(this._timer);
    this._timer = setTimeout(function() { console.log("* VUE: " + (query.matches !== false ? '+' : '-') + ' ' + query.media); }, 100);
  },
  _addQuery: function(query) {
    var listener_key = this._listeners.length;
    this._listeners[listener_key] = window.matchMedia(query);
    this._listeners[listener_key].addListener(this._handelQuery);
  },
  report: function(name) {
    var new_line = "\n  ";
    
    if (!this._initalized) {
      console.error('Vue reports can only be run once Vue has been initalized. Please run: vue.init();');
      return this;
    }
    
    var header = function(text) {
      return "\n" + new_line + text + new_line + '-'.repeat(text.length);
    };
    var msg = "* VUE: Report";
    
    switch (name) {
      case 'overview':
      
      msg += header('Overview');
      msg += new_line + 'Vue found ' + this._sheets + ' stylesheet' + (this._sheets !== 1 ? 's' : '') + ' with ' + this._rules + ' @media rule' + (this._rules !== 1 ? 's' : '') + '.';
      msg += header('Current Status');
      this._listeners.each(function(i, query) { msg += new_line + (query.matches !== false ? '+' : '-') + ' ' + query.media; });
      
      console.log(msg + "\n\n");
      
      break;
      default: console.error('ERROR: Report "' + report + '" not found.'); break;
    }
    
    return this;
  },
  init: function() {
    var self = this;
    
    document.styleSheets.each(function(i, sheet) {
      self._sheets++;
      sheet.cssRules.each(function(i, rule) {
        if (rule.type === 4) {
          self._rules++;
          rule.media.each(function(i, media) { self._addQuery(media); });
        }
      });
    });
    
    this._initalized = true;
    
    console.log('* VUE: Initalized and listening for media query changes...');
    
    this.report('overview');
    
    return this;
  }
};

window.onload = vue.init();
