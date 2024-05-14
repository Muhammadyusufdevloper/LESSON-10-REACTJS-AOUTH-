import React from "react";
import "./Admin.scss";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigation = useNavigate()
  function hendalLogaout() {
    localStorage.clear()
    navigation("/")
  }
  return (
    <main>
      <section className="admin" id="admin">
        <div className="container">
          <div className="admin__top">
            <div className="admin__top__link-card">
              <a className="admin__top__link" href="#">
                Home /
              </a>
              <a className="admin__top__link" href="#">
                My Account
              </a>
            </div>
            <p className="admin__top__text">
              Welcome! <span>Md Rimel</span>
            </p>
          </div>
          <div className="admin__wrapper">
            <div className="admin__left-boxes">
              <div className="admin__left-boxes__card">
                <h3 className="admin__left-boxes__title">Manage My Account</h3>
                <a className="admin__left-boxes__link" href="#">
                  My Profile
                </a>
                <a className="admin__left-boxes__link" href="#">
                  Address Book
                </a>
                <a className="admin__left-boxes__link" href="#">
                  My Payment Options
                </a>
              </div>
              <div className="admin__left-boxes__card">
                <h3 className="admin__left-boxes__title">My Orders</h3>
                <a className="admin__left-boxes__link" href="#">
                  My Returns
                </a>
                <a className="admin__left-boxes__link" href="#">
                  My Cancellations
                </a>
              </div>
              <div className="admin__left-boxes__card">
                <h3 className="admin__left-boxes__title">Is Logout</h3>
                <button onClick={hendalLogaout} className="admin__left-boxes__btn">Logout</button>
              </div>
            </div>
            <div className="admin__right-boxes">
              <h2 className="admin__title">Edit Your Profile</h2>
              <form className="admin__right-boxes__form" id="form">
                <div className="admin__right-boxes__cards">
                  <div className="admin__right-boxes__card">
                    <label className="admin__label" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      className="admin__input"
                      placeholder="Md"
                      type="text"
                      required
                    />
                  </div>
                  <div className="admin__right-boxes__card">
                    <label className="admin__label" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      className="admin__input"
                      placeholder="Rimel"
                      type="text"
                      required
                    />
                  </div>
                  <div className="admin__right-boxes__card">
                    <label className="admin__label" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      className="admin__input"
                      placeholder="rimel1111@gmail.com"
                      type="email"
                      required
                    />
                  </div>
                  <div className="admin__right-boxes__card">
                    <label className="admin__label" htmlFor="address">
                      Address
                    </label>
                    <input
                      id="address"
                      className="admin__input"
                      placeholder="Kingston, 5236, United State"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="admin__right-boxes__password-cards">
                  <div className="admin__right-boxes__card">
                    <label className="admin__label" htmlFor="currentPassword">
                      Password Changes
                    </label>
                    <input
                      id="currentPassword"
                      className="admin__input"
                      placeholder="Current Password"
                      type="password"
                      required
                    />
                  </div>
                  <div className="admin__right-boxes__card">
                    <input
                      id="newPassword"
                      className="admin__input"
                      placeholder="New Password"
                      type="password"
                      required
                    />
                  </div>
                  <div className="admin__right-boxes__card">
                    <input
                      id="confirmNewPassword"
                      className="admin__input"
                      placeholder="Confirm New Password"
                      type="password"
                      required
                    />
                  </div>
                </div>
                <div className="admin__right-boxes__btns">
                  <button
                    className="admin__right-boxes__btn-cancel"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button className="admin__right-boxes__btn" type="submit">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admin;
