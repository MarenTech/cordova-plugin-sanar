Sanar Cordova Plugin
===================================

## Description

Cordova Plugin to integrate Sanar video consultation.

## Installation
To install the plugin with the Cordova CLI from npm:

```
$ cordova plugin add https://github.com/MarenTech/cordova-plugin-sanar
```

## Usage
Check the [example](example/) to follow the integration / code example.

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

