import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        list: [],
    },
    mutations: {
        setList(state, payload) {
            state.list = [...payload];
        },
    },
    actions: {
        async getList(store, options) {
            const { http } = Vue.prototype;
            let res = await http(options.url, options.data, options.method);
            const { code, msg, data } = res.data;
            if (code === 1) {
                store.commit('setList', data);
            }
            if (code !== 1) {
                alert(msg);
            }
        },
    },
    modules: {},
});
