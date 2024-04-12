const {app,BrowserWindow} = require('electron')

const path = require('path')

const {autoUpdater} = require('electron-updater');
// const { log } = require('console');
const log = require('electron-log')

log.transports.file.resolvePathFn = () => path.join("/home/gurii/electron/auto-update-electron/auto_update_debian", "logs/main.log")


log.info("Hello, log");
log.warn("Some problem appears");
let win;
function createWindow(){
    win=new BrowserWindow({width:300,height:400})
    console.log(path.join(__dirname,'index.html'))
    win.loadFile(path.join(__dirname,'index.html'))
}

autoUpdater.on("update-available", (info) =>{
    log.info("update-available")
})

autoUpdater.on("checking-for-update", () =>{
    log.info("checking-for-update")
})

autoUpdater.on("update-not-available", (info) =>{
    log.info("update-not-available")
})

autoUpdater.on("error", (err) => {
    log.info("Error in auto updater. " + err)
})

autoUpdater.on("download-progress",(progressTrack)=>{
    log.info("download-progress")
    log.info(progressTrack)
})

autoUpdater.on("update-downloaded",(info)=>{
    log.info("update-downloaded")
})


app.on('ready', () => {
    createWindow()
    autoUpdater.checkForUpdatesAndNotify()
})