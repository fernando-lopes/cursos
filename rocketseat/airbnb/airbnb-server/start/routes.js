'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
});

Route.post('/users', 'UserController.create');
Route.post('/sessions', 'SessionController.create');
