import {useDispatch} from 'react-redux';
import authService from '../../appwrite/auth';
import {logout} from '../../store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout());
        })
        .catch((error) => {
            console.log("Error in LogoutBtn.jsx because appwrite :: auth :: logout :: is not working correctly: ", error);
        });
    }

    return ( 
        <button 
        className='inline-block px-6 py-2 duration-200 hover:bg-blue-400 rounded-md'
        onClick={logoutHandler}
        >Logout</button>
     );
}

export default LogoutBtn;