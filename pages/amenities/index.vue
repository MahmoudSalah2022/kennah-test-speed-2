<template>
  <v-app id="appa">
  
  <v-row class="grey lighten-4" flat>
      <sidebar/>
      <v-col id="Amenity-section" class="ma-4 pa-0" >
          <v-col id="welcome-Amenity-section" class="ma-0 pa-0">
              <h3>Welecom In Your Amenities</h3>
          </v-col>
          <v-col id="add-Amenity" class="my-4 pa-0" >
                  <v-btn elevation="2" color="fcolor white--text" @click="dialog = true">
                      Add Amenity
                  </v-btn>
          </v-col>
          <v-col id="Amenities-list" class="ma-0 pa-0"  col="12" xl="1" sm="3" lg="1" md="2" xs="1">
                  <v-simple-table>
                      <template v-slot:default>
                        <thead>
                            <tr >
                              <th class="text-left headicon ma-0" >
                                  Icon
                              </th>
                              <th class="text-left">
                                  Name
                              </th>

                            </tr>
                        </thead>
                        <tbody v-for="(Amenity, i) in Amenities" :key="i">
                                        <tr>
                                          <td class="headicon ma-0"><v-icon>{{ Amenity.Icon }}</v-icon></td>
                                          <td>{{ Amenity.Name }}</td>
                                          
                                        </tr>
                        </tbody>     
                      </template>
                  </v-simple-table>
          </v-col>
          <v-dialog v-model="dialog" max-width="400px">
              <v-card>
                <v-toolbar elevation="0">
                  <v-toolbar-title>New Amenity</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon @click.stop="dialog = false" class="mr-0">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-divider></v-divider>
                <v-card-text v-if="dialog" class="pa-4">
                  <v-form ref="form" v-model="form.valid" v-on:submit.prevent="submitForm">
                    <v-text-field v-model="form.fields.Name" :rules="form.rules.Name" label="Amenity Name" outlined></v-text-field>
                    <v-text-field v-model="form.fields.Icon" :rules="form.rules.Icon" label="Amenity Icon" outlined></v-text-field>
                    <v-btn depressed color="primary" type="submit" :disabled="!form.valid"><span>Add</span></v-btn>
                  </v-form>
                </v-card-text>
              </v-card>
          </v-dialog>
      </v-col>
  </v-row>

  </v-app>
</template>

<style>

.headicon {
    max-width: 50px !important;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
}

</style>

<script>
export default {
  layout:'dashboard',
  data: () => ({
    Amenities: [],
    dialog: false,
    form: {
      valid: false,
      fields: { Name: "" ,Icon:""},
      error:[],
      rules: {
        Name: [(v) => !!v || ' This field is required'],
        Icon: [(v) => !!v || ' This field is required'],
      },
    },
  }),

  methods: {    
    
    async submitForm() {
     const data={
         Name : this.form.fields.Name,
         Icon : this.form.fields.Icon,
      }
      await this.$axios.$post("Amenities", data ).then((res) => {
        if (res._id) {
          this.Amenities.push(res);
          this.dialog = false;
          this.$refs.form.reset();
        } 
          this.$refs.form.validate();
      });
      
    },

  },
  async fetch() {
          await this.$axios.$get("Amenities").then((res) => {
          console.log(res);
          if (res?.length > 0) {
              this.Amenities = res;
          }
          });
      },

  fetchOnServer: false,
}
</script>
