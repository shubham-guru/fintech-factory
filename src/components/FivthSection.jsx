import React from "react";
import "../css/Fivthsection.css";
import WhyusBlocks from "./WhyusBlocks";
import done from '../images/gif/done.gif';
import always from '../images/gif/always.gif';
import money from '../images/gif/money.gif';
import website from '../images/gif/website.gif';
import secure from '../images/gif/secure.gif';
import connect from '../images/gif/connect.gif';


const FivthSection = () => {
  return (
    <div className="Fivthsection">
      <h1 className="heading fade-up">Here’s why you need us, the <b>Fintech Factory</b></h1>

      <WhyusBlocks
        src={done}
        title="Been there, done that!"
        descp="We are a team that’s seen cryptos up close and personal and 
            know the pains one goes through with equipment and hardware that 
            doesn’t sync with needs and ambitions. We are always on the hunt 
            for the best tools and make sure that they are available for you. 
            Our team can even guide you on what to buy and when."
      />
      <WhyusBlocks
        src={always}
        title="Always There for you!"
        descp="We are specialists in GPU and IoT mining equipment for 
            Ethereum and Helium mining, respectively. We assure 
            (and provide!) several products and services. Our 
            plug-and-play configured systems let you get down to business 
            almost the instant you receive them. Our technical support 
            team is available 24x7 for all kinds of support required. 
            This includes after-sales support as well."
      />

      <WhyusBlocks
        src={money}
        title="More Value for your Investment!"
        descp="While others in the field provide the right mining rigs, 
            our services include Management & Maintenance services. Besides 
            covering the components warranty, services also include 15 rig 
            services that we provide complimentary with our rigs for 3 years 
            from the purchase date."
      />

      <WhyusBlocks
        src={website}
        title="Can it get any easier?"
        descp="Ordering and delivering from us is super easy. All you 
            need to do is visit our website (you already are!) and follow 
            the instructions, and within no time, you will have the best rigs 
            delivered to you in a matter of days. We take the expected 
            responsibilities of delivering machines that match what we 
            commit."
      />

      <WhyusBlocks
        src={secure}
        title="Secure Payments!"
        descp="Our platform, being around to help promote those looking to 
            invest in cryptos, mining, and blockchain, has kept the payment 
            part very vast and varied. Payments for mining equipment bought 
            throughout the platform can be paid for utilizing a check, UPI, 
            bank transfer (IMPS, XXXX), and debit card."
      />

      <WhyusBlocks
        src={connect}
        title="Multiple ways to Connect!"
        descp="First, our e-commerce website has all the relevant means to 
            let buyers like you see what’s available and place your order(s). 
            With the payment being made, your request is sent to the address 
            you mention in the specified period.

            Second, you could call our office on XXXX. Our customer-support 
            personnel on the line would take down all the details of your 
            request and assist you in placing the order.
            
            Third, you could send us the details of your needs on our WhatsApp 
            number, and our customer support personnel would assist you in 
            placing the order and doing what is necessary."
      />
    </div>
  );
};
export default FivthSection;
