<template>
  <layout>
    <q-page class="flex">
      <router-view />
    </q-page>

    <applicant-check />
    <create-family-dialog />
    <edit-family-dialog />
    <create-education-dialog />
    <edit-education-dialog />
    <create-employment-dialog />
    <edit-employment-dialog />
    <create-reference-dialog />
    <edit-reference-dialog />
    <create-application-dialog />
    <edit-application-dialog />
    <edit-basic-dialog />
    <edit-other-dialog />
    <edit-ssnumbers-dialog />
    <edit-emergency-dialog />
    <delete-dialog />
    <filter-dialog />
  </layout>
</template>

<script>
export default {
  components: {
    layout: () => import('layouts/MainLayout'),
    applicantCheck: () => import('./Check'),
    createFamilyDialog: () => import('./family/Create'),
    editFamilyDialog: () => import('./family/Edit'),
    createEducationDialog: () => import('./education/Create'),
    editEducationDialog: () => import('./education/Edit'),
    createEmploymentDialog: () => import('./employment/Create'),
    editEmploymentDialog: () => import('./employment/Edit'),
    createReferenceDialog: () => import('./reference/Create'),
    editReferenceDialog: () => import('./reference/Edit'),
    createApplicationDialog: () => import('./application/Create'),
    editApplicationDialog: () => import('./application/Edit'),
    editBasicDialog: () => import('./EditBasic'),
    editOtherDialog: () => import('./EditOther'),
    editSsnumbersDialog: () => import('./EditSSNumbers'),
    editEmergencyDialog: () => import('./EditEmergency'),
    deleteDialog: () => import('./Delete'),
    filterDialog: () => import('./Filter')
  }
}
</script>

<style></style>
