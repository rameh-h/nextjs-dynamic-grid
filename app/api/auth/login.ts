// pages/api/auth/login.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { getUserByEmail } from '../../lib/user';
import { verifyPassword, generateToken } from '../../lib/auth';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  const user = await getUserByEmail(email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const isValid = await verifyPassword(password, user.password);
  if (!isValid) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = generateToken(user.id);
  res.status(200).json({ token });
};