const url = require('url')
const path = require('path')
const electron = require('electron')
const { app, BrowserWindow } = electron

let mainWindow

app.on('ready', createWindow)

function createWindow() {
  mainWindow = new BrowserWindow({ width: 980, height: 672 })
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', function() {
    mainWindow = null
  })
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
