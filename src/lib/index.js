import Vue from 'vue'
import './flexible'
import './importVant'
import request from './request'
import EventBus from './eventBus'

Vue.use(EventBus)
Vue.use(request)
