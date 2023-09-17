/* eslint-disable react/prop-types */
function Button({ text, handleClick  }) {

  return (
    <>
      <button 
   onClick={handleClick}
      className="bg-primary-cyan rounded-full px-5 py-3 text-white font-bold">
        {text}
      </button>
    </>
  );
}

export default Button;
 
