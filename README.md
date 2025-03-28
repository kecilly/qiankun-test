# qiankun+monorepo的demo
这是一个qiankun+monorepo的demo，主应用与子应用均为vite+vue3

# 页面结构
父应用位于页面的左侧，主要用作菜单。
子应用位于页面的右侧，根据左侧菜单的选择展示不同的子应用内容。
在本地开发环境中，父应用和子应用能够顺利访问和加载，刷新子应用后主应用也能正常加载。

# 当前遇到的问题
将应用程序打包后，并Nginx配置站点后
访问主域名时，主应用能够正常加载。
点击主应用中菜单后能够正常加载子应用。
在点击主应用菜单并正常加载子应用的情况下按下 F5 刷新页面后，可以查看到子应用，但左侧的主应用未能正常加载。

# 安装全局包
在根目录运行
```
pnpm install
```

# 运行开发环境
```
pnpm dev:basic
pnpm dev
```

# 打包
```
pnpm build:main
pnpm build:basic
```

# nginx配置
```
server {
    listen        80;
    server_name  www.test.test;

    # 父应用配置
    location / {
        root   "D:/phpstudy_pro/WWW/test/monorepo-test/dist/main";
        try_files $uri $uri/ /index.html;  # 关键：确保主应用路由正常工作
    }

    # 子应用入口处理（匹配无后缀的请求）
    location ~ ^/basic/(.*)$ {
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
        add_header Cache-Control no-cache;
        alias D:/phpstudy_pro/WWW/test/monorepo-test/dist/basic/;
        try_files $1 $1/ /basic/index.html; # 关键修正
    }

    # 子应用静态资源（带后缀的请求）
    location ~ ^/basic/.+\.(js|css|png|jpg|gif|svg|ico|json)$ {
        alias D:/phpstudy_pro/WWW/test/monorepo-test/dist/basic/;
        expires 7d;
    }
}
```
