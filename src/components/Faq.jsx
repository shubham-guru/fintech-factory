import React from "react";
import "../css/faq.css";

export const Faq = () => {
  return (
    <div className="faqDiv">
        <div className="svgDiv">
        <p>FAQs </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="svg"
        >
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,128L60,149.3C120,171,240,213,360,234.7C480,256,600,256,720,240C840,224,960,192,
          1080,170.7C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,
          1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <hr className="divider" />
      <div style={{margin: "2%"}}>
        <details open>
          <summary>What is Bitcoin?</summary>
          <div>
          Bitcoin is a consensus network that enables a new payment system and a completely digital 
          money. It is the first decentralized peer-to-peer payment network that is powered by its 
          users with no central authority or middlemen. From a user perspective, Bitcoin is pretty 
          much like cash for the Internet. Bitcoin can also be seen as the most prominent triple 
          entry bookkeeping system in existence.
          </div>
        </details>
        <details>
          <summary>Who created Bitcoin?</summary>
          <div>
          Bitcoin is the first implementation of a concept called "cryptocurrency", which was first 
          described in 1998 by Wei Dai on the cypherpunks mailing list, suggesting the idea of a new 
          form of money that uses cryptography to control its creation and transactions, rather than 
          a central authority. The first Bitcoin specification and proof of concept was published in 
          2009 in a cryptography mailing list by Satoshi Nakamoto. Satoshi left the project in late 
          2010 without revealing much about himself. The community has since grown exponentially with 
          many developers working on Bitcoin.
          </div>
        </details>
        <details>
          <summary>
          Who controls the Bitcoin network?
          </summary>
          <div>
          Nobody owns the Bitcoin network much like no one owns the technology behind email. 
          Bitcoin is controlled by all Bitcoin users around the world. While developers are improving 
          the software, they can't force a change in the Bitcoin protocol because all users are free 
          to choose what software and version they use. In order to stay compatible with each other, 
          all users need to use software complying with the same rules. Bitcoin can only work correctly 
          with a complete consensus among all users. Therefore, all users and developers have a strong 
          incentive to protect this consensus.
          </div>
        </details>
        <details>
          <summary>How does Bitcoin work?</summary>
          <div>
          From a user perspective, Bitcoin is nothing more than a mobile app or computer program 
          that provides a personal Bitcoin wallet and allows a user to send and receive bitcoins 
          with them. This is how Bitcoin works for most users.
          </div>
        </details>
      </div>
    </div>
  );
};
