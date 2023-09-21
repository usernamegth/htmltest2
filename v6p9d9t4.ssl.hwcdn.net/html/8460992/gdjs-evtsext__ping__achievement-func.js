
if (typeof gdjs.evtsExt__Ping__achievement !== "undefined") {
  gdjs.evtsExt__Ping__achievement.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Ping__achievement = {};
gdjs.evtsExt__Ping__achievement.GDtrophyObjects1= [];
gdjs.evtsExt__Ping__achievement.GDtrophyObjects2= [];
gdjs.evtsExt__Ping__achievement.GDtrophyObjects3= [];
gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1= [];
gdjs.evtsExt__Ping__achievement.GDbackgroundObjects2= [];
gdjs.evtsExt__Ping__achievement.GDbackgroundObjects3= [];
gdjs.evtsExt__Ping__achievement.GDtitleObjects1= [];
gdjs.evtsExt__Ping__achievement.GDtitleObjects2= [];
gdjs.evtsExt__Ping__achievement.GDtitleObjects3= [];
gdjs.evtsExt__Ping__achievement.GDtextObjects1= [];
gdjs.evtsExt__Ping__achievement.GDtextObjects2= [];
gdjs.evtsExt__Ping__achievement.GDtextObjects3= [];
gdjs.evtsExt__Ping__achievement.GDconfettiObjects1= [];
gdjs.evtsExt__Ping__achievement.GDconfettiObjects2= [];
gdjs.evtsExt__Ping__achievement.GDconfettiObjects3= [];


gdjs.evtsExt__Ping__achievement.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595achievement_9546GDbackgroundObjects1Objects = Hashtable.newFrom({"background": gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1});
gdjs.evtsExt__Ping__achievement.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595achievement_9546GDtrophyObjects1Objects = Hashtable.newFrom({"trophy": gdjs.evtsExt__Ping__achievement.GDtrophyObjects1});
gdjs.evtsExt__Ping__achievement.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595achievement_9546GDtitleObjects1Objects = Hashtable.newFrom({"title": gdjs.evtsExt__Ping__achievement.GDtitleObjects1});
gdjs.evtsExt__Ping__achievement.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595achievement_9546GDtextObjects1Objects = Hashtable.newFrom({"text": gdjs.evtsExt__Ping__achievement.GDtextObjects1});
gdjs.evtsExt__Ping__achievement.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595achievement_9546GDbackgroundObjects1Objects = Hashtable.newFrom({"background": gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1});
gdjs.evtsExt__Ping__achievement.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595achievement_9546GDbackgroundObjects1Objects = Hashtable.newFrom({"background": gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1});
gdjs.evtsExt__Ping__achievement.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595achievement_9546GDbackgroundObjects1Objects = Hashtable.newFrom({"background": gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1});
gdjs.evtsExt__Ping__achievement.asyncCallback35855932 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("background"), gdjs.evtsExt__Ping__achievement.GDbackgroundObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("text"), gdjs.evtsExt__Ping__achievement.GDtextObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("title"), gdjs.evtsExt__Ping__achievement.GDtitleObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("trophy"), gdjs.evtsExt__Ping__achievement.GDtrophyObjects3);

