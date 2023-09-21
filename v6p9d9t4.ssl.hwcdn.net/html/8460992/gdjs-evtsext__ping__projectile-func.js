
if (typeof gdjs.evtsExt__Ping__projectile !== "undefined") {
  gdjs.evtsExt__Ping__projectile.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Ping__projectile = {};
gdjs.evtsExt__Ping__projectile.GDprojectileObjects1= [];
gdjs.evtsExt__Ping__projectile.GDprojectileObjects2= [];


gdjs.evtsExt__Ping__projectile.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595projectile_9546GDprojectileObjects1Objects = Hashtable.newFrom({"projectile": gdjs.evtsExt__Ping__projectile.GDprojectileObjects1});
gdjs.evtsExt__Ping__projectile.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Ping__projectile.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595projectile_9546GDprojectileObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("inX")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("inY")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].setAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animationname") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Parameter")).setLinearVelocityY((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("velY")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Parameter")).setLinearVelocityX((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("velX")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Parameter")).setAngularVelocity((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("velA")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("projectile"), gdjs.evtsExt__Ping__projectile.GDprojectileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].isCurrentAnimationName("confetti") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[k] = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Ping__projectile.GDprojectileObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].returnVariable(gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].getVariables().get("confettiColor")).setNumber(gdjs.random(5));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("projectile"), gdjs.evtsExt__Ping__projectile.GDprojectileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].getVariableNumber(gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].getVariables().get("confettiColor")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[k] = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Ping__projectile.GDprojectileObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].setColor("255;41;55");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("projectile"), gdjs.evtsExt__Ping__projectile.GDprojectileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].getVariableNumber(gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].getVariables().get("confettiColor")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[k] = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Ping__projectile.GDprojectileObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].setColor("255;152;47");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("projectile"), gdjs.evtsExt__Ping__projectile.GDprojectileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].getVariableNumber(gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].getVariables().get("confettiColor")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[k] = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Ping__projectile.GDprojectileObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].setColor("249;255;104");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("projectile"), gdjs.evtsExt__Ping__projectile.GDprojectileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].getVariableNumber(gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].getVariables().get("confettiColor")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[k] = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Ping__projectile.GDprojectileObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].setColor("148;255;92");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("projectile"), gdjs.evtsExt__Ping__projectile.GDprojectileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].getVariableNumber(gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].getVariables().get("confettiColor")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[k] = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Ping__projectile.GDprojectileObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].setColor("99;162;255");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("projectile"), gdjs.evtsExt__Ping__projectile.GDprojectileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].getVariableNumber(gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].getVariables().get("confettiColor")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[k] = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Ping__projectile.GDprojectileObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__projectile.GDprojectileObjects1[i].setColor("227;107;255");
}
}}

}


};

gdjs.evtsExt__Ping__projectile.func = function(runtimeScene, projectile, Parameter, animationname, inX, inY, velY, velX, velA, layer, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"projectile": projectile
},
  _objectArraysMap: {
"projectile": gdjs.objectsListsToArray(projectile)
},
  _behaviorNamesMap: {
"Parameter": Parameter
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
if (argName === "animationname") return animationname;
if (argName === "inX") return inX;
if (argName === "inY") return inY;
if (argName === "velY") return velY;
if (argName === "velX") return velX;
if (argName === "velA") return velA;
if (argName === "layer") return layer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Ping__projectile.GDprojectileObjects1.length = 0;
gdjs.evtsExt__Ping__projectile.GDprojectileObjects2.length = 0;

gdjs.evtsExt__Ping__projectile.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Ping__projectile.registeredGdjsCallbacks = [];