<template>
  <v-app id="inspire">
    <v-navigation-drawer
            mini-variant.sync="miniVariant"
            v-model="drawer"
            fixed
            app
    >
      <v-list dense>
        <v-list-tile
                :to="menu.to"
                :key="index"
                v-for="(menu, index) in menus"
                exact
        >
          <v-list-tile-action>
            <v-icon v-html="menu.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="menu.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid >
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'nuxt-property-decorator'
  import Menu from "./menu";

  @Component
  export default class defaultLayout extends Vue {
    drawer = null;
    menus: Array<Menu> = [
      { icon: 'home', title: 'Home', to: '/' },
    ];
    miniVariant: boolean = false;

    @Prop()
    string: string;

    handleClick() {
      console.log('clicked');
    }
  }
</script>
