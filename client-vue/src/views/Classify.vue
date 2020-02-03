<template>
    <div>
        <li>
            <p>{{ item.classify }}</p>
            <p>{{ item.name }}</p>
            <img :src="item.titlePic" alt="" />
        </li>
    </div>
</template>

<script>
export default {
    data() {
        return {
            item: this.$route.params.info,
        };
    },
};
</script>

<style scoped>
li {
    padding-left: 100px;
}
</style>
