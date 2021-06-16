<template>
  <div class="settings-page">
    <div class="container page">
        <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Your Settings</h1>

            <form @submit.prevent="handleUpdate">
            <fieldset>
                <fieldset class="form-group">
                    <input class="form-control" type="text" placeholder="URL of profile picture" v-model="user.image">
                </fieldset>
                <fieldset class="form-group">
                    <input class="form-control form-control-lg" type="text" placeholder="Your Name" v-model="user.username">
                </fieldset>
                <fieldset class="form-group">
                    <textarea class="form-control form-control-lg" rows="8" placeholder="Short bio about you" v-model="user.bio"></textarea>
                </fieldset>
                <fieldset class="form-group">
                    <input class="form-control form-control-lg" type="text" placeholder="Email" v-model="user.email">
                </fieldset>
                <fieldset class="form-group">
                    <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="user.username">
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right">
                    Update Settings
                </button>
            </fieldset>
            </form>
        </div>

        </div>
    </div>
    </div>
</template>

<script>
import { getUser, updateUser } from '@/api/users'
// import { map }

export default {
    middleware: 'authenticated',
    name: 'Settings',
    data() {
      return {
        user: {}
      }
    },
    methods: {
        async handleUpdate() {
            const params = {
                email: this.user.email,
                bio: this.user.bio,
                image: this.user.image,
                username: this.user.username
            }
            const { data } = await updateUser({ user: params })
            this.$store.commit('setUser', data.user)
        },
        async getUser() {
            const { data } = await getUser()
            this.user = data.user
        },
    },
    mounted() {
        this.getUser()
    }
}
</script>