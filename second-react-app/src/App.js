import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import FirstComponent from './components/FirstComponent';
import RecipeFinder from './components/RecipeFinder';

// import EmployeeProvider from './components/EmployeeContext';
// import AddNewEmployee from './components/AddNewEmployee';
// import EmployeeList from './components/EmployeeList';



// import ContactProvider from './components/Contact';
// import ContactAdd from './components/ContactAdd';
// import ContactList from './Components/ContactList';
// import ContactFilter from './components/ContactFilter';



function App() {
  return (
    <div className="App">
     {/* <FirstComponent/> */}
      <RecipeFinder/>

      {/* <EmployeeProvider>
        <AddNewEmployee/>
        <EmployeeList/>
      </EmployeeProvider> */}

      {/* contact-app */}

      {/* <ContactProvider>
        <ContactAdd/>
        <ContactList/>
        <ContactFilter/>
        
      </ContactProvider>  */}


      
    </div>
  );
}

export default App;
