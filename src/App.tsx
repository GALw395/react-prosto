import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { OnOff } from './components/OnOff/OnOff';
import { Rating } from './components/Rating/Rating';



type PageTitlePropsType = {
  title: string
}

const PageTitle = (props: PageTitlePropsType) => {
  return <h1>{props.title}</h1>
}


const App = () => {
  return (
    <div>

      

      <OnOff />
      <OnOff />


      <PageTitle title = {'Page title'} />

      
      <Accordion title = {'Menu'} collapsed = {false}/>



      <Rating value = {0}/>
      <Rating value = {1}/>
      <Rating value = {2}/>
      <Rating value = {3}/>
      <Rating value = {4}/>
      <Rating value = {5}/>

    </div>
  );
}





export default App;
