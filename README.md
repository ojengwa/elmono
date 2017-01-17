# elmono

You can base off this model and update the package.json file to include your own required dependencies.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/ojengwa/elmono.git
# Go into the repository
cd elmono
# Install dependencies and run the app
npm install && npm start
```

## Testing the app in the brower

If you want to run the app as a standalone server, run this command:
```
npm run dev
```

## Packaging your application

If you want to distribute executables of this project, the easiest way is to use electron-packager:

```
sudo npm install -g electron-packager

# build for OS X 64 bits
electron-packager electron-node-red Node-RED --icon=nodered.icns --platform=darwin --arch=x64

# build for Windows 64 bits
electron-packager electron-node-red Node-RED --icon=nodered.icns --platform=win32 --arch=x64

```

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).


### To package as a dmg

look at `https://github.com/LinusU/node-appdmg`

    appdmg appdmg.json ~/Desktop/NodeRED.dmg



#### License [CC0 (Public Domain)](LICENSE.md)

