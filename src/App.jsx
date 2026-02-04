import './App.css'
import Button from './components/Button'
import Main from './components/Main'
import Section from './components/Section'

function App() {
  const sectionData= {
    content: '섹션에 전달되는 데이터',
    bgcolor: "skyblue"
  }
  return (
    <div>
      <Section data={sectionData}/>
      {/* <Section data={...sectionData}/> */}
      <hr/>
      <Main content={'메인 영역입니다.1'} bgcolor={'orange'}/>
      <Main content={'메인 영역입니다.2'} bgcolor={'orange'}/>
      <Main bgcolor={'orange'}/>
      <hr/>
      <Button text={'메일'} color={'red'}/>
      <Button text={'카페'}  color={'blue'}>
        <span>자식요소 blue</span>
      </Button>
      <Button text={'블로그'} color={'green'}>
        <span>자식요소 green</span>
      </Button>
      <Button text={'블로그'}/> 
      <h1>hello react</h1>
    </div>
  )
}

export default App
