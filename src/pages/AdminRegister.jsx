import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const AdminRegister = () => {
  return (
    <div className="auth-container admin-login">
      <div className="auth-card">
        <h2>Register Admin</h2>
        <form>
          <label>Nama Lengkap</label>
          <input type="text" placeholder="Masukkan nama lengkap" />

          <label>Email</label>
          <input type="email" placeholder="Masukkan email" />

          <label>Password</label>
          <input type="password" placeholder="Masukkan password" />

          <label>Konfirmasi Password</label>
          <input type="password" placeholder="Masukkan ulang password" />

          <button type="submit">Register</button>
        </form>
        <div className="auth-footer">
          <p>
            Sudah punya akun?{" "}
            <a href="/admin-login">Login di sini</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
