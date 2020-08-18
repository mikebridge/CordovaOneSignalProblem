```bash
cordova --version
9.0.0 (cordova-lib@9.0.1)
```

This repo was created via:

```bash
mkdir cordova_test
cd cordova_test
cordova create hello com.example.hello HelloWorld
cd hello/
cordova platform add android
cordova build
cordova plugin add @iotize/device-com-nfc.cordova
cordova build
cordova plugin add onesignal-cordova-plugin --save
```

Building now creates this error:

```
cordova build
=>
$ cordova  build

Monetize your app with AdMob ads. Now available with this cordova / phonegap plugin:
cordova plugin add cordova-admob
Docs: https://github.com/appfeel/admob-google-cordova

Checking Java JDK and Android SDK versions
ANDROID_SDK_ROOT=undefined (recommended setting)
ANDROID_HOME=/home/bridge/Android/Sdk (DEPRECATED)
Subproject Path: CordovaLib
Subproject Path: app

> Configure project :app
WARNING: The onesignal-gradle-plugin MUST be before com.android.application!
   Please put onesignal-gradle-plugin first OR update to com.android.tools.build:gradle:3.0.0 or newer!

> Task :app:preBuild UP-TO-DATE
> Task :CordovaLib:preBuild UP-TO-DATE
> Task :CordovaLib:preDebugBuild UP-TO-DATE
> Task :CordovaLib:checkDebugManifest UP-TO-DATE
> Task :CordovaLib:processDebugManifest UP-TO-DATE
> Task :app:preDebugBuild FAILED

FAILURE: Build failed with an exception.

* What went wrong:
Could not resolve all files for configuration ':app:debugCompileClasspath'.
> Could not resolve com.google.android.gms:play-services-base:[15.0.0, 16.0.0).
  Required by:
      project :app > com.onesignal:OneSignal:3.15.1
   > Failed to list versions for com.google.android.gms:play-services-base.
      > Unable to load Maven meta-data from http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-base/maven-metadata.xml.
         > Could not get resource 'http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-base/maven-metadata.xml'.
            > Could not GET 'http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-base/maven-metadata.xml'. Received status code 401 from server: Unauthorized
> Could not resolve com.google.android.gms:play-services-base:[15.0.1,16.0.0).
  Required by:
      project :app > com.google.android.gms:play-services-location:15.0.1
   > Failed to list versions for com.google.android.gms:play-services-base.
      > Unable to load Maven meta-data from http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-base/maven-metadata.xml.
         > Could not get resource 'http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-base/maven-metadata.xml'.
            > Could not GET 'http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-base/maven-metadata.xml'. Received status code 401 from server: Unauthorized
> Could not resolve com.google.android.gms:play-services-basement:[15.0.1,16.0.0).
  Required by:
      project :app > com.google.android.gms:play-services-location:15.0.1
      project :app > com.google.android.gms:play-services-places-placereport:15.0.1
   > Failed to list versions for com.google.android.gms:play-services-basement.
      > Unable to load Maven meta-data from http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-basement/maven-metadata.xml.
         > Could not get resource 'http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-basement/maven-metadata.xml'.
            > Could not GET 'http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-basement/maven-metadata.xml'. Received status code 401 from server: Unauthorized
> Could not resolve com.google.android.gms:play-services-tasks:[15.0.1,16.0.0).
  Required by:
      project :app > com.google.android.gms:play-services-location:15.0.1
   > Failed to list versions for com.google.android.gms:play-services-tasks.
      > Unable to load Maven meta-data from http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-tasks/maven-metadata.xml.
         > Could not get resource 'http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-tasks/maven-metadata.xml'.
            > Could not GET 'http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-tasks/maven-metadata.xml'. Received status code 401 from server: Unauthorized

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 5s
3 actionable tasks: 1 executed, 2 up-to-date
/home/bridge/work/cordova_test/hello/platforms/android/gradlew: Command failed with exit code 1 Error output:
FAILURE: Build failed with an exception.

* What went wrong:
Could not resolve all files for configuration ':app:debugCompileClasspath'.
> Could not resolve com.google.android.gms:play-services-base:[15.0.0, 16.0.0).
  Required by:
      project :app > com.onesignal:OneSignal:3.15.1
   > Failed to list versions for com.google.android.gms:play-services-base.
      > Unable to load Maven meta-data from http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-base/maven-metadata.xml.
         > Could not get resource 'http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-base/maven-metadata.xml'.
            > Could not GET 'http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-base/maven-metadata.xml'. Received status code 401 from server: Unauthorized
> Could not resolve com.google.android.gms:play-services-base:[15.0.1,16.0.0).
  Required by:
      project :app > com.google.android.gms:play-services-location:15.0.1
   > Failed to list versions for com.google.android.gms:play-services-base.
      > Unable to load Maven meta-data from http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-base/maven-metadata.xml.
         > Could not get resource 'http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-base/maven-metadata.xml'.
            > Could not GET 'http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-base/maven-metadata.xml'. Received status code 401 from server: Unauthorized
> Could not resolve com.google.android.gms:play-services-basement:[15.0.1,16.0.0).
  Required by:
      project :app > com.google.android.gms:play-services-location:15.0.1
      project :app > com.google.android.gms:play-services-places-placereport:15.0.1
   > Failed to list versions for com.google.android.gms:play-services-basement.
      > Unable to load Maven meta-data from http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-basement/maven-metadata.xml.
         > Could not get resource 'http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-basement/maven-metadata.xml'.
            > Could not GET 'http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-basement/maven-metadata.xml'. Received status code 401 from server: Unauthorized
> Could not resolve com.google.android.gms:play-services-tasks:[15.0.1,16.0.0).
  Required by:
      project :app > com.google.android.gms:play-services-location:15.0.1
   > Failed to list versions for com.google.android.gms:play-services-tasks.
      > Unable to load Maven meta-data from http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-tasks/maven-metadata.xml.
         > Could not get resource 'http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-tasks/maven-metadata.xml'.
            > Could not GET 'http://repo.iotize.com/artifactory/gradle-release/com/google/android/gms/play-services-tasks/maven-metadata.xml'. Received status code 401 from server: Unauthorized

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 5s
```

