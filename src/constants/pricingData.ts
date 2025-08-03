
export const sectionTitle = 'Pricing Plans';
export const sectionDescription1 = 'Transparent pricing for different project requirements.';
export const sectionDescription2 = 'All plans include consultation and project management.';

export const popularBadge = 'Most Popular';

export const ctaMessage = 'Hi Rajnish, I would like to discuss the ';

export const encodeCtaMessage = (planName: string) => {
    return encodeURIComponent(`${ctaMessage}${planName} plan`);
};

export const pricingPlans = [
  {
    name: 'Basic',
    // price: '₹15,000',
    // duration: 'per project',
    description: 'Perfect for small businesses and startups looking to establish their online presence.',
    features: [
      'Responsive Website Design',
      'Up to 5 Pages',
      'Contact Form Integration',
      'Basic SEO Optimization',
      'Mobile-First Design',
      '1 Month Support',
      'Basic Analytics Setup',
      'Social Media Integration',
      'Google Maps Integration',
      'Cross-Browser Compatibility'
    ],
    popular: false,
    cta: 'Get Started'
  },
  {
    name: 'Pro',
    // price: '₹25,000',
    // duration: 'per project',
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
      'Database Design',
      'Content Management System'
    ],
    popular: true,
    cta: 'Most Popular'
  },
  {
    name: 'Premium',
    // price: '₹75,000',
    // duration: 'per project',
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

export const customSolutionTitle = 'Custom Solutions';
export const customSolutionDescription1 = 'Need something specific?';
export const customSolutionDescription2 = 'I offer custom pricing for unique requirements, enterprise solutions, and ongoing maintenance contracts.';
export const customSolutionButtonText = 'Discuss Custom Requirements';