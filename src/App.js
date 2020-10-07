import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use REact?',
        content: 'React is a favourite JS library amongst engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
]

export default () => {
    // const [selected, setSelected] = useState(options[0])
  return (
      <div>
        {/*<Accordion items={items}/>*/}
        {/*<Search />*/}
        <Translate />
        {/*<Dropdown*/}
        {/*    selected={selected}*/}
        {/*    onSelectedChange={setSelected}*/}
        {/*    options={options}*/}
        {/*/>*/}
      </div>
  )
}
