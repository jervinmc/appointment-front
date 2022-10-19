const actions = {
    async add({ commit },  data ) {
      const response = await this.$axios.$post(
        "/appointment/",
        data
      );
      response.data = data;
    },
    async edit({ commit },  customer ) {
      const response = await this.$axios.$put(
        `/appointment/${customer.id}/`,
        customer
      );
      response.customer = customer;
    },
    async view({ commit }, ) {
        const response = await this.$axios.$get(
          "/appointment/"
        );
        commit("SET_APPOINTMENT", response);
      },
      async viewByUser({ commit }, ) {
        const response = await this.$axios.$get(
          `/appointment-user/`
        );
        commit("SET_APPOINTMENT", response);
      },
  };
  
  export default actions;
  