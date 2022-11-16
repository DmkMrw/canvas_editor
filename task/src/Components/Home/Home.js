import styles from './Home.module.scss';
import Button from '../Features/Button/Button';
import { useState } from 'react';
import { useDrag } from '@use-gesture/react'
import React from 'react';
import html2canvas from 'html2canvas';


const Home = () => {

  const [addText, setAddText] = useState(false)
  const [backgroundImage, setBackgroundImage] = useState('./images/startImage.png')
  const [image, setImage] = useState();
  const [color, setColor] = useState('black');
  const [textPos, setTextPos] = useState({ x: 100, y: 100 });
  const [logoPos, setLogoPos] = useState({ x: 100, y: 100 });
  const [display, setDisplay] = useState(true);

// Drag and drop function
  const bindTextPos = useDrag((params) => {
    setTextPos({
      x: params.offset[0],
      y: params.offset[1]
    })
  })
  const bindLogoPos = useDrag((params) => {
    setLogoPos({
      x: params.offset[0],
      y: params.offset[1],
    })
  })

// Add Text handler
  const handleAddText = () => {
    setAddText(true);
    if (backgroundImage === './images/startImage.png') setBackgroundImage('');
  }

// Reset handler
  const handleReset = () => {
    setAddText(false);
    setBackgroundImage('./images/startImage.png')
    setImage()
    setDisplay(true)
  }

// Change text color handler
  const handleChangeColor = (e) => {
    setColor(e)
  }

// Remove text area handler
  const handleRemove = () => {
    setAddText(false)
  }

// Download image function -> start
  const printRef = React.useRef();

  const handleDownloadImage = async () => {
    await setDisplay(false)
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.png';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };
// Download image function <- stop

  return (

    <div className={styles.container}>
      {/* PHOTO SIDE */}
      <div className={styles.image} ref={printRef}>
        {backgroundImage !== '' && <img className={styles.imgMain} src={backgroundImage} alt="" />}
        {addText && <div className={styles.textArea} style={{position: 'absolute', top: textPos.y, left: textPos.x, zIndex: 2, border: !display ? 'none' : ''}}>
          <div className={styles.colorPurple} style={{display: display ? 'block' : 'none'}}>
            <img src="./images/colorPurple.svg" alt="" />
          </div>
          <div className={styles.trashIcon} style={{display: display ? 'block' : 'none'}}>
            <img src="./images/trashIcon.svg" alt="" onClick={()=> handleRemove() } />
          </div>
          <div className={styles.moveIcon} style={{display: display ? 'block' : 'none'}}>
            <img src="./images/moveIcon.svg" alt=""  {...bindTextPos()} draggable="false" />
          </div>
          <div className={styles.colorPalette} style={{display: display ? 'flex' : 'none'}}>
            <div className={styles.colorBlack} style={(color === 'black') ? {border: '2px solid #FFF', borderRadius: '50%'} : {}}>
              <img src="./images/colorBlack.svg" alt="black" onClick={e => handleChangeColor(e.target.alt)}/>
            </div>
            <div className={styles.colorWhite} style={(color === 'white') ? {border: '2px solid #FFF', borderRadius: '50%'} : {}}>
              <img src="./images/colorWhite.svg" alt="white" onClick={e => handleChangeColor(e.target.alt)}/>
            </div>
            <div className={styles.colorRed} style={(color === 'red') ? {border: '2px solid #FFF', borderRadius: '50%'} : {}}>
              <img src="./images/colorRed.svg" alt="red" onClick={e => handleChangeColor(e.target.alt)}/>
            </div>
            <div className={styles.colorBlue} style={(color === 'blue') ? {border: '2px solid #FFF', borderRadius: '50%'} : {}}>
              <img src="./images/colorBlue.svg" alt="blue" onClick={e => handleChangeColor(e.target.alt)}/>
            </div>
            <div className={styles.colorGreen} style={(color === 'green') ? {border: '2px solid #FFF', borderRadius: '50%'} : {}}>
              <img src="./images/colorGreen.svg" alt="green" onClick={e => handleChangeColor(e.target.alt)}/>
            </div>
          </div>
          <textarea placeholder="Type your text&#10; here" style={{ color: color}} onClick={()=> setDisplay(true)}></textarea>
        </div>}
        {image && <img className={styles.selectedImage} src={image} alt="" {...bindLogoPos()} style={{position: 'absolute', top: logoPos.y, left: logoPos.x, zIndex: 3}} draggable="false"></img>}
      </div>

      {/* OPTIONS SIDE */}
      <div className={styles.options}>
        <div className={styles.topbar}>
          <div className={styles.logoname}>
            <div className={styles.logo}>
              <img src="./images/canvaLogo.svg" alt="editors logo" />
            </div>
            <div className={styles.name}>CanvasEditor</div>
          </div>
          <div className={styles.reset}>
            <div className={styles.resetText} onClick={()=> handleReset()}>Reset</div>
            <div className={styles.resetlogo}>
              <img src="./images/resetlogo.svg" alt="reset logo button" />
            </div>
          </div>
        </div>
        <div className={styles.mainTitle}><span>Add content</span></div>
        <div className={styles.optionsBoxes}>

          <div className={styles.addText} onClick={()=> handleAddText()}>
            <div className={styles.addTextImage} >
              <img src="./images/addText.svg" alt="add text button" />
            </div>
            <div className={styles.addTextText}>Text</div>
          </div>

          <div className={styles.addImage}>
            <input
              className={styles.inputStyles}
              type="file"
              accept="image/*"
              name="image"
              onChange={(event) => {
              console.log(event.target.files[0]);
                setImage(URL.createObjectURL(event.target.files[0]));
                }}
              />
            <div className={styles.addImageImage}>
              <img src="./images/addImage.svg" alt="add image button" />
            </div>
            <div className={styles.addImageText}>Image</div>
          </div>

          <div className={styles.addBackground}>
            <input
              className={styles.inputStyles}
              type="file"
              accept="image/*"
              name="backgroundImage"
              onChange={(event) => {
              console.log(event.target.files[0]);
                setBackgroundImage(URL.createObjectURL(event.target.files[0]));
              }}
            />
            <div className={styles.addBackgroundImage}>
              <img src="./images/addBackground.svg" alt="add background button" />
            </div>
            <div className={styles.addBackgroundText}>Background</div>
          </div>

        </div>
          <div className={styles.button} onClick={handleDownloadImage}>
            <Button />
        </div>
      </div>

    </div>
  );
}

export default Home;