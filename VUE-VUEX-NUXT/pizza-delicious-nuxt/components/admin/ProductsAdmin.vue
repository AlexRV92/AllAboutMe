<template>
    <div class="row mb-5">
        <div class="col-md-12 mb-4">
            <a class="btn btn-success" href="#" @click.prevent="addProduct">Añadir</a>
        </div>
        <div class="col-md-5">

            <div class="row mb-2" v-for="productItem in products" :key="productItem._id" @click.prevent="editProduct(productItem)">
                <div class="col-md-2"><img width="100%" :src="productItem.image" :alt="productItem.title" /></div>
                <div class="col-md-8">
                    <h5>{{productItem.title}}</h5>
                </div>
            </div>
        </div>
            <form action="#" class="contact-form col-md-7">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <input v-model="editingProduct.title" type="text" class="form-control" placeholder="Product name" required ref="title">
                        </div>
                        <div class="form-group">
                            <img v-if="editingProduct.image !== ''" :src="editingProduct.image" width="60" />
                            <input v-model="editingProduct.image" type="url" class="form-control" placeholder="Product image" required>
                        </div>
                        <div class="form-group">
                            <input v-model="editingProduct.category" type="text" class="form-control" placeholder="Product category" required >
                        </div>
                        <div class="form-group">
                            <textarea v-model="editingProduct.description" class="form-control" placeholder="Product description" required></textarea>
                        </div>
                        <div class="form-group">
                            <input v-model="editingProduct.price" type="number" class="form-control" placeholder="Product price" required>
                        </div>
                        <div class="form-group">
                            <input class="d-d-inline-block" v-model="editingProduct.enabled" type="checkbox"> Habilitado
                        </div>
                    </div>
                </div>
                <div class="form-group d-flex justify-content-center">
                    <input @click.prevent="sendProduct" type="submit" :value="getActionBtnLabel" class="btn btn-primary py-3 px-5">
                    <input v-if="editingProduct._id !== ''" @click.prevent="deleteProduct" type="submit" value="Borrar" class="btn btn-danger py-3 px-5">
                </div>

            </form>
    </div>
</template>

<script>

export default {
    name: "ProductsAdmin",
    data(){
        return {
            editingProduct: {
                _id: '',
                title: '',
                image: '',
                description: '',
                category: '',
                price: 0,
                enabled: true
            }
        }
    },
    computed:{
        products(){
            return this.$store.state.products
        },
        getActionBtnLabel(){
            return (this.editingProduct._id === '')?"Crear":"Actualizar"
        }
    },
    methods:{
        getProductBaseData(){
            return {
                _id: '',
                title: '',
                image: '',
                description: '',
                category: '',
                price: 0,
                enabled: true
            };
        },
        addProduct(){
            this.editingProduct = this.getProductBaseData()
        },
        editProduct(product){
            this.editingProduct = {
                _id: product._id,
                title: product.title,
                image: product.image,
                description: product.description,
                category: product.category,
                price: product.price,
                enabled: product.enabled
            }
        },
        async deleteProduct(product){
            let currentUser = this.$store.state.user;
            let token = this.$store.state.token;
            const requestHeaders = {
                headers: { Authorization: "Bearer " + token },
            };

            try{
                let productId = this.editingProduct._id
                let result = await this.$axios.$delete('http://localhost:3000/products/'+productId, requestHeaders)

                let productName = this.editingProduct.title
                this.editingProduct = this.getProductBaseData()
                this.$refs.title.focus()
                this.$store.dispatch('loadProducts')

                alert('El producto "' + productName + '" se ha borrado adecuadamente')
            }catch(error){
                alert('Hay algún error en la creación del producto, revísalo todo e inténtalo de nuevo.')
            }
        },
        async sendProduct(){
            let currentUser = this.$store.state.user;
            let token = this.$store.state.token;
            const requestHeaders = {
                headers: { Authorization: "Bearer " + token },
            };

            let productData = {...this.editingProduct}

            if(productData._id === ''){
                delete productData._id

                try{
                    let result = await this.$axios.$post('http://localhost:3000/products',productData, requestHeaders)

                    this.editingProduct = this.getProductBaseData()
                    this.$refs.title.focus()
                    this.$store.dispatch('loadProducts')

                    alert('El producto "' + result.title + '" se ha creado adecuadamente')
                    return
                }catch(error){
                    alert('Hay algún error en la creación del producto, revísalo todo e inténtalo de nuevo.')
                }
            }

            if(productData._id !== ''){
                const productId = productData._id
                delete productData._id

                try{
                    let result = await this.$axios.$put('http://localhost:3000/products/'+productId, productData, requestHeaders)

                    this.editingProduct = this.getProductBaseData()
                    this.$refs.title.focus()
                    this.$store.dispatch('loadProducts')

                    alert('El producto "' + result.title + '" se ha editado adecuadamente')
                    return
                }catch(error){
                    alert('Hay algún error en la actualización del producto, revísalo todo e inténtalo de nuevo.')
                }
            }
        }
    },
    mounted(){
        this.$store.dispatch('loadProducts')
        this.$refs.title.focus()
    }
}
</script>
