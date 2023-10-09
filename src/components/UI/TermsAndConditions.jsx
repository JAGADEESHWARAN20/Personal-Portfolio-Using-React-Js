import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-10 px-4 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Terms & Conditions</h1>
        <p className="text-sm mb-4">Last updated on Oct 9th, 2023</p>

        <p className="mb-4">
          The Website Owner, including subsidiaries and affiliates (“Website” or “Website Owner” or “we” or “us” or “our”)
          provides the information contained on the website or any of the pages comprising the website (“website”) to visitors
          (“visitors”) (cumulatively referred to as “you” or “your” hereinafter) subject to the terms and conditions set out
          in these website terms and conditions, the privacy policy and any other relevant terms and conditions, policies and
          notices which may be applicable to a specific section or module of the website.
        </p>

        <p className="mb-4">
          Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by
          the following terms and conditions of use, which together with our privacy policy govern Jagadeesh - Web Developer's
          relationship with you in relation to this website.
        </p>

        {/* ... Add more content as needed ... */}

        <p className="mb-4">
          We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly
          out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit
          mutually agreed by us with our acquiring bank from time to time.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
