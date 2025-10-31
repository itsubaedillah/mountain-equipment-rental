import React from "react";
import "./auth.css";

export default function RegisterClient() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register Client</h2>
        <form>
          <label>Nama Lengkap</label>
          <input type="text" placeholder="Masukkan nama lengkap" required />

          <label>Email</label>
          <input type="email" placeholder="Masukkan email" required />

          <label>Password</label>
          <input type="password" placeholder="Masukkan password" required />

          <label>Konfirmasi Password</label>
          <input
            type="password"
            placeholder="Ulangi password"
            required
          />

          <button type="submit">Daftar</button>
        </form>

        <div className="auth-footer">
          <p>
            Sudah punya akun?{" "}
            <a href="/login">
              Login di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
