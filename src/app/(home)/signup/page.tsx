'use client';

import { signup } from '@/app/actions/auth';
import { formInitialState } from '@/app/constants/formInitialState';
import { SignupForm } from '@/types/form.t';
import React, { useState } from 'react';

export default function RegistrationPage() {
  const [form, setForm] = useState<SignupForm>(formInitialState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await signup(form);
      console.log(res.data.message);
      setForm(formInitialState);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 space-y-4">
      <input
        type="name"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2 w-full"
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="border p-2 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-700 cursor-pointer transition-colors duration-400"
      >
        Sign up
      </button>
    </form>
  );
}
