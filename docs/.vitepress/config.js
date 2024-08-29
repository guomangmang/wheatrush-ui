export default {
    lang: 'en-US',
    title: 'wheatrush-UI',
    description: 'Vite & Vue powered static site generator.',

    // 主题相关配置
    themeConfig: {
        lastUpdated: '最后更新时间',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '编辑此网站',
        repo: '',
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        },
        nav: [
            { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
            { text: '组件', link: '/component/icon', activeMatch: '/component/' },
        ],
        sidebar: {
            '/guide/': [
                {
                    text: '指南',
                    items: [
                        { text: '安装', link: '/guide/installation' },
                        { text: '快速开始', link: '/guide/quieStart' },
                    ]
                }
            ],
            '/component/': [
                {
                    text: '基础组件',
                    items: [
                        { text: 'Icon 图标', link: '/component/icon' },
                        { text: 'Button 按钮', link: '/component/button' },
                    ]
                },
                {
                    text: '表单组件',
                    items: [
                        { text: 'Input 输入框', link: '/component/form/input' },
                    ]
                }
            ]
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/guomangmang/wheatrush-ui' },
        ],
    }
}