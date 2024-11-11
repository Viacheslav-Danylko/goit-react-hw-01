import s from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = friends => {
  return (
    <div className={s.item}>
      <img
        src={friends.avatar}
        alt={friends.name}
        className={s.avatar}
        width="48"
      />
      <p className={s.friendName}>{friends.name}</p>
      <p className={clsx(s.status, friends.isOnline ? s.online : s.offline)}>
        {friends.isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
