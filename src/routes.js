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
  }
]

module.exports = routes
