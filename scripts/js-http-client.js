/**
 * XMLHttpRequest Client for Elastic.js
 * @author UsabilityDynamics
 */
(function () {
  'use strict';

  var

    root = this,
    ejs;

  if (typeof exports !== 'undefined') {
    ejs = exports;
  } else {
    if (root.ejs == null) {
      ejs = root.ejs = {};
    } else {
      ejs = root.ejs;
    }
  }

  /**
   *
   * @param {type} server
   * @returns {_L5.ejs.HttpClient.Anonym$0}
   */
  ejs.HttpClient = function ( server ) {
    var

      /**
       * options
       */
      options = {
        contentType: 'application/json'
      },

      /**
       * method to ensure the path always starts with a slash
       */
      getPath = function (path) {
        if (path.charAt(0) !== '/') {
          path = '/' + path;
        }

        return server + path;
      },

      /**
       * cross-browser xmlhttprequest init
       */
      getXmlHttp = function() {
        var xmlhttp;
        try {
          xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
          try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (E) {
            xmlhttp = false;
          }
        }
        if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
          xmlhttp = new XMLHttpRequest();
        }
        return xmlhttp;
      };

    /**
     * check that the server path does no end with a slash
     */
    if (server == null) {
      server = '';
    } else if (server.charAt(server.length - 1) === '/') {
      server = server.substring(0, server.length - 1);
    }

    return {
      /**
       *
       * @param {type} s
       * @returns {_L5.ejs.HttpClient.Anonym$0|_L5.ejs.HttpClient.Anonym$0.server}
       */
      server: function (s) {
        if (s == null) {
          return server;
        }

        if (s.charAt(s.length - 1) === '/') {
          server = s.substring(0, s.length - 1);
        } else {
          server = s;
        }

        return this;
      },

      /**
       *
       * @param {type} oKey
       * @param {type} oVal
       * @returns {module.exportsb.HttpClient.options|module.exportsw.HttpClient.options|root.ejs.HttpClient.options|exports.HttpClient.options|_L5.ejs.HttpClient.options|options}
       */
      option: function (oKey, oVal) {
        if (oKey == null) {
          return options;
        }

        if (oVal == null) {
          return options[oKey];
        }

        options[oKey] = oVal;
      },

      /**
       *
       * @param {type} path
       * @param {type} data
       * @param {type} successcb
       * @param {type} errorcb
       * @returns {unresolved}
       */
      get: function (path, data, successcb, errorcb) {
        var XHR = getXmlHttp();
        XHR.open('GET', getPath(path), true);
        XHR.setRequestHeader('Content-Type', options.contentType);
        XHR.onreadystatechange = function(e) {
          if ( e.target.readyState == 4 ) {
            if( e.target.status >= 200 && e.target.status < 300 || e.target.status === 304 ) {
              successcb(JSON.parse(e.target.response), e.target);
            } else {
              errorcb(JSON.parse(e.target.response), e.target);
            }
          }
        }
        return XHR.send(data);
      },

      /**
       *
       * @param {type} path
       * @param {type} data
       * @param {type} successcb
       * @param {type} errorcb
       * @returns {unresolved}
       */
      post: function (path, data, successcb, errorcb) {
        var XHR = getXmlHttp();
        XHR.open('POST', getPath(path), true);
        XHR.setRequestHeader('Content-Type', options.contentType);
        XHR.onreadystatechange = function(e) {
          if ( e.target.readyState == 4 ) {
            if( e.target.status >= 200 && e.target.status < 300 || e.target.status === 304 ) {
              successcb(JSON.parse(e.target.response), e.target);
            } else {
              errorcb(JSON.parse(e.target.response), e.target);
            }
          }
        }
        return XHR.send(data);
      },

      /**
       *
       * @param {type} path
       * @param {type} data
       * @param {type} successcb
       * @param {type} errorcb
       * @returns {unresolved}
       */
      put: function (path, data, successcb, errorcb) {
        var XHR = getXmlHttp();
        XHR.open('PUT', getPath(path), true);
        XHR.setRequestHeader('Content-Type', options.contentType);
        XHR.onreadystatechange = function(e) {
          if ( e.target.readyState == 4 ) {
            if( e.target.status >= 200 && e.target.status < 300 || e.target.status === 304 ) {
              successcb(JSON.parse(e.target.response), e.target);
            } else {
              errorcb(JSON.parse(e.target.response), e.target);
            }
          }
        }
        return XHR.send(data);
      },

      /**
       *
       * @param {type} path
       * @param {type} data
       * @param {type} successcb
       * @param {type} errorcb
       * @returns {unresolved}
       */
      del: function (path, data, successcb, errorcb) {
        var XHR = getXmlHttp();
        XHR.open('DELETE', getPath(path), true);
        XHR.setRequestHeader('Content-Type', options.contentType);
        XHR.onreadystatechange = function(e) {
          if ( e.target.readyState == 4 ) {
            if( e.target.status >= 200 && e.target.status < 300 || e.target.status === 304 ) {
              successcb(JSON.parse(e.target.response), e.target);
            } else {
              errorcb(JSON.parse(e.target.response), e.target);
            }
          }
        }
        return XHR.send(data);
      },

      /**
       *
       * @param {type} path
       * @param {type} data
       * @param {type} successcb
       * @param {type} errorcb
       * @returns {jqXHR}
       */
      head: function (path, data, successcb, errorcb) {
        var XHR = getXmlHttp();
        XHR.open('HEAD', getPath(path), true);
        XHR.setRequestHeader('Content-Type', options.contentType);
        XHR.onreadystatechange = function(e) {
          if ( e.target.readyState == 4 ) {
            if( e.target.status >= 200 && e.target.status < 300 || e.target.status === 304 ) {
              var headers = e.target.getAllResponseHeaders().split('\n'),
                resp = {},
                parts,
                i;

              for (i = 0; i < headers.length; i++) {
                parts = headers[i].split(':');
                if (parts.length !== 2) {
                  resp[parts[0]] = parts[1];
                }
              }

              if (successcb != null) {
                successcb(resp);
              }
            } else {
              errorcb(JSON.parse(e.target.response), e.target);
            }
          }
        }
        return XHR.send(data);
      }
    };
  };

}).call(this);