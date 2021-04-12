import AuthService from '../../services/auth_service'
import { snackbar, showLoading, hideLoading } from '../../repositories/plugins'
const state = {
   innerLoadingStatus: false,
   formData: {
      email: '',
   }

}
const getters = { 
    //  fetchUvn: (state) => {
    //     return state.formData.uvn;
    //  },
    //  fetchPassword: (state) => {
    //      return state.formData.password
    //  }
}
const mutations = { 
    // UPDATE_UVN(state, value){
    //     state.formData.uvn = value;
    // },
   
}
const actions = {
    async login({commit, state},instance){
        try{
            showLoading();
            let authService = new AuthService();
            authService.login(state.formData.email);
        }catch(err){
            snackbar('warning',err.message);
            hideLoading();
        }
    },

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}

