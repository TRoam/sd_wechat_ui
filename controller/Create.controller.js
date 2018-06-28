sap.ui.define([
    'sap/m/MessageBox',
    'sap/m/MessageToast',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/SimpleType',
    'sap/ui/model/ValidateException',
    'sap/ui/model/json/JSONModel'
], function (MessageBox, MessageToast, Controller, SimpleType, ValidateException, JSONModel) {
    "use strict";
    return Controller.extend("sap.ui.sd.controller.Create", {
        handleValueHelp : function (oController) {
            this.inputId = oController.oSource.sId;
            // create value help dialog
            if (!this._valueHelpDialog) {
                this._valueHelpDialog = sap.ui.xmlfragment(
                    "sap.ui.sd.view.OrderType",
                    this
                );
                this.getView().addDependent(this._valueHelpDialog);
            }

            // open value help dialog
            this._valueHelpDialog.open();
        },

        handleCustomerHelp: function(oController) {
            this.inputId = oController.oSource.sId;
            // create value help dialog
            if (!this._CustomerDialog) {
                this._CustomerDialog = sap.ui.xmlfragment(
                    "sap.ui.sd.view.Customer",
                    this
                );
                this.getView().addDependent(this._CustomerDialog);
            }

            // open value help dialog
            this._CustomerDialog.open();
        },

        onSubmit: function() {
             MessageToast.show("Sales order created successfully!");
        },

        _handleValueHelpSearch : function (evt) {
            var sValue = evt.getParameter("value");
            var oFilter = new Filter(
                "Name",
                sap.ui.model.FilterOperator.Contains, sValue
            );
            evt.getSource().getBinding("items").filter([oFilter]);
        },

        _handleValueHelpClose : function (evt) {
            var oSelectedItem = evt.getParameter("selectedItem");
            if (oSelectedItem) {
                var productInput = this.byId(this.inputId);
                productInput.setValue(oSelectedItem.getTitle());
            }
            evt.getSource().getBinding("items").filter([]);
        }
    });
 });