import React from 'react'
function SelectTimezone({ handleTimezone }) {
  return (
    <div className='select-time'>
      <label htmlFor='time-zones'>
        {' '}
        Select Timezone:
        <select className='time-names' onChange={handleTimezone}>
          <option value='America/New_York'>New York</option>
          <option value='America/Chicago'>Central Daylight Time</option>
          <option value='America/Denver'>Mountain Daylight Time</option>
          <option value='America/Los_Angeles'>Pacific Daylight Time</option>
          <option value='America/Anchorage'>Alaska Daylight Time</option>
          <option value='America/Honolulu'>
            Hawaii-Aleutian Standard Time
          </option>
          <option value='Europe/Dublin'>Dublin, Ireland</option>
          <option value='Asia/Dubai'>Dubai - United Arab Emirates</option>
          <option value='Australia/Sydney'>Sydney - Australia</option>
          <option value='Asia/Amman'>Amman - Jordan</option>
          <option value='Europe/London'>London, England</option>
        </select>
      </label>
    </div>
  )
}

export default SelectTimezone
