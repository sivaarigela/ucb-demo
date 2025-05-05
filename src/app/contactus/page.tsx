import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 bg-gray-100">
      <div className="overflow-hidden rounded-2xl shadow-lg mb-10">
        <Image
          className="w-full object-cover"
          src="https://www.ucb.com/sites/default/files/2024-11/13.png"
          alt="UCB Banner"
          width={1400}
          height={600}
          priority
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
        {/* Left Column */}
        <div>
          <h1 className="text-2xl font-bold mb-4">UCB S.A.</h1>
          <p className="mb-4">
            Allée de la Recherche, 60<br />
            1070 Brussels<br />
            Belgium
          </p>
          <p className="mb-4">
            Tel: +32 2 559 99 99<br />
            Fax: +32 2 559 99 00
          </p>
          <p className="mb-4">
            Registration n° 0403.053.608, RPM, Brussels
          </p>
          <p className="mb-4">
            If you wish to apply for a job or an internship or to send your CV, please visit the Careers section. Please note, other e-mails with CVs in attachment will not be answered.
          </p>
          <p className="mb-4">
            To contact one of our country offices, please visit the UCB Worldwide section.
          </p>
          <p className="mb-4">
            For any other questions, please select your country and complete the associated form. Fields marked with an * are required. Please note that we do not respond to form letters or e-mail campaigns.
          </p>
          <p className="mb-4">
            Information on this site is provided for corporate information purposes and is not intended to be promotional product information.
          </p>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Important Note</h2>
          <p className="mb-4">
            This contact form is not intended to be used to order prescribed medications, nor should it be used to report personal health concerns or adverse events. In case of such events:
          </p>
          <p className="mb-4">
            <strong>For patients:</strong> If you wish to report an adverse event related to one of our products, please contact your healthcare provider. In addition, you can contact us using your local safety officer or via UCBCares.
          </p>
          <p className="mb-4">
            <strong>For healthcare professionals:</strong> If you wish to report an adverse event related to one of our products, please follow the current regulatory procedure in force in your country or contact us using your local safety officer or via UCBCares.
          </p>
        </div>
      </div>
    </div>
  );
}
