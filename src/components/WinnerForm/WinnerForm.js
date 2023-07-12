import './WinnerForm.css';
import { useGame } from '../../context/GameContext';

const WinnerForm = () => {
  const { seconds, getSeconds, getMinutes, nameInput, handleInput } = useGame();

  const calcSeconds = getSeconds(seconds);
  const calcMinutes = getMinutes(seconds);

  return (
    <div className='winner-form-modal'>
      <div className='modal-content'>
        <p>Congrats you found all the characters!</p>
        <p>
          Total time: {calcMinutes}:{calcSeconds}
        </p>

        <form>
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
