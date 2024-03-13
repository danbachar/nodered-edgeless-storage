// Based on the default local file system implementation, but upon save export to edgeless
const storageModule = require("@node-red/runtime/lib/sotrage/localfilesystem");

const edgelessStorage = {
  init: function() {
    return storageModule.init();
  },
  getFlows: function() {
    // doesn't actually do anything - remove if possible to implement a subset of functions instead of all
    return storageModule.getFlows(); 
  },
  saveFlows: function(flows) {
    // map to edgeless workflow.json, export to edgeless and save normally
    // workflow.json is for now { nodes: [{ id: 1}, { id: 2 }, { id: 3 }], edges: [{ from: 1, to: 3 }] }
    console.log("SAVING FLOWS!");
    console.log(flows);
    return storageModule.saveFlows(flows);
  },
  getCredentials: function() {
    return storageModule.getCredentials();
  },
  saveCredentials: function(credentials) {
    return storageModule.saveCredentials(credentials);
  },
  getSettings: function() {
    return storageModule.getSettings();
  },
  saveSettings: function(settings) {
    return storageModule.saveSettings(settings);
  },
  getSessions: function() {
    return storageModule.getSessions();
  },
  saveSessions: function(sessions) {
    return storageModule.saveSessions(sessions);
  },
  getLibraryEntry: function(type,name) {
    return storageModule.getLibraryEntry(type, name);
  },
  saveLibraryEntry: function(type,name,meta,body) {
    return storageModule.saveLibraryEntry(type, name, meta, body);
  }
};

module.exports = edgelessStorage;