import React, { useEffect, useState } from 'react'
import Timer from './Timer';


type Props = {
    buttonStatus: boolean;
}
const Color = ({ buttonStatus }: Props) => {

    const [color, setColor] = useState<string>('');
    const [selectedColor, setSelectedColor] = useState<string>('');

    const [number, setNumber] = useState<number>(0)

    function generateRandomColor() {
        const randomNumber = Math.floor(Math.random() * 10);
        const threshold1 = 1 / 3; // 33.33% chance
        const threshold2 = 2 / 3; // 33.33% chance

        let color = '';

        if (randomNumber === 0 || randomNumber == 5) {
            color = 'violet';
        } else if (randomNumber % 2 == 0) {
            color = 'red';
        } else {
            color = 'green';
        }
        setColor(color);
        setNumber(randomNumber);
        setSelectedColor("");
    }


    useEffect(() => {
        const interval = setInterval(() => {
            generateRandomColor();
            // setSelectedColor(" ")
        }, 30000);
        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    const selectColor = (event: any) => {

        console.log("event", event.target.innerText)

        if (event.target.innerText == 0 || event.target.innerText == 5) {

            setSelectedColor('violet');

        } else if (event.target.innerText % 2 == 0) {

            setSelectedColor('red')

        } else {

            setSelectedColor('green')
        }
    }
    return (
        <>
            {/* <div>{selectedColor == "" ? <h1>you had not choosen</h1> : selectedColor == color ? <h1>win</h1> : <h1>you lost</h1>}</div> */}
            <div style={{
                backgroundColor: `${color}`,
                fontWeight: "bold",
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                color: 'white',
                fontSize: '30px',
                display: 'flex',
                justifyContent: 'center', // Center-aligns the text horizontally
                alignItems: 'center',
                marginLeft: '240px',
                marginBottom: "100px" // Cen
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center', // Center-aligns the text horizontally
                    alignItems: 'center', // Center-aligns the text vertically
                }}>

                    {number}
                </div>
            </div>


            <div style={{
                display: 'grid',
                gridTemplateColumns: "repeat(5,100px)",
                justifyContent: 'center', // Center-aligns the text horizontally
                alignItems: 'center',
                gap: "20px",
                overflow: "wrap"
                // Center-aligns the text vertically
            }}>
                {
                    new Array(10).fill(0).map((elem, index) => {
                        return <button key={index} disabled={buttonStatus} className='button' onClick={(e) => selectColor(e)}
                            style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                backgroundColor: (index === 0 || index === 5) ? 'violet' : (index % 2 === 0) ? 'red' : 'green',
                                color: 'white',
                                fontSize: '30px',
                                fontWeight: 'bold',
                                display: 'flex',
                                justifyContent: 'center', // Center-aligns the text horizontally
                                alignItems: 'center', // Center-aligns the text vertically
                            }}>{index}</button>
                    })
                }
            </div>
        </>
    )
}

export default Color