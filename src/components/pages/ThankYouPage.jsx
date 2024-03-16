import React, { useEffect, useState }  from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../../firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

function ThankYouPage(){
  const location = useLocation();
  const {name, email, message} = location.state || {}
  const { submissionId } = useParams();
  const [submissionData, setSubmissionData] = useState(null);

  useEffect(()=>{
    const fetchSubmission = async () => {
      if (submissionId){
        const docRef = doc(db, 'contacts', submissionId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setSubmissionData(docSnap.data());
        }else{
          console.log('no data or data is lost.')
        }
      }
    };

    fetchSubmission();
  }, [submissionId]);
  console.log(submissionData);

  return(
    <section className='section__wrapper'>
      <h3>CONTACT</h3>
      <div className="subSection__wrapper simple--wrapper">
        <h2>Thank you for contacting!</h2>
        <div className="simple--wrapper form__result">
          <h4>Your contact information</h4>
          <dd>Name: {name}</dd>
          <dd>Email: {email}</dd>
          <dd>Message: {message}</dd>
        </div>
        <div className="contact-button__wrapper"><button className="contact-button"><a className="" href="/Contact">Go back to Contact</a></button></div>
      </div>
    </section>
  )
}

export default ThankYouPage;
