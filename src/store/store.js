import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: [
            {title: "To Do"}, {title: "Being Worked on"}, {title: "On Hold"}, {title: "Future Projects"}
        ]
    }
})