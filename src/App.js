import './App.css';
import image from './profile/photo.png';
import Profileling from './profile/profileFile';
import Clickable from './profile/alert'

function App() {
  return (
    <div >
      <div style={{display: 'flex',flexDirection:'column',textAlign:'center',alignItems:'center',justifyContent: 'center',margin:'10%'}}>
        <Profileling
          image={image}
          fullName= "F. Abdelkabir"
          bio="whatever"
          prof="DS/DEV"
          
        />
        <Clickable />
      </div>
    </div>
  );
}

export default App;
