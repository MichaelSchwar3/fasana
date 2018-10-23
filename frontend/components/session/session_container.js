import { connect } from 'react-redux';
import Session from './session';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.currentUserId]
});

const mapDispatchToProps = dispatch => {
  return {
    logout: ()=> dispatch(logout())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Greeting);
