import axios from 'axios';

export default {
  state: {

    reports: [],
 
    message: 'Hello Vuex',
   
    
  
  },
  getters: {
    getReport: (state) => (serialNum) => {
      console.log(state.reports)
    return state.reports.find(x => x.serialNum === serialNum)
    },
    reported: (state) => state.reports,
    doneReports: (state) => state.reports.filter(report => report.done == true),

    unfinReports: (state) => state.reports.filter(report => report.done == false) 

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
         async updateReports({ commit }, value) {
    const response = await axios.put(
      `http://localhost:3000/reported/${value.id}`,
      value
    );

    console.log(response.data);

    commit('setReports', response.data);
  }
    },
 
 
    mutations: {
      setReports: (state, payload) => (state.reports = payload),
      newReports: (state, report) => state.reports.unshift(report),
       updateMessage (state, message) {
            state.message = message
      },
         updateReports (state,payload) {
    state.reports.done = payload
  }
  //      updateTodo: (state, value) => {
  //   const index = state.reports.findIndex(report => report.id === value.id);
  //   if (index !== -1) {
  //     state.reports.splice(index, 1, value);
  //   }
  // }
}
    
    


};
