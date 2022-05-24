import { Image } from "react-native";

export default function Hero() {
  return (
    <Image
      style={{ width: 406, height: 400 }}
      source={{
        uri: "http://www.quickmeme.com/img/e4/e4e4436c93e8c0e593fd3ed529b3b2f18e429ac85bcae725dc96c001c860e63f.jpg",
      }}
    />
  );
}
