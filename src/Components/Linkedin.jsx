import React,{useEffect,useState} from 'react'
import axios from 'axios';

const Linkedin = () => {
    const [accessToken, setAccessToken] = useState(null);

    const handleLinkedInLogin = () => {
      // Replace with your LinkedIn app client ID and redirect URI
      const clientID = 'your-actual-client-id';
      const redirectURI = 'your-actual-redirect-uri';
      
  
      // Redirect the user to the LinkedIn authorization URL
      window.location.href = `https://www.linkedin.com/oauth/v2/authorization?` +
        `response_type=code&` +
        `client_id=${clientID}&` +
        `redirect_uri=${redirectURI}&` +
        `scope=r_liteprofile%20r_emailaddress`;
    };
  
    useEffect(() => {
      const handleLinkedInAuth = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
  
        if (code) {
          try {
            // Replace with your LinkedIn app client ID, client secret, and redirect URI
            const clientID = 'YOUR_LINKEDIN_CLIENT_ID';
            const clientSecret = 'YOUR_LINKEDIN_CLIENT_SECRET';
            const redirectURI = 'YOUR_REDIRECT_URI';
  
            // Exchange the authorization code for an access token
            const response = await axios.post(
              'https://www.linkedin.com/oauth/v2/accessToken',
              `grant_type=authorization_code&` +
              `code=${code}&` +
              `redirect_uri=${redirectURI}&` +
              `client_id=${clientID}&` +
              `client_secret=${clientSecret}`,
              {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
              }
            );
  
            // Set the obtained access token in state
            setAccessToken(response.data.access_token);
  
            // TODO: Add your logic to store the access token and handle user authentication
          } catch (error) {
            console.error('Error exchanging code for access token:', error);
          }
        }
      };
  
      handleLinkedInAuth();
    }, []);
  
    const fetchLinkedInData = async () => {
      if (accessToken) {
        try {
          // Fetch user's profile data using the LinkedIn API
          const response = await axios.get('https://api.linkedin.com/v2/me', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
  
          // Handle the response, e.g., update state with the fetched user data
          console.log('LinkedIn User Data:', response.data);
        } catch (error) {
          console.error('Error fetching LinkedIn user data:', error);
        }
      }
    };
  
    return (
      <div>
        <h2>LinkedIn Login</h2>
        <button onClick={handleLinkedInLogin}>Login with LinkedIn</button>
        <button onClick={fetchLinkedInData}>Fetch LinkedIn Data</button>
      </div>
    );
  }; 


export default Linkedin
