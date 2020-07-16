import axios from 'axios'

// 方法1
// export function request(config,success,failure){
// // 1. 创建axios实例
// const instance=axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })
     //发送真正的网络请求
//   instance(config).then(res=>{
//     // console.log(res);
//     success(res)
//   }).catch(err=>{
//     // console.log(err);
//     failure(err)
//   })
// }


// 方法2
// export function request(config){
//   // 1. 创建axios实例
//   const instance=axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
     //发送真正的网络请求
//     instance(config.baseConfig).then(res=>{
//       // console.log(res);
//       config.success(res)
//     }).catch(err=>{
//       // console.log(err);
//       config.failure(err)
//     })
//   }
  

// 方法3 使用Promise
// export function request(config){
//   return new Promise((reslove,reject)=>{
//       // 1. 创建axios实例
//       const instance=axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//       })
//       //发送真正的网络请求
//         instance(config).then(res=>{
//          reslove(res)
//         }).catch(err=>{
//           reject(err)
//         })
    

//   })
// }


// 方法4 直接返回instance也是Promise对象
export function request(config){
      // 1. 创建axios实例
      const instance=axios.create({
        // baseURL:'http://123.207.32.32:8000',
        timeout:5000
      })

          // axios的拦截器
        // instance.interceptors.request.use(config=>{//拦截请求
        //   console.log(config)
        //   // 比如config一些信息不符合服务器要求
        //   // 比如每次发送网络请求时，都希望在发送时显示请求图标
        //   // 某些网络请求(比如登陆(token))，必须携带一些特殊信息
        //   return config  //不返回的话main会获取不到数据
        // },err=>{
        //   console.log(err)
        // });
        //响应拦截
         instance.interceptors.response.use(res=>{
          // console.log(res)
          return res.data  //不返回的话main会获取不到数据
         },err=>{
          //  console.log(err)
          return err
         })

      return instance(config)


}