{for(var i = 0, len = gdjs.evtsExt__Ping__achievement.GDbackgroundObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Ping__achievement.GDbackgroundObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.evtsExt__Ping__achievement.GDtrophyObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Ping__achievement.GDtrophyObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.evtsExt__Ping__achievement.GDtitleObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Ping__achievement.GDtitleObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.evtsExt__Ping__achievement.GDtextObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Ping__achievement.GDtextObjects3[i].deleteFromScene(runtimeScene);
}
}}
gdjs.evtsExt__Ping__achievement.eventsList0 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.evtsExt__Ping__achievement.GDbackgroundObjects2) asyncObjectsList.addObject("background", obj);
/* Don't save text as it will be provided by the parent asyncObjectsList. */
/* Don't save title as it will be provided by the parent asyncObjectsList. */
/* Don't save trophy as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.evtsExt__Ping__achievement.asyncCallback35855932(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Ping__achievement.asyncCallback35855364 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("background"), gdjs.evtsExt__Ping__achievement.GDbackgroundObjects2);

{for(var i = 0, len = gdjs.evtsExt__Ping__achievement.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Ping__achievement.GDbackgroundObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("tween")).addObjectPositionXTween("exit", -((gdjs.evtsExt__Ping__achievement.GDbackgroundObjects2[i].getWidth())), "easeInCubic", 1000, false);
}
}
{ //Subevents
gdjs.evtsExt__Ping__achievement.eventsList0(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
}
gdjs.evtsExt__Ping__achievement.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1) asyncObjectsList.addObject("background", obj);
for (const obj of gdjs.evtsExt__Ping__achievement.GDtextObjects1) asyncObjectsList.addObject("text", obj);
for (const obj of gdjs.evtsExt__Ping__achievement.GDtitleObjects1) asyncObjectsList.addObject("title", obj);
for (const obj of gdjs.evtsExt__Ping__achievement.GDtrophyObjects1) asyncObjectsList.addObject("trophy", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.evtsExt__Ping__achievement.asyncCallback35855364(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Ping__achievement.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595achievement_9546GDconfettiObjects2Objects = Hashtable.newFrom({"confetti": gdjs.evtsExt__Ping__achievement.GDconfettiObjects2});
gdjs.evtsExt__Ping__achievement.eventsList2 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__Ping__achievement.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(35846820);
}
if (isConditionTrue_0) {
gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1.length = 0;

gdjs.evtsExt__Ping__achievement.GDtextObjects1.length = 0;

gdjs.evtsExt__Ping__achievement.GDtitleObjects1.length = 0;

gdjs.evtsExt__Ping__achievement.GDtrophyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Ping__achievement.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595achievement_9546GDbackgroundObjects1Objects, 0, 240 - 48 - (300), "achi");
}{for(var i = 0, len = gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1[i].setHeight(32);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Ping__achievement.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595achievement_9546GDtrophyObjects1Objects, 3, (( gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1[0].getAABBCenterY()) - 9, "achi");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Ping__achievement.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595achievement_9546GDtitleObjects1Objects, 24, (( gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1[0].getY()) + 8, "achi");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Ping__achievement.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595achievement_9546GDtextObjects1Objects, 24, (( gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1[0].getY()) + 20, "achi");
}{for(var i = 0, len = gdjs.evtsExt__Ping__achievement.GDtitleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__achievement.GDtitleObjects1[i].setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("achievements").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("variableName") : "")).getChild("name")));
}
}{for(var i = 0, len = gdjs.evtsExt__Ping__achievement.GDtextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__achievement.GDtextObjects1[i].setText(gdjs.evtsExt__ArrayTools__GetRandomString.func(runtimeScene, "goodsayings", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.evtsExt__Ping__achievement.GDtitleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__achievement.GDtitleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("stick")).Stick(gdjs.evtsExt__Ping__achievement.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595achievement_9546GDbackgroundObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Ping__achievement.GDtextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__achievement.GDtextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("stick")).Stick(gdjs.evtsExt__Ping__achievement.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595achievement_9546GDbackgroundObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Ping__achievement.GDtrophyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__achievement.GDtrophyObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("stick")).Stick(gdjs.evtsExt__Ping__achievement.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595achievement_9546GDbackgroundObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("completedAchievements"), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("variableName") : ""));
}{for(var i = 0, len = gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1[i].setWidth(32 + Math.max((( gdjs.evtsExt__Ping__achievement.GDtextObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Ping__achievement.GDtextObjects1[0].getWidth()), (( gdjs.evtsExt__Ping__achievement.GDtitleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Ping__achievement.GDtitleObjects1[0].getWidth())));
}
}{for(var i = 0, len = gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1[i].setPosition(-((gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1[i].getWidth())),192);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sound\\achi.ogg", false, 100, 1 + gdjs.randomFloatInRange(-(0.1), 0.1));
}{for(var i = 0, len = gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("tween")).addObjectPositionXTween("enter", 0, "easeOutCubic", 1000, false);
}
}
{ //Subevents
gdjs.evtsExt__Ping__achievement.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


const repeatCount2 = 50;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(eventsFunctionContext.getObjects("confetti"), gdjs.evtsExt__Ping__achievement.GDconfettiObjects2);

let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtsExt__Ping__projectile.func(runtimeScene, gdjs.evtsExt__Ping__achievement.mapOfGDgdjs_9546evtsExt_9595_9595Ping_9595_9595achievement_9546GDconfettiObjects2Objects, eventsFunctionContext.getBehaviorName("physics"), "confetti", gdjs.random(256), 256, gdjs.randomInRange(-(500), -(300)), gdjs.randomInRange(-(100), 100), gdjs.randomInRange(-(600), 600), "ui", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
}

}


};

gdjs.evtsExt__Ping__achievement.func = function(runtimeScene, trophy, stick, background, tween, title, stick, text, stick, confetti, physics, variableName, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"trophy": trophy
, "background": background
, "title": title
, "text": text
, "confetti": confetti
},
  _objectArraysMap: {
"trophy": gdjs.objectsListsToArray(trophy)
, "background": gdjs.objectsListsToArray(background)
, "title": gdjs.objectsListsToArray(title)
, "text": gdjs.objectsListsToArray(text)
, "confetti": gdjs.objectsListsToArray(confetti)
},
  _behaviorNamesMap: {
"stick": stick
, "tween": tween
, "stick": stick
, "stick": stick
, "physics": physics
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
if (argName === "variableName") return variableName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Ping__achievement.GDtrophyObjects1.length = 0;
gdjs.evtsExt__Ping__achievement.GDtrophyObjects2.length = 0;
gdjs.evtsExt__Ping__achievement.GDtrophyObjects3.length = 0;
gdjs.evtsExt__Ping__achievement.GDbackgroundObjects1.length = 0;
gdjs.evtsExt__Ping__achievement.GDbackgroundObjects2.length = 0;
gdjs.evtsExt__Ping__achievement.GDbackgroundObjects3.length = 0;
gdjs.evtsExt__Ping__achievement.GDtitleObjects1.length = 0;
gdjs.evtsExt__Ping__achievement.GDtitleObjects2.length = 0;
gdjs.evtsExt__Ping__achievement.GDtitleObjects3.length = 0;
gdjs.evtsExt__Ping__achievement.GDtextObjects1.length = 0;
gdjs.evtsExt__Ping__achievement.GDtextObjects2.length = 0;
gdjs.evtsExt__Ping__achievement.GDtextObjects3.length = 0;
gdjs.evtsExt__Ping__achievement.GDconfettiObjects1.length = 0;
gdjs.evtsExt__Ping__achievement.GDconfettiObjects2.length = 0;
gdjs.evtsExt__Ping__achievement.GDconfettiObjects3.length = 0;

gdjs.evtsExt__Ping__achievement.eventsList3(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Ping__achievement.registeredGdjsCallbacks = [];