import React from "react";
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
        </form>
      </div>
    </div>
  );
}
