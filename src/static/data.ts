import {
  FaCheckCircle,
  FaBook,
  FaStore,
  FaChartLine,
  FaDollarSign,
  FaPaintBrush,
  FaCog,
} from "react-icons/fa";
import { BiBlock } from "react-icons/bi";

export const plans = [
  {
    name: "Essential",
    description:
      "Our Flexible Pricing Plan is designed for emerging businesses seeking growth...",
    price: "$50.00",
    pricePeriod: "/Month",
    paymentTerm: "Yearly payment",
    features: [
      { text: "All limited links", icon: FaCheckCircle },
      { text: "Own analytics platform", icon: FaCheckCircle },
      { text: "Finance Simplified", icon: FaCheckCircle },
      { text: "Streamlined Business Processes", icon: FaCheckCircle },
      { text: "Optimized Store Operations", icon: BiBlock },
      { text: "Unlimited users", icon: BiBlock },
    ],
    buttonLabel: "Start Now",
  },
  {
    name: "Premium",
    description:
      "Built for well-established businesses, our Premium Enterprise Plan offers...",
    price: "$100.00",
    pricePeriod: "/life time",
    paymentTerm: "One time payment",
    features: [
      // The same or different features as needed
      { text: "All limited links", icon: FaCheckCircle },
      { text: "Own analytics platform", icon: FaCheckCircle },
      { text: "Finance Simplified", icon: FaCheckCircle },
      { text: "Streamlined Business Processes", icon: FaCheckCircle },
      { text: "Optimized Store Operations", icon: FaCheckCircle },
      { text: "Unlimited users", icon: FaCheckCircle },
    ],
    buttonLabel: "Start Now",
  },
];

export const services = [
  {
    title: "Tailored Accounting Solutions",
    description:
      "Custom accounting solutions for effective financial management.",
    icon: FaBook,
  },
  {
    title: "Store Management Optimization",
    description: "Streamline operations with smart management services.",
    icon: FaStore,
  },
  {
    title: "Real-Time Data Analytics",
    description: "Gain insights with advanced analytics tools.",
    icon: FaChartLine,
  },
  {
    title: "Finance",
    description: "Audit-proof software for critical financial operations.",
    icon: FaDollarSign,
  },
  {
    title: "Enterprise Design",
    description:
      "Beautiful experiences for marketing and product collaboration.",
    icon: FaPaintBrush,
  },
  {
    title: "Operations",
    description: "Efficient workflows for team and individual productivity.",
    icon: FaCog,
  },
];
