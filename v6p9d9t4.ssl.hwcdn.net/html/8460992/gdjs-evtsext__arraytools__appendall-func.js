
if (typeof gdjs.evtsExt__ArrayTools__AppendAll !== "undefined") {
  gdjs.evtsExt__ArrayTools__AppendAll.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__AppendAll = {};


gdjs.evtsExt__ArrayTools__AppendAll.userFunc0x134d148 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const arr = runtimeScene.getVariables().get(eventsFunctionContext.getArgument("arr"));
const target = runtimeScene.getVariables().get(eventsFunctionContext.getArgument("target"));

// Copy both arrays inside the new one
for (const variable of arr.getAllChildrenArray())
    target.pushVariableCopy(variable);

};
gdjs.evtsExt__ArrayTools__AppendAll.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__AppendAll.userFunc0x134d148(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ArrayTools__AppendAll.func = function(runtimeScene, arr, target, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "arr") return arr;
if (argName === "target") return target;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ArrayTools__AppendAll.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ArrayTools__AppendAll.registeredGdjsCallbacks = [];