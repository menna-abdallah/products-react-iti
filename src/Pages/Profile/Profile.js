import React from "react";
import { UseSelector } from "react-redux";

function Profile (){
    const user = UseSelector(state => state.form.userInfo);
    return(
      
            <div className="container my-5">
              <div className="row">
                <div className="col-md-6">
                  <img src={user.image} alt ="userImage"/>
                </div>
                <div className="col-md-6">
                  <h2 className="mb-4">{user.name}</h2>
                  <p className="lead mb-4">{user.email}</p>
                </div>
              </div>
            </div>
          );
        
}

export default Profile;

