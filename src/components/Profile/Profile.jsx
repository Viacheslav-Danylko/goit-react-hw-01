import s from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <img src={image} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.description}>{tag}</p>
        <p className={s.description}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
