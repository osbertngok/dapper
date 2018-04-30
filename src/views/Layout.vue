<template>
  <!-- https://vuetifyjs.com/en/layout/grid -->
  <!-- wrap: Allows children to wrap within the container if the elements use more than 100%. -->
  <!-- fluid: Removes viewport size breakpoints -->
  <!-- grid-list-XX: Sets the gutter between grid list items ranging from 2px to 24px -->
  <v-container v-bind:wrap="true" v-bind:fluid="true" v-bind:grid-list-lg="true">
    <v-layout ref="elLayoutCanvas">

    </v-layout>
  </v-container>
</template>

<script lang="ts">
    import { Vue } from 'vue-property-decorator';

    interface IMap {
        length: number;
        width: number;
    }
    export default class Layout extends Vue {
        public map: IMap;

        private _displayRatio: number;

        public get displayRatio(): number {
            return this._displayRatio;
        }

        constructor() {
            super();
            this.map = {
                length: 2300,
                width: 1500,
            };
            this._displayRatio = 1;
            this.updateDisplayRatio();
        }

        /**
         * Attempts to update DisplayRatio. Return true if successful, false if not.
         */
        public updateDisplayRatio(): boolean {
            // Validate this.map
            if (!this.map || this.map.length <= 0 || this.map.width <= 0) {
                return false;
            }

            // Element should be ready
            if (!this.$refs || !this.$refs.elLayoutCanvas) {
                return false;
            }
            const elLayoutCanvas: Element = this.$refs.elLayoutCanvas as Element;
            const elWidth: number = elLayoutCanvas.clientWidth;
            const elHeight: number = elLayoutCanvas.clientHeight;
            this._displayRatio =  Math.min(elWidth / this.map.length, elHeight / this.map.width);

            return true;
        }
    }
</script>
