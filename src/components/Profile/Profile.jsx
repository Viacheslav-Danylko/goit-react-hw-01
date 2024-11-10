import s from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <img src={image} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className="description">{tag}</p>
        <p className="description">{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
