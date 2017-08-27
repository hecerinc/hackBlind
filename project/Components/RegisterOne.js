import React from 'react';
import { Alert, StyleSheet, Text, View, Image, Button} from 'react-native';

export default class RegisterOne extends React.Component {
	readyAtExit(){
		Alert.alert("Nice! You're at the exit")
	}
	render() {
		return(
			<View style={{flex: 1, backgroundColor: '#ef8354', alignItems: 'center', justifyContent: 'center'}}>
				<Text style={{color: 'white', fontSize: 60, fontWeight: '600', textAlign: 'center', marginBottom: 20}}>go to entrance</Text>
				<Button raised={true} onPress={this.readyAtExit} title="Ready" color="#fff"  style={{fontSize: 60}} accessibilityLabel="Press this when you're already at the entrance" />
			</View>
		)
	}
}

