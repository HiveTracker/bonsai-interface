# Bonsai - HiveTracker

A Bonsai program to get HTC LightHouses callibration data to use with the HiveTrackers.

The calibration file contains the transformation matrices (rotation + translation).


## Install

Download the [Bonsai](http://bonsai-rx.org) programming environment and install the following packages:

  - VR
  - Windows
  - Starter Pack
  - Scripting

If you get an error about missing obj files, you can get them from:

    Tools > Bonsai Gallery > RoomVR example > models


## Use

0. Turn Steam VR on and check that the bases + handles are all OK (visible...)
1. Open the `Bonsai.Examples.RoomVR.bonsai` file (in the CalibrateVR folder)
2. Build, run and press "s"
3. It will update the `calibration.js` file
4. Use it in the visualization web app:

https://github.com/HiveTracker/hivetrackerjs/tree/master/visualization


## Enjoy!

