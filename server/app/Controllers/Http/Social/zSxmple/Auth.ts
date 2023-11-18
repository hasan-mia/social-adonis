import Route from '@ioc:Adonis/Core/Route'

//**************** All authentication route *********************/
Route.group(() => {
  Route.post('signup', 'Social/Auth/AuthController.signup')
  Route.post('signin', 'Social/Auth/AuthController.signin')
  Route.post('signout', 'Social/Auth/AuthController.signout')
}).prefix('auth')
