import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    head: [
        ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: `/images/icons/favicon-16x16.png`,}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: `/images/icons/favicon-32x32.png`,}],
    ],
    lang: 'ru_RU',
    title: 'ProjectBW-WiKi',
    description: 'ProjectBW-WiKi',
    port: '8080', //Порт на котором запускается VuePress
    theme: defaultTheme({
        repo: 'bwproject/projectbw-wiki',
        docsRepo: 'https://github.com/bwproject/projectbw-wiki',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        locales: {
            '/': {
                editLinkText: 'Измените эту страницу на GitHub',
                lastUpdatedText: "Последнее обновление",
                notFound: [
                    "Здесь ничего нет.",
                    "Как мы тут оказались?",
                    "Похоже, у нас есть несколько неработающих ссылок."
                ],
                backToHome: "Вернуться на главную",
                openInNewWindow: "открыть в новом окне",
                toggleDarkMode: "переключить темный режим",
                toggleSidebar: "переключить боковую панель",
                contributors: false,
                contributorsText: "Спонсоры",
            },
        },
        logo: 'images/hero.png',
        navbar: [
            {
                text: 'Руководство',
                children: [
                    '/install/README.md',
                    '/auth/README.md',
                    '/clientbuild/README.md',
                    '/servers/README.md',
                    '/runtime/README.md',
                    '/other/README.md',
                    '/dev/README.md',
                ],
            },
            {
                text: 'Зеркало',
                link: 'https://projectbw.ru/',
            },
            {
                text: 'Discord',
                link: 'https://projectbw.ru/',
            },
        ],
        sidebar: {
            '/': [
                {
                    text: 'Руководство',
                    collapsible: false,
                    children: [
                        '/install/README.md',
                        '/auth/README.md',
                        '/clientbuild/README.md',
                        '/servers/README.md',
                        '/runtime/README.md',
                        '/other/README.md',
                        '/dev/README.md',
                    ],
                },
            ],
        },
    }),
    plugins: [
        [
        ],
    ]
})