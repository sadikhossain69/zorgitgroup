import React from 'react';

export default function Direction() {
  return (
    <section
      id="map"
      className="space-y-3 mx-6 max-w-screen-2xl sm:px-14 lg:px-32 2xl:px-0 py-2 my-8"
    >
      <h5 className="text-base">Happy To Meet</h5>
      <h3 className="text-2xl font-semibold">Get Direction</h3>
      <div className="justify-center flex">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1304.7753546787908!2d91.78510097159462!3d22.336177646520134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd9783cc1c5b3%3A0xc57b17eb834b0ab1!2sZORG%20IT%20GROUP!5e0!3m2!1sen!2sbd!4v1642068728517!5m2!1sen!2sbd"
          width="100%"
          height="350"
          style={{ border: '0' }}
          loading="lazy"
        />
      </div>
    </section>
  );
}
