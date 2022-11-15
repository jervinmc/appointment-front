<template>
  <div>
    <v-card class="pa-16">
      <div></div>
      <v-row>
        <v-col>
          <v-row>
            <v-col cols="12">
              <div>Fullname</div>
              <div>
                <v-text-field
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.fullname"
                ></v-text-field>
              </div>
            </v-col>
             <v-col cols="12">
              <div>Office Name</div>
              <div>
                <v-select
                  :rules="standardRules"
                  outlined
                  dense
                  :items="office_data"
                  item-text="office_name"
                  item-value="office_name"
                  v-model="register.office_name"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12">
              <div>Description</div>
              <div>
                <v-textarea
                  :rules="standardRules"
                  outlined
                  dense
                  item-text="office_name"
                  item-value="office_name"
                  v-model="register.description"
                ></v-textarea>
              </div>
            </v-col>
            <v-col cols="12">
              <div>
                Date Appointment
                <div class="text-h5">
                  <v-menu
                    ref="dateMenu"
                    v-model="dateMenu"
                    :close-on-content-click="false"
                    :return-value.sync="register.date_appointment"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="register.date_appointment"
                        outlined
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="register.date_appointment" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="dateMenu = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dateMenu.save(register.date_appointment)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div align="end">
        <v-btn text @click="cancel"> Close </v-btn>
        <v-btn color="primary" @click="submitHandlerRegister">
          Confirm
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import Vue from "vue";
import * as uuid from "uuid";
import VueToastr from "vue-toastr";
Vue.use(VueToastr, {
  /* OverWrite Plugin Options if you need */
});
import { mapState, mapActions } from "vuex";
import validations from "@/utils/validations";
export default {
  computed: {
    ...mapState("users", ["user_residents"]),
    ...mapState("office", ["office_data"]),
    // residents(){
    //   return this.users.filter(data=>data.account_type=='Resident')
    // }
  },
  props: ["account_type"],
  auth: false,
  data() {
    return {
      dateMenu:false,
      userList: [],
      departMenu: false,
      ...validations,
      e1: 1,
      isLoading: false,
      register: {
        firstname: "",
        lastname: "",
        gender: "",
        is_active: true,
        gender: "",
        date_recorded: "",
        email: "",
        confirm_email: "",
        mobile_number: "",
        birthdate: "",
        address: "",
        province: "",
        account_type: "Resident",
        city: "",
        barangay: "",
        password: "",
        confirm_password: "",
      },
      isLoaded: false,
      ...validations,
      isValid: false,
      isRegister: false,
      // users: {
      //   email: "",
      //   password: "",
      // },
    };
  },
  created() {
    this.$store.dispatch('office/view')
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    async submitHandlerRegister() {
      this.isLoaded = true;
      try {
        this.register.user_id = this.$auth.user.id
        await this.$store.dispatch("appointment/add", this.register);
        this.$toastr.s("SUCCESS MESSAGE", "Successfully Added!");
        location.reload()
        this.$emit("cancel");
      } catch (error) {
        alert(error);
      }
      this.isLoaded = false;  
    },
    selectRegister() {
      if (this.isRegister) this.isRegister = false;
      else this.isRegister = true;
    },
  },
};
</script>

<style>
</style>