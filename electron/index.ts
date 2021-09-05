import { join } from 'path'
import { BrowserWindow, app, ipcMain, IpcMainEvent } from 'electron'
import isDev from 'electron-is-dev'
import browserWindowConfig from './browserWindow'
import { initStore } from '../utils/store'
import electronLog from 'electron-log'

try {
  Object.assign(console, electronLog.functions)
  console.warn('@@@@@@@ MAIN STARTED @@@@@@@')

  function createWindow() {
    const window = new BrowserWindow(browserWindowConfig)

    const port = process.env.PORT || 3000
    const url = isDev
      ? `http://localhost:${port}`
      : join(__dirname, '../src/out/index.html')

    isDev ? window?.loadURL(url) : window?.loadFile(url)

    // window.webContents.openDevTools();
  }

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

  // Quit when all windows are closed, except on macOS. There, it's common
  // for applications and their menu bar to stay active until the user quits
  // explicitly with Cmd + Q.
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.

  // listen the channel `message` and resend the received message to the renderer process
  ipcMain.on('message', (event: IpcMainEvent, message: any) => {
    console.log(message)
    setTimeout(() => event.sender.send('message', 'hi from electron'), 500)
  })

  const store = initStore()
  console.log("store.get('appVersion')")
  console.log(store.get('appVersion'))
} catch (e) {
  console.error(e)
}
