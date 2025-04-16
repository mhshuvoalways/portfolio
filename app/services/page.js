import Main from "@/app/components/common/main";
import Card from "../components/services/Card";

const items = [
  {
    id: 1,
    title: "Web Development",
    icon: "🖥️",
    description:
      "I design and build modern, fast, and responsive websites using technologies like HTML, CSS, JavaScript, React.js, Next.js, Node.js and more.",
    lists: [
      "Custom-built websites for better performance (no cookie-cutter templates!).",
      "Faster, smoother user experience to keep visitors engaged.",
      "Modern and mobile-friendly design that looks great on any screen.",
      "Stronger security to protect your business and customer data.",
      "SEO-friendly structure to help your website rank higher on Google.",
      "Easy updates & future growth without technical headaches.",
    ],
  },
  {
    id: 2,
    title: "Mobile App Development",
    icon: "📱",
    description:
      "I design and build modern mobile apps that work smoothly on both iOS and Android using React Native and other modern tools.",
    lists: [
      "Custom-built app for better performance (no cookie-cutter templates!).",
      "Faster, smoother user experience to keep visitors engaged.",
      "Stronger security to protect your business and customer data.",
      "Easy updates & future growth.",
    ],
  },
  {
    id: 3,
    title: "AI Chatbot Development & Integration",
    icon: "🤖",
    description:
      "I build custom AI chatbots using tools like OpenAI (ChatGPT) and integrate them into your website or app for smart, real-time user interaction.",
    lists: [
      "Custom-built chatbot tailored to your business.",
      "Integration with your website.",
      "AI chatbot to answer questions.",
      "Lead generation and support.",
      "Multilingual support.",
      "Chat history and analytics (if needed).",
      "Easy updates & future growth.",
    ],
  },
  {
    id: 4,
    title: "Browser Extension Development",
    icon: "🧩",
    description:
      "I design and build custom Browser extensions to automate tasks, improve productivity, or connect with web apps and AI tools.",
    lists: [
      "Custom-built extension for better performance.",
      "Faster, smoother user experience to keep visitors engaged.",
      "Background script & content script setup.",
      "AI integration (ChatGPT)",
      "Easy updates & future growth.",
    ],
  },
];

const page = () => {
  return (
    <Main>
      <div className="mt-10 lg:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              lists={item.lists}
            />
          ))}
        </div>
      </div>
    </Main>
  );
};

export default page;
