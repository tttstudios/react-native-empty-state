# React Native Empty State package

![Tests](https://github.com/tttstudios/react-native-empty-state/workflows/Tests/badge.svg)

When we need to show a list of data, sometimes the data is null or empty. This empty data set still needs to keep the user informed as to why there is no data showing. Showing an empty screen, can confuse the user as there is no clear indication of what data is being returned. If there is an error/bug we should display it to the user.

Referral for [Empty View Design](http://tympanus.net/codrops/2013/01/09/designing-for-the-empty-states/)

## Detailed design

There will be 4 optional components in this view: An image, header text, sub header text and a button. This view also accepts children as props.

![demo images](https://github.com/tttstudios/react-native-empty-state/blob/master/assets/Screenshots_row1.png)

## Installation

`npm install --save @twotalltotems/react-native-empty-state-view`
or
`yarn add @twotalltotems/react-native-empty-state-view`

## Usage

```js
import { FlatList } from 'react-native';
import EmptyStateView from '@twotalltotems/react-native-empty-state';

...

const renderEmptyStateView = () => (
        <EmptyStateView
            imageSource={require('./assets/emptyImage.png')}
            headerText="You have Nothing"
            subHeaderText="Please add more content"
            buttonText="Next"
        />
      );

...

  <FlatList
    data={data}
    renderItem={renderItem}
    ListEmptyComponent={renderEmptyStateView}
  />

```

![example images](https://i.ibb.co/vL0p8nW/Screen-Shot-2020-07-20-at-5-27-12-PM.png)

## More Advanced Usage

```js
import EmptyStateView from '@twotalltotems/react-native-empty-state'

...
  <EmptyStateView
    imageSource={{
      uri: 'https://i.ibb.co/Fs3mhQW/group.png',
    }}
    imageStyle={styles.imageStyle}
    headerText="Turn on location permission"
    subHeaderText="Please turn on the location permission to see the charging stations near me. "
    buttonText="Go to Settings"
    buttonStyle={styles.buttonStyle}
    headerTextStyle={styles.headerTextStyle}
    subHeaderTextStyle={styles.subHeaderTextStyle}
    buttonTextStyle={styles.buttonTextStyle}
  />

const styles = StyleSheet.create({
  headerTextStyle: {
    color: 'rgb(76, 76, 76)',
    fontSize: 18,
    marginVertical: 10,
  },
  imageStyle: {
    height: '15%',
    resizeMode: 'contain',
  },
  subHeaderTextStyle: {
    fontSize: 12,
    color: 'rgb(147, 147, 147)',
    paddingHorizontal: 60,
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonStyle: {
    borderColor: 'rgb(0, 27, 72)',
    backgroundColor: 'rgb(0, 27, 72)',
    borderRadius: 50,
    borderWidth: 1,
    paddingHorizontal: 70,
    paddingVertical: 10,
  },
  buttonTextStyle: {
    color: '#fff',
    textDecorationLine: 'none',
  },
});

```

![example images](https://i.ibb.co/Hgftcfm/Screen-Shot-2020-07-20-at-5-50-29-PM.png)

## Parameters

| Parameter          | Required | Description                         |
| ------------------ | -------- | ----------------------------------- |
| imageSource        | NO       | Source of the main image            |
| imageStyle         | NO       | Main image styles                   |
| headerText         | NO       | Main header text                    |
| headerTextStyle    | NO       | Main header text style              |
| subHeaderText      | NO       | Sub header text                     |
| subHeaderTextStyle | NO       | Sub header text style               |
| style              | NO       | Main style for the container        |
| buttonText         | NO       | Text for the button in view         |
| buttonTextStyle    | NO       | Button text style                   |
| buttonStyle        | NO       | Button style                        |
| onButtonClick      | NO       | Callback when the button is clicked |
| children           | NO       | Additional children for render      |

## Inspiration from:

[DZNEmptyDataSet](https://github.com/dzenbot/DZNEmptyDataSet)

## Roadmap

- [x] Typescript definition file
- [x] Typescript implementation
- [x] Add basic unit tests
- [ ] Add integration tests

## Contributors

<table>
    <tr border="0" style="border: none; ">
        <th border="0" style="border-left: none; border-right: none;">
        	<img src="https://avatars3.githubusercontent.com/u/60905710?s=400&v=4" width="60px;" style="border-radius: 50%;"/>
        	<br />
        	<sub><a href="https://github.com/ericdao-ttt">Eric Dao</a></sub> <br />
        </th>
    </tr>
</table>

## Premium Support By TTT Studios

React native empty-state-view is presented by the mobile team at [TTT Studios](https://ttt.studio). We are a Digital Innovation Studio based out of Vancouver, Canada, delivering custom software and solutions that are designed and developed 100% in-house. The technologies we work with include AR & VR, IoT, AI, security & encryption, and cloud computing.

<div align="right">
	<img src="https://ttt.studio/wp-content/themes/tttwordpresstheme/imgs/ttt-colour.png" width="200px"/>
	<h5>Empowering Business Through Technology</h5>
</div>
