// import {get_label, get_list} from './list.js'
// export default {
//   get_label,
//   get_list
// }
// 批量导出文件
//require.context(api 目录的相对目录, 是否查询子目录, 查询文件的后缀)
const requireApi = require.context('.', false, /.js$/)
let module = {}
requireApi.keys().forEach(key => {
  if(key === "./index.js") return
  Object.assign(module, requireApi(key))
})
export default module
