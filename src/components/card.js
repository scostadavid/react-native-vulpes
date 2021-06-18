import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import { Colors } from '../colors';
import style from '../styles/card';
import { Button } from './button';
import { Dash } from './dash';
import { GradientView } from './gradient_view';
import { Icon } from './icon';
import { Tag } from './tag';
import { Text } from './text';
import { Thumbnail } from './thumbnail';
import { Regular, RegularBold } from './typos';
import { FillSpace } from './utils';

const outerMiniCardStyle = { flexDirection: 'row' };

export class Card extends Component {
  changedColor() {
    const { color } = this.props;
    const data = {};
    if (color) {
      data.backgroundColor = Colors[color];
    }
    return data;
  }
  render() {
    let { cardContainer } = style;

    cardContainer = { ...cardContainer, ...this.props.cardContainer };

    return (
      <View style={this.props.style}>
        <View style={cardContainer}>{this.props.children}</View>
        <View style={style.outerCardBorder}>
          <View style={{ ...style.cardTopBorder, ...this.changedColor() }} />
        </View>
      </View>
    );
  }
}

const TicketCardSeparator = (props) => {
  return (
    <View style={style.cardSeparator}>
      <View style={style.cardSeparatorLeft} />
      <Dash
        style={style.dashContainer}
        dashColor={Colors.lightGray}
        dashThickness={0}
        dashGap={7}
        dashLength={7}
        dashStyle={style.dashStyle}
      />
      <View style={style.cardSeparatorRight} />
    </View>
  );
};

export class TicketCard extends Component {
  render() {
    return (
      <Card {...this.props}>
        <TicketCardSeparator />
        {this.props.children}
      </Card>
    );
  }
}

const TicketProfileCardSeparator = (props) => {
  return (
    <View style={style.ticketProfileCardDividerContainer}>
      <View style={style.profileCardDividerContent}>
        <View style={style.cardSeparator}>
          <View style={style.cardSeparatorLeft} />
          <Dash
            style={style.dashContainer}
            dashColor={Colors.lightGray}
            dashThickness={0}
            dashGap={7}
            dashLength={7}
            dashStyle={style.dashStyle}
          />
          <View style={style.cardSeparatorRight} />
        </View>
      </View>
      <View style={style.ticketProfileCardImgContent}>
        <Thumbnail size="medium" source={props.source} />
      </View>
    </View>
  );
};

const ProfileCardSeparator = (props) => {
  return (
    <View style={style.profileCardDividerContainer}>
      <View style={style.profileCardDividerContent}>
        <View style={style.profileCardDivider} />
      </View>

      <View style={style.profileCardImgContent}>
        <Thumbnail size="medium" source={props.source} />
      </View>
    </View>
  );
};

export class TicketProfileCard extends Component {
  changedColor() {
    const { color } = this.props;
    const data = {};
    if (color) {
      data.backgroundColor = Colors[color];
    }
    return data;
  }
  render() {
    return (
      <Card {...this.props}>
        <TicketProfileCardSeparator source={this.props.source} />
        {this.props.children}
      </Card>
    );
  }
}

const CardTag = ({ icon, color, text }) => {
  return (
    <Tag color={color}>
      <Icon name={icon} size={12} />
      <Text>{text}</Text>
    </Tag>
  );
};

const CardCover = ({ tagText, tagIcon, tagColor, source }) => {
  return (
    <View style={style.cardCoverContainer}>
      <ImageBackground
        source={source}
        style={style.cardContainerCoverBackground}
        imageStyle={style.cardContainerCoverImage}
      >
        {(tagText || tagIcon) && (
          <CardTag color={tagColor} text={tagText} icon={tagIcon} />
        )}
      </ImageBackground>
    </View>
  );
};

export class ProfileCard extends Component {
  render() {
    const { cover, color, source, children, ...rest } = this.props;

    return (
      <Card {...this.props} color={cover ? 'transparent' : color}>
        {cover && <CardCover source={cover} {...rest} />}
        <ProfileCardSeparator source={source} />
        {children}
      </Card>
    );
  }
}

export class MiniProfileCard extends Component {
  changedColor() {
    const { color } = this.props;
    const data = {};
    if (color) {
      data.backgroundColor = Colors[color];
    }
    return data;
  }
  render() {
    return (
      <Card cardContainer={style.miniCardContainer} {...this.props}>
        <View style={outerMiniCardStyle}>
          <Thumbnail source={this.props.source} size={'small'} />
          <View style={style.miniCardContentStyle}>{this.props.children}</View>
        </View>
      </Card>
    );
  }
}

const IllustrationOnCard = (props) => {
  return <Image source={props.source} style={style.illustrationOnCard} />;
};

export class IllustrationMiniCard extends Component {
  render() {
    return (
      <Card
        cardContainer={style.illustrationCardContainer}
        color={'transparent'}
        {...this.props}
      >
        <View style={outerMiniCardStyle}>
          <IllustrationOnCard source={this.props.source} />
          <View style={style.illustrationCardOuterStyle}>
            {this.props.children}
          </View>
        </View>
      </Card>
    );
  }
}

export const BannerCard = ({
  title,
  description,
  linkText,
  source,
  color,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <GradientView color={color} style={style.bannerCardGradient}>
        <View style={style.outerViewBannerCard}>
          <View style={style.textsViewBannerCard}>
            <RegularBold color="white" style={style.titleTextBannerCard}>
              {title}
            </RegularBold>
            <Regular color="white">{description}</Regular>
            <Button color="white" ghost style={style.buttonTextBannerCard}>
              <Text>{linkText}</Text>
              <Icon name="long_arrow_right" />
            </Button>
          </View>
          <Image source={source} style={style.imageInBannerCard} />
        </View>
      </GradientView>
    </TouchableOpacity>
  );
};

export const CardActions = ({ children }) => {
  return (
    <View style={style.cardActionsContainer}>
      <FillSpace />
      <View>{children}</View>
    </View>
  );
};
