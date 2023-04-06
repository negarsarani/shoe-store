import El from './library/El';
import { onboarding } from './pages/onboarding';
function App() {
  
     return El({
      element: 'div',
      className: 'w-full h-full font-Inter ',
      child:onboarding()
    })
  
}
export default App;
