const mongoose = require('mongoose');
const leaveSchema = mongoose.Schema({
  orderNo: String, // 申请单号
  applyType: Number, // 申请类型 1事假 2调休 3年假
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date, default: Date.now },
  applyUser: {
    // 申请人信息
    userId: String,
    userName: String,
    userEmail: String,
  },
  leaveTime: String, // 休假时间
  reasons: String, //休假原因
  auditUsers: String, //完整审批人
  curAuditUserName: String, //当前审批人
  auditFlows: [
    // 审批流
    {
      userId: String,
      userName: String,
      userEmail: String,
    },
  ],
  auditLogs: [
    // 审批日志，每一次操作完成留下的信息
    {
      userId: String,
      userName: String, // 审批人
      createTime: Date,
      remark: String, // 审批内容
      action: String, // 审批操作
    },
  ],
  applyState: { type: Number, default: 1 }, //1待审批 2审批中 3审批拒绝 4审批通过 5作废
  createTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model('leaves', leaveSchema, 'leaves');
