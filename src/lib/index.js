import Vue from 'vue'
import './monitorConfigure'
import '@yu1596882018/web-sdk/es/lib/flexible'
import EventBus from '@yu1596882018/web-sdk/es/lib/eventBus'
import './importVant'
import request from './request'

Vue.use(EventBus)
Vue.use(request)
