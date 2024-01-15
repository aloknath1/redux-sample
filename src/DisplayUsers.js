import { useSelector, useDispatch } from 'react-redux';
import { deleteOldUser } from './store/users';

function DisplayUsers() {
    const dispatch = useDispatch() ;
  const userdata = useSelector((state) =>  {
        return state.users
    });
  console.log("data", userdata);
  const deleteUser = (id) => {
    dispatch(deleteOldUser(id));
  }
  console.log("userdata",userdata);
  return <>
    {
        userdata.map((user, id) => {
            return <li key={id}>{user}  &nbsp; <a href="#" onClick={() => deleteUser(id)}>delete User</a></li>
        })
    }   
  </>
}

export default DisplayUsers;
