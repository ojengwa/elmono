'use strict'
const express = require("express");
const multer = require('multer');
const upload = multer({
	dest: 'uploads/'
});

const loader = require('./loader');


const port = 1579;
const url = 'http://localhost:' + port;

// Create an Express app
const server = express();

// Add a simple route for static content served from 'public'
server.use('/', express.static("public"));


server.post('/transform', upload.single('file'), (req, res, next) => {
	console.log(req.file, req.body, 'here');
});

server.listen(port, function () {
	console.log('Server is on.')
});


function transform(attrs) {

}

// Module to control application life.
// const app = require('app');
// // Module to create native browser window.
// const BrowserWindow = require('browser-window');


// app.setName('Elmono');
// app.dock.setIcon(__dirname + '/nodered.png');

// app.on('ready', createWindow);
// // Quit when all windows are closed.
// app.on('window-all-closed', function () {
// 	// On OS X it is common for applications and their menu bar
// 	// to stay active until the user quits explicitly with Cmd + Q
// 	if (process.platform !== 'darwin') {
// 		app.quit();
// 	}
// });

// app.on('activate', function () {
// 	// On OS X it's common to re-create a window in the app when the
// 	// dock icon is clicked and there are no other windows open.
// 	if (mainWindow === null) {
// 		createWindow();
// 	}
// });
// function createWindow() {
// 	const mainWindow = new BrowserWindow({
// 		autoHideMenuBar: true,
// 		title: 'Elmono',
// 		width: 800,
// 		focusable: true,
// 		height: 600,
// 		fullscreenable: true,
// 		darkTheme: true,
// 		scrollBounce: true,
// 		icon: __dirname + '/nodered.png'
// 	})
// 	mainWindow.loadURL(url);


// 	// Emitted when the window is closed.
// 	mainWindow.on('closed', function () {
// 		// Dereference the window object, usually you would store windows
// 		// in an array if your app supports multi windows, this is the time
// 		// when you should delete the corresponding element.
// 		mainWindow = null;
// 	});
// }