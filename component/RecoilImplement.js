import { atom, useRecoilState, useResetRecoilState, selector, useRecoilValue } from "recoil"

// atom take an object
// this atom will set the initial value of the targeted element
// this atom is targeting the emoji and keep the count 
const countHeartAtom = atom({
    key: "count-heart-atom",
    default: 8,
});

// selector are piece of derived class
const fontSizeIncreaseSelector = selector({
    // 1st field is a key that should be unique
    key: "fonst-size-increase-selector",
    // 2nd field is a get which will return athe actual value
    get: ({ get }) => {
        const count = get(countHeartAtom);

        const fontSizeIncreasevalue = (count * 3)
        return fontSizeIncreasevalue;
    },
});


const countSmileAtom = atom({
    key: "count-smile-atom",
    default: 8,
});

const fontSizeSmilySelector = selector({
    key: "font-size-smily-selector",
    get: ({ get }) => {
        const count = get(countSmileAtom);
        const smilyFontSizeValue = count * 2;
        return smilyFontSizeValue;
    }

});


export default function RecoilImplementation() {

    // useRecoilState take the value from the countAtom atom and set the initial value in the count variable
    const [countHeart, setCountHeart] = useRecoilState(countHeartAtom);


    // useResetRecoilState return aa a function
    const resetHeartCount = useResetRecoilState(countHeartAtom);

    // useRecoilValue return an actual value and take a selector
    const fontSizeIncreaseValue = useRecoilValue(fontSizeIncreaseSelector)

    const [countSmily, setCountSmily] = useRecoilState(countSmileAtom)
    const resetSmilyCount = useResetRecoilState(countSmileAtom)
    const smilyFontSizeValue = useRecoilValue(fontSizeSmilySelector)

    return (
        <>
            <h1>React Recoil</h1>
            <h2>count value of the atom is : {countHeart}</h2>
            <h3>Pixel value of Image is :  {fontSizeIncreaseValue} px</h3>
            <p style={{ fontSize: fontSizeIncreaseValue }}>Hello</p>
            <button onClick={() => setCountHeart(countHeart + 1)}>increase size</button>
            <button onClick={resetHeartCount}>reset size</button>
            <button onClick={() => setCountHeart(countHeart - 1)}>decrease size</button>




            <h2>count value of the atom is : {countSmily}</h2>
            <h3>Pixel value of Image is :  {smilyFontSizeValue} px</h3>
            <p style={{ fontSize: smilyFontSizeValue }}>😊</p>
            <button onClick={() => setCountSmily(countSmily + 1)}>increase size</button>
            <button onClick={resetSmilyCount}>reset size</button>
            <button onClick={() => setCountSmily(countSmily - 1)}>decrease </button>



        </>
    )

}


