<template>
<div>
    <router-link :to="url">
        <div class="status-box row content-center">
            <div class="count wrap column justify-center items-center content-center">{{count}}</div>
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
        }
    }
}
</script>

<style scoped>
.status-box,
.status-box .count,
.status-box .title {
    height: 70px;
}
.status-box {
    width: 250px;
    margin-bottom: 25px;
    border: solid 1px #5d5d5d;
}
.status-box .count {
    width: 30%;
    color: #ffffff;
    background-color: #5d5d5d;
    border-right: 1px solid #5d5d5d;
}

.status-box .title {
    width: 70%;
}
</style>
