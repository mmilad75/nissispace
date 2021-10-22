import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {BackgroundImage} from '../../components/';

const Home: React.FC = () => {
  return (
    <BackgroundImage
      style={styles.container}
      image={require('../../assets/images/mountain.png')}>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subtitle}>
        204次直播 · 53个系列课程 · 7301人已加入
      </Text>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 60,
    marginTop: 120,
    marginBottom: 10,
  },
  subtitle: {
    color: '#ffffff',
  },
});

export default Home;
