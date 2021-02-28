import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Test from '../Test.js'
import Camera from '../Camera';
import builder from '../screens/builder'
import StuData from '../screens/StuData'
import FirstPage from '../screens/FirstPage';
import AdminLogin from '../screens/AdminLogin'
import CompLog from '../screens/CompLog'
import PostJob from '../screens/PostJob'
import Profiles from '../screens/Profiles'
import jobs from '../screens/Jobs';
import AdminHome from '../screens/AdminHome'
import AdminJobs from '../screens/AdminJobs'
import AdminStu from '../screens/AdminStu'

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="FirstPage" component={FirstPage}  
      options={{
        title: 'Campus Recruitment System',
        headerStyle: {
          backgroundColor: '#4867AA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center'
        },
      }} />

      <Stack.Screen name="AdminJobs" component={AdminJobs} options={{
        title: 'Jobs',
        headerStyle: {
          backgroundColor: '#4867AA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center'
        },
      }} />

      <Stack.Screen name="AdminStu" component={AdminStu} options={{
        title: 'Student Profiles',
        headerStyle: {
          backgroundColor: '#4867AA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center'
        },
      }} />



      <Stack.Screen name="PostJob" component={PostJob} options={{
        title: 'Company Home',
        headerStyle: {
          backgroundColor: '#4867AA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center'
        },
      }} />





      <Stack.Screen name="Profiles" component={Profiles} options={{
        title: 'Student Profiles',
        headerStyle: {
          backgroundColor: '#4867AA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center'
        },
      }} />

      <Stack.Screen name="StuData" component={StuData} options={{
        title: 'Student Home',
        headerStyle: {
          backgroundColor: '#4867AA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center'
        },
      }} />

      <Stack.Screen name="AdminHome" component={AdminHome} options={{
        title: 'Admin Home',
        headerStyle: {
          backgroundColor: '#4867AA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center'
        },
      }} />

      <Stack.Screen name="jobs" component={jobs} options={{
          title: 'Jobs',
          headerStyle: {
            backgroundColor: '#4867AA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center'
          },
        }} />



      <Stack.Screen name="CompLog" component={CompLog} options={{
        title: 'Login As Company',
        headerStyle: {
          backgroundColor: '#4867AA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center'
        },
      }} />

      <Stack.Screen name="AdminLogin" component={AdminLogin} options={{
        title: 'Login As Admin',
        headerStyle: {
          backgroundColor: '#4867AA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center'
        },
      }} />

      <Stack.Screen name="builder" component={builder} options={{
        title: 'Login As Student',
        headerStyle: {
          backgroundColor: '#4867AA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center'
        },
      }} />






        <Stack.Screen name="Test" component={Test} />

        <Stack.Screen name="Camera" component={Camera} />
        {/* <Stack.Screen name="builder" component={builder} /> */}


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;