import 'bootstrap/dist/css/bootstrap.css';
import {useEffect,useState} from 'react';
import Card from './imagecard';
import Search from './search';

function App(){
  const[image,setImage] = useState([]);
  const[item,setItem] = useState('');
  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=24322774-3f77fa23875107663fa7964a3&q=${item}&image_type=photo`)
    .then(res=>res.json())
    .then(data =>{
      setImage(data.hits)
      
    })
    .catch(err =>console.log(err))
  },[item]);
 
  return(
      
      <div className='container'>
        <Search searchText={(text) =>setItem(text)}/>
        <div className='row'>
          {image.map(im=>(
            <Card key={im.id} image={im}/>))}
        </div>
     </div>
  );
}
export default App;
