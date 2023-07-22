
import Titlebar from './components/titlebar';
import Traveltiles from './components/traveltiles';
import data from "./data.js";

function App() {
  const traveltiles= data.map(item => {
    return(
        <Traveltiles
        country={item.country}
        locImg={item.locImg}
        map={item.map}
        name = {item.name}
        date = {item.date}
        description = {item.description}
        titleImg={item.titleImg}
        />
    )
   })
  
  return (
    <div>
       <Titlebar/>
       <section className='tiles-section'>
          {traveltiles}
       </section>
       
    </div>
  );
}

export default App;

