import React from 'react';
import { motion } from 'motion/react';

const features = [
  {
    title: "Real-Time Availability",
    description: "Fetch live availability & pricing directly from providers.",
    image: "https://images.unsplash.com/photo-1580227974466-ff23cd4750fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxlbmRhciUyMGNsb2NrJTIwaWNvbiUyMG1pbmltYWx8ZW58MXx8fHwxNzcxMjI2Nzc3fDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    title: "Price Comparison",
    description: "Compare travel deals instantly across hundreds of sites.",
    image: "https://images.unsplash.com/photo-1608186392158-8ce8a086dae0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmljZSUyMHRhZyUyMHBlcmNlbnRhZ2UlMjBpY29uJTIwbWluaW1hbHxlbnwxfHx8fDE3NzEyMjY3Nzh8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    title: "Secure Payments",
    description: "Trusted & encrypted checkout for peace of mind.",
    image: "https://images.unsplash.com/photo-1696013910376-c56f76dd8178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGllbGQlMjBsb2NrJTIwaWNvbiUyMG1pbmltYWx8ZW58MXx8fHwxNzcxMjI2Nzc3fDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    title: "Personalized Picks",
    description: "Custom suggestions based on your travel history.",
    image: "https://images.unsplash.com/photo-1533558527255-407147f3ae72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFyJTIwcmF0aW5nJTIwaWNvbiUyMG1pbmltYWx8ZW58MXx8fHwxNzcxMjI2Nzc3fDA&ixlib=rb-4.1.0&q=80&w=400"
  }
];

export function FeatureGrid() {
  return (
    <section className="py-10 md:py-20 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 text-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center group p-6 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
            >
              <div className="w-16 h-16 mb-6 overflow-hidden rounded-full bg-gray-50 p-3 border border-gray-100 group-hover:border-blue-100 transition-colors">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-full opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-sm font-serif font-semibold text-[#111827] mb-3">{feature.title}</h3>
              <p className="text-[#4B5563] text-sm leading-relaxed max-w-[240px]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
