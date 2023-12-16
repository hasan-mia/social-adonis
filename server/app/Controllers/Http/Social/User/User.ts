import Route from '@ioc:Adonis/Core/Route'

//**************** All user route *********************/
Route.group(() => {
  Route.get('all', 'Social/User/UserController.allUser')
  Route.get('info', 'Social/User/UserController.userInfo')
  Route.put('update/info', 'Social/User/UserController.updateInfo')
  Route.put('update/username', 'Social/User/UserController.updateUsername')
  Route.put('update/email', 'Social/User/UserController.updateEmail')
  Route.put('update/password', 'Social/User/UserController.updatePassword')
  Route.put('update/profile', 'Social/User/UserController.updateProfile')
  Route.put('update/cover', 'Social/User/UserController.updateCover')
}).prefix('user')
