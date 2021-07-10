"use strict";
exports.__esModule = true;
var addon_1 = require("./addon");
var stremio_addon_sdk_1 = require("stremio-addon-sdk");
addon_1["default"]().then(function (addonInterface) { return stremio_addon_sdk_1.serveHTTP(addonInterface, { port: +process.argv[2] || 8080 }); });
