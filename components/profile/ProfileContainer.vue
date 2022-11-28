<template>
  <div class="pa-10">
    <v-dialog v-model="isEdit" width="500">
        <v-card class="pa-16">
            <div align="center">
                
            </div>
            <div>
                <div>
                    Firstname
                </div>
                <div>
                    <v-text-field outlined v-model="register.firstname" dense></v-text-field>
                </div>
                <div>
                    Lastname
                </div>
                <div>
                    <v-text-field outlined v-model="register.lastname" dense></v-text-field>
                </div>
            </div>
            <div >
                <v-row>
                    <v-col align="end">
                        <v-btn @click="isEdit = false" > Cancel</v-btn>
                    </v-col>
                    <v-col align="start">
                        <v-btn @click="submitHandler" > Save Changes</v-btn>
                    </v-col>
                </v-row>
            </div>
        </v-card>
    </v-dialog>
    <div align="center" class="text-h5">
        My Profile
    </div>
    <div>
        <v-row>
            <v-col>
                <div>
                    Fullname: {{$auth.user.firstname}} {{$auth.user.lastname}}
                </div>
                <div>
                    Email: {{$auth.user.email}}
                </div>
            </v-col>
        </v-row>
        <div align="end">
            <v-btn outlined @click="editProfile">Edit Profile</v-btn>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            register:{},
            isEdit:false
        }
    },
    methods:{
        submitHandler(){
            this.register.id=this.$auth.user.id
            this.$store.dispatch('users/editUser',this.register)
            alert("Successfully Updated!")
            this.isEdit = false
        },
        editProfile(){
            this.isEdit = true
        }
    }
}
</script>

<style>

</style>