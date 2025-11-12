import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head><title>Contact - Vertullo&apos;s</title></Head>
      {/* Nav */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
              <p className="mb-4">43 Main Street<br/>Highland, NY 12528</p>
              <p className="mb-4">Phone: (845) 691-9341<br/>Email: info@vertullos.com</p>
              <p className="mb-4">Hours:<br/>Mon-Fri: 7AM-6PM<br/>Sat: 8AM-4PM<br/>Sun: Closed</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
              <blockquote className="italic mb-2">&quot;Fast, friendly service – always spotless!&quot; – Local Customer</blockquote>
              <blockquote>&quot;Best in Highland for alterations.&quot; – Happy Client</blockquote>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
    </>
  );
}