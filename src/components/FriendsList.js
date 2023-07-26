import React, { useState } from 'react';

function FriendsList() {
  // Sample list of friends (you can replace this with your actual data)
  const [friends, setFriends] = useState([
    { id: 1, name: 'Friend 1', isBlocked: false },
    { id: 2, name: 'Friend 2', isBlocked: false },
    { id: 3, name: 'Friend 3', isBlocked: false },
    { id: 4, name: 'Friend 4', isBlocked: false },
    { id: 5, name: 'Friend 5', isBlocked: false },
  ]);

  // Sample list of suggested friends (you can replace this with your actual data)
  const [suggestedFriends, setSuggestedFriends] = useState([
    { id: 6, name: 'Suggested Friend 1', isBlocked: false },
    { id: 7, name: 'Suggested Friend 2', isBlocked: false },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleAddFriend = () => {
    if (searchQuery.trim() !== '') {
      const newFriend = { id: friends.length + 1, name: searchQuery.trim(), isBlocked: false };
      setFriends((prevFriends) => [...prevFriends, newFriend]);
      setSearchQuery('');
    }
  };

  const handleBlockFriend = (friendId) => {
    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === friendId ? { ...friend, isBlocked: true } : friend
      )
    );
  };

  const handleUnblockFriend = (friendId) => {
    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === friendId ? { ...friend, isBlocked: false } : friend
      )
    );
  };

  const handleUnfriend = (friendId) => {
    setFriends((prevFriends) => prevFriends.filter((friend) => friend.id !== friendId));
  };

  return (
    <div className="friends-list">
      <h2>Friends List</h2>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search friends..."
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleAddFriend} className="add-friend-button">
          Add Friend
        </button>
      </div>
      <div className="friends-container">
        <h3>Your Friends</h3>
        {friends.map((friend) => (
          <div key={friend.id} className={`friend ${friend.isBlocked ? 'blocked' : ''}`}>
            {friend.name}
            {!friend.isBlocked ? (
              <button className="block-button" onClick={() => handleBlockFriend(friend.id)}>
                Block
              </button>
            ) : (
              <button className="unblock-button" onClick={() => handleUnblockFriend(friend.id)}>
                Unblock
              </button>
            )}
            <button className="unfriend-button" onClick={() => handleUnfriend(friend.id)}>
              Unfriend
            </button>
          </div>
        ))}
      </div>
      <div className="suggested-friends-container">
        <h3>Suggested Friends</h3>
        {suggestedFriends.map((suggestedFriend) => (
          <div key={suggestedFriend.id} className={`suggested-friend ${suggestedFriend.isBlocked ? 'blocked' : ''}`}>
            {suggestedFriend.name}
            {!suggestedFriend.isBlocked ? (
              <button className="block-button" onClick={() => handleBlockFriend(suggestedFriend.id)}>
                Block
              </button>
            ) : (
              <button className="unblock-button" onClick={() => handleUnblockFriend(suggestedFriend.id)}>
                Unblock
              </button>
            )}
            <button className="unfriend-button" onClick={() => handleUnfriend(suggestedFriend.id)}>
              Unfriend
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FriendsList;
