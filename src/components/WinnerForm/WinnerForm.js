import './WinnerForm.css';
import useGameState from '../../hooks/useGameState';
import useGameDispatch from '../../hooks/useGameDispatch';

const WinnerForm = () => {
  const { seconds, nameInput } = useGameState();
  const { getSeconds, getMinutes, handleInput, handleSubmit } =
    useGameDispatch();

  const calcSeconds = getSeconds(seconds);
  const calcMinutes = getMinutes(seconds);

  return (
    <div className='winner-form-modal'>
      <div className='winner-form-modal-content'>
        <p>Congrats you found Wally and his friends!</p>
        <p>
          Total time: {calcMinutes}:{calcSeconds}
        </p>
        <form className='name-form' onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='nameInput'
            value={nameInput}
            onChange={(e) => handleInput(e)}
            required
          />
          <button className='submit-form-button'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default WinnerForm;
