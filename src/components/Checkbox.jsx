//  if else วิธีที่ 1 แบบเล่นกับ html

// import PropTypes from 'prop-types'

// export default function Checkbox({text , isChecked}){

//     let ResultCheckbox = ''
//     if(isChecked) {
//         ResultCheckbox =(
//             <div>{ text } is done </div>
//         )
//     } else {
//         ResultCheckbox = (
//             <div> { text } is in progress  </div>
//         )
//     }

//     return (
//         <>
//             {ResultCheckbox}
//         </>
//     )
// }

// Checkbox.propTypes = {
//     text: PropTypes.string ,
//     isChecked : PropTypes.bool
// }


//  if else วิธีที่ 2 แบบ inline
import PropTypes from 'prop-types'

export default function Checkbox({ text, isChecked }) {

    return (
        <>
            <div>
                {/* if else แบบ inline ถ้าจริงแสดงข้อความหน้า */}
                {text} {isChecked ? 'is done' : 'is in progress'}
            </div>
        </>
    )
}

Checkbox.propTypes = {
    text: PropTypes.string,
    isChecked: PropTypes.bool
}