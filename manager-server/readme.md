dbpath=/usr/local/mongodb/mongo/data
logpath=/usr/local/mongodb/mongo/log/mongo.log
fork=true # 后台启动服务
port=27017
quiet=true # 过滤掉一些无用的日志信息，若需要调试 设置为false
auth=false # 无密码登陆

# export PATH=$PATH:/usr/local/mongodb/bin
# 参考配置
# https://juejin.cn/post/7052585815037673479

# mongod --config /usr/local/mongodb/mongo/conf/mongod.conf
# mongod --dbpath /usr/local/mongodb/mongo/data --logpath /usr/local/mongodb/mongo/log/mongo.log --fork