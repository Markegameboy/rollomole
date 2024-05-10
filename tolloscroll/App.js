import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text>navbar? this is a zoo, moo</Text>
      <StatusBar style="auto" />
      <ScrollView horizontal={true} >    
      <View style={styles.container2}>
      <Text>image/video</Text>
      <StatusBar style="auto" />    
    </View>
    <View style={styles.container3}>
    <Text>shrek 2 the movie</Text>
      <StatusBar style="auto" />    
    </View></ScrollView>
    <View style={styles.container4}>
      <Text>Footer</Text>
      <StatusBar style="auto" />    
    </View>
    <ScrollView vertical={true} >    
      <View style={styles.container5}>
      <Text>fish</Text>
      
      <StatusBar style="auto" />  
      <View style={styles.container8}>
        
      <Text>I'm a goofy goober
Rock
You're a goofy goober
Rock
We're all goofy goobers
Rock
Goofy, goofy, goofy, goofy goober
Rock
Put your toys away
Well, then I got to say when you tell me not to play
I say, no way
No way
No, no, no, no way
I'm a kid, you say
When you say I'm a kid I say, say it again
And then I say thanks
Thanks
Thank you very much
So if you thinking that you'd like to be like me
Go ahead and try
The kid inside will set you free
I'm a goofy goober
Rock
You're a goofy goober
Rock
We're all goofy goobers
Rock
Goofy, goofy, goofy, goofy goober, yeahI'm a goofy goober
Rock
You're a goofy goober
Rock
We're all goofy goobers
Rock
Goofy, goofy, goofy, goofy goober
Rock
Put your toys away
Well, then I got to say when you tell me not to play
I say, no way
No way
No, no, no, no way
I'm a kid, you say
When you say I'm a kid I say, say it again
And then I say thanks
Thanks
Thank you very much
So if you thinking that you'd like to be like me
Go ahead and try
The kid inside will set you free
I'm a goofy goober
Rock
You're a goofy goober
Rock
We're all goofy goobers
Rock
Goofy, goofy, goofy, goofy goober, yeah</Text>
      <StatusBar style="auto" />    
    </View>  
    <View style={styles.container9}>
        <ScrollView>
        <View style={styles.subcontainer1}/>
        <View style={styles.subcontainer2}/>
        <View style={styles.subcontainer3}/>
        </ScrollView>
      </View>
      <View style={styles.containerb}>
  
  <View style={styles.subcontainer1b} />
  
  <View style={styles.subcontainer2b} />
</View>
    </View>
    <View style={styles.container6}>
    <Text>man city vs real madrid</Text>
      <StatusBar style="auto" />    
    </View></ScrollView>
    {/* <View style={styles.container7}>
      <Text>Footballer</Text>
      <StatusBar style="auto" />    
    </View> */}
    <View style={styles.container7}>
      <Text>soccer</Text>
      <StatusBar style="auto" />    
    </View>
   
    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#53A2BE',
    alignItems: 'center',
    justifyContent: 'center',
    height: 800

  },
  container2: {
    backgroundColor: '#8E5491',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: '500',
    width: 300,
    height: 300
        
  },
  container3: {
    backgroundColor: '#78A271',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
    width: 300,
    height: 300
  },
  container4: {
    backgroundColor: '#CE3749',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 200,
    width: 430,
    height: 50
  },
  text2: {
    fontSize: 50,
    color:"red"
  },
  container5: {
    backgroundColor: '#FFFFFC',
    alignItems: 'center',
    justifyContent: 'center',
    width: 415,
    height: 410
  },
  container6: {
    backgroundColor: '#81D8BF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 415,
    height: 310
  },
  container7: {
    backgroundColor: '#465775',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    height: 90
  },
  container8: {
    backgroundColor: '#78A271',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
    width: 300,
    height: 300
  },
  
    container9: { height: '400%', width: '100%' },
  
    container9: { flex: 1, flexDirection: 'row' },
  
    subcontainer1: {
      flex: 1,
      backgroundColor: 'powderblue',
    },
    subcontainer2: {
      flex: 2,
      backgroundColor: 'red',
    },
    subcontainer3: {
      flex: 0.5,
      backgroundColor: 'green',
    },
      containerb: { flex: 1, flexDirection: 'row' },
  
    subcontainer1b: {
      flex: .5,
      backgroundColor: 'powderblue',
    },
    subcontainer2b: {
      flex: .5,
      backgroundColor: 'red',
    },
    subcontainer3b: {
      flex: 0.2,
      backgroundColor: 'green',
    },
  
  
  


});
