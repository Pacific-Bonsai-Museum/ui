/*
Copyright 2010 University of Toronto

Licensed under the Educational Community License (ECL), Version 2.0. 
You may not use this file except in compliance with this License.

You may obtain a copy of the ECL 2.0 License at
https://source.collectionspace.org/collection-space/LICENSE.txt
*/

/*global jQuery, window, cspace*/

cspace = cspace || {};

(function ($) {
    fluid.log("rolesSetup.js loaded");

    cspace.rolesSetup = function () {

        var rolesOpts = {
            uispec: "{pageBuilder}.uispec"
        };
        if (cspace.util.useLocalData()) {
            rolesOpts.recordType = "role/records/list.json";            
            rolesOpts.roleListEditor = {
                options: {
                    baseUrl: "data/",
                    dataContext: {
                        options: {
                            baseUrl: "data/",
                            fileExtension: ".json"
                        }
                    }
                }
            };       
        }
        var dependencies = {
            role: {
                funcName: "cspace.adminRoles",
                args: [".csc-roles-roleAdmin", rolesOpts]
            }
        };

        var options = {
            pageSpec: {
                header: {
                    href: "header.html",
                    templateSelector: ".csc-header-template",
                    targetSelector: ".csc-header-container"
                },
                footer: {
                    href: "footer.html",
                    templateSelector: ".csc-footer",
                    targetSelector: ".csc-footer-container"
                }
            },
            pageType: "role"
        };
        cspace.pageBuilder(dependencies, options);
    };
    
})(jQuery);

