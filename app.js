'use strict'
// const electron = require('electron');

const express = require("express");

// Module to control application life.
// const app = electron.app;
// Module to create native browser window.
// const BrowserWindow = electron.BrowserWindow;

const port = 1579;
const url = 'http://localhost:' + port;

// Create an Express app
const server = express();

// Add a simple route for static content served from 'public'
server.use("/", express.static("public"));


server.listen(port, function () {
	console.log('Server is on.')
});



// app.on('ready', createWindow)
// Quit when all windows are closed.
// app.on('window-all-closed', function () {
//     // On OS X it is common for applications and their menu bar
//     // to stay active until the user quits explicitly with Cmd + Q
//     if (process.platform !== 'darwin') {
//         app.quit();
//     }
// });

// app.on('activate', function () {
//     // On OS X it's common to re-create a window in the app when the
//     // dock icon is clicked and there are no other windows open.
//     if (mainWindow === null) {
//         createWindow();
//     }
// });

const createWindow = function () {
	var mainWindow = new BrowserWindow({
		autoHideMenuBar: true,
		title: 'Elmono',
		width: 800,
		height: 600,
		fullscreenable: true,
		icon: __dirname + '/nodered.png'
	})
	mainWindow.loadURL(url);


	// Emitted when the window is closed.
	mainWindow.on('closed', function () {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});
}