<template>
  <v-app >
    <!-- Start header -->
    <v-app-bar color="white" :clipped-left="clipped" flat >
     <NavBar/>
    </v-app-bar>
    <!-- End header -->
    <!-- Start page Content -->
    <v-main>
      <v-container >
          <ApartCard />
      </v-container>
    </v-main>
    <!-- end page Content -->
    <!-- Start Footer -->
    <v-footer color="white" :absolute="!fixed" app class="logo py-4 d-flex justify-center flex-column"
    >
      <FooterSec/>
      <span>Copyright &copy; {{ new Date().getFullYear() }} Kennah</span>
    </v-footer>
    <!-- end Footer -->
  </v-app>
</template>

<style>

</style>

<script>


export default {
    name: "DefaultLayout",
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: "mdi-apps",
                    title: "Welcome",
                    to: "/"
                },
                {
                    icon: "mdi-chart-bubble",
                    title: "Inspire",
                    to: "/inspire"
                }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: "Vuetify.js"
        };
    },
}
</script>
