import { api } from '@/api/axios';
import { SignupForm } from '@/types/form.t';

export async function signup(form: SignupForm) {
  const resposne = await api.post('/auth/signup', form, {
    withCredentials: true,
  });
  return resposne;
}
