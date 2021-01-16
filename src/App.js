import React from 'react';
import styles from './App.module.css';

import Cards from './Components/Cards/index';
import Chart from './Components/Chart/index';
import CountryPicker from './Components/CountryPicker/index';

import { fetchData } from './api';



class App extends React.Component {



  state={
    data:{},
  }


  async componentDidMount() {
    const fetchedData = await fetchData();


    console.log(fetchedData)
    this.setState({data:fetchedData});
  }

  render() {
    const {data} = this.state;

    return (
      <div className={styles.container}>
        
         <CountryPicker></CountryPicker>

        <Cards data={data}></Cards>

       
       
        <Chart></Chart>

      </div>
    );
  }

}

export default App;
