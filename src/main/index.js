'use strict'

import { app, BrowserWindow } from 'electron'
import Storage from './Storage'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9081`
  : `file://${__dirname}/index.html`

// Initialize Storage
const storage = new Storage({
  // We'll call our data file 'settings.json'
  configName: 'settings',
  defaults: {
    windowBounds: { width: 400, height: 640 }
  }
})

function createWindow () {
  /**
   * Initial window options
   */
  var { height } = storage.get('windowBounds')

  mainWindow = new BrowserWindow({
    height: height,
    useContentSize: true,
    width: 380,
    maxWidth: 380,
    minWidth: 380,
    frame: false,
    maximizable: false,
    titleBarStyle: 'hidden'
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

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

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
