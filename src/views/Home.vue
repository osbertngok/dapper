<template>
  <v-app>
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
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface IMenuItem {
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
                title: 'Home',
                icon: 'dashboard',
            },
            {
                title: 'About',
                icon: 'question_answer',
            },
        ];
    }
}
</script>
