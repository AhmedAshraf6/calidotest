import customFetch from '@/util/axios';
import React, { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export default function SignInWithGoogle() {
  const searchParams = useSearchParams();
  const tokenFromSearch = searchParams.get('token');
  const router = useRouter();
  const handleGoogelLogin = async () => {
    try {
      const response = await customFetch('/auth/google');
      router.push(response?.data?.url);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (tokenFromSearch) {
      Cookies.set('calidoUser', tokenFromSearch, {
        expires: 1,
        secure: true,
      });
      //  AddUser(response?.data?.user);
      toast.success('Login success');
      router.push('/');
    }
  }, [tokenFromSearch]);
  return (
    <button
      className='btn-danger flex w-full items-center mt-5 gap-3 justify-center'
      type='button'
      onClick={handleGoogelLogin}
    >
      <FcGoogle className='text-center' />
      Continue With Google
    </button>
  );
}
