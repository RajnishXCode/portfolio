import { ctaLink } from "../../constants/globalData";
import {
  sectionTitle,
  sectionDescription1,
  sectionDescription2,
  pricingPlans,
  popularBadge,
  encodeCtaMessage,
  customSolutionTitle,
  customSolutionDescription1,
  customSolutionDescription2,
  customSolutionButtonText,
} from "../../constants/Homepage/pricingData";

const Pricing = () => {
  const ctaHandler = (planName: string) => {
    const encodedMessage = encodeCtaMessage(planName);
    window.open(`${ctaLink}${encodedMessage}`, "_blank");
  };

  return (
    <section className="min-h-screen bg-[#181c2a] dark:bg-[#181c2a] py-10 md:py-20 px-6 md:px-12">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {sectionTitle}
          </h2>
          <p className="text-md md:text-xl text-gray-300 max-w-3xl mx-auto">
            {sectionDescription1} <br /> {sectionDescription2}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="md:grid grid-cols-1 md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible flex md:block space-x-4 md:space-x-0 px-2 md:px-0 h-auto py-8 scrollbar-hide">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`min-w-[85%] md:min-w-0 relative bg-white/10 dark:bg-white/10 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                plan.popular
                  ? "border-secondary scale-105"
                  : "border-white/20 dark:border-white/20 hover:border-secondary"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {popularBadge}
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div
                  onClick={() => ctaHandler(plan.name)}
                  className="w-full py-3 px-6 rounded-lg text-center font-semibold transition-all duration-300 bg-secondary hover:bg-secondary/80 text-white transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {plan.cta}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-10 md:mt-16 text-center">
          <div className="bg-white/10 dark:bg-white/10 rounded-2xl p-8 shadow-lg border border-white/20 dark:border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              {customSolutionTitle}
            </h3>
            <p className="text-white/80 text-sm md:text-base mb-6 max-w-xl mx-auto">
              {customSolutionDescription1} <br /> {customSolutionDescription2}
            </p>
            <div
              onClick={() => ctaHandler("Custom Solution")}
              className="bg-secondary text-white max-w-md mx-auto px-8 py-4 rounded-lg md:text-lg font-semibold hover:bg-secondary/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {customSolutionButtonText}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
