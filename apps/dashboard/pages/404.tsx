import React from 'react';
import tw, { css } from 'twin.macro';

export default function NotFound() {
  return (
    <div
      css={[
        tw`bg-black text-white`,
        css`
          height: 100vh;
        `,
      ]}
    >
      Nothing was found
    </div>
  );
}
