export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '616ed6e95757c51faaca7f4d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-x5zrtri6',
                  apiId: 'a24f50d6-ac27-469e-9474-e9dc5a35b1bf'
                },
                {
                  buildHookId: '616ed6e9d05efe201c966d4a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xd3re2zs',
                  apiId: 'b67b0388-6cd0-4e88-a069-37c203f8ba8c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/antony/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xd3re2zs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
