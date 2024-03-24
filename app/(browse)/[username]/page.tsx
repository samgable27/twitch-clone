import { isFollowingUser } from '@/lib/follow-service';
import { getUserByUsername } from '@/lib/user-service';
import { notFound } from 'next/navigation';
import { Actions } from './_components/actions';
import { isBlockedByUser } from '@/lib/block-service';

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);
  const isBlockedByThisUser = await isBlockedByUser(user.id);

  // if (isBlockedByThisUser) {
  //   notFound();
  // }

  return (
    <div className="flex flex-col gap-y-4">
      <p>username: {user.username}</p>
      <p>userID: {user.id}</p>
      <p>Is Following? {`${isFollowing}`}</p>
      <p>is Blocked by this user: {`${isBlockedByThisUser}`}</p>
      <Actions userId={user.id} isFollowing={isFollowing} />
    </div>
  );
};

export default UserPage;
