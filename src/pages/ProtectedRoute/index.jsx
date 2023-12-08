import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
import { selectUser } from '../../utils/features/users';
import { PropTypes } from 'prop-types';

function ProtectedRoute({children, redirectPath = '/login'}) {
  const user = useSelector(selectUser);
  if(!user) {
      return <Navigate to={redirectPath}  replace />;
  }
 return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.object,
  redirectPath: PropTypes.string
};


export default ProtectedRoute;