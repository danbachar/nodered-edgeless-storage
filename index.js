// Based on the default local file system implementation, but upon save export to edgeless
const storageModule = require("@node-red/runtime");

const edgelessStorage = {
  init: function() {
    console.log(`init called!`);
    return storageModule.storage.init();
  },
  getFlows: function() {
    console.log(`getFlows called!`);
    // doesn't actually do anything - remove if possible to implement a subset of functions instead of all
    return storageModule.storage.getFlows(); 
  },
  saveFlows: function(flows) {
    console.log(`saveFlows called!`);
    // map to edgeless workflow.json, export to edgeless and save normally
    // workflow.json is for now { nodes: [{ id: 1}, { id: 2 }, { id: 3 }], edges: [{ from: 1, to: 3 }] }
    console.log("SAVING FLOWS!");
    console.log(flows);
    return storageModule.storage.saveFlows(flows);
  },
  getCredentials: function() {
    console.log(`getCredentials called!`);
    return storageModule.storage.getCredentials();
  },
  saveCredentials: function(credentials) {
    console.log(`saveCredentials called!`);
    return storageModule.storage.saveCredentials(credentials);
  },
  getSettings: function() {
    console.log(`getSettings called!`);
    return storageModule.storage.getSettings();
  },
  saveSettings: function(settings) {
    console.log(`saveSettings called!`);
    return storageModule.storage.saveSettings(settings);
  },
  getSessions: function() {
    console.log(`getSessions called!`);
    return storageModule.storage.getSessions();
  },
  saveSessions: function(sessions) {
    console.log(`saveSessions called!`);
    return storageModule.storage.saveSessions(sessions);
  },
  getLibraryEntry: function(type,name) {
    console.log(`getLibraryEntry called!`);
    return storageModule.storage.getLibraryEntry(type, name);
  },
  saveLibraryEntry: function(type,name,meta,body) {
    console.log(`saveLibraryEntry called!`);
    return storageModule.storage.saveLibraryEntry(type, name, meta, body);
  }
};

module.exports = edgelessStorage;