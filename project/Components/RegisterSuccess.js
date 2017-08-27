import React from 'react';
import { Alert, StyleSheet, Text, View, Image, Button} from 'react-native';

export default class RegisterSuccess extends React.Component {
	goToLandmarkRegistration(){
		Alert.alert("This functionality has yet to be implemented")
	}
	goHome() {
		Alert.alert('Where is home?')
		setTimeout(() => {
			Alert.alert('Home is where the heart is')
		}, 2000)
	}
	render() {
		return(
			<View style={{flex: 1, backgroundColor: '#2C95CA', alignItems: 'center', justifyContent: 'center'}}>
				<Text style={{color: 'white', fontSize: 60, fontWeight: '600', textAlign: 'center', marginBottom: 20}}>Success!</Text>
				<Text style={{color: 'white'}}>Entrance has been recorded</Text>
				<View style={{marginTop: 60}}>
					<Button raised={true} onPress={this.goToLandmarkRegistration} title="Record another one" color="#fff"  style={{fontSize: 60}} accessibilityLabel="Press this when you're ready to record another landmark" />
					<Button raised={true} onPress={this.goHome} title="Go Home" color="#fff"  style={{fontSize: 60}} accessibilityLabel="Press this when you wanna go home" />
				</View>
			</View>
		)
	}
}

