import { motion } from "framer-motion";

const tabs = [
  { key: "all", label: "All Projects", icon: "🚀" },
  { key: "fullstack", label: "Full Stack", icon: "⚡" },
  { key: "frontend", label: "Frontend", icon: "🎨" },
  { key: "extension", label: "Extensions", icon: "🧩" },
  { key: "npm", label: "NPM Packages", icon: "📦" },
  { key: "contribute", label: "Contributions", icon: "🤝" },
];

const Tab = ({ current, currentHandler, projectDB }) => {
  const getProjectCount = (type) => {
    if (type === "all") return projectDB.length;
    return projectDB.filter(project => project.type === type).length;
  };

  return (
    <div className="flex items-center justify-center gap-2 lg:gap-4 flex-wrap">
      {tabs.map((tab, index) => {
        const isActive = current === tab.key;
        const count = getProjectCount(tab.key);
        
        return (
          <motion.div
            key={tab.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => currentHandler(tab.key)}
            className={`
              relative cursor-pointer px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 group
              ${isActive 
                ? "bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/50 text-primary shadow-lg" 
                : "bg-gray-800/30 border border-gray-600/30 text-gray-400 hover:border-primary/30 hover:text-primary hover:bg-gray-700/50"
              }
            `}
          >
            {/* Background glow for active tab */}
            {isActive && (
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl blur-sm -z-10" />
            )}
            
            {/* Icon */}
            <span className="text-lg group-hover:scale-110 transition-transform duration-300">
              {tab.icon}
            </span>
            
            {/* Label */}
            <span className="font-medium text-sm lg:text-base whitespace-nowrap">
              {tab.label}
            </span>
            
            {/* Count Badge */}
            <span className={`
              text-xs font-bold px-2 py-1 rounded-full transition-all duration-300
              ${isActive 
                ? "bg-primary text-black" 
                : "bg-gray-700 text-gray-300 group-hover:bg-primary/20 group-hover:text-primary"
              }
            `}>
              {count}
            </span>

            {/* Active indicator */}
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Tab;