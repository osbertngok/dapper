import Vue from 'vue';
import router from './router';
import store from './store';

import Vuetify from 'vuetify/es5/components/Vuetify';
import VApp from 'vuetify/es5/components/VApp';
import VGrid from 'vuetify/es5/components/VGrid';
import VCard from 'vuetify/es5/components/VCard';
import VToolbar from 'vuetify/es5/components/VToolbar';
import VTooltip from 'vuetify/es5/components/VTooltip';
import VBtn from 'vuetify/es5/components/VBtn';
import VIcon from 'vuetify/es5/components/VIcon';
import VForm from 'vuetify/es5/components/VForm';
import VTextField from 'vuetify/es5/components/VTextField';
import VNavigationDrawer from 'vuetify/es5/components/VNavigationDrawer';
import VList from 'vuetify/es5/components/VList';
import VDivider from 'vuetify/es5/components/VDivider';
import VSubheader from 'vuetify/es5/components/VSubheader';
import VMenu from 'vuetify/es5/components/VMenu';
import VDataIterator from 'vuetify/es5/components/VDataIterator';
import VDialog from 'vuetify/es5/components/VDialog';
import VSelect from 'vuetify/es5/components/VSelect';
import VSwitch from 'vuetify/es5/components/VSwitch';
import VCheckbox from 'vuetify/es5/components/VCheckbox';
import VSnackbar from 'vuetify/es5/components/VSnackbar';
import VExpansionPanel from 'vuetify/es5/components/VExpansionPanel';
import transitions from 'vuetify/es5/components/transitions';

import App from './App.vue';

Vue.use(Vuetify, {
    components: {
        VApp,
        VGrid,
        VCard,
        VToolbar,
        VTooltip,
        VBtn,
        VIcon,
        VForm,
        VTextField,
        VNavigationDrawer,
        VDivider,
        VList,
        VSubheader,
        VMenu,
        VDataIterator,
        VDialog,
        VSelect,
        VSwitch,
        VCheckbox,
        VSnackbar,
        VExpansionPanel,
        transitions,
    }});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
