<template>
  <v-app id="appa">
  
  <v-row class="grey lighten-4" flat>
      <sidebar/>
      <v-col id="aparts-section" class="ma-4 pa-0">
          <v-col id="welcome-aparts-section" class="ma-0 pa-0">
              <h3>Welecom In Your Investment customer</h3>
          </v-col>
          <v-col id="customer-list" class="ma-0 pa-0">
                  <v-simple-table >
                      <template v-slot:default>
                      <thead>
                          <tr>
                          <th class="text-left">
                              Name
                          </th>
                          <th class="text-left">
                              Phone
                          </th>
                          <th class="text-left">
                              Email
                          </th>
                          <th class="text-left">
                              Subject
                          </th>
                          </tr>
                      </thead>
                                  <tbody v-for="(investment, i) in Investments" :key="i">
                                      <tr>
                                      <td>{{ investment.FristName }} {{ investment.LastName }}</td>
                                      <td>{{ investment.Phone }}</td>
                                      <td>{{ investment.Email }}</td>
                                      <td>{{ investment.Subject }}</td>
                                      <td>                   
                                          <v-menu offset-y>
                                              <template v-slot:activator="{ on, attrs }">
                                              <v-btn
                                              icon
                                                  v-bind="attrs"
                                                  v-on="on"
                                              >
                                              <v-icon color="grey lighten-1">mdi-dots-vertical</v-icon>
                                              </v-btn>
                                              </template>
                                              <v-list>
                                              <v-list-item>
                                                  <v-list-item-title>                        
                                                      <v-list-item-action class="ml-0 d-flex flex-row justify-start">
                                                      <v-btn id="optionPanel" @click = "deleteItem(investment._id)" icon plain> 
                                                          <v-icon color="grey lighten-1">mdi-delete
                                                          </v-icon> 
                                                          Delete
                                                      </v-btn>
                                                      </v-list-item-action>
                                                  </v-list-item-title>
                                              </v-list-item>
                                              <v-list-item>
                                                  <v-list-item-title>
                                                      <v-list-item-action class="ml-0 d-flex flex-row justify-start">
                                                      <v-btn id="optionPanel" @click=" editDialog = true , openEditDialog(
                                                           investment._id,
                                                           investment) " icon plain> 
                                                          <v-icon color="grey lighten-1">mdi-pencil
                                                          </v-icon> 
                                                          Edit
                                                      </v-btn>
                                                      </v-list-item-action>
                                                  </v-list-item-title>
                                              </v-list-item>
                                              </v-list>
                                          </v-menu>
                                          </td>
                                      </tr>
                                  </tbody>
                          
                      </template>
                  </v-simple-table>
          </v-col> 
      </v-col>
  </v-row>
  <v-dialog v-model="editDialog" max-width="1360px">
    <v-card>
      <v-toolbar elevation="0">
        <v-toolbar-title>Edit Investment</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="editDialog = false " class="mr-0">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text v-if="editDialog" class="pa-4">
        <v-form ref="form" v-model="form.valid" v-on:submit.prevent="editForm">
          <v-row>
              <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="form.fields.FristName" :rules="form.rules.FristName" label="first name*"
                      required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="form.fields.LastName" :rules="form.rules.LastName" label="last name*"
                      required></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                  <v-text-field v-model="form.fields.Email" :rules="form.rules.Email" label="email*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                  <v-text-field v-model="form.fields.Phone" :rules="form.rules.Phone" label="phone number*"
                      required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="form.fields.Size" :rules="form.rules.Size" label="Size in sqm*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="form.fields.Rooms" :rules="form.rules.Rooms" label="Number of rooms*"
                      required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="form.fields.Condition" :rules="form.rules.Condition" label="Condition*"
                      required></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                  <v-text-field v-model="form.fields.Address" :rules="form.rules.Address" label="Address*"
                      required></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                  <v-file-input v-model="files" label="Attach pictures of current condition*" color="fcolor" counter multiple
                      show-size :show-size="1000">
                      <template v-slot:selection="{ index, text }">
                          <v-chip v-if="index < 2" color="fcolor" dark label small>
                              {{ text }}
                          </v-chip>
          
                          <span v-else-if="index === 2" class="text-overline grey--text text--darken-3 mx-2">
                              +{{ files.length - 2 }} File(s)
                          </span>
                      </template>
                  </v-file-input>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                  <v-textarea v-model="form.fields.Subject" :rules="form.rules.Subject" counter
                      label="Comment or Message *"></v-textarea>
              </v-col>
          </v-row>
          <v-btn depressed color="primary" type="submit" :disabled="!form.valid"><span>Edit</span></v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
  </v-app>
</template>
  
<script>
  export default {
    layout:'dashboard',
    data: () => ({
    Investments: [],
    editDialog: false,
    editInvestmentId: null,
    form: {
      valid: false,
      fields: { 
        FristName: "",
        LastName: "",
        Email: "",
        Phone: "",
        Condition: "",
        Address: "",
        Subject: "",
        Size: "",
        Rooms: "",
                },
      error:[],
      rules: {
        FristName: [(v) => !!v || ' This field is required'],
        LastName: [(v) => !!v || ' This field is required'],
        Email: [(v) => !!v || ' This field is required'],
        Phone: [(v) => !!v || ' This field is required'],
        Condition: [(v) => !!v || ' This field is required'],
        Address: [(v) => !!v || ' This field is required'],
        Subject: [(v) => !!v || ' This field is required'],
        Size: [(v) => !!v || ' This field is required'],
        Rooms: [(v) => !!v || ' This field is required'],
      },
    },
  }),

    methods: {              

        async editForm(id){
        await this.$axios.$put(`Investments/${this.editInvestmentId}`, this.form.fields ).then((res) => {
            if (res._id) {
                this.Investments.forEach((Investment)=>{
                if (Investment._id === res._id){
                    Investment = res
                }
                });
                this.editDialog = false;
                this.$refs.form.reset();
            } else if (res?.error === "duplicated") {
                const Name = this.form.fields.Name;
                this.form.rules.Name.push(
                (v) => (!!v && v) !== Name || "This Investment already exists"
                );
                this.$refs.form.validate();
            }
            console.log(res)
        });
        },

        openEditDialog(id, value){
        this.editInvestmentId = id;
        this.editDialog= value;
        this.form.fields= value;

        },

        
        async deleteItem(id) {
        await this.$axios.$delete(`Investments/${id}`)
            .then((res) => {
            if(res?.success === true){
                this.Investments.forEach((Investment , i)=>{
                if(category._id === id){
                    this.Investments.splice(i, 1);
                }
                });
            }
            })
            .catch(errors => {
            console.log(errors);
            });
        },

    },

    async fetch() {
            await this.$axios.$get("Investments").then((res) => {
            console.log(res);
            if (res?.length > 0) {
                this.Investments = res;
            }
            });
        },
 
    fetchOnServer: false,
  }
  </script>
