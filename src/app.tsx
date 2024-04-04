import { app, BrowserWindow } from 'electron';
import * as path from 'path'

const createWindow = () => {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    win.webContents.openDevTools()

    if (process.env.NODE_ENV === 'development') {
        const port = process.env.PORT || 3000;
        const url = new URL(`http://localhost:${port}`);
        win.loadURL(url.href);
    } else {
        win.loadFile('dist/index.html');
    }
}
import os from 'os'
import {session }from 'electron'
app.whenReady().then(() => {
    // on macOS
   
    // const reactDevToolsPath = path.join(
    //     os.homedir(),
    //     '/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.9.0_0'
    // )
    // app.whenReady().then(async () => {
    //     await session.defaultSession.loadExtension(reactDevToolsPath)
    // })
    createWindow()
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})