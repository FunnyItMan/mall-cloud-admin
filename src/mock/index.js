const Mock = require('mockjs')

Mock.mock("/login/doLogin","post",require("./data/login.json"))