import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function LoginAdmin() {
  return (
    <div className="auth-container admin-login">
      <div className="auth-card">
        <h2>Login Admin</h2>
        <form>
          <label>Email Admin</label>
          <input type="email" placeholder="Masukkan email admin" />

          <label>Password</label>
          <input type="password" placeholder="Masukkan password" />

          <button type="submit">Login</button>

          <div className="auth-footer">
          Belum punya akun? <Link to="/admin-register">Daftar di sini</Link>
        </div>
        </form>
      </div>
    </div>
  );
}
