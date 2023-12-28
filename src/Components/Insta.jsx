import React ,{useEffect,useState}from 'react'
import axios from 'axios';

const Insta = () => {
    const clientID = 'YOUR_CLIENT_ID'; // Replace with your Instagram app client ID
    const redirectURI = 'YOUR_REDIRECT_URI'; // Replace with your redirect URI
    const apiURL = 'YOUR_INSTAGRAM_API_URL'; // Replace with Instagram Graph API URL
  
    useEffect(() => {
      const handleInstagramAuth = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
  
        if (code) {
          try {
            // Exchange code for access token
            const response = await axios.post(apiURL, {
              client_id: clientID,
              redirect_uri: redirectURI,
              code,
              grant_type: 'authorization_code',
            });
  
            // Handle the response, e.g., store the access token in state or localStorage
            const accessToken = response.data.access_token;
            console.log('Instagram Access Token:', accessToken);
  
            // TODO: Add your logic to store the access token and handle user authentication
          } catch (error) {
            console.error('Error exchanging code for access token:', error);
          }
        }
      };
  
      handleInstagramAuth();
    }, []);
  
    const handleInstagramLogin = () => {
      // Redirect the user to Instagram for authentication
      window.location.href = `https://api.instagram.com/oauth/authorize/?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=code`;
    };
  
    return (
      <div>
        <h2>Instagram Login</h2>
        <button onClick={handleInstagramLogin}>Login with Instagram</button>
      </div>
    );
  };

export default Insta