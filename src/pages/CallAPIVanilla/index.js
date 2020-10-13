import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const CallAPIVanilla = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
    name: '',
    job: ''
  });



  useEffect(() => {
    // call api method get
    // fetch('https://reqres.in/api/users/2')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    // const dataForAPI = {
    //   name: 'morpheus',
    //   job: 'leader',
    // };
    // console.log('data object ', dataForAPI);
    // console.log('data stringify ', JSON.stringify(dataForAPI));
    // //   call api method post
    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then(response => response.json())
    //   .then(json => {
    //       console.log('post response: ', json)
    //     });
  }, []);

  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then((response) => response.json())
      .then((json) =>
        console.log(json)
        // setDataUser(json.data)
      );
  };

  const postData = () => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };
    // console.log('data object ', dataForAPI);
    // console.log('data stringify ', JSON.stringify(dataForAPI));
    //   call api method post
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then(response => response.json())
      .then(json => {
          setDataUser(json)
        });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan valilla js</Text>

      <Button title="GET DATA" onPress={getData} />
      <Text>Response get data</Text>
      <Image source={{uri: dataUser.avatar }} style={styles.avatar} />
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>

      <View style={styles.line} />

      <Button title="POST DATA" onPress={postData}/>
      <Text>Response post data</Text>
      <Text>{dataUser.name}</Text>
      <Text>{dataUser.job}</Text>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
  line: {
      height: 2,
      backgroundColor: 'gray',
      marginVertical: 16
  },
  avatar: {
      height: 100,
      width: 100,
      borderRadius: 100/2
  }
});
