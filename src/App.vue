<template>
  <v-app id="root">
    <!-- Nav  Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      expand-on-hover
    >
       <template v-slot:prepend>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item
            link
            two-line
          >
            <v-list-item-content>
              <v-list-item-title class="title">Sandra Adams</v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </template>

      <v-divider></v-divider>

      <v-list
        nav
        dense
      >
        <v-list-item link v-for="menu in drawerMenu" :key="menu.text" router :to="menu.route">
          <v-list-item-icon>
            <v-icon>{{menu.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{menu.text}}</v-list-item-title>
        </v-list-item>
      
      </v-list>
   
    </v-navigation-drawer>


    <!-- App Bar -->
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

    <!-- Main content -->
    <v-content>
      <v-container class="fill-height" fluid>
      <router-view></router-view>
      </v-container>
    </v-content>

    <!-- Floating Action Button -->
    <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    

    <!-- New Entry Dialog -->
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="v-card__title blue darken-3 white--text">Add New Student</v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col class="align-center justify-space-between" cols="12">
              <v-row align="center" class="mr-0">
                <v-avatar size="40px" class="mx-3">
                  <img src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png" alt />
                </v-avatar>
                <v-text-field placeholder="Name" />
              </v-row>
            </v-col>
           <v-col cols="6">
              <v-text-field prepend-icon="business" placeholder="Surname" />
            </v-col>
            <v-col cols="6">
              <v-text-field placeholder="Other Names" />
            </v-col>
            <v-col cols="6">
              <v-text-field prepend-icon="business" placeholder="Company" />
            </v-col>
            <v-col cols="6">
              <v-text-field placeholder="Job title" />
            </v-col>
            <v-col cols="12">
              <v-text-field prepend-icon="mail" placeholder="Email" />
            </v-col>
            <v-col cols="12">
              <v-text-field type="tel" prepend-icon="phone" placeholder="(000) 000 - 0000" />
            </v-col>
            <v-col cols="12">
              <v-text-field prepend-icon="mdi-notes" placeholder="Notes" />
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn text color="primary">More</v-btn>
          <v-spacer />
          <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  el: "#app",
  data: () => ({
    dialog: false,
    drawer: null,
    clipped: false,
    drawerMenu:[
      {icon: "fas fa-home", text: "Home", route: "/"},
      {icon: "fas fa-braille", text: "Programmes", route: "/programmes"},
      {icon: "fas fa-book-open", text: "Books", route: "/books"},
      {icon: "fas fa-chalkboard-teacher", text: "Staff", route: "/staff"},
      {icon: "fas fa-user-graduate", text: "Students", route: "/students"},
      {icon: "fas fa-money-bill-alt", text: "Fee Payments", route: "/fees"},
      {icon: "fas fa-calendar-alt", text: "Timetable", route: "/timetable"},
      {icon: "fas fa-tasks", text: "Attendance", route: "/attendance"}
 ],
  })
};
</script>

