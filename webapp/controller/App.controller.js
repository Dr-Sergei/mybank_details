sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.mybankdetails.controller.App", {
            onInit: function () {

                // debugger
                // ===================if its ru create a Model==========================================================
                var appLang;
                if (navigator.language == 'ru') {
                    appLang = "i18n_ru;"
                } else {
                    appLang = "i18n;"
                }
                var i18nModel = this.getOwnerComponent().getModel(appLang);
                this.getOwnerComponent().setModel(i18nModel, "i18n");
            },
            // ===================OPEN THE DIAOLOG WINDOW==========================================================
            onOpenBankDetails: function () {
                //create dialog lazy

                if (!this.moreBankDetails) {//cheking if Bank Details are loaded
                    this.moreBankDetails = this.loadFragment(
                        {
                            name: "com.sap.mybankdetails.view.fragments.MoreDetails" //creating the dialog window
                        }
                    )
                }
                this.moreBankDetails.then(function (oDilog) {
                    oDilog.open(); //open the diolog window
                })

            },
            // =====================CLOSE THE DIAOLOG WINDOW=========================================================

            onCloseBankDetails: function () {
                this.byId("moreBankDetails").close();
            }
        });
    });
