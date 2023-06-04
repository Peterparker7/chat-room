import { useState } from 'react';
import InputField from '../Components/InputField';
import './HomePage.css';

const HomePage = () => {
  const [ activeTab, setActiveTab ] = useState('login');

  const toggleBtn = (param) => setActiveTab(param);

  return (
    <article>
      <div className='container'>
        <div className='container-title'>
          Welcome to Chat Room!
        </div>
        <div className="container-tabs">
          <div className={activeTab === 'login' ? 'active-tab' : 'tab'} onClick={() => toggleBtn('login')}>LOG IN</div>
          <div className={activeTab === 'signup' ? 'active-tab' : 'tab'} onClick={() => toggleBtn('signup')}>SIGN UP</div>
        </div>
        {
          activeTab === 'login' &&
            <form className="field">
              <InputField type="email">Email</InputField>
              <InputField type="password" showHide >Password</InputField>
              <div className="button-field">
                <button>LOG IN</button>
                <button>LOG IN AS GUEST</button>
              </div>
            </form>
        }
        {
          activeTab === 'signup' &&
            <form className="field">
              <InputField>Name</InputField>
              <InputField type="email">Email</InputField>
              <InputField type="password">Password</InputField>
              <InputField type="password">Confirm Password</InputField>
              <div className="button-field">
                <button>SIGN UP</button>
              </div>
            </form>
        }


      </div>
    </article>
    )
}

export default HomePage;