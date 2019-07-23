import Mock from 'mockjs'

// 测试 get
Mock.mock('/get','get',{id: 1, name: 'hello world'})

// 测试 post
Mock.mock('/post','post',{id: 1, name: 'POST'})

// 测试自定义模板
Mock.mock('/template','post', function (option) {
  console.log('我是自定义函数请求参数：', option)
  let data = {id: 1, name: 'Template'}
  return data
})
