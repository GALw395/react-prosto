import { useState } from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { OnOff } from './components/OnOff/OnOff';
import { Rating } from './components/Rating/Rating';
import { InputComponent } from './components/InputComponent/InputComponent';
import { ControlInput } from './components/ControlInput/ControlInput';
import { Select } from './components/Select/Select';
import { AccordionReducer } from './components/AccordionReducer/AccordionReducer';



type PageTitlePropsType = {
  title: string
}

const PageTitle = (props: PageTitlePropsType) => {
  return <h1>{props.title}</h1>
}

const App = () => {

  let [on, setOn] = useState(false)
  const onClick = (value: any) => {
    console.log({ value });

  }

  const [value, setValue] = useState('2')
  return (
    <div>

      <OnOff value={on} onClick={setOn} />
      <PageTitle title={'Page title'} />
      <Accordion title={'Menu'} onClick={onClick} item={[{ title: "1", value: "you click on 1" }, { title: "2", value: "you click on 2" }, { title: "3", value: "you click on 3" }]} />

      <Rating />

      <InputComponent />

      <ControlInput />

      <Select
        item={[{ value: '1', title: 'one' }, { value: '2', title: 'two' }, { value: '3', title: 'three' }]}
        onChange={setValue}
        value={value}
      />

      <AccordionReducer
        title={'Menu'}
        onClick={onClick}
        item={
          [
            { title: "1", value: "you click on 1" },
            { title: "2", value: "you click on 2" },
            { title: "3", value: "you click on 3" }
          ]
        } />

    </div>
  );
}





export default App;
