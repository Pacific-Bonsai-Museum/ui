/*
Copyright 2009 University of Toronto
Copyright 2009 University of Cambridge

Licensed under the Educational Community License (ECL), Version 2.0. 
You may not use this file except in compliance with this License.

You may obtain a copy of the ECL 2.0 License at
https://source.collectionspace.org/collection-space/LICENSE.txt
*/

/*global jQuery, window, cspace*/

var demo = demo || {};

(function ($) {

    demo.setup = function () {
        var csid = cspace.util.getUrlParameter("csid");
		var isLocal = cspace.util.isLocal();
        var oiOpts = {
            alternateFields: ["acquReferenceNum"],
            uiSpecUrl: isLocal ? "./schemas/acquisition/schema.json" : "../../chain/acquisition/schema",
            templates: {
                body: {
                    url: "../html/acquisitionTemplate.html",
                    id: "csc-acquisition-template"
                }
            }
        };
        if (csid) {
            oiOpts.csid = csid;
        }
        if (isLocal) {
            oiOpts.dataContext = cspace.util.setupTestDataContext("acquisition");
        }
        var acquisition = cspace.dataEntry(".csc-acquisition-container", oiOpts);
    };
    
})(jQuery);
