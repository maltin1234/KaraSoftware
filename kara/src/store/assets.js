import axios from 'axios';

export default {
 state :{
  assets: []
    },
    actions: {
        async fetchAssets({ commit }) {
            const response = await axios.get(
                'http://localhost:3000/assets/?_limit=10'
            );

            commit('setAssets', response.data);
            console.log(response.data)
        },
         async addAsset({ commit }, payload) {
      const response = await axios.post(
          'http://localhost:3000/assets', payload);
          
      commit("newAssets", response.data);
    },
    },
    mutations: {
        setAssets: (state, assets) => (state.assets = assets),
         newAssets: (state, asset) => state.assets.unshift(asset),
    }

};
