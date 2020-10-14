export default function({ store, redirect }) {

    if (!store.state.isAuth) {
        redirect('/login')
    }

    if (store.state.isAuth) {
        if (store.state.user.profile !== 'admin') {
            redirect('/')
        }
    }
}