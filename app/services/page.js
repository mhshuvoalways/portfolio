"use client";

import Main from "@/app/components/common/main";
import { motion } from "framer-motion";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Card from "../components/services/Card";
import FAQ from "../components/services/FAQ";
import InquiryModal from "../components/services/InquiryModal";
import PricingComparison from "../components/services/PricingComparison";
import { useState, useEffect } from "react";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const Page = () => {
  const [services, setServices] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPricingComparison, setShowPricingComparison] = useState(false);

  useEffect(() => {
    fetchServices();
    fetchFAQs();
  }, []);

  const fetchServices = async () => {
    try {
      const servicesResponse = await fetch(
        `${SUPABASE_URL}/rest/v1/services?is_active=eq.true&order=sort_order.asc`,
        {
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
        }
      );

      const servicesData = await servicesResponse.json();

      const pricingResponse = await fetch(
        `${SUPABASE_URL}/rest/v1/service_pricing_tiers?order=sort_order.asc`,
        {
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
        }
      );

      const pricingData = await pricingResponse.json();

      const servicesWithPricing = servicesData.map((service) => ({
        ...service,
        pricingTiers: pricingData.filter((tier) => tier.service_id === service.id),
      }));

      setServices(servicesWithPricing);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchFAQs = async () => {
    try {
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/service_faqs?service_id=is.null&order=sort_order.asc`,
        {
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
        }
      );

      const data = await response.json();
      setFaqs(data);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
    }
  };

  const handleInquire = (serviceId = null) => {
    setSelectedServiceId(serviceId);
    setIsModalOpen(true);
  };

  return (
    <Main>
      <div className="mt-10 lg:mt-20">
        <Fade>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
                Professional Services
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold textGradient mb-4">
                Custom Software Development Services
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Enterprise-grade solutions designed to scale your business. Choose from our comprehensive service offerings with transparent pricing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center gap-8 flex-wrap mb-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold textGradient">180+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-gray-700 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold textGradient">76+</div>
                <div className="text-sm text-gray-400">Business Clients</div>
              </div>
              <div className="w-px h-12 bg-gray-700 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold textGradient">5.0</div>
                <div className="text-sm text-gray-400">Client Rating</div>
              </div>
            </motion.div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setShowPricingComparison(false)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  !showPricingComparison
                    ? "bg-primary text-black"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-800"
                }`}
              >
                Service Overview
              </button>
              <button
                onClick={() => setShowPricingComparison(true)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  showPricingComparison
                    ? "bg-primary text-black"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-800"
                }`}
              >
                Compare Pricing
              </button>
            </div>
          </div>
        </Fade>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : showPricingComparison ? (
          <PricingComparison services={services} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <Card
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                lists={service.features}
                pricingTiers={service.pricingTiers}
                index={index}
                onInquire={() => handleInquire(service.id)}
              />
            ))}
          </div>
        )}

        {faqs.length > 0 && <FAQ faqs={faqs} />}

        <Fade>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold textGradient mb-4">
              Ready to Scale Your Business?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join 76+ businesses that have transformed their operations with our professional software development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://calendly.com/mhshuvoalways/support-for-building-website"
                target="_blank"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-secondary via-primary to-tertiary hover:from-tertiary hover:via-primary hover:to-secondary text-black font-bold py-4 px-6 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">
                    Schedule Free Consultation
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleInquire()}
                className="bg-transparent border-2 border-primary/50 hover:bg-primary/10 text-primary font-bold py-4 px-6 rounded-xl transition-all duration-300"
              >
                Request Custom Quote
              </motion.button>
            </div>
          </motion.div>
        </Fade>
      </div>

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        services={services}
        selectedServiceId={selectedServiceId}
      />
    </Main>
  );
};

export default Page;
