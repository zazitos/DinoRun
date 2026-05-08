gdjs.play_32againCode = {};
gdjs.play_32againCode.localVariables = [];
gdjs.play_32againCode.idToCallbackMap = new Map();
gdjs.play_32againCode.GDNewTextObjects1= [];
gdjs.play_32againCode.GDNewTextObjects2= [];
gdjs.play_32againCode.GDBlueButtonObjects1= [];
gdjs.play_32againCode.GDBlueButtonObjects2= [];
gdjs.play_32againCode.GDRedButtonWithShadowObjects1= [];
gdjs.play_32againCode.GDRedButtonWithShadowObjects2= [];
gdjs.play_32againCode.GDDinoObjects1= [];
gdjs.play_32againCode.GDDinoObjects2= [];
gdjs.play_32againCode.GDA_9595ButtonObjects1= [];
gdjs.play_32againCode.GDA_9595ButtonObjects2= [];
gdjs.play_32againCode.GDB_9595ButtonObjects1= [];
gdjs.play_32againCode.GDB_9595ButtonObjects2= [];
gdjs.play_32againCode.GDTransparentLightJoystickObjects1= [];
gdjs.play_32againCode.GDTransparentLightJoystickObjects2= [];


gdjs.play_32againCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.play_32againCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.play_32againCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.play_32againCode.GDBlueButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.play_32againCode.GDBlueButtonObjects1[k] = gdjs.play_32againCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.play_32againCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena 1", false);
}
}

}


};

gdjs.play_32againCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.play_32againCode.GDNewTextObjects1.length = 0;
gdjs.play_32againCode.GDNewTextObjects2.length = 0;
gdjs.play_32againCode.GDBlueButtonObjects1.length = 0;
gdjs.play_32againCode.GDBlueButtonObjects2.length = 0;
gdjs.play_32againCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.play_32againCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.play_32againCode.GDDinoObjects1.length = 0;
gdjs.play_32againCode.GDDinoObjects2.length = 0;
gdjs.play_32againCode.GDA_9595ButtonObjects1.length = 0;
gdjs.play_32againCode.GDA_9595ButtonObjects2.length = 0;
gdjs.play_32againCode.GDB_9595ButtonObjects1.length = 0;
gdjs.play_32againCode.GDB_9595ButtonObjects2.length = 0;
gdjs.play_32againCode.GDTransparentLightJoystickObjects1.length = 0;
gdjs.play_32againCode.GDTransparentLightJoystickObjects2.length = 0;

gdjs.play_32againCode.eventsList0(runtimeScene);
gdjs.play_32againCode.GDNewTextObjects1.length = 0;
gdjs.play_32againCode.GDNewTextObjects2.length = 0;
gdjs.play_32againCode.GDBlueButtonObjects1.length = 0;
gdjs.play_32againCode.GDBlueButtonObjects2.length = 0;
gdjs.play_32againCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.play_32againCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.play_32againCode.GDDinoObjects1.length = 0;
gdjs.play_32againCode.GDDinoObjects2.length = 0;
gdjs.play_32againCode.GDA_9595ButtonObjects1.length = 0;
gdjs.play_32againCode.GDA_9595ButtonObjects2.length = 0;
gdjs.play_32againCode.GDB_9595ButtonObjects1.length = 0;
gdjs.play_32againCode.GDB_9595ButtonObjects2.length = 0;
gdjs.play_32againCode.GDTransparentLightJoystickObjects1.length = 0;
gdjs.play_32againCode.GDTransparentLightJoystickObjects2.length = 0;


return;

}

gdjs['play_32againCode'] = gdjs.play_32againCode;
