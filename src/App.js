import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen"
import {useEffect} from "react";
import {auth} from "./firebase";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    let navigation = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                dispatch(
                    login({
                        uid: userAuth.uid,
                        email: userAuth.email
                    })
                )
            }else {
                dispatch(logout());
            }
        })
        return unsubscribe;
    }, [dispatch]);

    const checkAuth = () =>{
        !user ?
            navigation('/login') : navigation('/')
    }
    useEffect(() => {
        checkAuth();
    },[user])
    return (
        <div className="app">
            <Routes>
                <Route exact path='/' element={<HomeScreen />} />
                <Route exact path='/login' element={<LoginScreen />} />
                <Route exact path='/profile' element={<ProfileScreen/>} />
            </Routes>
        </div>
    );
}

export default App;
