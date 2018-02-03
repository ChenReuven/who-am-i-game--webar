let isVoiceControlValid = function () {
    return annyang;
};
let getRandomObjectModel = function() {
    const objectModels = [{
        objId: '#minion-obj',
        mtlId: '#minion-mtl'
    }, {
        objId: '#lamp-obj',
        mtlId: '#lamp-mtl'
    }, {
        objId: '#lego-obj',
        mtlId: '#lego-mtl'
    }];
    const randObjectModel = getGeneratedModel(objectModels);
    return randObjectModel;
}

const updateObjectModel = function () {
    const objectModel = document.querySelector('.hiro-obj');
    const generatedObjectModel = getRandomObjectModel();
    const generatedObjectModelElementValue = `obj: ${generatedObjectModel.objId}; mtl: ${generatedObjectModel.mtlId}`;
    objectModel.setAttribute('obj-model', generatedObjectModelElementValue);
};

const getVoiceCommands = function () {
    return {
        'next': function () {
            updateObjectModel();
        }
    };
};

const getGeneratedModel = function (objectModels) {
    return objectModels[Math.floor(Math.random() * objectModels.length)];
};

if (isVoiceControlValid()) {
    const voiceCommands = getVoiceCommands();

    annyang.addCommands(voiceCommands);

    annyang.start();
}