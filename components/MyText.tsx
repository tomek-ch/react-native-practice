import { Text } from "react-native";

interface MyTextProps {
  weight: FontWeight;
}

type FontWeight = keyof typeof fontWeights;

const fontWeights = {
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
  Bold: 700,
} as const;

export const MyText = ({ weight = "Regular" }: MyTextProps) => {
  <Text
    style={{
      fontFamily: `Nunito_${fontWeights[weight]}${weight}`,
    }}
  ></Text>;
};
