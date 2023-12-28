import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Feed = ({ accessToken }) => {
 
    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
      const fetchInstagramFeeds = async () => {
        try {
          // Fetch user's media using Instagram Graph API
          const response = await axios.get(`https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`);
  
          // Handle the response, e.g., update state with the fetched feeds
          setFeeds(response.data.data);
        } catch (error) {
          console.error('Error fetching Instagram feeds:', error);
        }
      };
  
      if (accessToken) {
        fetchInstagramFeeds();
      }
    }, [accessToken]);
  
    return (
      <div>
        <h2>Instagram Feeds</h2>
        {feeds.length > 0 ? (
          <div>
            {feeds.map((feed) => (
              <div key={feed.id}>
                <img src={feed.media_url} alt={feed.caption} />
                <p>{feed.caption}</p>
                <a href={feed.permalink} target="_blank" rel="noopener noreferrer">
                  View on Instagram
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p>No feeds available.</p>
        )}
      </div>
    );
  };





export default Feed