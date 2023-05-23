import {CalculatorIcon} from '@heroicons/react/24/outline'
import {ChartPieIcon} from '@heroicons/react/24/outline'
import {ArrowTrendingUpIcon} from '@heroicons/react/24/outline'
import {IdentificationIcon} from '@heroicons/react/24/outline'

export const navLinks = [
  {
    link: '#',
    title: 'Home'
  },
  {
    link: '#features',
    title: 'Features'
  },
  {
    link: '#reviews',
    title: 'Reviews'
  },
]

export const features = [
  {
    icon: <CalculatorIcon />,
    title: "Budgeting Tools",
    desc: "Budget App allows you to set up a budget and track your progress towards your financial goals.",
  },
  {
    icon: <ChartPieIcon />,
    title: "Report and Analytics",
    desc: "Provide reports and analytics that help you understand your spending habits, identify trends, and make better financial decisions.",
  },
  {
    icon: <ArrowTrendingUpIcon />,
    title: "Goal Setting",
    desc: "Allows you to set financial goals, such as savings for a down payment on a house or paying off debt, and track your progress towards those goals.",
  },
  {
    icon: <IdentificationIcon />,
    title: "Security",
    desc: "Budget app is secure and protect your financial information from unauthorized access.",
  },
];