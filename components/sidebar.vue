<template>
  <v-card flat>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      expand-on-hover
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>supervisor name</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon >{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <v-list-item-title >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', route:'/dashboardadmin' },
          { title: 'Apartmentes', icon: 'mdi-home-city', route:'/apartmentes-board' },
          { title: 'Amenities', icon: 'mdi-wifi', route:'/amenities'},
          { title: 'Customer', icon: 'mdi-account-group-outline', route:'/customers-board' },
          { title: 'Investment', icon: 'mdi-cash', route:'/investments-board' },
          { title: 'My Account', icon: 'mdi-account' },
        ],
        mini: true,
      }
    },
  }
</script>