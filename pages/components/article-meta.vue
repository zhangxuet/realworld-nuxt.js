<template>
    <div class="article-meta">
        <nuxt-link
            :to="{
                name: 'profile',
                params: {
                    username: article.author.username
                }
            }"
        >
            <img :src="article.author.image" />
        </nuxt-link>
        <div class="info">
        <nuxt-link 
            :to="{
                name: 'profile',
                params: {
                    username: article.author.username
                }
            }"
            class="author"
        >
            {{ article.author.username }}
        </nuxt-link>
        <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
        </div>
        <button
            class="btn btn-sm btn-outline-secondary"
            :class="{ active: article.author.following }"
            @click="onFollow"
            :disabled="article.author.followDisabled"
        >
            <i class="ion-plus-round"></i>
            &nbsp;
            {{ article.author.following ? 'Unfollow' : 'Follow' }} {{ article.author.username }} <span class="counter"></span>
        </button>
        &nbsp;&nbsp;
        <button
            class="btn btn-sm btn-outline-primary"
            :class="{ active: article.favorited }"
            @click="onFavorite"
            :disabled="article.author.favoritedDisabled"
        >
            <i class="ion-heart"></i>
            &nbsp;
            Favorite Post <span class="counter">({{ article.favoritesCount }})</span>
        </button>
    </div>
</template>

<script>
import {
    addFavorite,
    deleteFavorite
} from '@/api/article'
import { addFollow, deleteFollow } from '@/api/profile'

export default {
    name: 'ArticleMeta',
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    head() {
      return {
        title: `${this.article.title} - RealWorld`,
        meta: [
          {
            hid: this.article.slug,
            name: this.article.title,
            content: this.article.description
          }
        ]
      }
    },
    methods: {
        async onFollow() {
            this.article.followDisabled = true
            if (this.article.author.following) {
                await deleteFollow(this.article.username)
                this.article.author.following = false
            } else {
                await addFollow(this.article.username)
                this.article.author.following = true
            }
            this.article.followDisabled = false
        },
        async onFavorite() {
            this.article.favoriteDisabled = true
            if (this.article.favorited) {
                const res = await deleteFavorite(this.article.slug)
                this.article.favorited = false
                this.article.favoritesCount -= 1
            } else {
                const res = await addFavorite(this.article.slug)
                this.article.favorited = true
                this.article.favoritesCount += 1
            }
            this.article.favoriteDisabled = false
        },
    }
}
</script>
