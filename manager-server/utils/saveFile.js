/**
 * @description 将上传的文件移动到指定位置，并获取图片路径，名称
 * @author wenlong
 */

const path = require('path')
const { ErrorModel, SuccessModel } = require('./ResModel')
const { uploadFileSizeFailInfo } = require('./ErrorInfo')
const fse = require('fs-extra')

// 存储目录 与src同级
const DIST_FOLDER_PATH = path.join(__dirname, '..', 'uploadFiles')
// 文件最大体积 1M
const MIX_SIZE = 1024 * 1024 * 1024

// 是否需要创建目录
fse.pathExists(DIST_FOLDER_PATH).then((exist) => {
  if (!exist) {
    fse.ensureDir(DIST_FOLDER_PATH)
  }
})

/**
 * 保存文件
 * @param {string} name 文件名
 * @param {string} type 文件类型
 * @param {number} size 文件体积大小
 * @param {string} filePath 文件路径
 */
async function saveFile({ name, newName, type, size, filePath }) {
  if (size > MIX_SIZE) {
    await fse.remove(filePath); // 上传不要的文件，也得删除，避免占用空间
    return new ErrorModel(uploadFileSizeFailInfo)
  }

  // 移动文件
  const fileName = `${Date.now()}_${newName}_${name}` // 防止重名
  const distFilePath = path.join(DIST_FOLDER_PATH, fileName) // 目的地
  await fse.move(filePath, distFilePath)

  // 返回信息  // 返回格式模版: /2.png
  return {
    url: '/' + fileName,
    name,
  }
}

module.exports = {
  saveFile,
}
