// lib/auth.ts
/*

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
*/

const JWT_SECRET = process.env.JWT_SECRET || '';
/*

export async function hashPassword(password: string): Promise<string> {
  const hashedPassword = await bcrypt.hash(password, 12);
  return hashedPassword;
}
*/
/*

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  const isValid = await bcrypt.compare(password, hashedPassword);
  return isValid;
}

export function generateToken(userId: string): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
}

export function verifyToken(token: string): any {
  return jwt.verify(token, JWT_SECRET);
}*/
