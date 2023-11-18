import Route from '@ioc:Adonis/Core/Route'

//**************** All user route *********************/
Route.group(() => {
  Route.get('all', 'Social/Auth/AuthController.alluser')
  Route.get('info', 'Social/Auth/AuthController.userinfo')
  Route.put('update', 'Social/Auth/AuthController.updateinfo')
}).prefix('user')
