'use server';

import { IFormData } from "@/types/form-data";
import { prisma } from "@/utils/prisma";

export const registerUser = async (data: IFormData) => {
    const {email, password, confirmPassword} = data;
    try {
          const user = await prisma.user.create({
              data: {
                  email,
                  password
              },
          });
          console.log('user:', user);
          return user;
    } catch (e){
        console.log('Ошибка регистрации:', e);
    }
   
}
  