过时的配置
dbpath=/usr/local/mongodb/mongo/data
logpath=/usr/local/mongodb/mongo/log/mongo.log
fork=true # 后台启动服务
port=27017
quiet=true # 过滤掉一些无用的日志信息，若需要调试 设置为false
auth=false # 无密码登陆

# export PATH=$PATH:/usr/local/mongodb/bin
# 环境变量 参考配置
# https://juejin.cn/post/7052585815037673479

# mongod --config /usr/local/mongodb/mongo/conf/mongod.conf
# mongod --dbpath /usr/local/mongodb/mongo/data --logpath /usr/local/mongodb/mongo/log/mongo.log --fork

# centos安装配置 mongodb
# https://blog.csdn.net/weixin_44799217/article/details/127940726

## 服务
git bash连接服务器操作  $ ssh root@47.98.181.79
TestCode: zwl@157351
nginx  /etc/nginx
资源位置 /opt/
mongodb linux mongo mongo

## 当前本地使用的mongodb
官网安装mongodb指南 https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
退出终端 quit
启动本地服务 brew services restart mongodb/brew/mongodb-community
进入本地终端 mongosh
终止服务运行 
  1、mongosh
  2、db.shutdownServer()
启动服务 mongod --config /opt/homebrew/etc/mongod.conf
配置文件内容
cat /opt/homebrew/etc/mongod.conf
```
  systemLog:
    destination: file
    path: /opt/homebrew/var/log/mongodb/mongo.log
    logAppend: true
  storage:
    dbPath: /opt/homebrew/var/mongodb
  net:
    bindIp: 127.0.0.1, ::1
    ipv6: true
```
## 当前本地使用的mysql
启动 brew services start mysql@5.7
进入终端 mysql -uroot -p  157351