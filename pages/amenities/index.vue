<template>
  <v-app id="appa">
  
  <v-row class="grey lighten-4" flat>
      <sidebar/>
      <v-col id="aparts-section" class="ma-4 pa-0" >
          <v-col id="welcome-aparts-section" class="ma-0 pa-0">
              <h3>Welecom In Your Amenities</h3>
          </v-col>
          <v-col id="add-amenitie" class="my-4 pa-0" >
                  <v-btn elevation="2" color="fcolor white--text" @click="dialog = true">
                      Add Amenities
                  </v-btn>
          </v-col>
          <v-col id="amenities-list" class="ma-0 pa-0">
                  <v-simple-table>
                      <template v-slot:default>
                      <thead>
                          <tr>
                            <th class="text-left">
                                Name
                            </th>
                          </tr>
                      </thead>
                                  <tbody v-for="(amenitie, i) in amenities" :key="i">
                                      <tr>
                                      <td>{{ amenitie.Name }}</td>
                                      </tr>
                                  </tbody>
                          
                      </template>
                  </v-simple-table>
          </v-col>
          <v-dialog v-model="dialog" max-width="400px">
              <v-card>
                <v-toolbar elevation="0">
                  <v-toolbar-title>New Amenitie</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon @click.stop="dialog = false" class="mr-0">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-divider></v-divider>
                <v-card-text v-if="dialog" class="pa-4">
                  <v-form ref="form" v-model="form.valid" v-on:submit.prevent="submitForm">
                    <v-text-field v-model="form.fields.Name" :rules="form.rules.Name" label="Amenitie Name" outlined></v-text-field>
                    <v-btn depressed color="primary" type="submit" :disabled="!form.valid"><span>Add</span></v-btn>
                  </v-form>
                </v-card-text>
              </v-card>
          </v-dialog>
      </v-col>
  </v-row>

  </v-app>
</template>

<script>
export default {
  layout:'dashboard',
  data: () => ({
    amenities: [],
    dialog: false,
    form: {
      valid: false,
      fields: { Name: "" },
      error:[],
      rules: {
        Name: [(v) => !!v || ' This field is required'],
      },
    },
  }),

  methods: {    
    
    async submitForm() {
      const Name = this.form.fields.Name;
      await this.$axios.$post("amenities", { Name }).then((res) => {
        if (res._id) {
          this.amenities.push(res);
          this.dialog = false;
          this.$refs.form.reset();
        } 
          this.$refs.form.validate();
      });
      
    },

  },
  async fetch() {
          await this.$axios.$get("amenities").then((res) => {
          console.log(res);
          if (res?.length > 0) {
              this.amenities = res;
          }
          });
      },

  fetchOnServer: false,
}
</script>
