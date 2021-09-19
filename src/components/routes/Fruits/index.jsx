import { useState } from "react";
import { Main } from "../../GlobalStyleComponents";
import Explain from "./Explain";
import GetFruits from "./GetFruits";
import Replace from "./Replace";

const Fruits = ({ user: { name, fruits }, updateUser }) => {
  const [done, setDone] = useState(false);
  const randIndex = Math.floor(Math.random() * 4);

  return (
    <Main className="text-center">
      {fruits.length ? (
        <>
          {done ? (
            <Explain name={name} fruit={fruits[randIndex]} />
          ) : (
            <Replace name={name} fruits={fruits} setDone={setDone} />
          )}
        </>
      ) : (
        <GetFruits name={name} updateUser={updateUser} />
      )}
    </Main>
  );
};

export default Fruits;
