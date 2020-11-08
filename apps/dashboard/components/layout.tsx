import React from 'react';
import tw from 'twin.macro';
import { css } from 'styled-components';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <div
      css={[
        css`
          height: 100vh;
        `,
        tw`bg-black text-white flex flex-col`,
      ]}
    >
      <header css={tw`self-start w-full h-20 bg-gray-900 p-2 flex justify-end items-center`}>
        <div>
          <button css={tw`p-2 px-4 border border-white rounded-md`} onClick={() => router.push('/')}>
            Logout
          </button>
        </div>
      </header>
      <main css={tw`h-full w-full flex items-center`}>
        <div css={tw`flex flex-col h-full items-center`}>
          <div css={tw`cursor-pointer hover:bg-gray-600 py-4 px-10`}>Dashboard</div>
          <div
            css={tw`my-4 cursor-pointer`}
            onClick={() => {
              router.push('/settings');
            }}
          >
            Settings
          </div>
        </div>
        <div css={tw`bg-gray-800 h-full w-full flex`}>{children}</div>
      </main>
    </div>
  );
}
