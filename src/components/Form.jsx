import '../styles/FormComponent.css'

const FormComponent = ({ onClose }) => {

    const handleSubmit = (event) => {
        event.preventDefault(); // ป้องกันการรีเฟรช
        console.log("Form Submitted!");
    };

    return (
        <div className='center-container' id='overlay'>
            <div className="form-container">
                <h2>สร้างคำถาม</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label >เขียนคำถาม</label>
                        <textarea id="question" rows="4" placeholder="เขียนคำถามของคุณที่นี่..."></textarea>
                    </div>
                    <div className="form-group">
                        <label>โดย <input type="text" id="username" placeholder="ใส่ชื่อหรือนามแฝงผู้ถาม..."></input></label>
                    </div>
                    <div className="form-group">
                        <label >ตัวเลข 4 หลัก <input type="text" id="pin" placeholder="ใส่ตัวเลข 4 หลัก"></input></label> 
                    </div>
                    <div className="button-group">
                        <button onClick={onClose} type="button" className="btn btn-cancel">ยกเลิก</button>
                        <button onClick={onClose} type="submit" className="btn btn-submit">สร้างคำถาม</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormComponent