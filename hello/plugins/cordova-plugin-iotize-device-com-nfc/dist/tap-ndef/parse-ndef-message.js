"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var format_helper_1 = require("@iotize/device-client.js/core/format/format-helper");
function parseTapNdefMessage(messages) {
    var result = {};
    if (messages.length >= 1) {
        var asciiUri = messages[0].payload;
        result.uri = toAsciiString(asciiUri);
    }
    if (messages.length >= 2) {
        result.aar = toAsciiString(messages[1].payload);
    }
    if (messages.length >= 3) {
        var payload3 = messages[2].payload;
        var type = payload3[0];
        var content = payload3.slice(1);
        result.type = type;
        switch (type) {
            case TapNdefProtocolType.BLE:
                result.macAddress = convertBytesToBLEAddress(content);
                break;
            case TapNdefProtocolType.WiFi:
                result.ssid = toAsciiString(content);
                break;
        }
    }
    if (messages.length >= 4) {
        result.name = toAsciiString(messages[3].payload);
    }
    return result;
}
exports.parseTapNdefMessage = parseTapNdefMessage;
var TapNdefProtocolType;
(function (TapNdefProtocolType) {
    TapNdefProtocolType[TapNdefProtocolType["WiFi"] = 32] = "WiFi";
    TapNdefProtocolType[TapNdefProtocolType["BLE"] = 64] = "BLE";
})(TapNdefProtocolType || (TapNdefProtocolType = {}));
function toAsciiString(payload) {
    if (payload.length > 0 && payload[0] === 0) {
        payload = payload.slice(1);
    }
    return format_helper_1.FormatHelper.toAsciiString(payload);
}
function convertBytesToBLEAddress(bytes) {
    return bytes.map(function (byte) {
        if (byte < 0) {
            byte += 256;
        }
        var byteString = '0' + byte.toString(16).toUpperCase();
        byteString = byteString.slice(-2);
        return byteString;
    })
        .reverse()
        .join(':');
}
//# sourceMappingURL=parse-ndef-message.js.map