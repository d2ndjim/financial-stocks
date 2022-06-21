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
        <div>
          <button
            className="m-10 text-white px-4 py-2 border  border-black rounded bg-[#2D4573] hover:bg-[#4369B2]"
            type="button"
          >
            Back
          </button>
        </div>
      </Link>
      <div className="m-auto bg-[#2D4573] text-white w-4/5 rounded-lg">
        {profiles.map((profile) => (
          <div key={profile.name} className="m-20">
            <div className="flex justify-center p-10">
              <div className="bg-[#4369B2]">
                <img src={profile.img} alt={profile.name} />
              </div>
              <div className="p-10 bg-[#4369B2]">
                <p className="font-bold">{profile.symbol}</p>
                <p className="font-bold">{profile.name}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 bg-[#4369B2] p-4 rounded-lg">
              <p>Stock Price:</p>
              <p>
                $
                {profile.price}
              </p>
            </div>
            <div className="grid grid-cols-2 p-4">
              <p>Market Cap:</p>
              <p>
                {Number(parseFloat(profile.marketCap).toFixed(2)).toLocaleString('en', {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="grid grid-cols-2 bg-[#4369B2] p-4 rounded-lg">
              <p>About:</p>
              <p>{profile.description}</p>
            </div>
            <div className="grid grid-cols-2 p-4">
              <p>CEO:</p>
              <p>{profile.ceo}</p>
            </div>
            <div className="grid grid-cols-2 p-4 bg-[#4369B2] rounded-lg">
              <p>Industry:</p>
              <p>{profile.industry}</p>
            </div>
            <div className="grid grid-cols-2 p-4">
              <p>Sector:</p>
              <p>{profile.sector}</p>
            </div>
            <div className="grid grid-cols-2 p-4 bg-[#4369B2] rounded-lg">
              <p>Website:</p>
              <p>{profile.website}</p>
            </div>
            <div className="grid grid-cols-2 p-4">
              <p>Location:</p>
              <p>{profile.country}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
