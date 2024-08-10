import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/miscellaneous/Navbar';
import AboutUs from './pages/AboutUs';
import Footer from './components/miscellaneous/Footer';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ENach from './pages/ENach';
import LoanApplicationTC from './pages/LoanApplicationTC';
import RefundPolicy from './pages/RefundPolicy';
import AccountAgg from './pages/AccountAgg';
import ContactUs from './pages/ContactUs';
import InstantLoan from './pages/InstantLoan';
import ShortLoan from './pages/ShortLoan';
import Home from './pages/Home';
import RepayLoan from './pages/RepayLoan';
import InstantJourney from './pages/InstantJourney';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedThankYou from './pages/ThankYou';
import GrievanceRedressal from './pages/GrievanceRedressal';
import ResponseHandler from './pages/ResponseHandler';
import PayEmi from './pages/PayEmi';

const toastStyles = {
  error: {
    background: "red",
    color: "white",
  },
  success: {
    background: "green",
    color: "white"
  }
};
const customToast = {
  error: (message) =>
    toast.error(message, {
      style: toastStyles.error
    }),
  success: (message) =>
    toast.success(message, {
      style: toastStyles.success
    })
};

function App() {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/aboutus" Component={AboutUs} />
        <Route path="/repayLoan" Component={RepayLoan} />
        <Route path="/instant_loan" Component={InstantLoan} />
        <Route path="/short_loan" Component={ShortLoan} />
        <Route path="/t&c" Component={TermsAndConditions} />
        <Route path="/privacy_policy" Component={PrivacyPolicy} />
        <Route path="/e-nach_t&c" Component={ENach} />
        <Route path="/loan_application_t&c" Component={LoanApplicationTC} />
        <Route path="/refund_policy" Component={RefundPolicy} />
        <Route path="/acc_agg" Component={AccountAgg} />
        <Route path="/contactus" Component={ContactUs} />
        <Route path="/instant-journey" Component={InstantJourney} />
        <Route path='/thankyou' Component={ProtectedThankYou} />
        <Route path='/grievance-redressal' Component={GrievanceRedressal} />
        <Route path='/ccavResponseHandler' Component={ResponseHandler} />
        <Route path='/PayEmi' Component={PayEmi} />
      </Routes>
      <Footer />
    </div>
  );
}

export { App as default, customToast };