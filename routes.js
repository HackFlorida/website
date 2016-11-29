const announcements = [
  {
    title: "SuchAnnounce",
    content: "Muchcontents"
    date: "2016-10-11 12:12:12"
  },
  {
    title: "SuchAnnounce2",
    content: "Muchcontents2"
    date: "2016-10-11 15:12:12"
  }
];

const maps = [
  {
    label: "thebestmap",
    mapUrl: "http://www.suchurl.com"
    int: "1"
  },
  {
    label: "thewortmap",
    mapUrl: "http://www.suchurl2.com"
    int: "2"
  }
]


const routes = [
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public',
        defaultExtension: 'html'
      }
    }
  },
  {
    method: 'GET',
    path: '/announcements',
    handler: (request,reply) => {
      reply(announcements)
    }
  },
  {
    method: 'GET',
    path: '/maps',
    handler: (request,reply) => {
      reply(maps)
    }
  }
]

module.exports = routes
