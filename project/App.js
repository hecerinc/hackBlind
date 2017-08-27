import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Alpha from './Components/Alpha';
import ViewLandmarks from './Components/ViewLandmarks';
import RegisterOne from './Components/RegisterOne';
import RegisterTwo from './Components/RegisterTwo';
import RegisterSuccess from './Components/RegisterSuccess';

export default class App extends React.Component {
	render() {
		return (
			// <Alpha />
			// <ViewLandmarks />
			// <RegisterOne />
			// <RegisterTwo />
			<RegisterSuccess />
		);
		/*
		<View style={styles.container}>
			<View className="hero-banner" style={{height: 400, overflow: 'hidden'}}>
				<Image className="hero-img" source={require('./foto.jpg')} />
				<Text style={{fontSize:80, color: 'white', top: -600, position: 'relative', backgroundColor: 'transparent', fontFamily: 'Avenir Next', fontWeight: '800'}} clasName="hero-title">Az&uacute;car Morena</Text>
			</View>
			<Text>Trying to change this see if it works</Text>
			<Text>Changes you make will automatically reload.</Text>
			<Text>Shake your phone to open the developer menu.</Text>
		</View>
		*/
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	'hero-img': {
		maxHeight: '600px'
	},
	'hero-title': {
		position: 'relative',
	}
});
