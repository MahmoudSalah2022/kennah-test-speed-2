<template>
    <v-app>
    
    <v-row class="grey lighten-4" flat>
        <sidebar/>
        <v-col id="aparts-section" class="ma-4 pa-0">
            <v-col id="welcome-aparts-section" class="ma-0 pa-0">
                <h3>Welecom In Your Apartmentes</h3>
            </v-col>
            <v-col id="add-apartment" class="my-4 pa-0" >
                    <v-btn elevation="2" color="fcolor white--text" to="/add-apartmentes">
                        Add Apartment
                    </v-btn>
            </v-col>
            <v-col id="apartmentes-list" class="ma-0 pa-0">
                    <v-simple-table >
                        <template v-slot:default>
                        <thead>
                            <tr>
                            <th class="text-left">
                                Name
                            </th>
                            <th class="text-left">
                                Number Of Roomes
                            </th>
                            <th class="text-left">
                                Number Of Guest
                            </th>
                            <th class="text-left">
                                Price Night
                            </th>
                            </tr>
                        </thead>
                                    <tbody v-for="(apartment, i) in apartmentes" :key="i">
                                        <tr>
                                        <td>{{ apartment.Name }}</td>
                                        <td>{{ apartment.NumberGuest }}</td>
                                        <td>{{ apartment.NumberRooms }}</td>
                                        <td>{{ apartment.Price }}</td>
                                        </tr>
                                    </tbody>
                            
                        </template>
                    </v-simple-table>
            </v-col>

        </v-col>
    </v-row>

    </v-app>
  </template>
  
  <script>
  export default {
    layout:'dashboard',
    data: () => ({
        apartmentes: [],
    }),

    methods: {              

    },
    async fetch() {
            await this.$axios.$get("apartmentes").then((res) => {
            console.log(res);
            if (res?.length > 0) {
                this.apartmentes = res;
            }
            });
        },
 
    fetchOnServer: false,
  }
  </script>
