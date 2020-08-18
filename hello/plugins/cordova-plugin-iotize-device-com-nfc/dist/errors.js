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
var NfcError = (function (_super) {
    __extends(NfcError, _super);
    function NfcError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        return _this;
    }
    NfcError.tagLostError = function () {
        return new NfcError(NfcError.ErrorCode.TagLostError, 'NFC tag lost');
    };
    NfcError.notConnectedError = function () {
        return new NfcError(NfcError.ErrorCode.NotConnectedError, 'NFC tag is not connected');
    };
    NfcError.unknownError = function (errString) {
        throw new NfcError(NfcError.ErrorCode.Unknown, errString);
    };
    NfcError.internalError = function (message) {
        throw new NfcError(NfcError.ErrorCode.InternalError, message);
    };
    return NfcError;
}(Error));
exports.NfcError = NfcError;
(function (NfcError) {
    var ErrorCode;
    (function (ErrorCode) {
        ErrorCode["Unknown"] = "NfcUnknownError";
        ErrorCode["InternalError"] = "NfcInternalError";
        ErrorCode["TagLostError"] = "NfcTagLostError";
        ErrorCode["NotConnectedError"] = "NfcNotConnectedError";
    })(ErrorCode = NfcError.ErrorCode || (NfcError.ErrorCode = {}));
})(NfcError = exports.NfcError || (exports.NfcError = {}));
exports.NfcError = NfcError;
//# sourceMappingURL=errors.js.map