// Based on the default local file system implementation, but upon save export to edgeless
const storageModule = require("@node-red/runtime");

const edgelessStorage = {
  init: function() {
    return storageModule.storage.init();
  },
  getFlows: function() {
    // doesn't actually do anything - remove if possible to implement a subset of functions instead of all
    return storageModule.storage.getFlows(); 
  },
  saveFlows: function(flows) {
    // map to edgeless workflow.json, export to edgeless and save normally
    // workflow.json is for now { nodes: [{ id: 1}, { id: 2 }, { id: 3 }], edges: [{ from: 1, to: 3 }] }
    console.log("SAVING FLOWS!");
    console.log(flows);
    return storageModule.storage.saveFlows(flows);
  },
  getCredentials: function() {
    return storageModule.storage.getCredentials();
  },
  saveCredentials: function(credentials) {
    return storageModule.storage.saveCredentials(credentials);
  },
  getSettings: function() {
    return storageModule.storage.getSettings();
  },
  saveSettings: function(settings) {
    return storageModule.storage.saveSettings(settings);
  },
  getSessions: function() {
    return storageModule.storage.getSessions();
  },
  saveSessions: function(sessions) {
    return storageModule.storage.saveSessions(sessions);
  },
  getLibraryEntry: function(type,name) {
    return storageModule.storage.getLibraryEntry(type, name);
  },
  saveLibraryEntry: function(type,name,meta,body) {
    return storageModule.storage.saveLibraryEntry(type, name, meta, body);
  }
};

module.exports = edgelessStorage;