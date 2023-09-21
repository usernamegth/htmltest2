
if (typeof gdjs.evtsExt__Ping__ping !== "undefined") {
  gdjs.evtsExt__Ping__ping.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Ping__ping = {};
gdjs.evtsExt__Ping__ping.GDobjectObjects1= [];
gdjs.evtsExt__Ping__ping.GDobjectObjects2= [];


gdjs.evtsExt__Ping__ping.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595ping_9546GDobjectObjects1Objects = Hashtable.newFrom({"object": gdjs.evtsExt__Ping__ping.GDobjectObjects1});
gdjs.evtsExt__Ping__ping.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__Ping__ping.GDobjectObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Ping__ping.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595ping_9546GDobjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("x")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("y")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__Ping__ping.GDobjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__ping.GDobjectObjects1[i].setText((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("text") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__Ping__ping.GDobjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__ping.GDobjectObjects1[i].setAlignment("center");
}
}{for(var i = 0, len = gdjs.evtsExt__Ping__ping.GDobjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__ping.GDobjectObjects1[i].setTint((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("color") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__Ping__ping.GDobjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__ping.GDobjectObjects1[i].setWrappingWidth(240);
}
}}

}


};

gdjs.evtsExt__Ping__ping.func = function(runtimeScene, text, object, color, layer, x, y, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"object": object
},
  _objectArraysMap: {
"object": gdjs.objectsListsToArray(object)
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
if (argName === "text") return text;
if (argName === "color") return color;
if (argName === "layer") return layer;
if (argName === "x") return x;
if (argName === "y") return y;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Ping__ping.GDobjectObjects1.length = 0;
gdjs.evtsExt__Ping__ping.GDobjectObjects2.length = 0;

gdjs.evtsExt__Ping__ping.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Ping__ping.registeredGdjsCallbacks = [];