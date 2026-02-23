import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { PrismaService } from '../prisma.service';

type RegisterDto = {
  name: string;
  email: string;
  password: string;
};

type LoginDto = {
  email: string;
  password: string;
};

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(data: RegisterDto) {
    const hashed = await bcrypt.hash(data.password, 10);

    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashed,
      },
    });
  }

  async login(data: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      return { error: 'Usuario no encontrado' };
    }

    const match = await bcrypt.compare(data.password, user.password);

    if (!match) {
      return { error: 'Contraseña incorrecta' };
    }

    return {
      message: 'Login exitoso',
      user,
    };
  }
}
