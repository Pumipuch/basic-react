// css แบบที่1 ใช้เหมือนเป็น Layout แสดงได้ทั้งเว็บ
import './icon.css'
// css แบบที่2 ใช้เฉพาะ Components นั้นๆ ไม่กระทบตัวอื่นๆ
import style from './icon.module.css'


// export แบบที่2 No default

export function IconA(){
    return(
        // css แบบที่1
        <div className="blue">
            ICON A
        </div>
    )
}

export function IconB(){
    return(
        // css แบบที่2
        <div className={style.red}>
            ICON B
        </div>
    )
}