import React, {useState} from 'react'
import './Grid.css'

const Grid = () => {
   const GridData = [
        {
            heading: 'He is not the sharpest knife in the drawer'
        },
        {
            heading: 'The big building was blazing with lights'
        },
        {
            heading: 'Now you must answer some big questions'
        },
        {
            heading: 'Get Your Act Together'
        },
    ]
    // For FirstHeading
    // bold-function
    const[bold, setbold] = useState(false);
    const makeBold = () => {
        setbold(!bold)
    }
    // italic-function
    const[italic, setitalic] = useState(false);
    const makeItalic = () => {
        setitalic(!italic)
    }
    // underline-function
    const[underline, setunderline] = useState(false);
    const makeUnderline = () => {
        setunderline(!underline)
    }
    // size-function
    const[size, setsize] = useState(false);
    const changeFont = () => {
        setsize(!size)
    }
    // change-color-function
    const[red, setred] = useState(false);
    const makeRed = () => {
        setred(!red)
    }
    // For SecondHeading==========================
    // ===========================================
    const[Secondbold, setSecondbold] = useState(false);
    const makeSecondBold = () => {
        setSecondbold(!Secondbold)
    }
    // italic-function
    const[Seconditalic, setSeconditalic] = useState(false);
    const makeSecondItalic = () => {
        setSeconditalic(!Seconditalic)
    }
    // underline-function
    const[Secondunderline, setSecondunderline] = useState(false);
    const makeSecondUnderline = () => {
        setSecondunderline(!Secondunderline)
    }
    // size-function
    const[Secondsize, setSecondsize] = useState(false);
    const changeSecondFont = () => {
        setSecondsize(!Secondsize)
    }
    // change-color-function
    const[Secondred, setSecondred] = useState(false);
    const makeSecondRed = () => {
        setSecondred(!Secondred)
    }
    // For ThirdHeading==================================
    // ==================================================
    const[Thirdbold, setThirdbold] = useState(false);
    const makeThirdBold = () => {
        setThirdbold(!Thirdbold)
    }
    // italic-function
    const[Thirditalic, setThirditalic] = useState(false);
    const makeThirdItalic = () => {
        setThirditalic(!Thirditalic)
    }
    // underline-function
    const[Thirdunderline, setThirdunderline] = useState(false);
    const makeThirdUnderline = () => {
        setThirdunderline(!Thirdunderline)
    }
    // size-function
    const[Thirdsize, setThirdsize] = useState(false);
    const changeThirdFont = () => {
        setThirdsize(!Thirdsize)
    }
    // change-color-function
    const[Thirdred, setThirdred] = useState(false);
    const makeThirdRed = () => {
        setThirdred(!Thirdred)
    }
    // For ThirdHeading==================================
    // ==================================================
    const[Fourthbold, setFourthbold] = useState(false);
    const makeFourthBold = () => {
        setFourthbold(!Fourthbold)
    }
    // italic-function
    const[Fourthitalic, setFourthitalic] = useState(false);
    const makeFourthItalic = () => {
        setFourthitalic(!Fourthitalic)
    }
    // underline-function
    const[Fourthunderline, setFourthunderline] = useState(false);
    const makeFourthUnderline = () => {
        setFourthunderline(!Fourthunderline)
    }
    // size-function
    const[Fourthsize, setFourthsize] = useState(false);
    const changeFourthFont = () => {
        setFourthsize(!Fourthsize)
    }
    // change-color-function
    const[Fourthred, setFourthred] = useState(false);
    const makeFourthRed = () => {
        setFourthred(!Fourthred)
    }
  return (
        <div className='container grid-container'>
            <div className="row grid-row">
                {/* <div className="col-lg-12 grid-col-12"> */}
                
                    <div className="col-lg-6 grid-col-6">
                        <div className="col-box">
                            <div className="btn-action">
                                <button className='grid-button' onClick={makeBold}>Bold</button>
                                <button className='grid-button' onClick={makeItalic}>Italic</button>
                                <button className='grid-button' onClick={makeUnderline}>Underline</button>
                                <button className='grid-button' onClick={changeFont}>font-size</button>
                                <button className='grid-button' onClick={makeRed}>color</button>
                            </div>
                        </div>          

                        <div className="col-box">
                            <div className="btn-action">
                                <button className='grid-button' onClick={makeSecondBold}>Bold</button>
                                <button className='grid-button' onClick={makeSecondItalic}>Italic</button>
                                <button className='grid-button' onClick={makeSecondUnderline}>Underline</button>
                                <button className='grid-button' onClick={changeSecondFont}>font-size</button>
                                <button className='grid-button' onClick={makeSecondRed}>color</button>
                            </div>
                        </div>

                        <div className="col-box">
                            <div className="btn-action">
                                <button className='grid-button' onClick={makeThirdBold}>Bold</button>
                                <button className='grid-button' onClick={makeThirdItalic}>Italic</button>
                                <button className='grid-button' onClick={makeThirdUnderline}>Underline</button>
                                <button className='grid-button' onClick={changeThirdFont}>font-size</button>
                                <button className='grid-button' onClick={makeThirdRed}>color</button>
                            </div>
                        </div>

                        <div className="col-box">
                            <div className="btn-action">
                                <button className='grid-button' onClick={makeFourthBold}>Bold</button>
                                <button className='grid-button' onClick={makeFourthItalic}>Italic</button>
                                <button className='grid-button' onClick={makeFourthUnderline}>Underline</button>
                                <button className='grid-button' onClick={changeFourthFont}>font-size</button>
                                <button className='grid-button' onClick={makeFourthRed}>color</button>
                            </div>
                        </div>

                    </div>

                    {/* {GridData.map((item) => {
                        return( */}
                            <div className="col-lg-6 grid-col-6">
                                
                                <div className='col-box'>
                                    <h6 className={`col-heading ${bold ? 'bold' : ''}
                                    ${italic ? 'italic' : ''} ${red ? 'red' : ''}
                                    ${underline ? 'underline' : ''} ${size ? 'size' : ''}`}>
                                    He is not the sharpest knife in the drawer</h6>
                                </div>
                                <div className='col-box'>
                                    <h6 className={`col-heading ${Secondbold ? 'Secondbold' : ''}
                                    ${Seconditalic ? 'Seconditalic' : ''} ${Secondred ? 'Secondred' : ''}
                                    ${Secondunderline ? 'Secondunderline' : ''} ${Secondsize ? 'Secondsize' : ''}`}>
                                    He is not the sharpest knife in the drawer</h6>
                                </div>
                                <div className='col-box'>
                                    <h6 className={`col-heading ${Thirdbold ? 'Thirdbold' : ''}
                                    ${Thirditalic ? 'Thirditalic' : ''} ${Thirdred ? 'Thirdred' : ''}
                                    ${Thirdunderline ? 'Thirdunderline' : ''} ${Thirdsize ? 'Thirdsize' : ''}`}>
                                    He is not the sharpest knife in the drawer</h6>
                                </div>
                                <div className='col-box'>
                                    <h6 className={`col-heading ${Fourthbold ? 'Fourthbold' : ''}
                                    ${Fourthitalic ? 'Fourthitalic' : ''} ${Fourthred ? 'Fourthred' : ''}
                                    ${Fourthunderline ? 'Fourthunderline' : ''} ${Fourthsize ? 'Fourthsize' : ''}`}>
                                    He is not the sharpest knife in the drawer</h6>
                                </div>

                            </div>
            </div>
        </div>
  )
}

export default Grid