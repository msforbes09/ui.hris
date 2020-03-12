<template>
    <div class="existing-record q-card q-pa-md q-mb-lg">
        <div v-if="applicant == null" class="q-card-section">
            <slot name="noMatch"></slot>
        </div>
        <div v-else class="q-card-section">
            <div class="title text-center q-mb-md">{{title}}</div>
            <div class="row q-gutter-lg">
                <div class="col">
                    <div class="col">
                        <div>{{applicant.last_name}}, {{applicant.first_name}} {{applicant.middle_name}}</div>
                        <div>{{applicant.birth_date}}</div>
                        <div class="row q-gutter-x-md q-mb-sm">
                            <div>Last Application:</div>
                            <div class="last-application wrap col q-pa-sm">
                                <div>{{applicant.company_branch}}</div>
                                <div>{{applicant.position}}</div>
                                <div>{{applicant.date_applied}}</div>
                            </div>
                        </div>
                        <div class="row q-gutter-x-md">
                            <div>Status:</div>
                            <div>{{applicant.status}}</div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row justify-between">
                        <div>SSS:</div>
                        <div>{{applicant.sss}}</div>
                    </div>
                    <div class="row justify-between">
                        <div>Pagibig:</div>
                        <div>{{applicant.pagibig}}</div>
                    </div>
                    <div class="row justify-between">
                        <div>TIN:</div>
                        <div>{{applicant.tin}}</div>
                    </div>
                    <div class="row justify-between">
                        <div>Phil Health:</div>
                        <div>{{applicant.philhealth}}</div>
                    </div>
                </div>
            </div>
            <div class="row justify-end">
                <q-btn :to="url">Create New Application</q-btn>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        title: {
            default: 'Other Match'
        },
        applicant: {
            default: null
        },
        url: {
            default: '#'
        }
    }
}
</script>

<style scoped>
.existing-record.q-card {
    width: 600px;
}
.last-application {
    background-color: #bbbbbb;
    border-radius: 5px;
}
</style>
