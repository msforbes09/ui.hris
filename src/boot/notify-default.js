import { Notify } from 'quasar'

Notify.setDefaults({
  group: false,
  position: 'top-right',
  timeout: 2500,
  textColor: 'white',
  actions: [{ icon: 'close', color: 'white' }]
})
