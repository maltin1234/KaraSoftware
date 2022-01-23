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
         async addAsset({ commit }, payload) {
      const response = await axios.post(
          'http://localhost:3000/assets', payload);
          
      commit("newAssets", response.data);
        },
           async updateTodo({ commit }, updTodo) {
    const response = await axios.put(
      `http://localhost:3000/assets/${updTodo.id}`,
      updTodo
    );

    console.log(response.data);

    commit('updateTodo', response.data);
        }

    },
    mutations: {
        setAssets: (state, assets) => (state.assets = assets),
        newAssets: (state, asset) => state.assets.unshift(asset),
         updateTodo: (state, updTodo) => {
    const index = state.assets.findIndex(asset => asset.id === updTodo.id);
    if (index !== -1) {
      state.assets.splice(index, 1, updTodo);
    }
  }
    }

};
