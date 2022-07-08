import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Platform, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Camera } from 'expo-camera';
import Filter1 from '../assets/filter1';
import * as Permissions from 'expo-permissions';
import * as FaceDetector from 'expo-face-detector';

export default class Main extends Component{
    constructor(props){
      super(props);
      this.state={
        hasCameraPermission:null,
        faces:[]
      };
      this.onFacesDetected=this.onFacesDetected.bind(this)
    };

async componentDidMount(){
    const {status}=await Camera.requestPermissionAsync();
    this.setState({hasCameraPermission: status==="granted"})
};

onFaceDetected=(MyFace)=>{
    this.setState({
      faces:MyFace,
    })
  };

  onFaceDetectionError=(error)=>{
    console.log(error)
  };

render(){
    if(this.state.hasCameraPermission===null){
      return(<View></View>)
    }
    if(this.state.hasCameraPermission===false){
      return(
        <View>
          <Text>Camera permissions not allowed</Text>
        </View>  
      )
    }
};

return(
  <View style={styles.middleContainer}>
        <><SafeAreaView style={styles.droidSafeArea} /><View style={styles.headingContainer}>
      <Text style={styles.titleText1}> look </Text>
      <Text style={styles.titleText2}> at me app </Text>
    </View><View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
      }}>
      </View><View style={styles.cameraStyle}>
        <Image
          source={this.state.current_filter}
          style={{ width: 80, height: 35 }} />
      </View><View style={styles.framesContainer}>
        <ScrollView
          style={{ flexDirection: 'row' }}
          horizontal
          showsHorizontalScrollIndicator={true}>
          {data.map((i) => {
            return (
              <TouchableOpacity
                styl={styles.filterImageContainer}
                onPress={() => {
                  this.setState({
                    current_filter: `filter_${i.id}`,
                  });
                } }>
                <Image source={i.image} style={{ width: 80, height: 30 }} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View></>
);
    
const styles= StyleSheet.create({
  appName:{
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cyan',
  },
  cameraSection:{
      flex:0.65,
  },
  actionSection:{
      backgroundColor:"white",
      flex:1
  }
})



  
}
