import styled from "styled-components";

interface AvatarProps {
  $src: string;
}

export const Avatar = styled("div")<AvatarProps>(({ $src }) => ({
  width: 32,
  height: 32,
  borderRadius: "50%",
  backgroundPosition: "50%, 50%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: `url(${$src})`,
}));
