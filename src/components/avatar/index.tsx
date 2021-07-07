import { AvatarView, AvatarImage, Line, Username } from "./styles";
import avatar from "../../App/assets/images/avatar.jpeg";

const Avatar = () => {
  return (
    <AvatarView>
      <AvatarImage src={avatar} />
      <Username>UserDemo</Username>
      <Line/>
    </AvatarView>
  );
};

export default Avatar;
