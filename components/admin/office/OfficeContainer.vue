<template>
  <div class="pa-10">
    <v-dialog width="800" v-model="isAdd">
      <div>
        <v-card class="pa-16">
          <div></div>
          <v-row>
            <v-col>
              <v-row>
                <v-col cols="12">
                  <div>Office Name</div>
                  <div>
                    <v-text-field
                      :rules="standardRules"
                      outlined
                      dense
                      v-model="register.office_name"
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <div align="end">
            <v-btn text @click="isAdd = false"> Close </v-btn>
            <v-btn color="primary" @click="submitHandlerRegister">
              Submit
            </v-btn>
          </div>
        </v-card>
      </div>
    </v-dialog>
    <div>
      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <div class="text-h5">
                <b>Offices</b>
              </div>
            </v-col>
            <v-col align="end">
              <v-btn outlined @click="isAdd = true">Add Office</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-data-table
      class="pa-5"
      :headers="headers"
      :items="office_data"
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
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("office", ["office_data"]),
  },
  created() {
    this.$store.dispatch("office/view");
  },
  methods: {
    async submitHandlerRegister() {
      await this.$store.dispatch("office/add", this.register);
      alert("Successfully submitted!");
      location.reload()
    },
  },
  data() {
    return {
      isAdd: false,
      register: {
        office_name: "",
      },
      headers: [
        { text: "ID", value: "id" },
        { text: "Office Name", value: "office_name" },
        // { text: "Date", value: "date_appointment" },
        // { text: "Actions", value: "opt" },
        ,
      ],
    };
  },
};
</script>

<style>
</style>