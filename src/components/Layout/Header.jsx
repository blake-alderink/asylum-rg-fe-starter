import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import { LoginButton } from '../common/LoginButton';
import { LogoutButton } from '../common/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

// import '../../../styles/RenderLandingPage.less';
// import '../../../styles/styles.css';
const { primary_accent_color } = colors;

function HeaderContent() {
  const { isAuthenticated } = useAuth0();
  let logButton;
  let profileButton;
  if (isAuthenticated) {
    logButton = (
      <Link style={{ color: '#E2F0F7' }}>
        <LogoutButton>Logout</LogoutButton>
      </Link>
    );
    profileButton = (
      <Link to="/profile" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
        Profile
      </Link>
    );
  } else {
    logButton = (
      <Link style={{ color: '#E2F0F7' }}>
        <LoginButton>Login</LoginButton>
      </Link>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        flexWrap: 'nowrap',
        // backgroundColor:'#3E2B2F',
        backgroundColor: '#3E2B2F',
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
        {profileButton}
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Graphs
        </Link>
        {logButton}
      </div>
    </div>
  );
}

export { HeaderContent };
