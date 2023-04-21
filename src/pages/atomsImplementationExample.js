// we import the inputBox named atom that we define in a deiffrent component
import { inputBox } from "component/AtomsExample";

// here we import useRecoilValue to get value from inputBox named atom
import { useRecoilState } from "recoil";

// box component
import Box from "../../component/Box";

export default function AtomsImplementationExample() {

    // useRecoilState is use to set the atom data in variable 
    const [data, setData] = useRecoilState(inputBox)

    return (
        <>
            <div>
                <input type="text"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    placeholder="enter the message" />
            </div>

            <Box />
        </>
    )
}