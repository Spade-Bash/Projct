import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import UserSelectionScreen from './screens/UserSelectionScreen';
import TeacherLoginScreen from './screens/TeacherLoginScreen';
import TeacherSignupScreen from './screens/TeacherSignupScreen';
import StudentLoginScreen from './screens/StudentLoginScreen';
import StudentSignupScreen from './screens/StudentSignupScreen';
import TeacherDashboard from './screens/TeacherDashboard';
import StudentDashboard from './screens/StudentDashboard';
import ManageClassrooms from './screens/ManageClassrooms'; // Import ManageClassrooms screen
import CameraScreen from './screens/CameraScreen'; // Import the CameraScreen
import AdminDashboard from './screens/AdminDashboard'; // Import AdminDashboard screen
import ReportsAndAppealsScreen from './screens/ReportsAndAppealsScreen'; // Adjust the path if necessary
import ReportScreen from './screens/ReportScreen'; // Import the ReportScreen

const Stack = createStackNavigator();

export default function App() {
  const [userRole, setUserRole] = useState(null); // Track user role

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserSelection">
        
        {/* User Selection Screen */}
        <Stack.Screen 
          name="UserSelection" 
          children={props => <UserSelectionScreen {...props} setUserRole={setUserRole} />} 
        />

        {/* Teacher Screens */}
        <Stack.Screen name="TeacherLogin" component={TeacherLoginScreen} />
        <Stack.Screen name="TeacherSignup" component={TeacherSignupScreen} />
        <Stack.Screen name="TeacherDashboard" component={TeacherDashboard} />

        {/* Manage Classrooms Screen */}
        <Stack.Screen name="ManageClassrooms" component={ManageClassrooms} />

        {/* Student Screens */}
        <Stack.Screen name="StudentLogin" component={StudentLoginScreen} />
        <Stack.Screen name="StudentSignup" component={StudentSignupScreen} />
        <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
        <Stack.Screen name="ReportsAndAppeals" component={ReportsAndAppealsScreen} />

        {/* Camera Screen for face scanning */}
        <Stack.Screen name="CameraScreen" component={CameraScreen} />

        {/* Admin Dashboard Screen */}
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />

        {/* Report Screen */}
        <Stack.Screen name="ReportScreen" component={ReportScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
