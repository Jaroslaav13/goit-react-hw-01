import css from './Profile.module.css'

const Profile = ({name, tag, location, image, stats}) => {
  return (
<div className={css.container}>
  <div className={css.userBox}>
    <img className= {css.userPhoto}
      src={image}
      alt="User avatar"
    />
        <p className= {css.textName}>{name}</p>
        <p className= {css.textTag}>@{tag}</p>
        <p className= {css.textLocation}>{location}</p>
  </div>

  <ul className= {css.socList}>
    <li className= {css.socItem}>
      <span className= {css.activity}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li className= {css.socItem}>
      <span className= {css.activity}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
    </li>
    <li className= {css.socItem}>
      <span className= {css.activity}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}
export default Profile;