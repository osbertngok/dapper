<template>
  <v-app>
    <!-- Sidebar -->
    <v-navigation-drawer fixed app :mini-variant="miniVariant" v-model="drawer">
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Application
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <template v-for="item in items" @click="">
          <v-list-tile v-bind:key="item.title" v-bind:to="{ path: item.path }">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <!-- RHS Toolbar -->
    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-menu bottom left>
        <v-btn icon slot="activator">
          <v-icon>person</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile  @click="toggleMe = !toggleMe">
            <v-list-tile-title>My Account</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Sign out</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <!-- Display Area -->
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface IMenuItem {
    path: string;
    title: string;
    icon: string;
}

@Component({
  components: {
  },
})
export default class Home extends Vue {

    public drawer: boolean;
    public miniVariant: boolean;
    public right: boolean;
    public rightDrawer: boolean;
    public title: string;
    public snackbar: boolean;
    public toggleMe: boolean;
    public menuactive: boolean;
    public items: IMenuItem[];

    constructor() {
        super();
        this.drawer = true;
        this.miniVariant = false;
        this.right = true;
        this.rightDrawer = false;
        this.title = 'M.P.M.';
        this.snackbar = false;
        this.toggleMe = false;
        this.menuactive = false;

        this.items = [
        {
            path: '/layout',
            title: 'Layout',
            icon: 'dashboard',
        },
        {
            path: '/robots',
            title: 'Robot',
            icon: 'question_answer',
        }];
    }
}
</script>
