import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';

const App = () => {
  return (
    <div>
      <PageTitle title = {'Page title'} />
      
      <Accordion title = {'Menu'}/>
      <Rating value = {0}/>
      <Rating value = {1}/>
      <Rating value = {2}/>
      <Rating value = {3}/>
      <Rating value = {4}/>
      <Rating value = {5}/>

    </div>
  );
}

const PageTitle = (props: any) => {
  return <h1>{props.title}</h1>
}



export default App;
