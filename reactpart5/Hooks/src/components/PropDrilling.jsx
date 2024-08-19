import React from "react";

export default function ParentComponent() {
    const data = "react lovers"
  return (
    <div>
        <p>parent</p>
      <FirstChildComp data={data} />
    </div>
  );
}

//* first comp

const FirstChildComp = ({ data }) => {
  return (
    <div>
      <p>I am fisrt child comp</p>

      <SecondChildComp data={data} />
    </div>
  );
};

//* Second Comp

const SecondChildComp = ({ data }) => {
  return (
    <div>
      <p>I am sec last child comp</p>

      <ThirdChildComp data={data} />
    </div>
  );
};

//* Third Comp

const ThirdChildComp = ({ data }) => {
  return (
    <div>
      <p>I am last child comp</p>
      <p>I am {data}</p>
    </div>
  );
};
