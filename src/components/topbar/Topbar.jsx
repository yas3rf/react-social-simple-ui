import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export const Topbar = () => {
  return (
    <div className="topbarContainer">
      
      <div className="topbarLeft">
        <span className="logo">yaSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input
            placeholder="Search fro friend, post or videos"
            className="searchInput"
          />
        </div>
      </div>
     
      <div className="topbarRight">
        <div className="topbarLink">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        
        <div className="topbarIcon">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
         <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />

      </div>
    </div>
  );
};
