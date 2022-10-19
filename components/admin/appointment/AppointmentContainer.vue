<template>
  <div class="pa-10">
    <div>
        <v-row>
            <v-col>
                <div class="text-h5">
                    <b>Appointment Schedule List</b>
                </div>
            </v-col>
        </v-row>
    </div>
    <v-data-table
      class="pa-5"
      :headers="headers"
      :items="appointment_data"
      :search="search"
      :loading="isLoading"
    >
      <template v-slot:loading>
        <v-skeleton-loader
          v-for="n in 5"
          :key="n"
          type="list-item-avatar-two-line"
          class="my-2"
        ></v-skeleton-loader>
      </template>
      <template #[`item.opt`]="{ item }">
        <v-menu offset-y z-index="1">
          <template v-slot:activator="{ attrs, on }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item @click.stop="editItem(item)">
              <v-list-item-content>
                <v-list-item-title>Edit</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click.stop="deleteItem(item)">
              <v-list-item-content>
                <v-list-item-title>Delete</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
  computed:{
    ...mapState('appointment',['appointment_data'])
  },
  created(){
    this.$store.dispatch('appointment/view')
  },
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "Fullname", value: "fullname" },
        { text: "Date", value: "date_appointment" },
        { text: "Actions", value: "opt" },
        ,
      ],
    };
  },
};
</script>

<style>
</style>