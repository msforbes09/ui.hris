<template>
<div class="status-box">
    <router-link :to="url">
        <div class="status-box-content row content-center">
            <div v-bind:style="{backgroundColor: color}"
                class="count wrap column justify-center items-center content-center">{{count}}</div>
            <div class="title wrap column justify-center items-center content-center">{{title}}</div>
        </div>
    </router-link>
</div>
</template>

<script>
export default {
    props: {
        url: {
            default: '#'
        },
        count: {
            default: 0
        },
        title: {
            default: 'Status Title'
        },
        color: {
            default: '#5d5d5d'
        }
    }
}
</script>

<style lang="scss" scoped>
.status-box a {
    text-decoration: none;
    color: $primary;
}
.status-box-content,
.status-box-content .count,
.status-box-content .title {
    height: 70px;
}
.status-box-content {
    width: 250px;
    margin-bottom: 25px;
    border: solid 1px #5d5d5d;
}
.status-box-content .count {
    width: 30%;
    color: #ffffff;
}

.status-box-content .title {
    width: 70%;
}
</style>
