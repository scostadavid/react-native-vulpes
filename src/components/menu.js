import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { getColors } from '../colors';
import { Fonts } from '../fonts';
import useVulpes from '../hooks/useVulpes';

const generalMenuStyle = (theme) => {
  const colors = getColors(theme);
  return {
    flexDirection: 'row',
    borderTopWidth: 1,
    backgroundColor: colors.white,
    borderTopColor: colors.light_gray,
  };
};
export const Menu = (props) => {
  const { theme } = useVulpes();
  return <View style={generalMenuStyle(theme)}>{props.children}</View>;
};

const generalMenuItemStyle = {
  flex: 1,
  padding: 15,
  paddingLeft: 10,
  paddingRight: 10,
};

export const MenuItem = ({ children, selected, onPress }) => {
  return (
    <TouchableOpacity style={generalMenuItemStyle} onPress={onPress}>
      {React.Children.map(children, (child, i) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            color: selected ? 'black' : 'gray',
            fontStyle: selected ? Fonts.menuTextBold : Fonts.menuText,
            size: 18,
            style: {
              alignSelf: 'center',
              ...child.props.style,
            },
          });
        }
        return child;
      })}
    </TouchableOpacity>
  );
};
