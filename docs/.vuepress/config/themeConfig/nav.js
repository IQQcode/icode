// nav
module.exports = [{
    text: '首页',
    link: '/'
  },
  {
    text: 'Android',
    link: '/android/', //目录页链接，此处link是voding主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: 'Android学习',
        items: [{
            text: '📁基础内容',
            link: '/pages/51b303/'
          },
          {
            text: '📺AndroidCore',
            link: '/pages/3e134f/'
          },
          {
            text: '🎨Android UI',
            link: '/pages/9b02ab/'
          },
          {
            text: '🏖️Components',
            link: '/pages/49df9e/'
          },
          {
            text: '📊Fragment',
            link: '/pages/95e963/'
          },
          {
            text: '🔗网络操作',
            link: '/pages/7ba642/'
          },
          {
            text: '🔏异步机制',
            link: '/pages/83b5b7/'
          },
          {
            text: '📦数据存储',
            link: '/pages/eecb9c/'
          },
          {
            text: '🗃️Gradle',
            link: '/pages/eecb9c/'
          },
        ],
      },
      {
        text: '学习笔记',
        items: [{
            text: '『框架』笔记',
            link: '/note/frame/'
          },
          {
            text: '『Kotlin』笔记',
            link: '/note/kotlin/'
          },
          {
            text: '《Vue》笔记',
            link: '/note/vue/'
          },
          {
            text: '《Git》学习笔记',
            link: '/note/git/',
          },
          {
            text: '『Bug踩坑记录』',
            link: '/note/bug/',
          },
        ],
      },
    ],
  },
  {
    text: 'Component',
    link: '/component/',
    items: [{
        text: 'ListView',
        link: '/pages/04bab7/'
      },
      {
        text: 'RecyclerView',
        link: '/pages/0a83b083bdf257cb/'
      },
      {
        text: 'ViewPager',
        link: '/pages/2074bf/'
      },
    ],
  },
  {
    text: 'Java后端',
    link: '/java/',
    items: [{
        text: 'Java笔记',
        items: [{
            text: '🟠JavaSE',
            link: '/pages/b003f8/'
          },
          {
            text: '🟢JavaWeb',
            link: '/pages/411a7c/'
          },
          {
            text: '🔴JavaEE',
            link: '/pages/740fbb/'
          },
          {
            text: '⚪JavaTopic',
            link: '/pages/dc7624/'
          },
          {
            text: '🍳设计模式',
            link: '/pages/c900bf/'
          },
        ],
      },
      {
        text: '计算机基础',
        items: [{
            text: '📌计算机网络',
            link: '/note/csnet/'
          },
          {
            text: '🔍数据结构',
            link: '/note/datastruct/'
          },
          {
            text: '📦数据库',
            link: '/note/database/'
          },
          {
            text: '💻OS',
            link: '/note/os/'
          },
        ],
      },
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [{
        text: '技术文档',
        link: '/pages/9a7ee40fc232253e/'
      },
      {
        text: 'GitHub技巧',
        link: '/pages/4c778760be26d8b3/'
      },
      {
        text: 'Nodejs',
        link: '/pages/117708e0af7f0bd9/'
      },
      {
        text: '博客搭建',
        link: '/pages/41f87d890d0a02af/'
      },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [{
        text: '学习',
        link: '/pages/f2a556/'
      },
      {
        text: '面试',
        link: '/pages/aea6571b7a8bae86/'
      },
      {
        text: '心情杂货',
        link: '/pages/2d615df9a36a98ed/'
      },
      {
        text: '实用技巧',
        link: '/pages/baaa02/'
      },
      {
        text: '友情链接',
        link: '/friends/'
      },
    ],
  },
  {
    text: 'About',
    link: '/about/',
    items: [{
        text: '关于',
        items: [{
          text: '📫关于我',
          link: '/pages/1cbe0d/'
        }, ],
      },
      {
        text: '收藏',
        link: '/pages/beb6c0bd8a66cea6/',
        items: [{
            text: '网站',
            link: '/pages/beb6c0bd8a66cea6/'
          },
          {
            text: '资源',
            link: '/pages/eee83a9211a70f9d/'
          },
          {
            text: 'Vue资源',
            link: '/pages/12df8ace52d493f6/'
          },
        ],
      },
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [{
        text: '分类',
        link: '/categories/'
      },
      {
        text: '标签',
        link: '/tags/'
      },
      {
        text: '归档',
        link: '/archives/'
      },
    ],
  },
]