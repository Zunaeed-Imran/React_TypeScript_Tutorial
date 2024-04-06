
// in this file we practice arry

type UserProps = {
  lang: string[];
};


const User4 = ({ lang }: UserProps) => {
  return (
    <>
      <p>Speakes: 
        {lang.map((language, index) => {
          return <span key={index}>
            {language}
          </span>
        })}
     </p>
    </>
  );
};

export default User4;
