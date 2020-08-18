"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var queue_com_protocol_1 = require("@iotize/device-client.js/protocol/impl/queue-com-protocol");
var format_helper_1 = require("@iotize/device-client.js/core/format/format-helper");
var rxjs_1 = require("rxjs");
var logger_1 = require("./logger");
var api_1 = require("@iotize/device-client.js/protocol/api");
var errors_1 = require("./errors");
var NFCComProtocol = (function (_super) {
    __extends(NFCComProtocol, _super);
    function NFCComProtocol(options) {
        if (options === void 0) { options = {
            connect: {
                timeout: 2000
            },
            disconnect: {
                timeout: 1000
            },
            send: {
                timeout: 1000
            }
        }; }
        var _this = _super.call(this) || this;
        _this.options = options;
        if (typeof nfc == undefined) {
            console.warn("NFC plugin has not been setup properly. Global variable NFC does not exist");
        }
        return _this;
    }
    NFCComProtocol.iOSProtocol = function () {
        return new NFCComProtocol({
            connect: {
                timeout: 10000
            },
            disconnect: {
                timeout: 1000
            },
            send: {
                timeout: 1000
            }
        });
    };
    NFCComProtocol.prototype._connect = function (options) {
        logger_1.debug('_connect', options);
        var connectPromise = nfc.connect("android.nfc.tech.NfcV", this.options.connect.timeout);
        return rxjs_1.from(connectPromise);
    };
    NFCComProtocol.prototype._disconnect = function (options) {
        return rxjs_1.from(nfc.close());
    };
    NFCComProtocol.prototype.write = function (data) {
        throw new Error("Method not implemented.");
    };
    NFCComProtocol.prototype.read = function () {
        throw new Error("Method not implemented.");
    };
    NFCComProtocol.prototype.send = function (data, options) {
        var _this = this;
        var promise = nfc
            .transceive(format_helper_1.FormatHelper.toHexString(data))
            .then(function (response) {
            if (typeof response != "string") {
                throw errors_1.NfcError.internalError("Internal error. Plugin should respond a hexadecimal string");
            }
            logger_1.debug('NFC plugin response: ', response);
            return format_helper_1.FormatHelper.hexStringToBuffer(response);
        })
            .catch(function (errString) {
            if (typeof errString === "string") {
                var error = stringToError(errString);
                if (error.code === errors_1.NfcError.ErrorCode.NotConnectedError || error.code === errors_1.NfcError.ErrorCode.TagLostError) {
                    _this._onConnectionLost(error);
                }
                throw error;
            }
            else {
                throw errString;
            }
        });
        return rxjs_1.from(promise);
    };
    NFCComProtocol.prototype._onConnectionLost = function (error) {
        if (this.connectionState !== api_1.ConnectionState.DISCONNECTED) {
            this.setConnectionState(api_1.ConnectionState.DISCONNECTED);
        }
    };
    return NFCComProtocol;
}(queue_com_protocol_1.QueueComProtocol));
exports.NFCComProtocol = NFCComProtocol;
;
function stringToError(errString) {
    var errStringLc = errString.toLowerCase();
    if (errStringLc.indexOf('tag was lost') >= 0) {
        return errors_1.NfcError.tagLostError();
    }
    else if (errStringLc.indexOf('not connected') >= 0) {
        return errors_1.NfcError.notConnectedError();
    }
    else {
        return errors_1.NfcError.unknownError(errString);
    }
}
//# sourceMappingURL=nfc-com-protocol.js.map