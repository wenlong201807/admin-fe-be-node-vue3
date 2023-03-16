/*
 Navicat Premium Data Transfer

 Source Server         : mongodb-local
 Source Server Type    : MongoDB
 Source Server Version : 60005 (6.0.5)
 Source Host           : localhost:27017
 Source Schema         : imooc-manager

 Target Server Type    : MongoDB
 Target Server Version : 60005 (6.0.5)
 File Encoding         : 65001

 Date: 16/03/2023 16:50:11
*/


// ----------------------------
// Collection structure for counters
// ----------------------------
db.getCollection("counters").drop();
db.createCollection("counters");

// ----------------------------
// Documents of counters
// ----------------------------

// ----------------------------
// Collection structure for depts
// ----------------------------
db.getCollection("depts").drop();
db.createCollection("depts");

// ----------------------------
// Documents of depts
// ----------------------------
db.getCollection("depts").insert([ {
    _id: ObjectId("64128cfc83799b1a6b539233"),
    parentId: [
        null
    ],
    updateTime: ISODate("2023-03-16T07:59:19.961Z"),
    createTime: ISODate("2023-03-16T02:42:25.146Z"),
    deptName: "大boss",
    userId: "6",
    userName: "大boss",
    userEmail: "daboss@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("depts").insert([ {
    _id: ObjectId("6412b1ce951e407ec95ea69f"),
    parentId: [
        ObjectId("64128cfc83799b1a6b539233"),
        ObjectId("6412b263951e407ec95ea6b7")
    ],
    updateTime: ISODate("2023-03-16T08:00:21.32Z"),
    createTime: ISODate("2023-03-16T03:36:10.973Z"),
    deptName: "测试组",
    userId: "5",
    userName: "技术大佬",
    userEmail: "jsdl@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("depts").insert([ {
    _id: ObjectId("6412b1e2951e407ec95ea6a3"),
    parentId: [
        ObjectId("64128cfc83799b1a6b539233"),
        ObjectId("6412b263951e407ec95ea6b7")
    ],
    updateTime: ISODate("2023-03-16T07:55:50.114Z"),
    createTime: ISODate("2023-03-16T03:36:10.973Z"),
    deptName: "前端部",
    userId: "5",
    userName: "技术大佬",
    userEmail: "jsdl@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("depts").insert([ {
    _id: ObjectId("6412b1f2951e407ec95ea6a7"),
    parentId: [
        ObjectId("64128cfc83799b1a6b539233"),
        ObjectId("6412b263951e407ec95ea6b7")
    ],
    updateTime: ISODate("2023-03-16T07:56:23.079Z"),
    createTime: ISODate("2023-03-16T03:36:10.973Z"),
    deptName: "后端部",
    userId: "5",
    userName: "技术大佬",
    userEmail: "jsdl@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("depts").insert([ {
    _id: ObjectId("6412b205951e407ec95ea6ab"),
    parentId: [
        ObjectId("64128cfc83799b1a6b539233"),
        ObjectId("6412b263951e407ec95ea6b7")
    ],
    updateTime: ISODate("2023-03-16T07:56:08.811Z"),
    createTime: ISODate("2023-03-16T03:36:10.973Z"),
    deptName: "产品部",
    userId: "5",
    userName: "技术大佬",
    userEmail: "jsdl@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("depts").insert([ {
    _id: ObjectId("6412b213951e407ec95ea6af"),
    parentId: [
        ObjectId("64128cfc83799b1a6b539233")
    ],
    updateTime: ISODate("2023-03-16T07:58:59.493Z"),
    createTime: ISODate("2023-03-16T03:36:10.973Z"),
    deptName: "行政部",
    userId: "6",
    userName: "大boss",
    userEmail: "daboss@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("depts").insert([ {
    _id: ObjectId("6412b237951e407ec95ea6b3"),
    parentId: [
        ObjectId("64128cfc83799b1a6b539233"),
        ObjectId("6412b213951e407ec95ea6af"),
        ObjectId("6412b237951e407ec95ea6b3")
    ],
    updateTime: ISODate("2023-03-16T07:59:57.435Z"),
    createTime: ISODate("2023-03-16T03:36:10.973Z"),
    deptName: "行政长官",
    userId: "6",
    userName: "大boss",
    userEmail: "daboss@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("depts").insert([ {
    _id: ObjectId("6412b263951e407ec95ea6b7"),
    parentId: [
        ObjectId("64128cfc83799b1a6b539233")
    ],
    updateTime: ISODate("2023-03-16T07:59:08.494Z"),
    createTime: ISODate("2023-03-16T03:36:10.973Z"),
    deptName: "技术部",
    userId: "6",
    userName: "大boss",
    userEmail: "daboss@qq.com",
    __v: NumberInt("0")
} ]);
db.getCollection("depts").insert([ {
    _id: ObjectId("6412ccb33d7870b5ac459d38"),
    parentId: [
        ObjectId("64128cfc83799b1a6b539233"),
        ObjectId("6412b213951e407ec95ea6af")
    ],
    updateTime: ISODate("2023-03-16T07:18:03.812Z"),
    createTime: ISODate("2023-03-16T03:36:10.973Z"),
    deptName: "人力资源部",
    userId: "3",
    userName: "行政大哥",
    userEmail: "xzdg@qq.com",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for leaves
// ----------------------------
db.getCollection("leaves").drop();
db.createCollection("leaves");

// ----------------------------
// Documents of leaves
// ----------------------------

// ----------------------------
// Collection structure for menus
// ----------------------------
db.getCollection("menus").drop();
db.createCollection("menus");

// ----------------------------
// Documents of menus
// ----------------------------
db.getCollection("menus").insert([ {
    _id: ObjectId("641282a183799b1a6b53911f"),
    parentId: [
        null
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T08:07:33.717Z"),
    menuType: "1",
    menuState: NumberInt("1"),
    menuName: "系统管理",
    path: "/system",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6412830183799b1a6b539133"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "1",
    menuState: NumberInt("1"),
    menuName: "角色管理",
    path: "/system/role",
    component: "Role",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6412835a83799b1a6b539137"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "1",
    menuState: NumberInt("1"),
    menuName: "菜单管理",
    path: "/system/menu",
    component: "Menu",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6412837283799b1a6b53913b"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "1",
    menuState: NumberInt("1"),
    menuName: "部门管理",
    path: "/system/dept",
    component: "Dept",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("641283c183799b1a6b53913f"),
    parentId: [
        null
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "1",
    menuState: NumberInt("1"),
    menuName: "审批管理",
    path: "/audit",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("641283f483799b1a6b539143"),
    parentId: [
        ObjectId("641283c183799b1a6b53913f")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "1",
    menuState: NumberInt("1"),
    menuName: "休假申请",
    path: "/audit/leave",
    component: "Leave",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6412842583799b1a6b539147"),
    parentId: [
        ObjectId("641283c183799b1a6b53913f")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "1",
    menuState: NumberInt("1"),
    menuName: "待审批",
    path: "/audit/approve",
    component: "Approve",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("641287c083799b1a6b539194"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412830183799b1a6b539133")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "查询",
    menuCode: "role-query",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("641287d783799b1a6b539198"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412830183799b1a6b539133")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "重置",
    menuCode: "role-reset",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6412880583799b1a6b53919c"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412830183799b1a6b539133")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "新增",
    menuCode: "role-create",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6412881c83799b1a6b5391a0"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412830183799b1a6b539133")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "编辑",
    menuCode: "role-edit",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6412883283799b1a6b5391a4"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412830183799b1a6b539133")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T08:44:25.493Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "查看权限",
    menuCode: "role-auth",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6412884f83799b1a6b5391a8"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412830183799b1a6b539133")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "删除",
    menuCode: "role-delete",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6412889e83799b1a6b5391ac"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412835a83799b1a6b539137")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "查询",
    menuCode: "menu-query",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("641288ae83799b1a6b5391b0"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412835a83799b1a6b539137")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "重置",
    menuCode: "menu-reset",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("641288d383799b1a6b5391b4"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412835a83799b1a6b539137")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "新增",
    menuCode: "menu-create",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("641288ec83799b1a6b5391b8"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412835a83799b1a6b539137")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "编辑",
    menuCode: "menu-edit",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6412896583799b1a6b5391bc"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412835a83799b1a6b539137")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "删除",
    menuCode: "menu-delete",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("64128af083799b1a6b5391c0"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412837283799b1a6b53913b")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "查询",
    menuCode: "dept-query",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("64128b0783799b1a6b5391c4"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412837283799b1a6b53913b")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "重置",
    menuCode: "dept-reset",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("64128b1883799b1a6b5391c8"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412837283799b1a6b53913b")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "新增",
    menuCode: "dept-create",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("64128b2b83799b1a6b5391cc"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412837283799b1a6b53913b")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "编辑",
    menuCode: "dept-edit",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("64128b3c83799b1a6b5391d0"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412837283799b1a6b53913b")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "删除",
    menuCode: "dept-delete",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("64128b6d83799b1a6b5391d4"),
    parentId: [
        ObjectId("641283c183799b1a6b53913f"),
        ObjectId("6412842583799b1a6b539147")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "审核",
    menuCode: "approve-check",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("64128bd983799b1a6b5391d8"),
    parentId: [
        ObjectId("641283c183799b1a6b53913f"),
        ObjectId("6412842583799b1a6b539147")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "查询",
    menuCode: "approve-query",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("64128beb83799b1a6b5391dc"),
    parentId: [
        ObjectId("641283c183799b1a6b53913f"),
        ObjectId("641283f483799b1a6b539143")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T02:42:25.139Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "查询",
    menuCode: "leave-query",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6412c8b83d7870b5ac459c8f"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412830183799b1a6b539133")
    ],
    createTime: ISODate("2023-03-16T07:34:38.671Z"),
    updateTime: ISODate("2023-03-16T07:34:38.671Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuCode: "role-auth-change",
    menuName: "角色权限变更",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6412d483d2e78e1320e01891"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T08:27:15.647Z"),
    menuType: "1",
    menuState: NumberInt("1"),
    menuName: "用户管理",
    path: "/system/user",
    component: "User",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6412d4a7d2e78e1320e01895"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412d483d2e78e1320e01891")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T08:27:15.647Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "查询",
    __v: NumberInt("0"),
    menuCode: "user-query"
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6412d4c4d2e78e1320e01899"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412d483d2e78e1320e01891")
    ],
    createTime: ISODate("2023-03-16T02:42:25.139Z"),
    updateTime: ISODate("2023-03-16T08:27:15.647Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuName: "重置",
    __v: NumberInt("0"),
    menuCode: "user-reset"
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6412d59cd2e78e1320e018c6"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412d483d2e78e1320e01891")
    ],
    createTime: ISODate("2023-03-16T08:20:04.99Z"),
    updateTime: ISODate("2023-03-16T08:20:04.99Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuCode: "user-create",
    menuName: "新增",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6412d5cad2e78e1320e018ca"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412d483d2e78e1320e01891")
    ],
    createTime: ISODate("2023-03-16T08:20:04.99Z"),
    updateTime: ISODate("2023-03-16T08:20:04.99Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuCode: "user-patch-delete",
    menuName: "批量删除",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6412d5e2d2e78e1320e018ce"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412d483d2e78e1320e01891")
    ],
    createTime: ISODate("2023-03-16T08:20:04.99Z"),
    updateTime: ISODate("2023-03-16T08:20:04.99Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuCode: "user-edit",
    menuName: "编辑",
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6412d5f9d2e78e1320e018d2"),
    parentId: [
        ObjectId("641282a183799b1a6b53911f"),
        ObjectId("6412d483d2e78e1320e01891")
    ],
    createTime: ISODate("2023-03-16T08:20:04.99Z"),
    updateTime: ISODate("2023-03-16T08:20:04.99Z"),
    menuType: "2",
    menuState: NumberInt("1"),
    menuCode: "user-delete",
    menuName: "删除",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for roles
// ----------------------------
db.getCollection("roles").drop();
db.createCollection("roles");

// ----------------------------
// Documents of roles
// ----------------------------
db.getCollection("roles").insert([ {
    _id: ObjectId("6412846383799b1a6b539156"),
    permissionList: {
        checkedKeys: [
            "641287c083799b1a6b539194",
            "641287d783799b1a6b539198",
            "6412880583799b1a6b53919c",
            "6412881c83799b1a6b5391a0",
            "6412883283799b1a6b5391a4",
            "6412884f83799b1a6b5391a8",
            "6412c8b83d7870b5ac459c8f",
            "6412889e83799b1a6b5391ac",
            "641288ae83799b1a6b5391b0",
            "641288d383799b1a6b5391b4",
            "641288ec83799b1a6b5391b8",
            "6412896583799b1a6b5391bc",
            "64128af083799b1a6b5391c0",
            "64128b0783799b1a6b5391c4",
            "64128b1883799b1a6b5391c8",
            "64128b2b83799b1a6b5391cc",
            "64128b3c83799b1a6b5391d0",
            "6412d4a7d2e78e1320e01895",
            "6412d4c4d2e78e1320e01899",
            "6412d59cd2e78e1320e018c6",
            "6412d5cad2e78e1320e018ca",
            "6412d5e2d2e78e1320e018ce",
            "6412d5f9d2e78e1320e018d2",
            "64128beb83799b1a6b5391dc",
            "64128b6d83799b1a6b5391d4",
            "64128bd983799b1a6b5391d8"
        ],
        halfCheckedKeys: [
            "641282a183799b1a6b53911f",
            "6412830183799b1a6b539133",
            "6412835a83799b1a6b539137",
            "6412837283799b1a6b53913b",
            "6412d483d2e78e1320e01891",
            "641283c183799b1a6b53913f",
            "641283f483799b1a6b539143",
            "6412842583799b1a6b539147"
        ]
    },
    updateTime: ISODate("2023-03-16T02:42:25.14Z"),
    createTime: ISODate("2023-03-16T02:42:25.14Z"),
    roleName: "admin",
    remark: "超级管理员",
    __v: NumberInt("0")
} ]);
db.getCollection("roles").insert([ {
    _id: ObjectId("6412848483799b1a6b53915c"),
    permissionList: {
        checkedKeys: [
            "641287c083799b1a6b539194",
            "641287d783799b1a6b539198",
            "6412883283799b1a6b5391a4",
            "6412889e83799b1a6b5391ac",
            "641288ae83799b1a6b5391b0",
            "64128af083799b1a6b5391c0",
            "64128b0783799b1a6b5391c4",
            "6412d4a7d2e78e1320e01895",
            "6412d4c4d2e78e1320e01899",
            "64128beb83799b1a6b5391dc",
            "64128b6d83799b1a6b5391d4",
            "64128bd983799b1a6b5391d8"
        ],
        halfCheckedKeys: [
            "641283c183799b1a6b53913f",
            "641283f483799b1a6b539143",
            "6412842583799b1a6b539147",
            "641282a183799b1a6b53911f",
            "6412830183799b1a6b539133",
            "6412835a83799b1a6b539137",
            "6412837283799b1a6b53913b",
            "6412d483d2e78e1320e01891"
        ]
    },
    updateTime: ISODate("2023-03-16T02:42:25.14Z"),
    createTime: ISODate("2023-03-16T02:42:25.14Z"),
    roleName: "test-check",
    remark: "测试仅查看所有权限",
    __v: NumberInt("0")
} ]);
db.getCollection("roles").insert([ {
    _id: ObjectId("6412b343951e407ec95ea6cb"),
    permissionList: {
        checkedKeys: [
            "641287c083799b1a6b539194",
            "641287d783799b1a6b539198",
            "6412883283799b1a6b5391a4",
            "64128af083799b1a6b5391c0",
            "64128b0783799b1a6b5391c4",
            "64128beb83799b1a6b5391dc",
            "64128b6d83799b1a6b5391d4",
            "64128bd983799b1a6b5391d8"
        ],
        halfCheckedKeys: [
            "641283c183799b1a6b53913f",
            "641283f483799b1a6b539143",
            "6412842583799b1a6b539147",
            "641282a183799b1a6b53911f",
            "6412830183799b1a6b539133",
            "6412837283799b1a6b53913b"
        ]
    },
    updateTime: ISODate("2023-03-16T03:36:10.964Z"),
    createTime: ISODate("2023-03-16T03:36:10.964Z"),
    roleName: "sed-it-admin",
    remark: "二级it领导",
    __v: NumberInt("0")
} ]);
db.getCollection("roles").insert([ {
    _id: ObjectId("6412b366951e407ec95ea6d1"),
    permissionList: {
        checkedKeys: [
            "64128beb83799b1a6b5391dc"
        ],
        halfCheckedKeys: [
            "641283f483799b1a6b539143",
            "641283c183799b1a6b53913f"
        ]
    },
    updateTime: ISODate("2023-03-16T03:36:10.964Z"),
    createTime: ISODate("2023-03-16T03:36:10.964Z"),
    roleName: "it-worker",
    remark: "员工",
    __v: NumberInt("0")
} ]);
db.getCollection("roles").insert([ {
    _id: ObjectId("6412b384951e407ec95ea6d7"),
    permissionList: {
        checkedKeys: [
            "64128beb83799b1a6b5391dc"
        ],
        halfCheckedKeys: [
            "641283f483799b1a6b539143",
            "641283c183799b1a6b53913f"
        ]
    },
    updateTime: ISODate("2023-03-16T03:36:10.964Z"),
    createTime: ISODate("2023-03-16T03:36:10.964Z"),
    roleName: "other-worker",
    remark: "非it的员工",
    __v: NumberInt("0")
} ]);
db.getCollection("roles").insert([ {
    _id: ObjectId("6412b3bc951e407ec95ea6e5"),
    permissionList: {
        checkedKeys: [
            "641287c083799b1a6b539194",
            "641287d783799b1a6b539198",
            "6412883283799b1a6b5391a4",
            "6412d4a7d2e78e1320e01895",
            "6412d4c4d2e78e1320e01899",
            "64128beb83799b1a6b5391dc",
            "64128b6d83799b1a6b5391d4",
            "64128bd983799b1a6b5391d8"
        ],
        halfCheckedKeys: [
            "641283c183799b1a6b53913f",
            "641283f483799b1a6b539143",
            "6412842583799b1a6b539147",
            "641282a183799b1a6b53911f",
            "6412830183799b1a6b539133",
            "6412d483d2e78e1320e01891"
        ]
    },
    updateTime: ISODate("2023-03-16T03:36:10.964Z"),
    createTime: ISODate("2023-03-16T03:36:10.964Z"),
    roleName: "sed-other-leader",
    remark: "二级 其他部门的领导",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("641282280d30a173f608bc65"),
    userName: "super_admin",
    userPwd: "fd825de7a010673c664efddb4262d505",
    userEmail: "666@qq.com",
    mobile: "18479783236",
    sex: 1,
    deptId: [
        "64128cfc83799b1a6b539233"
    ],
    job: "大boss",
    state: NumberInt("4"),
    role: 1,
    roleList: [
        "6412846383799b1a6b539156"
    ],
    createTime: 1678934568829,
    lastLoginTime: 1678934568829,
    remark: "手动添加的",
    userId: 1
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6412b1b1951e407ec95ea697"),
    deptId: [
        "64128cfc83799b1a6b539233",
        "6412b263951e407ec95ea6b7",
        "6412b1ce951e407ec95ea69f"
    ],
    state: NumberInt("3"),
    role: NumberInt("1"),
    roleList: [
        "6412848483799b1a6b53915c"
    ],
    createTime: ISODate("2023-03-16T03:36:10.955Z"),
    lastLoginTime: ISODate("2023-03-16T03:36:10.955Z"),
    userId: "2",
    userName: "test",
    userPwd: "e10adc3949ba59abbe56e057f20f883e",
    userEmail: "test@qq.com",
    job: "测试",
    mobile: "18479783236",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6412b319951e407ec95ea6c2"),
    deptId: [
        "64128cfc83799b1a6b539233",
        "6412b213951e407ec95ea6af",
        "6412b237951e407ec95ea6b3"
    ],
    state: NumberInt("2"),
    role: NumberInt("1"),
    roleList: [
        "6412b3bc951e407ec95ea6e5"
    ],
    createTime: ISODate("2023-03-16T03:36:10.955Z"),
    lastLoginTime: ISODate("2023-03-16T03:36:10.955Z"),
    userId: "3",
    userName: "行政大哥",
    userPwd: "e10adc3949ba59abbe56e057f20f883e",
    userEmail: "xzdg@qq.com",
    job: "行政一把手",
    mobile: "18443211234",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6412b40c951e407ec95ea6f2"),
    deptId: [
        "6412b213951e407ec95ea6af",
        "6412b237951e407ec95ea6b3"
    ],
    state: NumberInt("4"),
    role: NumberInt("1"),
    roleList: [
        "6412b3bc951e407ec95ea6e5"
    ],
    createTime: ISODate("2023-03-16T03:36:10.955Z"),
    lastLoginTime: ISODate("2023-03-16T03:36:10.955Z"),
    userId: "4",
    userName: "张处长",
    userPwd: "e10adc3949ba59abbe56e057f20f883e",
    userEmail: "z@qq.com",
    job: "行政一把手",
    mobile: "18409871234",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6412c7c83d7870b5ac459c83"),
    deptId: [
        "64128cfc83799b1a6b539233",
        "6412b263951e407ec95ea6b7"
    ],
    state: NumberInt("1"),
    role: NumberInt("1"),
    roleList: [
        "6412b343951e407ec95ea6cb"
    ],
    createTime: ISODate("2023-03-16T07:34:38.662Z"),
    lastLoginTime: ISODate("2023-03-16T07:34:38.662Z"),
    userId: "5",
    userName: "技术大佬",
    userPwd: "e10adc3949ba59abbe56e057f20f883e",
    userEmail: "jsdl@qq.com",
    job: "技术部大哥",
    mobile: "18478901234",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6412cc213d7870b5ac459d1e"),
    deptId: [
        "64128cfc83799b1a6b539233"
    ],
    state: NumberInt("3"),
    role: NumberInt("1"),
    roleList: [
        "6412846383799b1a6b539156"
    ],
    createTime: ISODate("2023-03-16T07:34:38.662Z"),
    lastLoginTime: ISODate("2023-03-16T07:34:38.662Z"),
    userId: "6",
    userName: "大boss",
    userPwd: "e10adc3949ba59abbe56e057f20f883e",
    userEmail: "daboss@qq.com",
    job: "总裁",
    mobile: "18409874321",
    __v: NumberInt("0")
} ]);
