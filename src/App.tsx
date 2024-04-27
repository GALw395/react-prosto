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
      <PageTitle title = {'Page title'} />
      <Accordion title = {'Menu'}/>

      <Rating />

    </div>
  );
}





export default App;
