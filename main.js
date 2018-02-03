if (annyang) {
    // Let's define a command.
    const commands = {
        'hello': function () {
            console.log('hello')
        },
        'next1': function () {
            console.log('next')
        },
        'next': function () {
            const hiroObject = document.querySelector('.hiro-obj');
            const generatedObjectModel = getRandomObjectModel();
            const generatedObjectModelElementValue = `obj: ${generatedObjectModel.objId}; mtl: ${generatedObjectModel.mtlId}`;
            hiroObject.setAttribute('obj-model', generatedObjectModelElementValue);
            console.log(hiroObject.getAttribute());
            console.log(hiroObject);
        }
    };

    function getRandomObjectModel() {
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
        const randObjectModel = objectModels[Math.floor(Math.random() * objectModels.length)];
        return randObjectModel;
    }

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening.
    annyang.start();
}