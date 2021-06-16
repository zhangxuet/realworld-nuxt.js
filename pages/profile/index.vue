<template>
  <div class="profile-page">

    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" />
            <h4>{{ profile.username }}</h4>
            <p>
              {{ profile.bio }}
            </p>
            <button
              class="btn btn-sm btn-outline-secondary action-btn"
              :class="{ active: profile.following }"
              @click="onFollow"
              :disabled="profile.followDisabled"
            >
              <i class="ion-plus-round"></i>
              &nbsp;
              {{ profile.following ? 'Unfollow' : 'Follow' }} {{ profile.username }}
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link active" href="">My Articles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Favorited Articles</a>
              </li>
            </ul>
          </div>

          <div class="article-preview">
            <div class="article-meta">
              <a href=""><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
              <div class="info">
                <a href="" class="author">Eric Simons</a>
                <span class="date">January 20th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 29
              </button>
            </div>
            <a href="" class="preview-link">
              <h1>How to build webapps that scale</h1>
              <p>This is the description for the post.</p>
              <span>Read more...</span>
            </a>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { getProfile, addFollow, deleteFollow } from '@/api/profile'

export default {
  middleware: 'authenticated',
  name: 'UserProfile',
  async asyncData({ params }) {
    const { data } = await getProfile( params.username )
    data.profile.followDisabled = false
    return { profile: data.profile }
  },
  data() {
    return {
    
    }
  },
  methods: {
    async onFollow() {
      this.profile.followDisabled = true
      if (this.profile.following) {
        await deleteFollow(this.profile.username)
        this.profile.following = false
      } else {
        await addFollow(this.profile.username)
        this.profile.following = true
      }
      this.profile.followDisabled = false
    },
  },
}
</script>