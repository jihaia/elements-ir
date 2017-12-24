const path = require('path')
const fs = require('fs')
const electron = require('electron')

// expose the class
class Storage {
  constructor (opts) {
    // Renderer process has to get `app` module via `remote`, whereas the main process can get it directly
    // app.getPath('userData') will return a string of the user's app data directory path.
    // const userDataPath = (electron.app || electron.remote.app).getPath('userData')
    const userDataPath = (electron.app || electron.remote.app).getPath('home')
    // We'll use the `configName` property to set the file name and path.join to bring it all together as a string
    this.basePath = path.join(userDataPath, '.elements')
    this.path = path.join(this.basePath, opts.configName + '.json')

    this.data = this.parseDataFile(this.path, opts.defaults)

    if (!fs.existsSync(this.basePath)) {
      fs.mkdir(this.basePath)
    }
    fs.writeFileSync(this.path, JSON.stringify(this.data))
  }

  // This will just return the property on the `data` object
  get (key) {
    console.log(this.data[key])
    return this.data[key]
  }

  parseDataFile (filePath, defaults) {
    try {
      var content = fs.readFileSync(filePath, 'utf8').toString()
      console.log(JSON.stringify(content))
      return JSON.parse(content)
    } catch (error) {
      // if there was some kind of error, return the passed in defaults instead.
      return defaults
    }
  }

  // ...and this will set it
  set (key, val) {
    this.data[key] = val
    // Wait, I thought using the node.js' synchronous APIs was bad form?
    // We're not writing a server so there's not nearly the same IO demand on the process
    // Also if we used an async API and our app was quit before the asynchronous write had a chance to complete,
    // we might lose that data. Note that in a real app, we would try/catch this.
    fs.writeFileSync(this.path, JSON.stringify(this.data))
  }
}

export default Storage
