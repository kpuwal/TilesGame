(function(exports){
  "use strict"

  function getData() {
    var information = Object.create(Data);
    information._init();
    return information;
  }

  var Data = {
    _init: function() {
      this.keys = [];
      this.values = [];
      this.stats = document.getElementById('stats').value;
      this.searched = document.getElementById('searched').value;
      this.data = this._searchedData();
      this.organised = this._searchedOrganised();
    },

    _parse: function(object) {
      return JSON.parse(object);
    },

    _searchedData: function() {
      this.searched = this._parse(this.searched);
      return this.searched;
    },

    _searchedOrganised: function() {
      for (var i in this.data) {
        this.values.push(Object.values(this.data[i]));
        this.keys.push(Object.keys(this.data[i]));
      }
    },

    byKeys: function() {
      var arr = [];
      for (var i in this.data) {
        arr.push(Object.keys(this.data[i]).length);
      }
      return arr;
    },

    canvasHeight: function() {
      this.stats = this._parse(this.stats);
      return this.stats[2];
    },

    canvasWidth: function() {
      var data = this.byKeys();
      return data.sort(function(a, b){ return b-a; })[0];
    },

    values: function() {
      return this.values;
    },

    keys: function() {
      return this.keys;
    }
  }
  exports.getData = getData;
})(this);
