cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-iotize-device-com-nfc.NFC",
      "file": "plugins/cordova-plugin-iotize-device-com-nfc/www/phonegap-nfc.js",
      "pluginId": "cordova-plugin-iotize-device-com-nfc",
      "runs": true
    },
    {
      "id": "onesignal-cordova-plugin.OneSignal",
      "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
      "pluginId": "onesignal-cordova-plugin",
      "clobbers": [
        "OneSignal"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-iotize-device-com-nfc": "1.0.0-alpha.13",
    "onesignal-cordova-plugin": "2.11.0",
    "cordova-play-services-version-adapter": "1.0.2"
  };
});