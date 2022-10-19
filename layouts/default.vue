<template>
  <v-app dark>
    <v-navigation-drawer
      v-if="$route.name!='index' && $route.name!='login' && $route.name!='register'"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in $auth.user.account_type!='Admin' ? items : admin_items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar v-if="false" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- is not logged in yet -->
    <v-app-bar color="white" v-if="true" :clipped-left="clipped" fixed app>
      <div align="start">
        <v-img
          class="pointer"
          src="/logo.jpeg"
          height="50"
          width="100"
          contain
          @click="goIndex"
        />
      </div>
      <v-spacer />
      <div
        :class="
          $route.name == 'contact'
            ? 'px-10 pointer secondary--text'
            : 'px-10 pointer'
        "
        @click="pushRoute('contact')"
      >
        Contact Us
      </div>
      <!-- <div
        :class="
          $route.name == 'redeem'
            ? 'px-10 pointer secondary--text'
            : 'px-10 pointer'
        "
        @click="pushRoute('redeem')"
      >
        Redeem
      </div> -->
      <div
        :class="
          $route.name == 'login'
            ? 'px-10 pointer secondary--text'
            : 'px-10 pointer'
        "
        @click="pushRoute('login')"
        v-if="!$auth.loggedIn"
      >
        Login
      </div>
      <div
        :class="
          $route.name == 'client-profile'
            ? 'px-10 pointer secondary--text'
            : 'px-10 pointer'
        "
        @click="pushRoute('client/profile')"
        v-else
      >
        My Profile
      </div>
      <!-- <div class="mx-5" v-if="$auth.loggedIn">
         <v-badge
          color="secondary"
          content="5"
          right
          overlap
          transition="slide-x-transition"
        >
        <v-icon class="pointer">mdi-cart-outline</v-icon>
         </v-badge> 
      </div>
      
      <div v-if="$auth.loggedIn">
        <v-badge
          color="secondary"
          content="99+"
          right
          overlap
          transition="slide-x-transition"
        >
          <v-icon class="pointer">mdi-bell-outline</v-icon>
        </v-badge>
      </div> -->
      <div class="px-10 pointer" v-if="!$auth.loggedIn">
        <v-btn dark depressed color="secondary" @click="pushRoute('register')">
          Sign up
        </v-btn>
      </div>
      <div class="px-10 pointer" v-else>
        <v-btn dark depressed color="secondary" @click="$auth.logout()">
          Logout
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid class="pa-0">
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  methods: {
    pushRoute(link) {
      window.location.href = `/${link}`;
    },
    goIndex() {
      window.location.href = "/";
    },
  },
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      iconFooter: [
        "mdi-facebook",
        "mdi-twitter",
        "mdi-linkedin",
        "mdi-instagram",
      ],
      items: [
        {
          icon: "mdi-apps",
          title: "Dashboard",
          to: "/student/dashboard",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Appointment",
          to: "/student/appointment",
        },
      ],
      admin_items: [
        {
          icon: "mdi-apps",
          title: "Dashboard",
          to: "/admin/dashboard",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Appointment",
          to: "/admin/appointment",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
