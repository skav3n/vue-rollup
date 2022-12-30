import TestButton from './src/components/TestButton.vue';

export default {
    install: (app, options) => {
        app.component('TestButton', TestButton);
    },
};
