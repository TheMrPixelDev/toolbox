const electron = require('electron')
const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')

function createWindow () {

  /*Initializes the index window with an 
  overview of all the functionality the app provides. */

  window = new BrowserWindow({
    width : 600,
    height : 500,
    icon: path.join(__dirname, './assets/favicon.png'),
    webPreferences: {

      nodeIntegration: true

  }
  })

  window.loadFile(filePath = path.join(__dirname, '/src/index.html'))
  window.removeMenu()

}

app.on('ready', createWindow);

app.on('window-all-closed', () => {

  if (process.platform !== 'darwin'){

    app.quit()

  }

});

