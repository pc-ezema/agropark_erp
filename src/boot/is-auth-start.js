import { firebaseAuth } from './firebase';
export default async ({ app, router, Vue, urlPath, redirect }) => {

  urlPath = urlPath.replace('#/','');
  firebaseAuth.onAuthStateChanged((user) => {
      if(!user){ //if not authenticated
        if(urlPath != '/' || urlPath != '/auth/login' || urlPath != '/auth/password_reset'){ //if url is not login,welcome or register page
          redirect({ path: '#/auth/login'});
        }
      }else{
        //if authenticated
        if(urlPath == '/' || urlPath == '/auth/login' || urlPath == '/auth/password_reset'){
          redirect('#/admin/dashboard');
        }
      }
  })
}
