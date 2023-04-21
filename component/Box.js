// here we import useRecoilValue to get value and useRecoilState for setting the state
import { useRecoilState, useRecoilValue } from "recoil"

// we import the inputBox named atom that we define in a deiffrent component
import { inputBox } from "component/AtomsExample";

export default function Box() {

    // useRecoilValue is use to get the vcalue from the atom
    const data1 = useRecoilValue(inputBox);
    console.log("atom data", data1);

    // useRecoilState is use to set the atom data in variable 
    const [data, setData] = useRecoilState(inputBox);

    return (
        <>
            <h1>Box data</h1>
            <input
                onChange={(e) => setData(e.target.value)}
                type="text"
                value={data}
                placeholder="inside the box " />
        </>
    )
}