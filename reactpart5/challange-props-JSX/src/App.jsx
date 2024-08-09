import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <ProfileCard
        name="Muhammad"
        age={25}
        greeting={
          <div>
            <p>Hello Guys How are you</p>
          </div>
        }
      >
        <p>my Hobbies garding</p>
        <button>Contact</button>
      </ProfileCard>
      <ProfileCard
        name="Inam"
        age={19}
        greeting={
          <div>
            <p>Hello Guys How are you</p>
          </div>
        }
      >
        <p>my Hobbies Games</p>
        <button>Contact</button>
      </ProfileCard>
    </>
  );
}

export default App;
