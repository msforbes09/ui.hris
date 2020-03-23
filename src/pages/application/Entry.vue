<template>
  <layout>
    <q-page class="flex">
      <router-view />
    </q-page>

    <edit-application-dialog />
    <create-exam-dialog />
    <edit-exam-dialog />
    <create-interview-dialog />
    <edit-interview-dialog />
    <select-requirements-dialog />
    <delete-dialog />
  </layout>
</template>

<script>
export default {
  components: {
    layout: () => import('layouts/MainLayout'),
    editApplicationDialog: () => import('../applicant/application/Edit'),
    createExamDialog: () => import('./exam/Create'),
    editExamDialog: () => import('./exam/Edit'),
    createInterviewDialog: () => import('./interview/Create'),
    editInterviewDialog: () => import('./interview/Edit'),
    selectRequirementsDialog: () => import('./SelectRequirements'),
    deleteDialog: () => import('./Delete')
  }
}
</script>

<style></style>
