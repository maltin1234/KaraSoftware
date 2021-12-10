import axios from 'axios';

export default {
 state :{
  assets: []
    },
    actions: {
        async fetchAssets({ commit }) {
            const response = await axios.get(
                'http://localhost:3000/assets'
            );

            commit('setAssets', response.data);
        },
    },
    mutations: {
        setAssets: (state, assets) => (state.assets = assets),
    }

};
