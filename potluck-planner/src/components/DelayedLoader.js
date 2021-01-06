import Delay from 'react-delay-render';
import { Redirect } from 'react-router-dom';

const Delayed = () => <Redirect to='/login' />;

export default Delay({ delay: 2000 })(Delayed);
