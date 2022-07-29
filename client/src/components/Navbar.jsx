import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getText } from "../Redux/actions/actions";

const Navbar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function handleInputChange(e) {
    e.preventDefault();
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getText(text));
    setText("");
  }

  

  return (
    <>
      <nav class="navbar fixed-top bg-red">
        <div class="container-fluid">
          <div className="center-nav-form">
            <form class="d-flex" role="search">
              <div class="col-lg-12">
                <input
                  type="text"
                  className="form-control"
                  id="colFormLabel"
                  value={text}
                  onChange={(e)=>handleInputChange(e)}
                  placeholder="insert Text"
                />
              </div>
              <button
                class="btn btn-primary "
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
