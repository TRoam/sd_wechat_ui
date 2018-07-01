sap.ui.define([
	"sap/ui/base/ManagedObject"
], function (ManagedObject) {
	"use strict";

	return ManagedObject.extend("sap.ui.sd.lib.Wechat", {

		constructor : function () {
			this._server = 'http://118.24.149.237';
		},

		exit : function () {
			delete this._server;
		},

		oAuth: function (code) {
			jQuery.ajax({
				type: 'POST',
				url: this._server + "/openId",
				data: {code: code},
				success: function (res) {
					debugger;
				},
				dataType: dataType
			  });
		} 
	});

});