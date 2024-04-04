import { contextBridge, ipcRenderer } from 'electron'

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector: string, text: string) => {
        const element = document.getElementById(selector);
        if (element) {
            element.innerText = text
        }
    }

    let text = process.versions["node"]
    replaceText("node-version", text)

    let cversion = process.versions["chrome"]
    replaceText("chrome-version", cversion)

    let eversion = process.versions['electron']
    replaceText("electron-version", eversion)
})


contextBridge.exposeInMainWorld('versions', {
    node: "haha1211211111232",
})
