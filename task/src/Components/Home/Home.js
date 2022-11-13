import styles from './Home.module.scss';
import Button from '../Features/Button/Button';
import { useState } from 'react';

const Home = () => {

  const [addText, setAddText] = useState(false)
  const [backgroundImage, setBackgroundImage] = useState('./images/startImage.png')
  const [image, setImage] = useState();


  const handleAddText = () => {
    setAddText(true);
    if (backgroundImage === './images/startImage.png') setBackgroundImage('');
  }

  const handleReset = () => {
    setAddText(false);
    setBackgroundImage('./images/startImage.png')
    console.log('Reset');
  }

  return (
    <div className={styles.container}>
      <div className={styles.image} >
        {backgroundImage !== '' && <img className={styles.imgMain} src={backgroundImage} alt="" />}
        {addText && <div className={styles.textArea}>
          <div className={styles.colorPurple}>
            <img src="./images/colorPurple.svg" alt="" />
          </div>
          <div className={styles.trashIcon}>
            <img src="./images/trashIcon.svg" alt="" />
          </div>
          <div className={styles.moveIcon}>
            <img src="./images/moveIcon.svg" alt="" />
          </div>
          <div className={styles.colorPalette}>
            <div className={styles.colorBlack}>
              <img src="./images/colorBlack.svg" alt="" />
            </div>
            <div className={styles.colorWhite}>
              <img src="./images/colorWhite.svg" alt="" />
            </div>
            <div className={styles.colorRed}>
              <img src="./images/colorRed.svg" alt="" />
            </div>
            <div className={styles.colorBlue}>
              <img src="./images/colorBlue.svg" alt="" />
            </div>
            <div className={styles.colorGreen}>
              <img src="./images/colorGreen.svg" alt="" />
            </div>
          </div>
          <textarea placeholder="Type your text&#10; here"></textarea>
        </div>}
        {image && <img className={styles.selectedImage} src={image} alt=""></img>}
      </div>
      <div className={styles.options}>
        <div className={styles.topbar}>
          <div className={styles.logoname}>
            <div className={styles.logo}>
              <img src="./images/Vector.svg" alt="editors logo" />
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

          <div className={styles.addText}>
            <div className={styles.addTextImage} onClick={()=> handleAddText()}>
              <img src="./images/addText.svg" alt="add text button" />
            </div>
            <div className={styles.addTextText}>Text</div>
          </div>

          <div className={styles.addImage}>
            <div className={styles.addImageImage}>
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
              <img src="./images/addImage.svg" alt="add image button" />
            </div>
            <div className={styles.addImageText}>Image</div>
          </div>

          <div className={styles.addBackground}>
            <div className={styles.addBackgroundImage}>
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
              <img src="./images/addBackground.svg" alt="add background button" />
            </div>
            <div className={styles.addBackgroundText}>Background</div>
          </div>

        </div>
          <div className={styles.button}>
            <Button />
          </div>
      </div>
    </div>
  );
}

export default Home;