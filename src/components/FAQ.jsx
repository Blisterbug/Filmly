import React, { useState } from 'react';


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Filmly?",
      answer: "Filmly is an online streaming platform offering a wide variety of TV shows, movies, documentaries, and more on-demand."
    },
    {
      question: "How much does Filmly cost?",
      answer: "Filmly offers various subscription plans based on the number of screens and video quality. Prices vary by region."
    },
    {
      question: "How can I cancel my Filmly subscription?",
      answer: "You can cancel your Filmly subscription by visiting your account settings and selecting the 'Cancel Membership' option."
    },
    {
      question: "Where can I watch?",
      answer: "Watch anywhere, anytime. Sign in with your Filmly account to watch instantly on the web at filmly.com from your personal computer or on any internet-connected device that offers the Filmly app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Filmly with you anywhere.",
    },
    {
      question: "Is Filmly Good for kids?",
      answer: "The Filmly Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.",
    }
  ];

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the answer if clicked again
    } else {
      setOpenIndex(index); // Open the selected answer
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-black">
      <h1 className="text-4xl font-semibold text-start mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              onClick={() => toggleAnswer(index)}
              className="faq-question w-full p-8 bg-gray-600/40 rounded-xl text-2xl font-medium text-left flex justify-between items-center hover:bg-gray-500/50"
            >
              {faq.question}
              <span className="text-4xl">{openIndex === index ? '-'
                : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer mt-2 pl-6 text-white bg-black/70 p-4 text-2xl">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="text-lg pt-10 text-center">
        Ready to watch? Enter your email to create or restart your
        membership
      </p>

      <div className=" grid grid-cols-2 pl-48 gap-52 pt-6">
        <input
          type="email"
          placeholder="Email address"
          className="bg-white w-[550px] h-[55px] rounded-xl text-black font-semibold text-lg px-4"
        />


        <button
          className="bg-darkpurple w-[150px] h-[55px] rounded-xl text-white font-semibold text-lg hover:bg-purple  transition-colors  ease-in-out"
        >
          Sign In
        </button>

      </div>

    </div>
  );
};

export default FAQ;
