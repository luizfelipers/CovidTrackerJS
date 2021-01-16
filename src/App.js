import React from 'react';
import styles from './App.module.css';

import Cards from './Components/Cards/index';
import Chart from './Components/Chart/index';
import CountryPicker from './Components/CountryPicker/index';

import { fetchData } from './api';



class App extends React.Component {



  state={
    data:{},
    country:'',
  }


  async componentDidMount() {
    const fetchedData = await fetchData();


    console.log(fetchedData)
    this.setState({data:fetchedData});
  }

  handleCountryChange = async (country) => {
    //fetch the data
const fetchedData = await fetchData(country);

//console.log(fetchedData);
    //set the state
this.setState({data:fetchedData, country:country});

  }

  render() {
    const {data} = this.state;

    return (
      <div className={styles.container}>

         <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>

        <Cards data={data}  ></Cards>

       
       
        <Chart></Chart>

      </div>
    );
  }

}

export default App;
