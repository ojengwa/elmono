var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
	appDirectory: 'dist/bin',
	outputDirectory: 'dist/win',
	authors: 'Bernard Ojengwa.',
	exe: 'Elmono.exe'
});

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice x64: ${e.message}`));