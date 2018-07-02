sap.ui.define([
	"sap/ui/base/ManagedObject"
], function (ManagedObject) {
	"use strict";

	return ManagedObject.extend("sap.ui.sd.lib.Wechat", {

		constructor : function (oController) {
            this._server = 'http://www.chengdusa.com';
			// this._server = 'http://localhost:3000';
			this._oController = oController;
		},

		exit : function () {
			delete this._server;
		},

		oAuth: function (code,callback) {
			jQuery.ajax({
				type: 'POST',
				url: this._server + "/sign/open-id",
				data: {Code: code},
				success: function (req) {
					if (!req.errorcode) {
						callback(req);
					}
				},
				dataType: 'json'
			  });
		},

		bindUser: function (data) {
			jQuery.ajax({
				type: "POST",
				url: this._server + "/user/bind",
				data: data,
				success: function(req){
					
				},
				dataType: 'json'
			});
		},

		createOrder: function (data) {
			jQuery.ajax({
				type: "POST",
				url: this._server + "/order/create",
				data: data,
				success: function(req){
					
				},
				dataType: 'json'
			});
		}
	});

});