import { setUsername } from '@/store/commandlineSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const loginMessage = (ip: string, username: string) => {
  var currentdate = new Date();
  var datetime =
    ('0' + currentdate.getDate()).slice(-2) +
    '/' +
    ('0' + (currentdate.getMonth() + 1)).slice(-2) +
    '/' +
    currentdate.getFullYear() +
    '@' +
    ('0' + currentdate.getHours()).slice(-2) +
    ':' +
    ('0' + currentdate.getMinutes()).slice(-2);

    return (
    <>
      <p className="typed typed1">{`logged in as: ${username ? username : 'guest'}`}</p>
      <p className="typed typed2">{`###################################################################################################`}</p>
      <p className="typed typed3">{`#                                    Welcome to My Website!                                       #`}</p>
      <p className="typed typed4">{`#                              Ben's Server release 1.0.0 (beta)                                  #`}</p>
      <p className="typed typed5">{`#                                                                                                 #`}</p>
      <p className="typed typed6">{`# You are on the latest stable release                                                            #`}</p>
      <p className="typed typed7">{`# Run 'help' for tips on getting started                                                          #`}</p>
      <p className="typed typed8">{`# For any bugs or issues with the release please reach out on GitHub                              #`}</p>
      <p className="typed typed9">{`# Current login: ${datetime} from ${ip} ${' '.repeat(
        18 - ip.length,
      )}                                        #`}</p>
      <p className="typed typed10">{`###################################################################################################`}</p>
    </>
  );
};

const LoginMessage = () => {
  const [ipAddress, setIPAddress] = useState('')
  let username = localStorage.getItem('username');
  username = username ? username : 'guest';
  const dispatch = useDispatch();
  dispatch(setUsername(username));

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIPAddress(data.ip))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className={'typing-container'}>
      <p>{loginMessage(ipAddress, username)}</p>
    </div>
  );
};

export default LoginMessage;
