# React Native Empty State package

Is a tiny package display empty state.

![demo images](https://github.com/tttstudios/react-native-empty-state/blob/master/assets/Screenshots_row1.png)

## Installation

## Usage

```js
import EmptyStateView from 'react-native-empty-state';

...

    <EmptyStateView
        imageSource={require('./assets/emptyImage.png')}
        headerText="You have Nothing"
        subHeaderText="Please add more content"
        buttonText="Next"
    />

```

## Parameters

| Parameter          | Required | Description                                         |
| ------------------ | -------- | --------------------------------------------------- |
| imageSource        | NO       | Source of the main image                            |
| imageStyle         | NO       | Main image Styles                                   |
| headerText         | NO       | Main header text                                    |
| headerTextStyle    | NO       | Main header text style                              |
| subHeaderText      | NO       | Sub header text                                     |
| subHeaderTextStyle | NO       | Sub header text style                               |
| style              | NO       | Main style for the container                        |
| buttonText         | NO       | Text for the button in view                         |
| buttonTextStyle    | NO       | Button text style                                   |
| buttonStyle        | NO       | Button text style                                   |
| onButtonClick      | NO       | Callback, Trigger when the button inside is clicked |
| children           | NO       | Accept Children inside the View                     |

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

OTP input is presented by the mobile team at [TTT Studios](https://ttt.studio). We are a Digital Innovation Studio based out of Vancouver, Canada, delivering custom software and solutions that are designed and developed 100% in-house. The technologies we work with include AR & VR, IoT, AI, security & encryption, and cloud computing.

<div align="right">
	<img src="https://ttt.studio/wp-content/themes/tttwordpresstheme/imgs/ttt-colour.png" width="200px"/>
	<h5>Empowering Business Through Technology</h5>
</div>
