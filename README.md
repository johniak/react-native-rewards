
# react-native-rewards

## Getting started

`$ npm install react-native-rewards --save`

### Mostly automatic installation

`$ react-native link react-native-rewards`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-rewards` and add `RNRewards.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNRewards.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNRewardsPackage;` to the imports at the top of the file
  - Add `new RNRewardsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-rewards'
  	project(':react-native-rewards').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-rewards/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-rewards')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNRewards.sln` in `node_modules/react-native-rewards/windows/RNRewards.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Rewards.RNRewards;` to the usings at the top of the file
  - Add `new RNRewardsPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNRewards from 'react-native-rewards';

// TODO: What to do with the module?
RNRewards;
```
  