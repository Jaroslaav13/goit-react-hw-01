import clsx from 'clsx';
import css from './FriendListItem.module.css';
import { FriendList } from '../FriendList/FriendList';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className= {css.friendBox}>
            <img className={css.friendAvatar} src={avatar} alt={name} width="56" />
            <p className= {css.friendName}>{name}</p>
            {
                <p className={clsx(css.status, isOnline ? css.online : css.offline)}>
                    {isOnline ? 'Online' : 'Offline'}
                </p>
            }
        </li>
    );
};
