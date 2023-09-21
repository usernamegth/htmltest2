
if (typeof gdjs.evtsExt__Ping__noti !== "undefined") {
  gdjs.evtsExt__Ping__noti.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Ping__noti = {};
gdjs.evtsExt__Ping__noti.GDobjectObjects1= [];
gdjs.evtsExt__Ping__noti.GDobjectObjects2= [];


gdjs.evtsExt__Ping__noti.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595noti_9546GDobjectObjects1Objects = Hashtable.newFrom({"object": gdjs.evtsExt__Ping__noti.GDobjectObjects1});
gdjs.evtsExt__Ping__noti.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__Ping__noti.GDobjectObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Ping__noti.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595noti_9546GDobjectObjects1Objects, 128, 120, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__Ping__noti.GDobjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__noti.GDobjectObjects1[i].setText((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("text") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__Ping__noti.GDobjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__noti.GDobjectObjects1[i].setAlignment("center");
}
}{for(var i = 0, len = gdjs.evtsExt__Ping__noti.GDobjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__noti.GDobjectObjects1[i].setTint((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("color") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__Ping__noti.GDobjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__noti.GDobjectObjects1[i].setWrappingWidth(240);
}
}{for(var i = 0, len = gdjs.evtsExt__Ping__noti.GDobjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__noti.GDobjectObjects1[i].setPosition(gdjs.evtTools.common.trunc(128 - (gdjs.evtsExt__Ping__noti.GDobjectObjects1[i].getWidth()) / 2),240 - (gdjs.evtTools.common.trunc((gdjs.evtsExt__Ping__noti.GDobjectObjects1[i].getHeight())) + 8));
}
}}

}


};

gdjs.evtsExt__Ping__noti.func = function(runtimeScene, text, object, color, layer, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Ping__noti.GDobjectObjects1.length = 0;
gdjs.evtsExt__Ping__noti.GDobjectObjects2.length = 0;

gdjs.evtsExt__Ping__noti.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Ping__noti.registeredGdjsCallbacks = [];