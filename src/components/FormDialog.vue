<template>
<q-dialog v-model="visible" persistent @hide="$emit('formClosed')">
    <q-card v-bind:style="{width: width + 'px', maxWidth: '80vw'}">
    <q-card-section class="title row items-center">
        <div class="text-h6">{{title}}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
    </q-card-section>

    <q-separator />

    <slot></slot>

    <q-separator />

    <q-card-actions align="right" class="actions q-pa-md">
        <q-btn color="primary" label="Submit" @click="$emit('formSubmit')" />
    </q-card-actions>

    <q-inner-loading :showing="loading">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
    </q-card>
</q-dialog>
</template>

<script>
export default {
    props: {
        visible: {
            default: false
        },
        title: {
            default: "Form Dialog"
        },
        loading: {
            default: false
        },
        width: {
            default: 600
        }
    }
}
</script>
