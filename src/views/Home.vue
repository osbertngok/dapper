<template>
  <v-app>
    <!-- Sidebar -->
    <v-navigation-drawer>
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
    <!-- Display Area -->
    <router-view></router-view>
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

    public items: IMenuItem[];

    constructor() {
        super();
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
            },
        ];
    }
}
</script>
