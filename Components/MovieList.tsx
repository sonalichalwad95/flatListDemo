import {FC} from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

interface movie {
  item: any;
}

const MoviesList = (data: any) => {
  console.log('ITEM>>>>> ', data.item.item);

  const item = data?.item?.item;

  return (
    <View style={styles.containerone}>
      {/* <Image
        style={styles.imageSonali}
        source={{
          uri: item?.imdb_url,
        }}></Image> */}

      <View style={styles.itemb}>
        {/* <Image source={{uri: item?.image}} /> */}
        <Text style={styles.item}>Movie: {item?.movie}</Text>

        <Text style={styles.itemz}>
          show timngs: {item?.id} {'\n'}
          rating: {item?.rating}
        </Text>
        <Text style={styles.itemm}>imdb url: {item?.imdb_url}</Text>
      </View>
    </View>
  );
};

//   );
// };

export default React.memo(MoviesList);

const styles = StyleSheet.create({
  containerone: {
    // flex: 1,
    width: '100%',
    flexDirection: 'column',
    marginStart: 2.5,
    marginTop: 7.5,
    marginEnd: 2.5,
    borderColor: 'black',
    borderWidth: 0.5,
  },
  itemb: {
    flexDirection: 'column',
    backgroundColor: 'aliceblue',
    borderColor: 'darkslategrey',
  },

  item: {
    // flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 1,
    padding: 0.2,
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: 'gainsboro',
  },
  itemz: {
    flexDirection: 'column',
    paddingLeft: '0.25%',
    marginTop: 1,
    // marginLeft: 2,
    fontSize: 14,
    // height: 40,
    // height: 30,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    color: 'sienna',
    marginBottom: 2,
    borderColor: 'black',
    borderWidth: 0.5,
  },
  itemm: {
    // flex: 1,
    paddingLeft: '0.25%',
    marginTop: 1,
    // marginLeft: 2,
    fontSize: 14,
    height: 20,
    // height: 30,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    color: 'black',
    marginBottom: 2,
  },

  imageSonali: {
    height: 150,
    width: 130,
    borderRadius: 10,
    // marginLeft: 10,
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
});
