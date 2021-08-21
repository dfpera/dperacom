export default {
  widgets: [
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
                  buildHookId: '60ef88969dffb8650232e958',
                  title: 'Sanity Studio',
                  name: 'dperacom-studio',
                  apiId: '517a057e-c9e0-4991-a3a0-47de0438c287'
                },
                {
                  buildHookId: '60ef88968dfd8d615b812d92',
                  title: 'Portfolio Website',
                  name: 'dperacom',
                  apiId: '312d30ed-b5d4-4cf0-b786-7d7db526cbb1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dfpera/dperacom',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://dperacom.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
