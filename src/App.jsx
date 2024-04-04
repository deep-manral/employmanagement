
import './App.css'
import HelloWorld from './HelloWorld'
import EmployComponent from './components/EmployComponent'
import FooterCOmponent from './components/FooterCOmponent'
import HeaderComponenet from './components/HeaderComponenet'
import ListEMployeeComponent from './components/ListEMployeeComponent'
import { BrowserRouter,Routes ,Route} from 'react-router-dom'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <HeaderComponenet/>
    <Routes>
      {/* //http:localhost:3000 */}

<Route path='/'element={<ListEMployeeComponent/>}> </Route>

{/* //http://localhost:3000/employees */}
<Route path='/employees'element={<ListEMployeeComponent/>}></Route>
<Route path='add-employee' element={<EmployComponent/>}></Route>


{/* //http://localhost:3000/edit-employee/1*/ }
<Route path='/edit-employee/:id' element={<EmployComponent />} />


    </Routes>
 
  <FooterCOmponent/>
  </BrowserRouter>

    </>
    
  )
}

export default App
