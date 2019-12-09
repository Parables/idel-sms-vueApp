    <!-- App Bar -->
<template>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <!-- Menu Drawer Icon -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- Title on Toolbar -->
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Idel - Sekondi</span>
      </v-toolbar-title>
      <!-- Search box with icon -->
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      />
      <v-spacer />
      <v-btn icon class="hidden-md-and-up">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <!-- Notification Icon -->
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <!-- Settings -->
      <v-btn icon xlarge v-on="setting-clicked">
        <v-icon>mdi-settings</v-icon>
      </v-btn>

      <!-- User Avartar -->
      <v-btn icon xlarge v-on="on">
        <v-avatar size="32px" item>
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg" alt="Vuetify" />
        </v-avatar>
      </v-btn>

      <!-- More Options -->
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
</template>

<script>
export default {
name: 'AppBar',
data() {
    return {
        
    }
},
}
</script>

<style>

</style>