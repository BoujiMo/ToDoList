<!-- This is the Header component------------------------------------------------- -->

<script>
import { useRouter } from "vue-router";
import { storeToRefs} from "pinia";
import { useUserStore } from "./../stores/user.js";
/*import { moment } from 'moment';*/

export default {
    setup () {
        //variables declaration
        const router = useRouter();
        const userStore = useUserStore();
        const { user } = storeToRefs(userStore);

    
        const onSubmit = async () => {
            try {
                await userStore.signOut ( user )
                alert("You have been logged out!");
                console.log ("logged out");
                router.push({ path: "/"});
            }
            catch (error) {
                console.log(error)
            }
        } 
    return { onSubmit }
    },
    methods: {
        currentDate() {
        const current = new Date();
        const date = `${current.getDate()}/${
            current.getMonth() + 1
        }/${current.getFullYear()}`;
        return date;
        },
    }, 
};
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-light border-bottom">
        <div class="container-fluid pt-5">
            <RouterLink :to="{ name: 'home' }">
                <div class="text-muted">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" class="bi bi-smartwatch" viewBox="0 0 16 16">
                    <path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5V5z"/>
                    <path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667zM4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3z"/>
                    <use xlink:href="#bootstrap"></use>
                </svg>Day to Day Task App
                </div>
                <div class="container text-center text-muted">
                    {{ currentDate() }}
                </div>
            </RouterLink>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-lg-flex justify-content-lg-end text-muted" id="navbarNavAltMarkup">
                <div class="navbar-nav text-muted">
                    <RouterLink :to="{ name: 'AboutUs' }"><a class="nav-link" href="#">About Us</a></RouterLink>
                    <RouterLink :to="{ name: 'Collaborators' }"><a class="nav-link" href="#">Collaborators</a></RouterLink>
                    <RouterLink :to="{ name: 'SignIn' }"><a class="nav-link" href="#">Sign In</a></RouterLink>
                    <RouterLink :to="{ name: 'SignUp' }"><a class="nav-link" href="#">Sign Up</a></RouterLink>
                    <li @click="onSubmit" ><a class="nav-link" href="#">Logout</a></li> <!--Here it is done @click="onSubmit"-->
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
a {
    text-decoration: none;
    /*text-muted;*/
}
</style>
