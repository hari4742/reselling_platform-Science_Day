import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { NavLink, Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import backend from "../backend";
import backendURL from "../backendURL";

const ProfileNav = () => {
  const { user, isLogged, setLogged, setUser, wishList, setWishList } =
    useContext(AuthContext);
  const fetchWishlist = async (user_id) => {
    const res = await backend.get(`/user/${user_id}/wish_list`);
    // console.log(res);
    setWishList(res.data.data);
  };
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    setUser({});
    setLogged(false);
    navigate("/");
  };
  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
    fetchWishlist(user.user_id);
  }, []);
  return (
    <div className="profile-nav">
      <img src={backendURL + user.propic} alt="user profile pric" />
      <Link
        style={{ textDecoration: "none" }}
        to={`/profile/${user.user_id}/${
          user.first_name + user.last_name
        }/edit_avatar`}
      >
        <i className="fas fa-pen">
          <BsPencilSquare />
        </i>
      </Link>
      <p>
        {user.first_name} {user.last_name}
      </p>
      <hr />
      <div className="nav-opt">
        <NavLink
          style={{ textDecoration: "none" }}
          activeclassname="setting-selected"
          to={`/profile/${user.user_id}/${
            user.first_name + user.last_name
          }/personal_details`}
        >
          Personal Details
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          activeclassname="setting-selected"
          to={`/profile/${user.user_id}/${
            user.first_name + user.last_name
          }/wishlist`}
        >
          Wishlist({wishList.length})
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          activeclassname="setting-selected"
          to={`/profile/${user.user_id}/${
            user.first_name + user.last_name
          }/posts`}
        >
          Your Posts
        </NavLink>
      </div>
      <p id="logout" onClick={handleLogOut}>
        {" "}
        Log Out
      </p>
    </div>
  );
};

export default ProfileNav;
