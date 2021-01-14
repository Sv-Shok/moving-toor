import React from "react";
import style from "./FormsControls.module.css";

export const RenderField = ({input, meta, ...props})=>{
    const hasError = meta.touched && meta.error;
    return(
        <div>
            <div className={(hasError ? style.error : "")}>
                {props.type ==="input"
                    ? <input {...input} {...props} />
                    :<textarea {...input} {...props} />}
            </div>
            {hasError && <span className={style.span}>{meta.error}</span>}
        </div>

    )
};

// export const Textarea = ({input, meta, ...props})=>{
//     debugger
//     const hasError = meta.touched && meta.error;
//     return(
//         <div>
//             <div className={(hasError ? style.error : "")}>
//                 <textarea {...input} {...props} />
//             </div>
//             {hasError && <span className={style.span}>{meta.error}</span>}
//         </div>
//
//     )
// };
//
// export const InputName = ({input, meta, ...props})=>{
//     const hasError = meta.touched && meta.error;
//     return(
//         <div>
//             <div className={(hasError ? style.error : "")}>
//                 <input {...input} {...props} />
//             </div>
//             {hasError && <span className={style.span}>{meta.error}</span>}
//         </div>
//
//     )
// };