const config = {
    gatsby: {
        pathPrefix: '/',
        siteUrl: 'https://hasura.io',
        gaTrackingId: null,
        trailingSlash: false,
    },
    header: {
        // logo: 'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/brand.svg',
        // logoLink: 'https://hasura.io/learn/',
        title: 'LIFT Wisconsin Driver\'s License Recovery Training',
        githubUrl: 'https://github.com/Code4Good-UWMadison/LIFT_webinar',
        // links: [{ text: '', link: '' }],
        search: {
            enabled: false,
            indexName: '',
            algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
            algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
            algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
        },
    },
    sidebar: {
        forcedNavOrder: [
            '/introduction', // add trailing slash if enabled above
            '/01',
            '/02',
            '/03',
            '/04',
            '/05',
            '/06',
            '/07',
            '/08',
            '/09',
            '/10',
            '/11',
            '/12',
            '/13',
            '/14',
            '/15',
            '/16',
            '/17',
            '/end',
        ],
        // collapsedNav: [
        //   '/codeblock', // add trailing slash if enabled above
        // ],
        frontline: false,
        ignoreIndex: true,
        title: "<a href='https://www.coding4good.net'>C4G&nbsp;</a> &nbsp; x &nbsp; <a href='https://www.liftwisconsin.org'>LIFT Wisconsin</a>",
    },
    siteMetadata: {
        title: 'Gatsby Gitbook Boilerplate | Hasura',
        description: 'Documentation built with mdx. Powering hasura.io/learn ',
        ogImage: null,
        docsLocation: 'https://github.com/Code4Good-UWMadison/LIFT_webinar/tree/master/content',
        favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
    },
    pwa: {
        enabled: false, // disabling this will also remove the existing service worker.
        manifest: {
            name: 'Gatsby Gitbook Starter',
            short_name: 'GitbookStarter',
            start_url: '/',
            background_color: '#6b37bf',
            theme_color: '#6b37bf',
            display: 'standalone',
            crossOrigin: 'use-credentials',
            icons: [{
                src: 'src/pwa-512.png',
                sizes: `512x512`,
                type: `image/png`,
            }, ],
        },
    },
};

module.exports = config;
