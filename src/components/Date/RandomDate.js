import React, { useState } from 'react';

function RandomDate() {
  const getRandomDateInPast = () => {
    const today = new Date();
    const randomDaysAgo = Math.floor(Math.random() * 365); // Random number between 0 and 364

    const pastDate = new Date(today);
    pastDate.setDate(today.getDate() - randomDaysAgo);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(pastDate);

    return formattedDate;
  };

  const randomPastDate = getRandomDateInPast();

  return <div>{randomPastDate}</div>;
}

export default RandomDate;
