<template>
  <v-app>
    <v-navigation-drawer
    :value="true"
      app
      :mini-variant="drawer"
    >
      <div class="app__logo">
        <img src="https://web.lasa.vn/w/nhakhoa/wp-content/uploads/2019/07/1.png" alt="App Logo">
      </div>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          :to="item.path"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      dense
      flat
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-content>
      <v-container class="fill-height">
        <v-content>
          <router-view />
        </v-content>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import {routes} from '@/router'

  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      items: routes
    }),
  }
</script>

<style lang="scss">
  .app__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
</style>