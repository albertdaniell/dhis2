import React, {Component} from 'react'
const axios = require('axios');
const fetchOptions = {
  headers: {
    Authorization: `Basic ${btoa('albertagoya@gmail.com:Pa$$word1')}`,

  }
}


export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      myDataSets: [],
      form:[]
    }
  }

  getDataSets = () => {
    //"proxy": "https://kecstock.jsi.com/api"
    let url = 'analytics?dimension=dx:z2slLbjn7PM.REPORTING_RATE&dimension=pe:LAST_12_MONTHS&d' +
        'imension=ou:USER_ORGUNIT';
    let url2 = 'https://kecstock.jsi.com/api/me'
  
    // fetch(url2, fetchOptions).then(res => {   res.json()   //console.log(res)
    // }).then((myres) => {   console.log("Result is:",myres) }).catch(() => {})

    axios({url: url2, method: 'GET'}).then((res) => {
      console.log(res)
      this.setState({
        form:res.data
      })
      this.setState({myDataSets: res.data.rows})
    }).catch((e) => {
      console.log(e)
    })

  }

  getOrgUnits = (id) => {
    let orgUrl =`/organisationUnits/${id}`
    axios({url: orgUrl, method: 'GET',}).then(() => {
      console.log()
    }).catch(() => {})
  }

  componentDidMount() {
    this.getDataSets()
  }
  render() {

    //const {myDS}=this.state.myDataSets
    // const allDataSets = this.state.myDataSets.map((ds)=>{
    //   return(
    //     <h1>hahah</h1>
    //   )
    // })


    return (
      <div>
        {/* {
          this.state.form.map((f)=>{
            return(
            <div>{f}</div>
            )

          })
        } */}

        {/* {allDataSets} */}
        <h1>hahah,llllllllllllllllll,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,</h1>
      </div>
    )
  }
}

export default App
