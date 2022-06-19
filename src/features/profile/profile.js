import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/';
import { loadProfile, selectProfile } from '../../redux/stocks/profileSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const { ticker } = useParams();
  const profiles = useSelector(selectProfile);

  useEffect(() => {
    dispatch(loadProfile(ticker));
  }, [dispatch]);

  return (
    <>
      <Link to="/">
        <button type="button">
          Home
        </button>
      </Link>
      {profiles.map((profile) => (
        <div key={profile.name}>
          <img src={profile.img} alt={profile.name} />
          <p>{profile.symbol}</p>
          <p>{profile.name}</p>
          <p>{profile.price}</p>
          <p>{profile.marketCap}</p>
          <p>{profile.description}</p>
          <p>{profile.ceo}</p>
          <p>{profile.industry}</p>
          <p>{profile.sector}</p>
          <p>{profile.website}</p>
          <p>{profile.country}</p>
        </div>
      ))}
    </>
  );
};

export default Profile;
