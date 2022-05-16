import Vue from 'vue'
import { Toast } from 'vant'

Vue.use(Toast)

Toast.setDefaultOptions({ position: 'bottom' })
Toast.allowMultiple()
