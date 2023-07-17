import './WinnerForm.css';
import useGameState from '../../hooks/useGameState';
import useGameDispatch from '../../hooks/useGameDispatch';
import { getMinutes, getSeconds } from '../../helpers/helpers';

const WinnerForm = () => {
  const { seconds, nameInput } = useGameState();
  const { handleInput, handleSubmit } = useGameDispatch();

  return (
    <div className='winner-form-modal'>
      <div className='winner-form-modal-content'>
        <p>Congrats you found Wally and his friends!</p>
        <p>
          Total time: {getMinutes(seconds)}:{getSeconds(seconds)}
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
