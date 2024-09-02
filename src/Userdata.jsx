
import React, { useEffect, useState } from 'react'


export default function Userdata() {
    const [User,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetchUserdata()
    },[])

    const fetchUserdata = async () => {
        setLoading(true);
        try{
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            console.log(data.results[0])
            setUser(data.results[0]);
        } catch(error){
            console.log('error fetching data:',error);
        }
        setLoading(false);
    }

  return (
    <div className='User-data-Card'>
        <div className="Card">
            <div className="img-box">
              {/* Conditional Rendering to prevent errors */}
            {User && User.picture && <img src={User.picture.large} alt="User" />} 
            </div>
           <div className="information">
             <div className="User">
             <i className="fa-solid fa-user"></i>
             <p>{User && User.name ? `${User.name.first} ${User.name.Last}` : 'loading...'}</p>
             </div>
             <div className="User">
             <i className="fa-solid fa-envelope"></i>
             <p>{User ? User.email : 'loading...'}</p>
             </div>
             <div className="User">
             <i className="fa-solid fa-phone"></i>
             <p>{User ? User.phone  : 'loading...'}</p>
             </div>
             <div className="User">
             <i className="fa-solid fa-location-dot"></i>
             <p>{User && User.location ? `${User.location.city} ${User.location.country}` : 'loading...'}</p>
             </div>
             <div className="User">
             <i className="fa-solid fa-calendar-days"></i>
             <p>{User && User.dob ? new Date(User.dob.date).toLocaleDateString(): 'loading...'}</p>
             </div>
           </div>
        </div>
        <button onClick={fetchUserdata}>Generate Random user</button>
    </div>
  )
}



