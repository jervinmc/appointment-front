const actions = {
    async add({ commit },  data ) {
      const response = await this.$axios.$post(
        "/logs/",
        data
      );
      response.data = data;
    },
    async edit({ commit },  data ) {
      const response = await this.$axios.$put(
        `/logs/${data.id}/`,
        data
      );
      response.data = data;
    },
    async view({ commit }, ) {
        const response = await this.$axios.$get(
          "/logs/"
        );
        commit("SET_EVENT", response);
      },
  };
  
  export default actions;
  