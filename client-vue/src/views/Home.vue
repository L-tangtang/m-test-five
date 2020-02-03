<template>
    <div class="home">
        <div
            class="home-box"
            v-for="(item, index) in list"
            :key="index"
            @click="$router.push({ name: 'detail', params: { info: item.title } })"
        >
            <img :src="item.titlePic" alt="" />
            <p>蜡笔小新 {{ item.title }}</p>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    computed: {
        ...mapState(['list']),
    },
    methods: {
        ...mapActions(['getList']),
    },
    mounted() {
        this.getList({
            url: '/getList',
            data: [],
            method: 'get',
        });
    },
};
</script>
<style scoped>
.home {
    width: 100%;
    height: 100%;
}
.home-box {
    width: 40%;
    height: 160px;
    position: relative;
    margin: 0 auto;
}
img {
    position: absolute;
    top: 0;
    width: 90%;
    height: 95%;
}
p {
    height: 160px;
    width: 100%;
    line-height: 60px;
    position: absolute;
}
</style>
