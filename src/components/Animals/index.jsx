import { useState } from "react";
import { Main } from "../GlobalStyleComponents";
import Explain from "./Explain";
import GetAnimals from "./GetAnimals";
import Swap from "./Swap";

const Animals = ({ user: { name, animals }, updateUser }) => {
  const [done, setDone] = useState(false);

  return (
    <Main className="text-center">
      {animals.length ? (
        <>{done ? <Explain name={name} /> : <Swap name={name} animals={animals} setDone={setDone} />}</>
      ) : (
        <GetAnimals name={name} updateUser={updateUser} />
      )}
    </Main>
  );
};

export default Animals;
