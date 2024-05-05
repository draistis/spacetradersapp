import { contextBridge } from "electron";

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("context", {
      // Expose custom APIs
    });
  } catch (error) {
    console.error(error);
  }
} else {
  throw new Error("contextIsolation is not enabled");
}
