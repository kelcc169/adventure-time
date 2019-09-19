import React from 'react';
import { Link } from 'react-router-dom';

import { INavigation } from './react-app-env';

const Navigation: React.FC<INavigation> = ({logout}) => {
  return(
    <div>
      <Link to='/'>Landing Page?</Link>
      <Link to='/create'>Create Adventure</Link>
      <Link to='/' onClick={(e) => logout(e)}>Logout</Link>
    </div>
  )
}

export default Navigation;