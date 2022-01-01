import axios from 'axios';

export default {
  state: {
     strict: true,
    reports: [],
    newArr:[]
  
  },
  getters: {
    getReport: (state) => (serialNum) => {
      console.log(state.reports)
    return state.reports.find(x => x.serialNum === serialNum)
    },
    reported: (state) => state.reports,
    //        getQuoteById: (state) => (id) => {
    //   console.log(state.quotes)
    //   return state.quotes.find(quote => quote.id === id)
    // }, 
},
    actions: {
        async fetchReports({ commit }) {
            const response = await axios.get(
                'http://localhost:3000/reported'
            );

            commit('setReports', response.data);
      },
       async addReport({ commit }, payload) {
      const response = await axios.post(
          'http://localhost:3000/reported', payload);
          
      commit("newReports", response.data);
    },
    },
 
 
    mutations: {
      setReports: (state, payload) => (state.reports = payload),
       newReports: (state, report) => state.reports.unshift(report),
}
    
    


};
