import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Headrer = () => {
  const authStatus = useSelector((state) =>   state.auth.status)
  const navigate = useNavigate()
  const naItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: 'Login',
      slug: "/login",
      active: !authStatus,
    },
  ]
  return <div>Header</div>;
};

export default Headrer;
