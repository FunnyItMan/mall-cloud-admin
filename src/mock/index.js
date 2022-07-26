const Mock = require('mockjs')

//模拟登录请求
Mock.mock("/login/doLogin","post",require("./data/login.json"))
