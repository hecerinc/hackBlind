import React from 'react';
import { Alert, StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';

export default class RegisterTwo extends React.Component {
	constructor() {
		super()
		this.state = {
			isVisible: 0,
			landmarkName: null,
			alertMsg: 'Walk to landmark',
			isFirstBtnVisible: true,
			isSecondBtnVisible: false,
		}
		this.startRecording = this.startRecording.bind(this);
		this.parseText = this.parseText.bind(this);
	}
	startRecording(){
		if(this.state.landmarkName == null || this.state.landmarkName.trim() == "") {
			Alert.alert('Please input a valid landmark name');
			return false;
		}
		this.setState({isVisible: 1});
		setTimeout((function(){
			this.setState({alertMsg: 'Recording...', isFirstBtnVisible: false, isSecondBtnVisible: true})
		}).bind(this), 5000);
	}
	parseText(value) {
		// do something color
		this.setState({landmarkName: value })
	}
	render() {
		return(
			<View style={{flex: 1, backgroundColor: '#3CD0D0', alignItems: 'center', paddingTop: 100}}>
				<Text style={{color: 'white', fontSize: 40, marginRight: 40, marginLeft: 40, fontWeight: '600', textAlign: 'center', marginBottom: 20}}>Landmark name</Text>
				<TextInput style={{height: 60, width: '80%', padding: 10, backgroundColor: 'white', marginBottom: 30}} onChangeText={e => this.parseText(e)} />
				{(function(){return this.state.isFirstBtnVisible ?
					<Button raised={true} onPress={this.startRecording} title="Start recording" color="#fff"  style={{fontSize: 60}} accessibilityLabel="Press this when you wanna start mapping" /> : null}
				).bind(this)()}
				<Text style={{fontSize: 30, color: '#f9dc5c', fontWeight: '600', opacity: this.state.isVisible, marginTop: 60, marginBottom: 40}}>{this.state.alertMsg}</Text>
				{
					(function(){
						return this.state.isSecondBtnVisible ?
							<Button onPress={() => console.log('do something')} title="Finish recording" color="#fff" accessibilityLabel="Press this when you're done recording" /> : null;
					}).bind(this)()
				}
			</View>
		)
	}
}

