<template>
  <div class="pa-16">
    <div>
      <v-row>
        <v-col align="center">
          <div>
            <div class="text-h2 pb-5">Time Check</div>
            <div class="text-h4" v-if="$auth.user.is_checked">
              {{ formatDate($auth.user.updated_at) }}
            </div>
            <div class="pt-5">
              <v-btn
                color="secondary"
                outlined
                height="100"
                @click="checkIn"
                v-if="!$auth.user.is_checked"
              >
                <div class="text-h4 pa-10">Clock In</div>
              </v-btn>
              <v-btn
                color="secondary"
                outlined
                height="100"
                @click="checkOut"
                v-else
              >
                <div class="text-h4 pa-10">Clock Out</div>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  methods: {
    checkOut() {
      this.hasChecked = true;
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
      this.register.user_id = this.$auth.user.id;
      this.register.time_type = "Clock Out";
      this.$store.dispatch("logs/add", this.register);
      this.$store.dispatch("users/editUser", {
        id: this.$auth.user.id,
        is_checked: false,
      });
    },
    formatDate(val) {
      return moment(String(val)).format("YYYY-MM-DD hh:mm");
    },
    checkIn() {
      this.hasChecked = true;
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
      this.register.user_id = this.$auth.user.id;
      this.register.time_type = "Clock In";
      this.$store.dispatch("logs/add", this.register);

      this.$store.dispatch("users/editUser", {
        id: this.$auth.user.id,
        is_checked: true,
      }).then((res)=>{
      
      });
        location.reload()
    },
  },
  data() {
    return {
      timestamp: "",
      hasChecked: false,
      register: {},
    };
  },
};
</script>

<style>
</style>