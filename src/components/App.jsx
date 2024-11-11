import Profile from './Profile/Profile';
import userData from '../userData.json';
import FriendList from './FriendList/FriendList';
import friends from '../friends.json';
import TransactionsHistory from './TransactionsHistory/TransactionsHistory';
import transactions from '../transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionsHistory transactions={transactions} />
    </>
  );
};

export default App;
