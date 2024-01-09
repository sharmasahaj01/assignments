import { Fragment, useState } from 'react'

function App() {
  const interestList = ["Programming", "Web development","Video Games"]
  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'100vh'
    }}>
      <BusinessCard name="Sahaj Sharma" info="Student in 100xDevs Cohort 2.0" interests={interestList} />
    </div>
  )
}
function BusinessCard({name,info,interests}){
  let GlobalId = 0;
  const ButtonStyle = {fontSize:'20px',
  paddingTop:'10px',
  paddingBottom:'10px',
  paddingLeft:'15px',
  paddingRight:'15px',
  borderRadius:'8px',
  border:'none',
  backgroundColor:'dodgerblue',
  color:'white',
  cursor:'pointer'
}
  return <div style={{
    display: 'flex',
    // alignItems: 'centeh1
    // justifyContent: 'center',
    flexDirection: 'column',
    width: '33.3%',
    border: '1px solid black',  
    borderRadius: '8px',
    padding:'17px',
    boxShadow:'2px 2px 5px rgba(0, 0, 0, 0.2)'
  }}>
    <h1 style={{margin:'5px'}}>{name}</h1>
    <p style={{fontSize:'20px', margin:'5px'}}>{info}</p>
    <h2 style={{margin:'5px'}}>Interests</h2>
    <div style={{display:'flex', flexDirection:'column' ,margin:"5px"}}>
      {interests.map((interest) => (
        <p style={{margin:'0px', marginBottom:'5px'}} key={GlobalId++}>
          {interest}
        </p>
      ))}
    </div>
    <div style={{
      display:'flex'
    }}>
      <div style={{padding:'5px'}}>
        <button style={ButtonStyle} >LinkedIn</button>
      </div>
      <div style={{padding:'5px'}}>
        <button style={ButtonStyle}>Twitter</button>
      </div>
    </div>

  </div>

}

export default App
