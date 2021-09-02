Inside of the project root directory run the following command to install project depedencies:

```bash
$ nvm use 12.22.6
$ npm install
$ cordova platform add ios
$ cordova platform add android
$ ionic cordova resources ios
$ ionic cordova resources android
```

Then you run it

For **iOS**, using emulator:
```bash
$ ionic cordova emulate ios --target=<emulator_uuid>
```

This `emulator_uuid` is the uuid of the emulator of your choice. To see the list of available emulators you have, you can use the following command:

```bash
$ ionic cordova emulate ios --list
```

If no device appear in the list, you can download them via Xcode.

For **Android**, with your Android device plugged:
```bash
$ ionic cordova run android
```

If you want to use emulator, you need to install or download one. It can be done via Android Studio or third party emulators like Genymotion or Bluestacks, they can also behave like real devices.

Ionic Info

Ionic:

   Ionic CLI                     : 5.4.16 (/path/.nvm/versions/node/v10.16.3/lib/node_modules/ionic)
   Ionic Framework               : @ionic/angular 5.7.0
   @angular-devkit/build-angular : 12.1.4
   @angular-devkit/schematics    : 12.1.4
   @angular/cli                  : 12.1.4
   @ionic/angular-toolkit        : 4.0.0

Cordova:

   Cordova CLI       : 9.0.0 (cordova-lib@9.0.1)
   Cordova Platforms : android 8.1.0, ios 5.1.1
   Cordova Plugins   : cordova-plugin-ionic-keyboard 2.2.0, cordova-plugin-ionic-webview 4.2.1, (and 4 other plugins)

Utility:

   cordova-res (update available: 0.15.3) : 0.14.0
   native-run (update available: 1.4.0)   : 1.0.0

System:

   ios-sim : 8.0.2
   NodeJS  : v12.22.6 (/path/.nvm/versions/node/v12.22.6/bin/node)
   npm     : 6.14.15
   Xcode   : Xcode 10.1 Build version 10B61
