// app.js

import Koa from 'koa';
import serveStatic from 'koa-static'
const app = new Koa(); // 创建koa应用

const secret = process.env.SECRET;
// app.use(ctx => { ctx.body = "s323shi" })

app.use(serveStatic("../frontend/dist"))

// app.use(jwt({ secret }))
// router.use(jwt({ secret }))
// app.use(router.routes());
// app.use(router.allowedMethods());

// replit会暴露后启动的端口
// 启动服务监听本地3000端口
app.listen(3000, () => {
  console.log('应用已经启动，http://localhost:3000');
})
