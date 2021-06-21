Example Project.
===================================

## Description

Demo Project for Sanar video consultation integratoin

## Installation
To install the platforms

```
$ cordova platform add ios
$ cordova platform add android
```

To install the plugin with the Cordova CLI from npm:

```
$ cordova plugin add https://github.com/MarenTech/cordova-plugin-sanar
```

## Sample Code

```
function openUrl() {
  SafariViewController.isAvailable(function (available) {
    if (available) {
      SafariViewController.show({
            url: "SANAR_CONSULTATION_URL",
            hidden: false, // default false. You can use this to load cookies etc in the background (see issue #1 for details).
            animated: false, // default true, note that 'hide' will reuse this preference (the 'Done' button will always animate though)
            transition: 'curl', // (this only works in iOS 9.1/9.2 and lower) unless animated is false you can choose from: curl, flip, fade, slide (default)
            enterReaderModeIfAvailable: readerMode, // default false
            tintColor: "#00ffff", // default is ios blue
            barColor: "#0000ff", // on iOS 10+ you can change the background color as well
            controlTintColor: "#ffffff" // on iOS 10+ you can override the default tintColor
          },
          // this success handler will be invoked for the lifecycle events 'opened', 'loaded' and 'closed'
          function(result) {
            if (result.event === 'opened') {
              console.log('opened');
            } else if (result.event === 'loaded') {
              console.log('loaded');
            } else if (result.event === 'closed') {
              console.log('closed');
            }
          },
          function(msg) {
            console.log("KO: " + msg);
          })
    } else {
      // potentially powered by InAppBrowser because that (currently) clobbers window.open
      window.open(""SANAR_CONSULTATION_URL", '_blank', 'location=yes');
    }
  })
}
```

### Android 11 (API 30) Support
Add below code to your project's config.xml

```
<?xml version='1.0' encoding='utf-8'?>
<widget
    ...
    ...
    xmlns:android="http://schemas.android.com/apk/res/android"
>
    ...
    ...
    <platform name="android">
        .........
        <preference name="android-targetSdkVersion" value="30"/>
        <config-file target="AndroidManifest.xml" parent="/manifest">
            <queries>
                <intent>
                    <action android:name=
                        "android.support.customtabs.action.CustomTabsService" />
                </intent>
            </queries>
        </config-file>
    </platform>
</widget>
```
