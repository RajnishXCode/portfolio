import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₹25,000',
      duration: 'per project',
      description: 'Perfect for small businesses and startups looking to establish their online presence.',
      features: [
        'Responsive Website Design',
        'Up to 5 Pages',
        'Contact Form Integration',
        'Basic SEO Optimization',
        'Mobile-First Design',
        '1 Month Support',
        'Basic Analytics Setup'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Pro',
      price: '₹75,000',
      duration: 'per project',
      description: 'Ideal for growing businesses that need advanced features and functionality.',
      features: [
        'Everything in Basic',
        'Up to 15 Pages',
        'E-commerce Integration',
        'Advanced SEO Optimization',
        'Custom Admin Dashboard',
        'Payment Gateway Integration',
        '3 Months Support',
        'Performance Optimization',
        'Database Design'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Premium',
      price: '₹1,50,000',
      duration: 'per project',
      description: 'Complete solution for enterprises requiring complex applications and integrations.',
      features: [
        'Everything in Pro',
        'Unlimited Pages',
        'Custom Web Application',
        'API Development',
        'Third-party Integrations',
        'Advanced Security Features',
        '6 Months Support',
        'Performance Monitoring',
        'Scalability Planning',
        'Training & Documentation'
      ],
      popular: false,
      cta: 'Contact for Quote'
    }
  ];

  return (
    <section className="min-h-screen bg-[#181c2a] dark:bg-[#181c2a] px-6 md:px-12">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pricing Plans
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparent pricing for different project requirements. All plans include consultation and project management.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/10 dark:bg-white/10 rounded-2xl shadow-lg hover:shadow-indigo-400/30 transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                plan.popular 
                  ? 'border-indigo-600 scale-105' 
                  : 'border-white/20 dark:border-white/20'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-300 ml-2">
                    {plan.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-indigo-100">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="https://wa.me/919999999999?text=Hi%20Rajnish,%20I%20would%20like%20to%20discuss%20the%20Basic%20plan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-6 rounded-lg text-center font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 transform hover:scale-105'
                      : 'bg-indigo-900/40 text-indigo-200 hover:bg-indigo-900/60'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 dark:bg-white/10 rounded-2xl p-8 shadow-lg border border-white/20 dark:border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Custom Solutions
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Need something specific? I offer custom pricing for unique requirements, 
              enterprise solutions, and ongoing maintenance contracts.
            </p>
            <a
              href="https://wa.me/919999999999?text=Hi%20Rajnish,%20I%20need%20a%20custom%20solution"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Discuss Custom Requirements
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 