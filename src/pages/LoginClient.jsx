import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function LoginClient() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login Client</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Masukkan email kamu" />

          <label>Password</label>
          <input type="password" placeholder="Masukkan password" />

          <button type="submit">Login</button>
        </form>

        <div className="auth-footer">
          Belum punya akun? <Link to="/register">Daftar di sini</Link>
        </div>
      </div>
    </div>
  );
}