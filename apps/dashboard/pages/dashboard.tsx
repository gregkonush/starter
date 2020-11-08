import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../lib/slices/userSlice';
import { Layout } from '../components';
import tw from 'twin.macro';

const Dashboard = () => {
  const { username } = useSelector(selectUser);

  return (
    <Layout>
      <div css={tw`m-4 p-4 bg-blue-900 flex-grow`}>
        <div css={tw`h-full w-full grid grid-cols-3 gap-4`}>
          {new Array(9).fill(0).map((n, i) => (
            <div key={i} tw="bg-purple-900">
              {username}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
