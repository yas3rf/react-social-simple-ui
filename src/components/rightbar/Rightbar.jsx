import "./rightbar.css";
import {Users} from "../../DummyData";
import { Online } from "../online/Online";

export function Rightbar({profile}) {

  const HomeRightbar =()=>{
    return(
      <>
      <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" /> 
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="advertisment" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>

        <ul className="rightbarFriendList">
          {Users.map(u=>(
            < Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar =()=>{
    return(
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Istanbul</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="rightFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="rightFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="rightFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="rightFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="rightFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="rightFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>


      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
      </div>
  )
}
