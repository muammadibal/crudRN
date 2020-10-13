import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const CallAPIAxios = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
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
    // fetch('https://reqres.in/api/users/2')
    //   .then((response) => response.json())
    //   .then(
    //     (json) => {
    //     setDataUser(json.data)
    //   });

  Axios.get('https://reqres.in/api/users/2')
  .then(result => {
    setDataUser(result.data.data);
  })
  .catch(err => console.log('err: ', err))
  };

  const postData = () => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };

    //   call api method post
    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setDataUser(json);
    //   });

    Axios.post('https://reqres.in/api/users', dataForAPI)
    .then(result => {
      // console.log('result: ', result)
      setDataJob(result.data)
    })
    .catch(err => console.log('err: ', err))

  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan axios</Text>

      <Button title="GET DATA" onPress={getData} />
      <Text>Response get data</Text>
      {dataUser.avatar.length > 0 && (
        <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      )}

      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>

      <View style={styles.line} />

      <Button title="POST DATA" onPress={postData} />
      <Text>Response post data</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
};

export default CallAPIAxios;

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
    marginVertical: 16,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },
});
