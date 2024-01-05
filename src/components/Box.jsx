// LinkedInSidebar.js
import React from 'react';
import './Box.css';

const Box = () => {
    
  return (
    <div className="linkedin-sidebar">
      <div className="profile-section">
                <img
                src="./profile.jpg"
                alt="Profile"
                className="profile-picture"
                />
                <h2 className="profile-name">Aditya Malu</h2>
                <p className="profile-title">Student at Pune Institute of Computer Technology || President - @GameDevUtopia</p>
            </div>

            <div className = 'view-impression'>
                <div className='views-impression' style={{textAlign : 'left'}} >
                    <p className='views'textAlign='left' > Profile Viewers</p>
                    <p className = 'views-1' textAlign='right'> 262</p>  
                </div>

                <div className='views-impression' style={{textAlign : 'left'}} >
                    <p className='views'>Post Impression</p>
                    <p className = 'views-1' textAlign='right'> 410</p>  
                </div>
            </div>

            <div className='premium' style={{textAlign:'left'}}>
            <p className = 'info-text' textAlign='left'>Strengthen your profile with an Al
                                    writing assistant</p>
                <p className = 'premium-text' textAlign='left'> {'\u2605'} Try Premium for free</p>
            </div>

            <div className='bookmark' style={{textAlign:'left'}}>
                <p className='bookmark-1' textAlign='left'> <img
                src='./bookmakr.png' className='bookmark-image' ></img>My Items</p>
            </div>
    </div>
  );
};

export default Box;
