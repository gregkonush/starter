import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tw, { css } from 'twin.macro';
import { useRouter } from 'next/router';
import { onUsernameChange, selectUser } from '../lib/slices/userSlice';

const Index = ({ isVisible = false }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleOnChange = (event) => {
    dispatch(onUsernameChange({ username: event.target.value }));
  };
  const { username } = useSelector(selectUser);
  return (
    <div
      css={[
        css`
          height: 100vh;
        `,
        tw`bg-black flex flex-col items-center justify-center`,
      ]}
    >
      <div tw="flex flex-col">
        <div tw="m-2">Login</div>
        <input tw="m-2 p-2 rounded-md" placeholder="Enter your username" value={username} onChange={handleOnChange} />
        <button tw="m-2 p-2 text-white rounded-md border" onClick={() => router.push('/dashboard')}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Index;
