import { auth, signInWithGooglePopup } from '../firebase/firebase.auth.ts';
import { useAuthState } from 'react-firebase-hooks/auth';
export const LoginPage = ()=>{
    const [user] = useAuthState(auth);
    const signInWithGoogle = async () => {
        try {
            await signInWithGooglePopup();
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    };
    const handleLogout = () => {
        auth.signOut();
    };

    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            {user ? (
                <>
                    <h1>Hello, {user?.displayName}</h1>
                    <button onClick={handleLogout}>Log out</button>
                </>
            ) : (
                <button onClick={signInWithGoogle}>Sign In with Google</button>
            )}
        </div>
    )
}

export default LoginPage;