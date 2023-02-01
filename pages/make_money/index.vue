<template>
    <v-container class="ma-0 pa-0">
        <v-row>
            <v-col class="d-flex flex-md-row flex-column ma-0 pa-0" cols="12">
                <v-col class="fcolor ma-0 pa-0 rounded-lg" md="6">
                    <v-img cover height="530px" src="https://kennahstays.com/wp-content/uploads/2022/09/cover-header-for-anypage.webp"
                        class="rounded-lg align-center px-md-4 text-center">
                    </v-img>
                </v-col>
                <v-col md="6">
                    <div class="text-h4">Make Money With kennahstays</div>
                    <div class="graybg--text py-3">
                        We provide real estate property and residential units owners with hassle-free property management and maintenance,
                        turning their properties into income-generating assets.
                        
                        Based on revenue share, bringing their properties under the Kennah brand umbrella is a win-win, zero-risk solution for
                        busy property owners, with comprehensive quarterly reports and transfer of collected earnings, all taken care of by us.
                        
                        Become one of our property owners now.
                    </div>
                    <div>
                            <v-col cols="auto px-0">

                                <v-dialog v-model="dialog" persistent max-width="600px">
                                    <template v-slot:activator="{ on, attrs }" class="px-0">
                                        <v-btn v-bind="attrs" v-on="on" elevation="0" color="scolor white--text"
                                            class="rounded-xl rounded">Contact Us know</v-btn>
                                    </template>
                                    <v-form ref="form" v-model="form.valid" v-on:submit.prevent="submitForm">
                                    <v-card>
                                        <v-card-title>
                                            <span class="text-h5">Contact Form</span>
                                        </v-card-title>
                                        <v-card-text>
                                            <v-container>
                                                    <v-row>
                                                        <v-col cols="12" sm="6" md="6">
                                                            <v-text-field v-model="form.fields.FristName" :rules="form.rules.FristName" label="first name*" required></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="6">
                                                            <v-text-field v-model="form.fields.LastName" :rules="form.rules.LastName" label="last name*" required></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="12" md="12">
                                                            <v-text-field v-model="form.fields.Email" :rules="form.rules.Email" label="email*" required></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="12" md="12">
                                                            <v-text-field v-model="form.fields.Phone" :rules="form.rules.Phone" label="phone number*" required></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="4">
                                                            <v-text-field v-model="form.fields.Size" :rules="form.rules.Size" label="Size in sqm*" required></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="4">
                                                            <v-text-field v-model="form.fields.Rooms" :rules="form.rules.Rooms" label="Number of rooms*" required></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="4">
                                                            <v-text-field v-model="form.fields.Condition" :rules="form.rules.Condition" label="Condition*" required></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="12" md="12">
                                                            <v-text-field v-model="form.fields.Address" :rules="form.rules.Address" label="Address*" required></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="12" md="12">
                                                            <v-file-input 
                                                            v-model="files"
                                                            label="Attach pictures of current condition*"  
                                                            color="fcolor"
                                                            counter 
                                                            multiple 
                                                            show-size 
                                                            :show-size="1000">
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
                                                            <v-textarea v-model="form.fields.Subject" :rules="form.rules.Subject" counter label="Comment or Message *" ></v-textarea>
                                                        </v-col>
                                                    </v-row>   
                                            </v-container>
                                            <small>*indicates required field</small>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" text @click="dialog = false">
                                                Close
                                            </v-btn>
                                            <v-btn color="blue darken-1" text @click="dialog = false" :disabled="!form.valid" type="submit" >
                                                Sent
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-form>
                                </v-dialog>
                            </v-col> 
                    </div>
                </v-col>
            </v-col>
        </v-row>

    </v-container>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      files: [],
      Investments:[],
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

        async submitForm() {
        const FristName = this.form.fields.FristName;
        const LastName = this.form.fields.LastName;
        const Email = this.form.fields.Email;
        const Condition = this.form.fields.Condition;
        const Address = this.form.fields.Address;
        const Subject = this.form.fields.Subject;
        const Size = this.form.fields.Size;
        const Rooms = this.form.fields.Rooms;
        const Phone = this.form.fields.Phone;

        await this.$axios.$post("Investments", { FristName, LastName, Email, Condition, Address, Subject, Size, Rooms, Phone }).then((res) => {
            if (res._id) { 
                console.log(res);
            this.Investments.push(res);
            this.dialog = false;
            this.$refs.form.reset();
            } 
            this.$refs.form.validate();
        });
        
        },

},
  }
</script>
<style>

</style>