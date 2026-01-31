import { motion } from "framer-motion";
import Link from "next/link";

const PricingComparison = ({ services }) => {
  const getServiceTiers = (service) => {
    return (
      service.pricingTiers?.sort((a, b) => a.sort_order - b.sort_order) || []
    );
  };

  return (
    <div className="mt-20">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold textGradient mb-4">
            Compare Our Service Packages
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect package for your project. All packages include
            support and quality assurance.
          </p>
        </motion.div>
      </div>

      <div className="space-y-16">
        {services.map((service, serviceIndex) => {
          const tiers = getServiceTiers(service);

          if (tiers.length === 0) return null;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="text-4xl">{service.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">
                    {service.description.substring(0, 120)}...
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tiers.map((tier, tierIndex) => (
                  <motion.div
                    key={tier.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: tierIndex * 0.1 }}
                    className={`relative p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                      tier.is_popular
                        ? "border-primary/50 bg-primary/5 shadow-lg shadow-primary/20"
                        : "border-gray-600/30 bg-gray-800/30 hover:border-primary/30"
                    }`}
                  >
                    {tier.is_popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="px-4 py-1 bg-gradient-to-r from-secondary via-primary to-tertiary text-black text-xs font-bold rounded-full">
                          MOST POPULAR
                        </span>
                      </div>
                    )}

                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-white mb-2">
                        {tier.name}
                      </h4>
                      <div className="text-2xl font-bold textGradient mb-4">
                        {tier.price}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start text-gray-300 text-sm"
                        >
                          <svg
                            className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="https://calendly.com/mhshuvoalways/support-for-building-website"
                      target="_blank"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                          tier.is_popular
                            ? "bg-gradient-to-r from-secondary via-primary to-tertiary text-black"
                            : "bg-gray-700/50 text-white hover:bg-gray-700"
                        }`}
                      >
                        Get Started
                      </motion.button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-16 text-center bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white mb-4">
          Need a Custom Solution?
        </h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Have unique requirements? I offer custom packages tailored to your
          specific business needs and budget.
        </p>
        <Link href="/contact">
          <button className="px-8 py-4 bg-transparent border-2 border-primary/50 hover:bg-primary/10 text-primary font-bold rounded-xl transition-all duration-300">
            Contact for Custom Quote
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PricingComparison;
