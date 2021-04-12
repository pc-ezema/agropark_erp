import { firebaseAuth } from '../boot/firebase'
class AuthService{
    login(email, password){
        firebaseAuth.signInWithEmailAndPassword(email, password).then(user => {
            return user;
        }).catch(err => {
            throw err;
        });
    }
    password_reset(email){
        firebaseAuth.sendPasswordResetEmail(email).then(result => {
            return result;
        }).catch(err => {
            throw err;
        });
    }
}

export default AuthService;