import Head from 'next/head';
import {
  DemoInline,
  EmbeddedParamTable,
  ForRecurrentTable,
  InstallmentCode,
  InstallmentCode2,
  InstallmentTable,
  MainLayout,
  SampleResponse,
  SplitCode,
  SplitPaymentTable,
  VerifyTransaction,
} from '../components/common';
import { SampleConfiguration, LiveInline } from '../components/common';

export default function Home() {
  return (
    <>
      <Head>
        <title>Glade | Glade Documentation</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <MainLayout>
        <main className="pl-48 w-8/12 overflow-y-scroll m-auto m-0">
          <div className="py-32 px-10">
            <h1 className="text-5xl mb-12">Guide</h1>
            <h2 className="text-3xl font-medium mb-8">Account Setup</h2>
            <hr />
            {/* Test */}
            <h3 className="text-3xl font-light mt-8">Test Accounts</h3>
            <ul className="pl-5">
              <li className="list-disc text-lg font-light">
                Test API Credentials
                <br />
                <code>Merchant ID: GP0000001</code>
                <br />
                <code>Merchant Key: 123456789</code>
              </li>
            </ul>
            {/* Live Account */}
            <h3 className="text-3xl font-light mt-8">Live Accounts</h3>
            <ul className="pl-5">
              <li className="list-disc text-lg font-light">
                Sign up for live account here:{' '}
                <a
                  className="text-red-400 hover:text-blue-400 hover:underline"
                  href=""
                >
                  https://glade.ng ⤴︎
                </a>{' '}
                You can start accepting realtime payments with your live
                account. Create one now. Your API Credentials are in{' '}
                <code>Merchant Credentials</code> on the dashboard
              </li>
            </ul>
            <div className="p-6 my-4 bg-yellow-100 border-l-4 border-yellow-400">
              <p className="uppercase text-xl font-bold text-yellow-600">
                note
              </p>
              <p className="text-xl">
                Your Merchant Key should not be shared with a third party.
              </p>
            </div>
            <h3 className="text-3xl font-light mt-8 mb-2">
              Using the Glade Payment Services
            </h3>
            <p className="text-lg font-normal">
              The Glade inline checkout is the simplest and easiest way to start
              accepting payments on your platform. This payment solution
              provides a secure and convenient flow for users. Payments are
              processed on the go without having to navigate customers to
              another page to complete their transactions.
            </p>
            <h3 className="text-3xl font-light mt-8 mb-4">The Interface</h3>
            <img src="/cardpayment.gif" alt="" />
            <h3 className="text-3xl font-light mt-8 mb-4">
              {' '}
              Prerequisites / Requirements
            </h3>
            <hr />
            <p className="text-xl font-light mb-4">
              Pass the following with the header request made to the endpoint
            </p>
            <ol className="pl-4">
              <li className="text-xl font-normal list-decimal	mb-4">
                <p>
                  Check our{' '}
                  <a
                    className="text-red-400 hover:text-blue-400 hover:underline"
                    href=""
                  >
                    acceptable use policy ⤴︎
                  </a>{' '}
                  if you have any questions about your business and its
                  acceptability please send an email to{' '}
                  <a
                    className="text-red-400 hover:text-blue-400 hover:underline"
                    href=""
                  >
                    support@glade.ng⤴︎
                  </a>
                  . The team is available to provide feedback on any inquiry.
                </p>
              </li>
              <li className="text-xl font-normal list-decimal	">
                <p>
                  Get familiar with our API by reading these pages in the API
                  Overview section: Introduction, Payment Collection and Money
                  Transfer.
                </p>
              </li>
            </ol>
            <div className="p-6 my-4 bg-gray-100 border-l-4 border-green-400">
              <p className="uppercase text-xl font-bold text-black">note</p>
              <p className="text-xl">
                You need to provide a business CAC Certificate or National
                Identification (International Passport, Driving Licence, or
                National Identity Card) and then fill all the required details
                for your account to be activated and ready to receive payment.
              </p>
            </div>
            <h3 className="text-3xl font-light mt-8 mb-2">
              HTTPS requirements
            </h3>
            <p className="text-lg font-normal">
              All requests to using the Checkout are made via a secure HTTPS
              connection. However, in order to protect yourself from certain
              forms of man-in-the-middle attacks, you must serve the page
              containing the payment form over HTTPS. e.g
              https://yourdomain.com/paymentpage
            </p>
            <p className="text-lg font-normal mt-4">
              If you are not familiar with setting up SSL certificates follow
              this guide to setup on a free SSL certificate your server to
              enable a secure HTTPS connection.
            </p>
            <h3 className="text-3xl font-light mt-4 mb-6">
              Glade Inline Checkout
            </h3>
            <hr />
            <p className="text-lg font-normal">
              The Inline Checkout solution provides quick access the API into
              any website, CMS, App or Platform. It requires an addon embed
              script.
            </p>
            <div className="p-6 my-4 bg-yellow-100 border-l-4 border-yellow-400">
              <p className="uppercase text-xl font-bold text-yellow-600">
                note
              </p>
              <p className="text-xl">
                We recommend you don't cache the script in your project to avoid
                breaking changes when an update is introduced.{' '}
              </p>
            </div>
            {/* Live Inline Script */}
            <p className="text-xl">
              <strong>Live Inline Script</strong>
            </p>
            <LiveInline />
            {/* Demo Inline Script */}
            <p className="text-xl">
              <strong>Demo Inline Script</strong>
            </p>
            {/* Demo Inline Script */}
            <DemoInline />
            <div className="p-6 my-4 bg-gray-100 border-l-4 border-green-400">
              <p className="uppercase text-xl font-bold text-black">tip</p>
              <p className="text-xl">
                You can have a see how the Inline Checkout looks and works from
                our demo page{' '}
                <a
                  className="text-red-400 hover:text-blue-400 hover:underline"
                  href=""
                >
                  Demo Page⤴︎
                </a>
              </p>
            </div>

            {/* Sample Configuration */}
            <SampleConfiguration />
            <p className="text-xl font-normal">
              The checkout API is called directly from code using the
              <code>initPayment</code> function. It accepts the following the
              properties.
            </p>

            <h3 className="text-3xl font-normal mt-8 mb-2">
              Embed Parameters{' '}
            </h3>
            <EmbeddedParamTable />
            <h3 className="font-bold italic text-xl mt-4">Sample Response</h3>
            <SampleResponse />
            <p className="text-xl font-normal">
              The Inline Checkout can also be configured for advance
              requirements like{' '}
              <a
                className="text-red-400 hover:text-blue-400 hover:underline"
                href=""
              >
                Recurring payment ⤴︎
              </a>
              ,{' '}
              <a
                className="text-red-400 hover:text-blue-400 hover:underline"
                href=""
              >
                Split payment ⤴︎
              </a>
              ,
              <a
                className="text-red-400 hover:text-blue-400 hover:underline"
                href=""
              >
                Installment payments ⤴︎
              </a>{' '}
            </p>
            <h3 className="text-3xl font-light mt-8 mb-2">Recurring Payment</h3>
            <p className="text-lg font-normal">
              A recurring payment can be configured directly into the payment
              system that will be carried out automatically by our system and
              send the results back to your Webhook as payment notification.
            </p>
            <p className="text-lg font-normal mt-4">
              To use the recurring feature within the inline checkout simply add
              these configuration options to the embedded inline checkout
              configurations.
            </p>
            <div className="p-6 my-4 bg-yellow-100 border-l-4 border-yellow-400">
              <p className="uppercase text-xl font-bold text-yellow-600">
                note
              </p>
              <p className="text-xl">
                The recurring feature works only with card payments.{' '}
              </p>
            </div>
            <h3 className="font-bold text-xl mb-4">For Recurrent</h3>
            <ForRecurrentTable />
            <h3 className="font-bold text-xl mb-4">Sample Configuration</h3>
            <div className="p-6 my-4 bg-gray-100 border-l-4 border-green-400">
              <p className="uppercase text-xl font-bold text-black">note</p>
              <p className="text-xl">
                This configuration setup will charge the user every first day of
                the week the amount that has been set.
              </p>
            </div>
            <SampleConfiguration />
            <h3 className="text-3xl font-light mt-8 mb-2">
              Installment Payment
            </h3>
            <p className="text-lg font-normal">
              Installment payment allows you to collect payment in bit's to
              reach accumulate to a final amount.
            </p>
            <h3 className="font-bold text-xl mt-3 mb-4">For Installment</h3>
            <InstallmentTable />
            <h3 className="font-bold text-xl mb-4">
              Sample configuration initial installment payment
            </h3>
            <div className="p-6 my-4 bg-yellow-100 border-l-4 border-yellow-400">
              <p className="uppercase text-xl font-bold text-black">note</p>
              <p className="text-xl">
                This will initiate a payment request on the set date when its a
                card transaction that was used to initiate the transaction.
              </p>
            </div>
            <InstallmentCode />
            <h3 className="font-bold text-xl mb-4">
              Sample configuration to complete installment payment{' '}
            </h3>
            <div className="p-6 my-4 bg-yellow-100 border-l-4 border-yellow-400">
              <p className="uppercase text-xl font-bold text-black">note</p>
              <p className="text-xl">
                This will initiate a payment request on the set date when its a
                card transaction that was used to initiate the transaction.
              </p>
            </div>
            <InstallmentCode2 />
            <h3 className="text-3xl font-light mt-8 mb-2">Split Payment</h3>
            <p className="text-lg font-normal">
              With split payments you can decide how you want the settlements to
              be handled when you provide a service to a third party.
            </p>
            <p className="text-lg font-normal mt-4">
              Before you can split payment you have generate a reference code on
              the dashboard that will be used to divide the payment into the
              account that was specified at the point of generating the code.
            </p>
            <h3 className="font-bold text-xl mt-4 mb-4">For Split </h3>
            <SplitPaymentTable />
            <h3 className="font-bold text-xl mt-4 mb-4">
              Sample Configuration{' '}
            </h3>
            <SplitCode />
            <h3 className="text-3xl font-light mt-4 mb-6">
              Verify Transactions
            </h3>
            <hr />
            <p className="text-lg font-normal">
              It is recommended that you verify every transaction before giving
              value to your customers when a transaction is initiated from the
              Inline Checkout Page.
            </p>
            <p className="text-lg font-normal mt-2 ">
              Send a <code>PUT</code> request to the endpoint as specified by
              the API Reference in Verifying Transactions
            </p>
            <p className="text-lg font-normal mt-2">
              Endpoint: <code>https://demo.api.glade.ng/payment</code>
            </p>
            <VerifyTransaction txnref="txnRef" number="GP1507382986" />
            <p className="text-lg font-normal mt-2 ">
              You can also verify transactions using{' '}
              <code>customer_txnref</code> if it was passed as parameter in the
              configuration for initiating the payment.
            </p>
            <VerifyTransaction
              txnref="customer_txnref"
              number="1508261817382986"
            />
            <div className="p-6 my-4 bg-gray-100 border-l-4 border-green-400">
              <p className="uppercase text-xl font-bold text-black">yay!</p>
              <p className="text-xl">
                Congratulations you have just successfully embedded glade inline
                checkout into your website.{' '}
              </p>
            </div>
            {/* Refund */}
            <h3 className="text-3xl font-light mt-8 mb-4">
              Refund Transactions
            </h3>
            <hr />
            <p className="text-lg font-normal mt-2 mb-2 ">
              GladePay allows you to refund successful transactions, this can be
              achieved on the dashboard by navigating to the transactions page:
            </p>
            <ol className="ml-5">
              <li className="text-xl font-light list-decimal	mb-4">
                Click on the transaction to refund.
              </li>
              <li className="text-xl font-light list-decimal	mb-4">
                Click perform action{' '}
              </li>
              <li className="text-xl font-light list-decimal	mb-4">
                Click create a refund.
              </li>
              <li className="text-xl font-light list-decimal	mb-4">
                Enter the amount to refund and reason.
              </li>
              <li className="text-xl font-light list-decimal	mb-4">
                Click on refund to complete the process.
              </li>
            </ol>
            {/* Disputes */}
            <h3 className="text-3xl font-light mt-8 mb-4">Disputes</h3>
            <hr />
            <p className="text-lg font-normal mt-2 mb-2 ">
              GladePay allows you to raise dispute on transactions, this can
              also be raise by GladePay in places where chargebacks are
              required. In order to start a dispute it can be achieved on the
              dashboard by navigating to the transactions page and following the
              steps below:
            </p>
            <ol className="ml-5">
              <li className="text-xl font-light list-decimal	mb-4">
                Click on a transaction to raise dispute.
              </li>
              <li className="text-xl font-light list-decimal	mb-4">
                Click perform action{' '}
              </li>
              <li className="text-xl font-light list-decimal	mb-4">
                Click create a dispute.
              </li>
              <li className="text-xl font-light list-decimal	mb-4">
                Enter the reason for the dispute and attach documents if
                required.{' '}
              </li>
              <li className="text-xl font-light list-decimal	mb-4">
                Submit dispute complete the process and a GladePay agent will
                reply back.
              </li>
            </ol>
            <h3 className="text-3xl font-light mt-8 mb-4">Settlements</h3>
            <hr />
            <p className="text-lg font-normal mt-2 mb-2 ">
              You can view details of settlements made to your bank accounts and
              the bank accounts for your split payment on the dashboard. It
              gives a detailed report of the total number of transactions,
              amount and amount paid to your bank account.
            </p>
            <h3 className="text-3xl font-light mt-8 mb-4">Questions?</h3>
            <hr />
            <p className="text-lg font-normal mt-2 mb-2 ">
              If you encounter any issues while trying to implement this, please
              reach out on our developer's platform.
            </p>
            <p>
              Join using this{' '}
              <a
                className="text-red-400 hover:text-blue-400 hover:underline"
                href=""
              >
                invite link ⤴︎
              </a>{' '}
            </p>
          </div>
        </main>
      </MainLayout>
    </>
  );
}
