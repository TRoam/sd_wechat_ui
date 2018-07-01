sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/sd/lib/Wechat"
 ], function (Controller, Wechat) {
    "use strict";
 
    return Controller.extend("sap.ui.sd.controller.Home", {
        onInit: function(){
           this.code = this.getUrlParam('code');
           this.state = this.getUrlParam('state');
           Wechat.oAuth(code);
        },

         getUrlParam: function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);  
            if (r != null) return unescape(r[2]); return null;
        }
    });
 
 });