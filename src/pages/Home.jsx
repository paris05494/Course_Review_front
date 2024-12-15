import Coursecard from "../components/CourseCard";
import Questioncard from "../components/Questioncard";
import { v4 as uuidv4 } from 'uuid';
import '../styles/Home.css'
import '../styles/Home.css'
import { useState  } from "react";

const Home = () => {

    const design = {textAlign:"center", fontSize:'5rem'}
    const data1 = [
        {course_id:'012345', course_name:'Math', review:'ไม่สนุก', writer:'พริษฐ์'},
        {course_id:'233443', course_name:'Engineer', review:'น่าเบื่อ', writer:'พกดเ'},
        {course_id:'098765', course_name:'English', review:'เซ็ง', writer:'กด'},
        {course_id:'987665', course_name:'IoT', review:'Wow', writer:'เำหพ'}
    ]

    const data2 = [
        {course_id:'987655', course_name:'China', question:'ดีไหม?', writer:'Tom'},
        {course_id:'456434', course_name:'Science', question:'สนุกป่าว?', writer:'Honland'},
        {course_id:'650345', course_name:'History', question:'จารสอนเป็นไง?', writer:'Huy'},
        {course_id:'546433', course_name:'Homeroom', question:'How?', writer:'Phuck'}
    ]

    const [displayData, setDisplayData] = useState('');
    const handleButtonClick = (data) => {
        setDisplayData(data)
    }

    return (
        <div>
            <h1 style={design} className="course-review">Course Review</h1>
            <h3 style={{textAlign:"center"}} className="description">รีวิววิชาเรียน</h3>
            <div className="review-header">
                <button className="title" onClick={()=>handleButtonClick(data1)}>รีวิว</button>
                <button className="menu" onClick={()=>handleButtonClick(data2)}>คำถาม</button>
            </div>
            <div>
                {displayData.length > 0 ? (displayData.map((e) => (
                        e.review ? <Coursecard {...e} key={uuidv4()} /> : <Questioncard {...e} key={uuidv4()} />
                ))) : ('')}
            </div>
            {data1.map((e)=>{
                return <Coursecard {...e} key={uuidv4()} />
            })}
        </div>
    )
}

export default Home