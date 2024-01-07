import PropTypes from 'prop-types';
import Stats from './stats/Stats';
import Description from './description/Description';
import {ProfileContainer} from './Profile.styled';


export default function Profile({ user }) {
  return (<ProfileContainer>
    <Description username={user.username}
                 location={user.location}
                 avatar={user.avatar}
                 tag={user.tag}

    />
    <Stats followers={user.stats.followers}
           views={user.stats.views}
           likes={user.stats.likes} />
  </ProfileContainer>);
}


Profile.propTypes = {
  user: PropTypes.object,
};
