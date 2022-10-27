import React, { useState } from "react";
import { View, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { EthPrice, NFTTitle } from "./SubInfo";

function DetailsDesc({ data }) {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <EthPrice price={data.price} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge }}>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.font,
            color: COLORS.primary,
            borderTopColor: COLORS.gray,
            borderTopWidth: 0.5,
            paddingTop: SIZES.small,
          }}
        >
          Description
        </Text>

        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.small,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && '...'}
            <Text style={{
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.small,
                color: COLORS.primary
            }}
            onPress={() => {
                if (!readMore) {
                    setText(data.description)
                } else {
                    setText(data.description.slice(0, 100))
                }
                setReadMore(!readMore)
            }}
            >{readMore ? ' Show Less' : ' Read More'}</Text>
          </Text>
        </View>
      </View>
    </>
  );
}

export default DetailsDesc;
