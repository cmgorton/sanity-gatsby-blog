export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ecbc6a4d2193e25728e08df',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7xnzx8hr',
                  apiId: '983e3466-705f-42d5-be51-0fd111cec706'
                },
                {
                  buildHookId: '5ecbc6a45669656bcc3cccf2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-p3put8ki',
                  apiId: 'b44901f1-9c82-448e-b13b-ea009a0cff94'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cmgorton/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-p3put8ki.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
