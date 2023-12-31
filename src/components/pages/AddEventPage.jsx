import styles from './SignInPage.module.css';
import MainButton from '../ui/MainButton.jsx';

import barsIcon from '../../assets/img/barsIcon.svg';
import locationIcon from '../../assets/img/Location.svg';
import calenderIcon from '../../assets/img/Calender.svg';
import imageIcon from '../../assets/img/ImageIcon.svg';
import { useEffect, useRef, useState } from 'react';
import BackButton from '../ui/BackButton.jsx';
import { useNavigate } from 'react-router-dom';

function AddEventPage() {
  const [locationUser, setLocationUser] = useState(null);
  const [locations, setLocations] = useState([]);
  const locationRef = useRef();
  const navigate = useNavigate();

  const currentTime = new Date();
  currentTime.setMinutes(
    currentTime.getMinutes() - currentTime.getTimezoneOffset() + 60,
  );
  currentTime.setMinutes(30);
  currentTime.setMilliseconds(null);
  currentTime.setSeconds(null);

  async function createEvent(event) {
    event.preventDefault();

    const form = new FormData(event.target);
    const {
      'place name': placeName,
      latitude,
      longitude,
      state,
    } = locationUser;
    const address = locationRef.current.value
      .replace(',', '-,-')
      .split('-,-')[1];

    form.delete('location');
    form.append('placeName', placeName);
    form.append('latitude', latitude);
    form.append('longitude', longitude);
    form.append('state', state);
    form.append('address', address);
    console.log(form);

    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + '/api/event/create',
      { method: 'POST', credentials: 'include', body: form },
    );
    // console.log(response);
    const result = await response.json();
    console.log(result);

    if (!response.ok) return;
    navigate(`/events/details/${result._id}`);
  }

  async function locationHandler(event) {
    if (event.target.value.length === 5) {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL +
          '/api/utility/location/' +
          event.target.value,
      );
      // console.log(response);
      const result = await response.json();
      console.log(result);
      if (!response.ok) return;
      if (result.length === 1) {
        setLocationUser(result[0]);
      } else {
        setLocations(result);
      }
    }
  }

  // useEffect(() => {
  //   if (locationUser) {
  //     console.log({ locationUser });
  //   }
  // }, [locationUser]);

  // useEffect(() => {
  //   if (locations.length > 0) {
  //     console.log({ locations });
  //   }
  // }, [locations]);

  return (
    <>
      <div className={styles['addevent-container']}>
        <BackButton />
        <h1>
          Add <span>Event</span>
        </h1>
        <div>{/*don't delete for alignment*/}</div>
      </div>
      <form
        onSubmit={createEvent}
        className={styles['form']}>
        <div className={styles['form-container']}>
          <div className={styles['inputDiv']}>
            <img
              src={barsIcon}
              alt='barsicon'
            />
            <input
              type='text'
              placeholder='Event Name'
              name='title'
              required
            />
          </div>
          <div className={styles['inputDiv']}>
            <img
              src={barsIcon}
              alt='barsicon'
            />
            <select
              name='category'
              id='category'
              placeholder='Category'
              defaultValue=''
              required>
              <option
                value=''
                hidden>
                Category
              </option>
              <option value='Sport'>Sport</option>
              <option value='Music'>Music</option>
              <option value='Art'>Art</option>
              <option value='Food'>Food</option>
            </select>
          </div>
          <div className={styles['inputDiv']}>
            <img
              src={locationIcon}
              alt='Location'
            />
            <div className={styles['inputLocation']}>
              <input
                ref={locationRef}
                onChange={locationHandler}
                type='text'
                placeholder='Zipcode, Place'
                name='location'
                required
              />
              {locations.length > 0 && (
                <div className={styles.locationBtnsWrapper}>
                  <p className={styles.locationText}>
                    Select the City of your choosing
                  </p>
                  {locations.map((location, index) => (
                    <button
                      type='button'
                      key={index}
                      onClick={() => {
                        setLocationUser(location);
                        setLocations([]);
                      }}>
                      {location['place name']}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className={styles['inputDiv']}>
            <img
              src={calenderIcon}
              alt='kalender'
            />
            <input
              name='startDate'
              type='datetime-local'
              defaultValue={currentTime.toISOString().slice(0, 16)}
              required
            />
          </div>
          <div className={styles['inputDiv']}>
            <img
              src={calenderIcon}
              alt='kalender'
            />
            <input
              name='endDate'
              type='datetime-local'
              defaultValue={currentTime.toISOString().slice(0, 16)}
              required
            />
          </div>

          <div className={styles['aboutInputDiv']}>
            <img
              src={barsIcon}
              alt='barsicon'
            />
            <textarea
              placeholder='About'
              required
              name='description'></textarea>
          </div>
          <div className={styles['inputDiv']}>
            <img
              src={imageIcon}
              alt='file'
            />
            <label htmlFor='eventImage'>Click to upload your file</label>
            <input
              type='file'
              name='image'
              id='eventImage'
              required
            />
          </div>
        </div>
        <div className={styles['button-container']}>
          <MainButton showArrow={true}>Add </MainButton>
        </div>
      </form>
    </>
  );
}

export default AddEventPage;
