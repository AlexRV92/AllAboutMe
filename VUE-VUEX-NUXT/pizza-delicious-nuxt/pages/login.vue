<template>
    <section class="ftco-section contact-section">
        <div class="container mt-5">
            <div class="row d-flex justify-content-center">
                <div class="col-md-6 ">
                    <form action="#" class="contact-form">
                        <div class="row">
                            <div class="col-md-12">
                                <h3>Login</h3>
                                <p>Please enter your email and password to process to the customer area.</p>
                                <p>If you have't an account please click <router-link to="/register">here</router-link></p>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input v-model="loginPayload.email" type="email" class="form-control" placeholder="Your email" required ref="email">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input v-model="loginPayload.password" type="password" class="form-control" placeholder="Your password" required minlength="4">
                                </div>
                            </div>
                        </div>
                        <div class="form-group d-flex justify-content-center">
                            <input @click.prevent="login" type="submit" value="Login" class="btn btn-primary py-3 px-5">
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "login",
    //layout: 'noHeaderAndFooter',
    data(){
        return {
            loginPayload: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
      async login(){
        try{

            let result = await this.$axios.$post('http://localhost:3000/auth/login', this.loginPayload)

            this.$store.dispatch('login',result.token)

            this.$router.push('/')

        }catch(error){
          console.error(error)
          alert('Usuario o contraseña incorrectos')

        }
      }
    },
    mounted(){
        this.$refs.email.focus()
    }
}
</script>
