import React, { useEffect } from "react";

function Dog() {

//Remember to add auth to get to this place via login/register

  return (
    <div className="px-4 py-5 my-5 text-center" style={{marginRight: '900px'}}>
      <h1 className="display-5 fw-bold text-body">Paginated Dog</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">This needs to be a paginated site that represents individual data based on a selected dog from the main page</p>
      </div>
        <span className="tagcloud" style={{marginLeft: '900px', marginTop: '-500px'}}>
        </span>
    </div>
  );
}


export default Dog;
