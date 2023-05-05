const electron = require('electron')
const {app, BrowserWindow} = electron

const path = require('path')
const url  = require('url')

let win

function createWindow(){
	win = new BrowserWindow ({width: 1000, height:592})
	win.maximize()
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'simulador/index.html'),
		protocol: 'file',
		slashes: true
	}))
}

app.on('ready', createWindow)