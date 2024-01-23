import React, {useState} from 'react';

const Mycomponent = () => {

    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const [isEmployed,setisEmployed] = useState(false);

    const UpdateName = () => {
        setName("SpongBOB");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setisEmployed(!isEmployed);
    }
  return (
    <div>
    <p>Name: {name}</p>
    <button onClick={UpdateName}>Set Name</button>

    <p>Age: {age}</p>
    <button onClick={incrementAge}>Increment Age</button>

    <p>Is Employed: {isEmployed ? 'YES':'NO'}</p>
    <button onClick={toggleEmployedStatus}>Change Status</button>
    </div>
  )
}

export default Mycomponent