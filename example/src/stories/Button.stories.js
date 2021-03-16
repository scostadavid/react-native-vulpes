import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Button as B, Colors, Icon, Text } from 'react-native-vulpes';
import { listOfIcons } from '../../../src/components/icon';

const colorList = () => {
  var keys = [undefined];
  for (var k in Colors) {
    if (k.substring(0, 8) !== 'gradient') {
      keys.push(k);
    }
  }
  return keys;
};

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    color: {
      description: 'color for the button',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
    outline: {
      description: 'sets button of type outline',
      control: {
        type: 'boolean',
      },
    },
    ghost: {
      description: 'sets button of type ghost',
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      description: 'disables the button',
      control: {
        type: 'boolean',
      },
    },
    icon: {
      description: 'icon to be used',
      control: {
        type: 'select',
        options: listOfIcons(),
      },
    },
  },
};

const buttonContainer = { margin: 10 };

const Button = (props) => {
  return <B style={buttonContainer} {...props} />;
};

const TemplateButton = ({
  color = undefined,
  outline = undefined,
  ghost = undefined,
  disabled = undefined,
  icon = 'like_empty',
  ...rest
}) => (
  <>
    <Button color={color} outline={outline} ghost={ghost} disabled={disabled}>
      <Text>Enviar</Text>
    </Button>
    <Button color={color} outline={outline} ghost={ghost} disabled={disabled}>
      <Icon name={icon} />
      <Text>Enviar</Text>
    </Button>
    <Button color={color} outline={outline} ghost={ghost} disabled={disabled}>
      <Text>Enviar</Text>
      <Icon name={icon} />
    </Button>
    <Button color={color} outline={outline} ghost={ghost} disabled={disabled}>
      <Icon name={icon} />
    </Button>
  </>
);

export const Example = TemplateButton.bind({});
Example.argTypes = {
  color: {
    description: 'color for the text',
    control: {
      type: 'select',
      options: colorList(),
    },
  },
};

Example.args = {
  color: undefined,
  outline: false,
  ghost: false,
  disabled: false,
  icon: 'like_empty',
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('Button', TemplateButton, Example.args);
}
