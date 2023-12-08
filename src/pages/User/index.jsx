import { useSelector } from 'react-redux';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import UserContainer from '../../components/UserContainer';
import { selectUser } from '../../utils/features/users';

function User () {
  const user = useSelector(selectUser);

  if(user !== null){
    return (
    <div>
      <Header />
      <UserContainer />
      <Footer />
    </div>
    );
  }
}

export default User;