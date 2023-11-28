import Route from '@ioc:Adonis/Core/Route'

//**************** All user route *********************/
Route.group(() => {
  Route.get('all', 'Social/User/UserController.alluser')
  Route.get('info', 'Social/User/UserController.userinfo')
  Route.put('update', 'Social/User/UserController.updateinfo')
}).prefix('user')
