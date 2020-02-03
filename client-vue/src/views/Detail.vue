<template>
    <div>
        <van-search v-model="searchVal" placeholder="请输入搜索关键词" />
        <li
            v-for="item in list.filter(item => item.classify.indexOf(searchVal) !== -1)"
            :key="item.id"
            @click="$router.push({ name: 'classify', params: { info: item } })"
        >
            {{ item.classify }}
        </li>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
    data() {
        return {
            searchVal: '',
        };
    },
    computed: {
        ...mapState(['list']),
    },
    methods: {
        ...mapActions(['getList']),
    },
    mounted() {
        if (this.$route.params.info !== undefined) {
            sessionStorage.setItem('key', this.$route.params.info);
        }
        this.getList({
            url: '/getDetail',
            data: { title: sessionStorage.getItem('key') },
            method: 'post',
        });
    },
};
</script>
