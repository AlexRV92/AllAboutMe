<template>
    <section class="ftco-section contact-section">
        <div class="container mt-5">
            <div class="row d-flex justify-content-center">
                <div class="col-md-6 ">
                    <form action="#" class="contact-form">
                        <div class="row">
                            <div class="col-md-12">
                                <h3>Register</h3>
                                <p>Please fill this form to create an account.</p>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input v-model="registrationData.firstname" type="text" class="form-control" placeholder="Your name" required ref="firstname" tabindex="1">
                                </div>
                                <div class="form-group">
                                    <input v-model="registrationData.email" type="email" class="form-control" placeholder="Your email" required  tabindex="3">
                                </div>
                                <div class="form-group">
                                    <input v-model="registrationData.phone" type="phone" class="form-control" placeholder="Your phone" required autocomplete="off" tabindex="5">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input v-model="registrationData.lastname" type="text" class="form-control" placeholder="Your surname" required tabindex="2">
                                </div>
                                <div class="form-group">
                                    <input v-model="registrationData.password" type="password" minlength="4" class="form-control" placeholder="Your password" required tabindex="4">
                                </div>
                                <div class="form-group">
                                    <input v-model="registrationData.address" type="text" class="form-control" placeholder="Your address" required autocomplete="off" tabindex="6">
                                </div>
                            </div>
                        </div>
                        <div class="form-group d-flex justify-content-center">
                            <input @click.prevent="register" type="submit" value="Registrar" class="btn btn-primary py-3 px-5">
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "RegisterPage",
    data(){
        return {
            registrationData: {
              firstname: '',
              lastname: '',
              email: '',
              password: '',
              phone: '',
              address: ''
            }
        }
    },
    methods: {
        async register(){

            try{
                let result = await this.$axios.$post('http://localhost:3000/users', this.registrationData)

                alert('Te has registrado satisfactorizamente. Puedes acceder con tu nueva cuenta desde el formulario de identificación')

                this.$router.push('/login')
            }catch(error){
                alert('Se ha producido un error al registrar el usuario. Revisa los datos introducidos.')
            }
        }
    },
    mounted(){
        this.$refs.firstname.focus()
    }
}
</script>
