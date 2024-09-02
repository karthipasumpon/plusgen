// const lod = require('lodash')

import loadsh from 'lodash'

let userdata1 = { 
    name: "raja",
    native : {
        state: "Tamilnadu",
        city: "Trichy"
    },
    userinfo : function() {
        return "vijay"
    },
    currendata : new Date()
}

// let userdata2 = userdata1
let userdata2 =  loadsh.cloneDeep(userdata1)
// JSON.parse(JSON.stringify(userdata1))
// Object.assign({}, userdata1)
// {...userdata1}

userdata2.name = "Kumar"
userdata2.native.city = "Madurai"

console.log(userdata1);
console.log(typeof(userdata1.currendata));
console.log(userdata2);
console.log(typeof(userdata2.currendata));