const countdown = [
  {
    label: 'First Countdown',
    start: '02/04/2016 0600',
    end:   '02/04/2016 1100'
  },
  {
    label: 'Second Countdown',
    start: '02/05/2016 0700',
    end:   '02/05/2016 1230'
  }
]

const schedule = [
  {
    name: 'Food',
    location: '2nd Floor',
    time: '02/04/2016 0800'
  },
  {
    name: 'More Food',
    location: '2nd Floor',
    time: '02/04/2016 1615'
  }
]

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

const sponsors = [
  {
    name: 'Bluebell Icecream',
    imgUrl: 'http://yep.com/img',
    order: 0
  },
  {
    name: 'Barbell Brigade',
    imgUrl: 'http://bb.com/img',
    order: 1
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
    path: '/countdown',
    handler: (request, reply) => {
      reply(countdown)
    }
  },
  {
    method: 'GET',
    path: '/schedule',
    handler: (request, reply) => {
      reply(schedule)
    }
  },
  {
    method: 'GET',
    path: '/sponsors',
    handler: (request, reply) => {
      reply(sponsors)
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
