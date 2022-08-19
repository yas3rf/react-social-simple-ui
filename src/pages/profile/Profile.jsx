import "./profile.css";
import { Topbar } from "../../components/topbar/Topbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Rightbar } from "../../components/rightbar/Rightbar";
import { Feed } from "../../components/feed/Feed";

export const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            
            <div className="profileCover">
            <img src="/assets/post/7.jpeg" alt="" className="profileCoverImg" />
            <img src="/assets/person/1.jpeg" alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Yaser Faqiri</h4>
              <span className="profileInfoDesc">Hello mother father</span>

            </div>
            
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  )
}
