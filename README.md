Inside of the project root directory run the following command to install project depedencies:

```bash
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
