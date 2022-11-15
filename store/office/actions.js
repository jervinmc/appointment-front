const actions = {
    async add({ commit },  data ) {
      const response = await this.$axios.$post(
        "/office/",
        data
      );
      response.data = data;
    },
    async edit({ commit },  data ) {
      const response = await this.$axios.$put(
        `/office/${data.id}/`,
        data
      );
      response.data = data;
    },
    async view({ commit }, ) {
        const response = await this.$axios.$get(
          "/office/"
        );
        commit("SET_OFFICE", response);
      },
  };
  
  export default actions;
  