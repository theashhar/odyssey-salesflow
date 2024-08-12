const { app, BrowserWindow } = require("electron");
const path = require("path");

async function createWindow() {
  const isDev = (await import("electron-is-dev")).default;

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.resolve(__dirname, "preload.js"),
      nodeIntegration: false, // Disable Node.js integration in renderer
      contextIsolation: true, // Isolate the context for security
      enableRemoteModule: false, // Disable the remote module (not secure)
      sandbox: true,
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.resolve(__dirname, "frontend/build/index.html")}`
  );

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
