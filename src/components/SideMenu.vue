  <template>
  <div>
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

          <v-list-item link two-line>
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

      <v-list nav dense>
        <v-list-item link v-for="menu in drawerMenu" :key="menu.text" router :to="menu.route">
          <v-list-item-icon>
            <v-icon>{{menu.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{menu.text}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
    
    <script>
export default {
  name: "SideMenuDrawer",
  data() {
    return {
      drawer: null,
      clipped: false,
      drawerMenu: [
        { icon: "fas fa-home", text: "Home", route: "/" },
        { icon: "fas fa-braille", text: "Programmes", route: "/programmes" },
        { icon: "fas fa-book-open", text: "Books", route: "/books" },
        { icon: "fas fa-chalkboard-teacher", text: "Staff", route: "/staff" },
        { icon: "fas fa-user-graduate", text: "Students", route: "/students" },
        { icon: "fas fa-money-bill-alt", text: "Fee Payments", route: "/fees" },
        { icon: "fas fa-calendar-alt", text: "Timetable", route: "/timetable" },
        { icon: "fas fa-tasks", text: "Attendance", route: "/attendance" }
      ]
    };
  }
};
</script>