import Profile from "./Profile/Profile";
import user from './info/user'
import Statistics from "./Statistics/stats";
import data from "./info/data";
import FriendsList from "./FriendsList/FriendsList";
import friends from './info/friends'
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from './info/transactions'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
  <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  />
  <Statistics title="Upload stats" stats={data} />
  <FriendsList friends={friends} />
  <TransactionHistory transactions={transactions} />
    </div>
  );
};
