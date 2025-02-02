import 'core-js/stable';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime';
import createApp from 'vue';
import Vuex from 'vuex';
// store
import fm from './store';
// App
import App from './FileManager.vue';

createApp.use(Vuex);

// create new store
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: { fm },
});

createApp.config.productionTip = process.env.NODE_ENV === 'production';

window.fm = createApp({
  store,
  render: (h) => h(App),
}).$mount('#fm');
