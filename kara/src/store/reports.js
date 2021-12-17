import axios from 'axios';

export default {
 state :{
  reports: []
    },
    actions: {
        async fetchReports({ commit }) {
            const response = await axios.get(
                'http://localhost:3000/reported'
            );

            commit('setReports', response.data);
        },
    },
    mutations: {
        setReports: (state, reports) => (state.reports = reports),
    }

};
