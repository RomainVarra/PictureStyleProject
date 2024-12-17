import leftPicture from "../../public/Images/photoProfilPersonnalisé.jpg"
import rightPicture from "../../public/Images/PhotoProfil.jpg"
import style from "./pictures.module.css"
import { useState } from "react";

function Pictures () {
    const [mouse, setMouse] = useState(50);
    const handleMouse = (e:React.MouseEvent<HTMLDivElement>) => {
        const container = e.currentTarget;
        const position = container.getBoundingClientRect();
        const offsetX = e.clientX - position.left;
        const percentage = (offsetX/position.width)*100;
        setMouse(percentage);
    } 

    return (
        <section className= {style.pictures_container} >
            <img src={leftPicture} alt="image personnalisé" className={style.leftPicture}
            onMouseMove={handleMouse}
            style={{
                clipPath: `polygon(0 0, ${mouse}% 0, ${mouse}% 100%, 0 100%)`,
              }} />
            <img src={rightPicture} alt="image non personnalisé" className={style.rightPicture} 
onMouseMove={handleMouse}
style={{
    
    clipPath: `polygon(${mouse}% 0, 100% 0, 100% 100%, ${mouse}% 100%)`,
              }}/>
        </section>
    )
}

export default Pictures;