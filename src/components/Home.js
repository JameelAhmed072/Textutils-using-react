import React from 'react'

export default function Home(props) {
  return (
    <div className='container my-5' style={{color:props.mode === 'dark'?'white':'black'}}>
      <p>Welcome to Quetta, the app that lets you explore the beauty and richness of Balochistan's capital city!

Whether you're a resident or a tourist, Quetta has something for everyone. From breathtaking natural landscapes to rich cultural heritage and modern urban amenities, this city truly has it all. And now, with Quetta app, you can easily discover all the wonders of this amazing city at your fingertips.

Explore Quetta's landmarks and attractions, from the stunning Hazarganji Chiltan National Park to the bustling bazaars of the city center. Get insider tips on the best places to eat, shop, and relax, and connect with other Quetta enthusiasts to share your experiences and make new friends.

With Quetta app, you can easily plan your itinerary, book tours and activities, and stay up-to-date on the latest events and happenings in the city. Whether you're here for a short visit or a longer stay, Quetta app is your ultimate guide to making the most of your time in this incredible city.

So why wait? Download Quetta app today and start your journey of discovery in this amazing city!</p>
    </div>
  )
}
